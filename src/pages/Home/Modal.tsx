import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import modalPerson from '../../assets/icons/modal-person.svg';

const Modal: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [lastModalTime, setLastModalTime] = useState(0);

  useEffect(() => {
    const storedTimeString: string | null =
      localStorage.getItem('lastModalTime');
    const storedTime: number = storedTimeString
      ? parseInt(storedTimeString)
      : 0;

    setLastModalTime(storedTime);

    const currentTime = Date.now();
    if (currentTime - storedTime >= 600000) {
      setShowModal(true); // 10분 이상 경과한 경우 모달을 표시합니다.
    }
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    setLastModalTime(Date.now());

    localStorage.setItem('lastModalTime', Date.now().toString());
  };

  return (
    <>
      {showModal && (
        <>
          <ModalOverlay onClick={handleCloseModal} />
          <GuideDialog>
            <div className="modalTitle">
              <h1>
                <span>Hello, we are Lupin</span> 👋🏻
              </h1>
              <h2>
                이 사이트는 강의 신청 연습을 위한 튜토리얼 서비스 사이트 입니다.
              </h2>
              <p>그럼, 사용법에 대해 안내해 드릴게요</p>
            </div>
            <div className="modalText">
              <ul className="modalList">
                <li>
                  <strong>1</strong>
                  <p>
                    <span>회원가입 및 로그인</span>을 진행합니다.
                  </p>
                </li>
                <li>
                  <strong>2</strong>
                  <p>
                    베스트 강의 중 <span>루팡스쿨 기초반</span> 페이지를
                    클릭합니다.
                  </p>
                </li>
                <li>
                  <strong>3</strong>
                  <p>
                    지정된 수강신청 시간에 <span>새로고침 후 결제하기</span>를
                    클릭합니다.
                  </p>
                </li>
                <li>
                  <strong>4</strong>
                  <p>
                    결제 페이지에서 4가지 <span>결제수단 중 원하는 방법</span>을
                    선택 후 결제하기!
                  </p>
                </li>
                <li>
                  <strong>5</strong>
                  <p>
                    이 후 랭킹 페이지에서 <span>나의 등수 및 시간</span>을
                    확인할 수 있습니다.
                  </p>
                </li>
              </ul>
            </div>
            <button
              className="open-modal-btn"
              onClick={handleCloseModal}
              aria-label="닫기"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g mask="url(#mask0_185_17)">
                  <path
                    d="M10.6668 31.6666L8.3335 29.3333L17.6668 19.9999L8.3335 10.6666L10.6668 8.33325L20.0002 17.6666L29.3335 8.33325L31.6668 10.6666L22.3335 19.9999L31.6668 29.3333L29.3335 31.6666L20.0002 22.3333L10.6668 31.6666Z"
                    fill="black"
                  />
                </g>
              </svg>
            </button>
            <img
              className="modalPerson"
              src={modalPerson}
              alt="모달에서 내용을 안내하고 있는 우주인"
            />
          </GuideDialog>
        </>
      )}
    </>
  );
};

const GuideDialog = styled.section`
  width: 74rem;
  padding: 4rem 3rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--white-color);
  border-radius: 20px;
  z-index: 999;

  .modalTitle h1 {
    margin-bottom: 1.5rem;
    font-size: 4.5rem;
  }

  .modalTitle h1 span {
    font-size: 4.5rem;
    -webkit-text-stroke: 1.5px var(--black-color);
    color: var(--white-color);
  }

  .modalTitle h2 {
    font-size: 2rem;
    margin-bottom: -1rem;
  }

  .modalTitle p {
    font-size: 1.6rem;
    font-weight: bold;
  }

  .modalText {
    width: 50rem;
    font-size: 1.6rem;
    margin-top: 6rem;
  }

  .modalList li {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .modalList strong {
    outline: 2px solid var(--brand-color-light);
    border-radius: 50%;
    padding: 0.4rem 0.8rem;
    margin-right: 1.3rem;
  }

  .modalList p span {
    font-weight: bold;
    background-color: var(--brand-color-light);
  }

  .open-modal-btn svg {
    position: absolute;
    top: 3rem;
    right: 3rem;
  }

  .modalPerson {
    width: 28rem;
    height: 28rem;
    position: absolute;
    bottom: 4rem;
    right: 0px;
  }

  @media screen and (max-width: 768px) {
    width: 58.4rem;
    padding: 2.4rem 2rem;

    .modalTitle h1 {
      font-size: 3.5rem;
    }

    .modalTitle h1 span {
      font-size: 3.5rem;
    }

    .modalTitle h2 {
      font-size: 1.6rem;
    }

    .modalText {
      width: 38rem;
      font-size: 1.2rem;
      margin-top: 3rem;
    }

    .modalTitle p {
      font-size: 1.4rem;
    }

    .modalList li {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .modalList strong {
      margin-right: 1rem;
    }

    .open-modal-btn svg {
      width: 3rem;
      height: 3rem;
    }

    .modalPerson {
      width: 25rem;
      height: 25rem;
      bottom: 2rem;
      right: 0px;
    }
  }

  @media screen and (max-width: 650px) {
    width: 40rem;
    padding: 2rem 2rem;

    .modalTitle h1 {
      font-size: 2.5rem;
    }

    .modalTitle h1 span {
      font-size: 2.5rem;
    }

    .modalTitle h2 {
      font-size: 1.3rem;
    }

    .modalText {
      width: 100%;
      font-size: 1.15rem;
      margin-top: 2rem;
    }

    .modalTitle p {
      font-size: 1.2rem;
    }

    .open-modal-btn svg {
      width: 2.5rem;
      height: 2.5rem;
      top: 1.5rem;
      right: 1.5rem;
    }

    .modalPerson {
      visibility: hidden;
    }
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* 어둡게 처리된 배경색 */
  z-index: 999;
`;

export default Modal;
