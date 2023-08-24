import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import modalPerson from '../../assets/icons/modal-person.svg';

const GuideDialog = styled.section`
  width: 74rem;
  padding: 40px 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--white-color);
  border-radius: 20px;
  z-index: 999;

  h1 {
    margin-bottom: 15px;
    font-size: 45px;
  }

  h1 span {
    font-size: 45px;
    -webkit-text-stroke: 1.5px var(--black-color);
    color: var(--white-color);
  }

  h2 {
    font-size: 20px;
    margin-bottom: -10px;
  }

  .modalTitle p {
    font-size: 16px;
    font-weight: bold;
  }

  .modalText {
    width: 50rem;
    font-size: 16px;
    margin-top: 60px;
  }

  .modalList li {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .modalList strong {
    outline: 2px solid var(--brand-color-light);
    border-radius: 50%;
    padding: 4px 8px;
    margin-right: 13px;
  }

  .modalList p span {
    font-weight: bold;
    background-color: var(--brand-color-light);
  }

  .open-modal-btn svg {
    position: absolute;
    top: 30px;
    right: 30px;
  }

  .modalPerson {
    width: 28rem;
    height: 28rem;
    position: absolute;
    bottom: 40px;
    right: 0px;
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

const Modal = ({ onClose, children }) => {
  const [showModal, setShowModal] = useState(false); // 모달 초기에는 보이지 않도록 설정
  const [lastModalTime, setLastModalTime] = useState(0); // 마지막 모달 표시 시간 저장

  useEffect(() => {
    const storedTime = parseInt(localStorage.getItem('lastModalTime')) || 0;
    setLastModalTime(storedTime);

    const currentTime = Date.now();
    if (currentTime - storedTime >= 600000) {
      setShowModal(true); // 10분 이상 경과한 경우 모달 표시
    }
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    setLastModalTime(Date.now()); // 현재 타임스탬프 저장

    localStorage.setItem('lastModalTime', Date.now().toString()); // 타임스탬프 저장
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
            <button className="open-modal-btn" onClick={handleCloseModal}>
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

export default Modal;
