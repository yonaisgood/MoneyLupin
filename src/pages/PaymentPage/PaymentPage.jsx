import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  PaymentContainor,
  RightSection,
  LeftSection,
} from './PaymentPageStyle';
import BasicClass from '../../assets/images/best/1.png';
import Button from '../../components/Button';
import {
  collection,
  addDoc,
  onSnapshot,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { appFireStore, Timestamp } from '../../firebase/config';
import { useContext, useEffect, useState } from 'react';
import { PayContext } from '../../context/PayContext';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';

const PaymentPage = () => {
  const navigate = useNavigate();
  const [ablePay, setAblePay] = useState(false);
  const { openTime, setOpenTime } = useContext(PayContext);
  const { user } = useAuthContext();

  const uid = user?.uid || null;
  const displayName = user?.displayName || null;

  useEffect(() => {
    const setTitle = () => {
      const titleElement = document.getElementsByTagName('title')[0];
      titleElement.innerHTML = '결제 | Lupin';
    };
    setTitle();
  }, []);

  // 결제하기
  const handleBuyBtn = async (e) => {
    e.preventDefault();
    const colRef = collection(appFireStore, 'Ranking_' + openTime);
    try {
      const myTime = Timestamp.fromDate(new Date());
      await addDoc(colRef, { myTime, displayName, uid });
      navigate('/ranking');
    } catch (error) {
      console.error(error);
    }
  };

  // 버튼 활성화
  const checkPaid = (iso) => {
    onSnapshot(
      collection(appFireStore, 'Ranking_' + iso),
      (snapshot) => {
        // 결제 이력 검사
        for (const doc of snapshot.docs) {
          if (uid === doc.data().uid) {
            return;
          }
        }
        // context에 저장
        localStorage.setItem('openTime', iso);
        setOpenTime(iso);

        // 버튼 활성화
        setAblePay(true);
      },
      (error) => {
        console.error(error.message);
      }
    );
  };

  useEffect(() => {
    (async () => {
      const currTime = new Date();
      const currTimeCopy = new Date(currTime);
      const q = query(
        collection(appFireStore, 'time'),
        where(
          'time',
          '>=',
          new Date(currTimeCopy.setMinutes(currTimeCopy.getMinutes() - 10))
        )
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((document) => {
        const date = new Date(document.data().time.seconds * 1000);

        // 오픈 예정 시간 <= 현재 시간
        if (date <= currTime) {
          const dateCopy = new Date(date);
          const iso = new Date(dateCopy.setHours(dateCopy.getHours() + 9))
            .toISOString()
            .slice(0, 16);
          checkPaid(iso);
        }
      });
    })();
  }, []);

  return (
    <>
      <Header />
      <PaymentContainor>
        <LeftSection>
          <h2 className="a11y-hidden">주문결제</h2>
          <h1>주문결제</h1>
          <div className="className">
            <img className="classImg" src={BasicClass} alt="" />
            <div className="classInfo">
              <p>[루팡스쿨 기초반] 월급을 잘 투자하는 법</p>
              <p className="classPrice">월 9,900 원</p>
            </div>
          </div>
          <section className="payMethod">
            <div className="payBenefit">
              <h2 className="a11y-hidden">쿠폰</h2>
              <h3>쿠폰</h3>
              <p>사용가능한 쿠폰이 없습니다.</p>
            </div>
            <div className="payBenefit">
              <h2 className="a11y-hidden">포인트</h2>
              <h3>포인트</h3>
              <div className="payPoint">
                <p>0</p>
                <button className="payAllBtn" type="submit">
                  전액사용
                </button>
              </div>
            </div>
            <div className="payBenefit">
              <h2 className="a11y-hidden">결제수단</h2>
              <h3>결제수단</h3>
              <div className="paySelect">
                <button className="paySelectBtn" type="button">
                  신용카드
                </button>
                <button className="paySelectBtn" type="button">
                  A페이
                </button>
                <button className="paySelectBtn" type="button">
                  B페이
                </button>
                <button className="paySelectBtn" type="button">
                  C페이
                </button>
              </div>
            </div>
          </section>
        </LeftSection>
        <RightSection>
          <h3>결제금액</h3>
          <ul className="payCost">
            <li>
              <p>총 강의 금액</p>
              <strong>118,800 원</strong>
            </li>
            <li>
              <p>총 강의 금액</p>
              <span>118,800 원</span>
            </li>
            <li>
              <p>총 강의 금액</p>
              <span>0 원</span>
            </li>
          </ul>
          <div className="totalCost">
            <p>총 결제금액</p>
            <span>118,800 원</span>
          </div>
          <span className="installmentInfo">12개월 할부 시 월 9,900원</span>
          <Button onClick={handleBuyBtn} disabled={!ablePay}>
            결제하기
          </Button>
        </RightSection>
      </PaymentContainor>
      <Footer />
    </>
  );
};

export default PaymentPage;
