import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import StyledDialog from './StyledDialog';
import { useEffect, useRef, useState } from 'react';
import {
  collection,
  setDoc,
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
import { useAuthContext } from '../../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';

const DetailPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [payBtn, setPayBtn] = useState(false);
  const [time, setTime] = useState('');
  const [data, setData] = useState([]);
  const [nextPayTime, setNextPayTime] = useState('');
  const modal = useRef(null);
  const timeInp = useRef(null);

  const { user } = useAuthContext();
  const uid = user?.uid || null;

  useEffect(() => {
    const setTitle = () => {
      const titleElement = document.getElementsByTagName('title')[0];
      titleElement.innerHTML = '상세 | Lupin';
    };
    setTitle();
  }, []);

  // 시간 예약
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!time) {
      alert('시간을 선택해주세요');
      return;
    }

    for (const v of data) {
      if (v.time === time) {
        alert('이미 예약한 시간입니다');
        return;
      }
    }

    try {
      await setDoc(doc(appFireStore, 'time', time), {
        time: Timestamp.fromDate(new Date(time)),
      });

      setData([...data, { time: time }]);
    } catch (error) {
      console.error(error);
    }
  };

  // 오픈 시간 예약 버튼 클릭 시, 모달 open
  useEffect(() => {
    if (isModalOpen) {
      modal.current.showModal();
    }
  }, [isModalOpen]);

  // 결제한 사용자 체크 및 버튼 활성화
  const checkPaid = async (iso) => {
    const docs = await getDocs(collection(appFireStore, 'Ranking_' + iso));
    const uidList = [];
    docs.forEach((doc) => {
      uidList.push(doc.data().uid);
    });

    for (const docUid of uidList) {
      if (uid === docUid) {
        return false;
      }
    }

    setPayBtn(true);
    return true;

    // onSnapshot(
    //   collection(appFireStore, 'Ranking_' + iso),
    //   async (snapshot) => {
    //     for (const doc of snapshot.docs) {
    //       if (uid === (await doc.data().uid)) {
    //         return;
    //       }
    //     }
    //     setPayBtn(true);
    //     ablePay = true;
    //   },
    //   (error) => {
    //     console.error(error.message);
    //   }
    // );
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
    setNextPayTime(str);
  };

  useEffect(() => {
    let ablePay = false;

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

      const result = [];
      const openedTiemList = [];

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((document) => {
        const date = new Date(document.data().time.seconds * 1000);
        const dateCopy = new Date(date);
        const iso = new Date(dateCopy.setHours(dateCopy.getHours() + 9))
          .toISOString()
          .slice(0, 16);

        // 오픈 예정 시간 <= 현재 시간
        if (date <= currTime) {
          openedTiemList.push(iso);
        } else {
          result.push({
            time: iso,
          });
        }
      });
      if (openedTiemList.length) {
        ablePay = await checkPaid(openedTiemList[openedTiemList.length - 1]);
      }

      // 버튼 비활성화 상태 시, 예약 시간 렌더링
      if (result.length && !ablePay) {
        renderOpenTime(result);
      }

      setData(result);
    })();
  }, []);

  const deleteTime = async (e) => {
    e.preventDefault();
    const time = e.currentTarget.dataset.time;
    await deleteDoc(doc(appFireStore, 'time', time));
    setData(data.filter((v) => v.time !== time));
  };

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }
    const interval = setInterval(() => {
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
    }, 1000);

    return () => clearInterval(interval);
  }, [isModalOpen]);

  return (
    <>
      <Header />
      {data && (
        <>
          <StyledMain>
            <section className="section1">
              <h2 className="a11y-hidden">강의 상세 페이지</h2>
              <img className="basicImg" src={basicBig} alt="루팡스쿨 기초반" />
              <div className="txtWrapper">
                <div className="mainTitle">[루팡스쿨 기초반]</div>
                <p className="subTitle">월급을 잘 투자하는 법</p>
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
                {nextPayTime && (
                  <strong className="openTime">{nextPayTime} 오픈 예정</strong>
                )}
                <Button
                  size="l"
                  disabled={!payBtn}
                  onClick={() => {
                    if (!user) {
                      const answer = window.confirm(
                        '로그인 후 이용 가능합니다.\n로그인 하시겠습니까?'
                      );
                      if (answer) {
                        navigate('/login');
                      }
                    } else {
                      navigate('/payment');
                    }
                  }}
                >
                  결제하기
                </Button>
                {uid === 'iK1qfdhkJaZHEHxnVgjDboB0mJX2' && (
                  <WhiteButton
                    onClick={() => setIsModalOpen(true)}
                    $watchBlackIcon={watchBlackIcon}
                  >
                    오픈 시간 예약
                  </WhiteButton>
                )}
              </div>
              {isModalOpen && (
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
                      {data.map((v, i) => {
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
                            <button onClick={deleteTime} data-time={v.time}>
                              <img src={deleteIcon} alt="삭제" />
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <button onClick={() => setIsModalOpen(false)}>
                    <img src={closeIcon} alt="닫기" />
                  </button>
                </StyledDialog>
              )}
            </section>
            <section className="section2">
              <h3>베스트 수강 후기</h3>
              <ul>
                <li>
                  <a href="#none">
                    <img src={review1} alt="리뷰 1" />
                  </a>
                </li>
                <li>
                  <a href="#none">
                    <img src={review2} alt="리뷰 2" />
                  </a>
                </li>
                <li>
                  <a href="#none">
                    <img src={review3} alt="리뷰 3" />
                  </a>
                </li>
                <li>
                  <a href="#none">
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
