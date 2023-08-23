import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { StyledMain, RightSection, LeftSection } from './RankingPageStyle';
import rankImg from '../../assets/images/rank_man.png';
import { collection, getFirestore, getDocs } from 'firebase/firestore';
import { useContext, useEffect } from 'react';
import { PayContext } from '../../context/PayContext';
import React, { useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import { appFireStore } from '../../firebase/config';

const RankingPage = () => {
  const { openTime } = useContext(PayContext);

  const { user } = useAuthContext();

  const uid = user?.uid || null;
  const displayName = user?.displayName || null;

  // 사용자 리스트를 보여줄 상태 변수 초기화
  const [userList, setUserList] = useState([]);

  // 컴포넌트가 마운트될 때 사용자 리스트 업데이트
  useEffect(() => {
    const setTitle = () => {
      const titleElement = document.getElementsByTagName('title')[0];
      titleElement.innerHTML = '랭킹 | Lupin';
    };
    setTitle();

    const fetchUserList = async () => {
      try {
        // const db = getFirestore();
        const usersCollection = collection(appFireStore, 'Ranking_' + openTime); // Firestore 컬렉션 이름을 'users'로 가정합니다.
        const usersSnapshot = await getDocs(usersCollection);
        const fetchedUsers = [];

        usersSnapshot.forEach((doc) => {
          const userData = doc.data();
          fetchedUsers.push({
            rank: fetchedUsers.length + 1, // 스냅샷에서의 순서에 따른 랭크 설정
            nickname: userData.displayName,
            time: userData.myTime.toDate().toLocaleTimeString(), // 타임스탬프를 읽을 수 있는 형태로 변환
          });
          console.log(userData);
        });
        console.log(fetchedUsers);
        setUserList(fetchedUsers);
      } catch (error) {
        console.error('사용자 데이터를 가져오는 중 오류 발생:', error);
      }
    };

    fetchUserList();
  }, []);

  return (
    <>
      <Header />
      <StyledMain>
        <LeftSection>
          <article>
            <img src={rankImg} alt="깃발을 든 우주비행사" />
            <div>
              <h2>{displayName} 님의 순위는?</h2>

              <strong>{userList.length > 0 && `${userList[0].rank}위`}</strong>
              <p>{userList.length > 0 && userList[0].time}</p>
            </div>
          </article>
        </LeftSection>
        <RightSection>
          <h2>전체 순위</h2>
          <ul className="rankList">
            {userList.map((user) => (
              <li key={user.rank}>
                <div>{user.rank}</div>
                <p>{user.nickname}</p>
                <p>{user.time}</p>
              </li>
            ))}
          </ul>
        </RightSection>
      </StyledMain>
      <Footer />
    </>
  );
};
export default RankingPage;
