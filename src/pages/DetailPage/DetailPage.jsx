import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import StyledDialog from './StyledDialog';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState, useContext } from 'react';
import { PayContext } from '../../context/PayContext';
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  onSnapshot,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { appFireStore, Timestamp } from '../../firebase/config';
import StyledMain from './DetailPageStyle';
import basicBig from '../../assets/images/basic_big.png';
import reviewIcon from '../../assets/images/reviews.svg';
import review1 from '../../assets/images/review/review1.png';
import review2 from '../../assets/images/review/review2.png';
import review3 from '../../assets/images/review/review3.png';
import review4 from '../../assets/images/review/review4.png';

import watchBlackIcon from '../../assets/icons/watch-black.svg';
import watchIcon from '../../assets/icons/watch.svg';
import deleteIcon from '../../assets/icons/x-gray.svg';
import saveIcon from '../../assets/icons/save.svg';
import closeIcon from '../../assets/icons/close.svg';
import { styled } from 'styled-components';

const DetailPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [payBtn, setPayBtn] = useState(false);
  const [time, setTime] = useState('');
  const [timeData, setTimeData] = useState(null);
  const [nextTestTime, setNextTestTime] = useState('');
  const modal = useRef(null);
  const timeInp = useRef(null);
  const { setOpenTime } = useContext(PayContext);

  const uid = localStorage.getItem('uid');

  // 시간 설정
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!time) {
      alert('시간을 선택해주세요');
      return;
    }
    for (const data of timeData) {
      if (data.time === time) {
        alert('이미 예약한 시간입니다');
        return;
      }
    }

    const colRef = collection(appFireStore, 'time');

    try {
      const docRef = await addDoc(colRef, {
        time: Timestamp.fromDate(new Date(time)),
      });

      setTimeData([...timeData, { time, id: docRef.id }]);
    } catch (error) {
      console.error(error);
    }
  };

  // 시간 설정 버튼 클릭 시, 모달 open
  useEffect(() => {
    if (openModal) {
      modal.current.showModal();
    }
  }, [openModal]);

  // 예약 시간 데이터 가져오기 및 버튼 활성화
  const checkPay = (dataTime) => {
    onSnapshot(
      collection(appFireStore, dataTime),
      (snapshot) => {
        for (const doc of snapshot.docs) {
          if (uid === doc.data().uid) {
            return;
          }
        }
        setPayBtn(true);
        setOpenTime(dataTime);
      },
      (error) => {
        console.error(error.message);
      }
    );
  };

  const renderOpenTime = (result) => {
    const dayList = {
      Sun: '일',
      Mon: '월',
      Tue: '화',
      Wed: '수',
      Thu: '목',
      Fri: '금',
      Sat: '토',
    };
    const day = dayList[new Date(result[0].time).toString().slice(0, 3)];
    const str =
      result[0].time.slice(5, 7) +
      '/' +
      result[0].time.slice(8, 10) +
      `(${day}) ` +
      result[0].time.slice(11);
    setNextTestTime(str);
  };

  useEffect(() => {
    let open = false;

    (async () => {
      const currTime = new Date();
      const q = query(
        collection(appFireStore, 'time'),
        where(
          'time',
          '>=',
          new Date(currTime.setMinutes(currTime.getMinutes() - 10))
        )
      );

      const result = [];

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((document) => {
        const dataTime = document.data().time;
        const dataTimeObj = new Date(document.data().time);

        // 600000밀리초 === 10분
        if (0 <= currTime - dataTimeObj && currTime - dataTimeObj <= 600000) {
          checkPay(dataTime);
          open = true;
        }

        const date = new Date(dataTime.seconds * 1000);
        const iso = new Date(date.setHours(date.getHours() + 9))
          .toISOString()
          .slice(0, 16);

        result.push({
          time: iso,
          id: document.id,
        });
      });
      setTimeData(result);

      // 버튼 비활성화 상태 시, 예약 시간 렌더링
      if (!!result.length && !open) {
        renderOpenTime(result);
      }
    })();
  }, []);

  const deleteTime = async (e) => {
    e.preventDefault();
    const id = e.currentTarget.dataset.id;
    await deleteDoc(doc(appFireStore, 'time', id));
    setTimeData(timeData.filter((v) => v.id !== id));
  };

  useEffect(() => {
    setInterval(() => {
      if (timeInp.current) {
        const currTime = new Date();
        const minIso = currTime.toISOString().slice(0, 16);
        const timeInpMin =
          minIso.slice(0, 11) +
          (parseInt(minIso.slice(11, 13)) + 9).toString().padStart(2, '0') +
          minIso.slice(13);

        const timeInpMax =
          parseInt(timeInpMin.slice(0, 4)) + 1 + timeInpMin.slice(4);

        timeInp.current.setAttribute('min', timeInpMin);
        timeInp.current.setAttribute('max', timeInpMax);
      }
    }, 1000);
  }, [openModal]);

  return (
    <>
      <Header />
      {timeData && (
        <>
          <StyledMain>
            <section className="section1">
              <h2 className="a11y-hidden">강의 상세 페이지</h2>
              <img className="basicImg" src={basicBig} alt="루팡스쿨 기초반" />
              <div className="txtWrapper">
                <div className="mainTitle">[루팡스쿨 기초반]</div>
                <p className="subTitle">월급모아 부자되는 가장 빠른 법</p>
                <div className="reviewBox">
                  <img
                    className="reviewIcon"
                    src={reviewIcon}
                    alt="리뷰아이콘"
                  />
                  <span className="reviewScore">4.99</span>
                  <span className="reviewTxt">+999개 수강 후기</span>
                </div>
                <div className="priceBox">
                  <strong className="priceTxt">1차 신청</strong>
                  <strong className="priceSale">20%</strong>
                  <strong className="price">월 9,900원</strong>
                </div>
                <hr />
                <p className="btnTxt">회원을 위한 혜택</p>
                {nextTestTime && (
                  <strong className="openTime">{nextTestTime} 오픈 예정</strong>
                )}
                <Link to="/payment">
                  <Button size="l" disabled={!payBtn}>
                    결제하기
                  </Button>
                </Link>
                {uid === 'lBi6qOCVaWZCoYpHLEQQLVyctMf2' && (
                  <WhiteButton
                    onClick={() => setOpenModal(true)}
                    $watchBlackIcon={watchBlackIcon}
                  >
                    오픈 시간 예약
                  </WhiteButton>
                )}
              </div>
              {openModal && (
                <StyledDialog ref={modal}>
                  <div>
                    <strong>강의 오픈 시간 예약</strong>
                    <div>
                      <img src={watchIcon} alt="" />
                    </div>
                    <form onSubmit={handleSubmit}>
                      <label>
                        <input
                          type="datetime-local"
                          value={time}
                          onChange={(e) => {
                            setTime(e.target.value);
                            console.log(e.target.validity);
                            if (e.target.validity.rangeUnderflow) {
                              alert('현재 시간부터 선택할 수 있습니다');
                            } else if (e.target.validity.rangeOverflow) {
                              alert('1년 이내로 선택할 수 있습니다');
                            }
                          }}
                          ref={timeInp}
                        />
                      </label>
                      <button>
                        <img src={saveIcon} alt="저장" />
                      </button>
                    </form>
                  </div>
                  <div className="list-wrap">
                    <strong>예약된 강의 시간</strong>
                    <ul>
                      {timeData.map((v, i) => {
                        return (
                          <li key={i}>
                            <span className="day">
                              {v.time.slice(0, 10).replace(/-/g, '.')}
                            </span>
                            <span className="time">
                              {(v.time.slice(11, 13) > 12
                                ? (v.time.slice(11, 13) - 12)
                                    .toString()
                                    .padStart(2, '0')
                                : v.time.slice(11, 13)) +
                                v.time.slice(13, 16) +
                                ' ' +
                                (v.time.slice(11, 13) > 12 ? 'PM' : 'AM')}
                            </span>
                            <button onClick={deleteTime} data-id={v.id}>
                              <img src={deleteIcon} alt="삭제" />
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <button onClick={() => setOpenModal(false)}>
                    <img src={closeIcon} alt="닫기" />
                  </button>
                </StyledDialog>
              )}
            </section>
            <section className="section2">
              <h3>베스트 수강 후기</h3>
              <ul>
                <li>
                  <a href="none">
                    <img src={review1} alt="리뷰 1" />
                  </a>
                </li>
                <li>
                  <a href="none">
                    <img src={review2} alt="리뷰 2" />
                  </a>
                </li>
                <li>
                  <a href="noen">
                    <img src={review3} alt="리뷰 3" />
                  </a>
                </li>
                <li>
                  <a href="noen">
                    <img src={review4} alt="리뷰 4" />
                  </a>
                </li>
              </ul>
            </section>
          </StyledMain>
          <Footer />
        </>
      )}
    </>
  );
};
export default DetailPage;

const WhiteButton = styled.button`
  margin-top: 57px;
  padding: 16px 0;
  width: 100%;
  font-size: 1.6rem;
  line-height: 2.9rem;
  font-weight: 700;
  border-radius: 10px;
  border: 1px solid var(--black-color);
  color: var(--black-color);

  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    margin-right: 10px;
    width: 24px;
    aspect-ratio: 1/1;
    background: ${(props) => 'url(' + props.$watchBlackIcon + ')'} no-repeat
      center / contain;
  }
`;
