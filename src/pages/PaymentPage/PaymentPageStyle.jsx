import styled from 'styled-components';

const PaymentContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 12.2rem 2rem 0 2rem;

  h1 {
    font-size: 3rem;
    margin: 2rem 0;
  }

  .leftBox {
    position: relative;
  }

  // 모바일에서 하단에 고정된 결제하기 버튼 430px 이하에서 visible
  .mobileStickyBtn {
    visibility: hidden;
  }

  .smallTitle {
    font-size: 1.6rem;
    font-weight: 600;
  }
  @media screen and (max-width: 900px) {
    .leftBox {
    }
  }

  @media screen and (max-width: 768px) {
    .leftBox {
      width: 100%;
    }
  }

  @media screen and (max-width: 430px) {
    position: relative;

    h1 {
      font-size: 2.5rem;
    }

    .leftBox {
      display: flex;
      flex-direction: column;
    }

    .mobileStickyBtn {
      visibility: visible;
      width: calc(100% + 4rem);
      position: sticky;
      bottom: 0;
      left: 5%;
      transform: translateX(-5%);
      background: var(--white-color);
      padding: 2rem 2rem 2rem;
      box-shadow: 0px -5px 10px 0px rgba(44, 44, 44, 0.2);
    }

    .paySelect .paySelectBtn {
      font-size: 1.4rem;
    }
  }
`;

const LeftSection = styled.section`
  width: 60%;
  gap: 2rem;

  .classCategory {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 3rem;

    .imgBox {
      width: 23.1rem;
      min-height: 14.3rem;
      max-height: 42.8rem;
      position: relative;

      .classBack {
        position: absolute;
        width: 23rem;
        object-fit: fill;
      }
    }
    .imgText {
      width: 23rem;
      min-height: 14.3rem;
      max-height: 42.8rem;
      position: absolute;
      top: 0;
      left: 0;

      .classBoys {
        width: 10rem;
        position: absolute;
        right: 2rem;
      }

      .basicText {
        position: absolute;
        color: var(--white-color);
        font-size: 1.6rem;
        bottom: 2rem;
        left: 1rem;
      }
    }

    .classInfo {
      font-size: 2rem;
      font-weight: bold;
      display: flex;
      flex-direction: column;
      margin-left: 1rem;

      p {
        margin: 0;
      }
    }

    .classPrice {
      font-size: 2.5rem;
      margin-top: 1rem;
    }
  }

  // pc -> 테블릿 사이 레이아웃 조절을 위한 사이즈 입니다.
  @media screen and (max-width: 900px) {
    .classCategory {
      width: 100%;
      flex-direction: column;
      align-items: start;

      .imgBox {
        min-height: 24.3rem;
        width: 100%;

        .classBack {
          width: 100%;
        }

        .imgText {
          width: 100%;
          min-height: 24.3rem;
        }
        .classBoys {
          width: 50%;
          right: 1rem;
        }
        .basicText {
          font-size: 3rem;
          left: 3rem;
        }
      }
      .classInfo {
        width: 100%;
        font-size: 1.4rem;
        font-weight: 300;
        align-items: start;

        .classPrice {
          font-weight: bold;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    min-height: 28.3rem;
    width: 50%;

    .classCategory {
      gap: 1rem;

      .imgBox {
        min-height: 20rem;
        width: 100%;

        .classBack {
          width: 100%;
        }

        .imgText {
          width: 100%;
          min-height: 20rem;
        }
        .classBoys {
          width: 60%;

          right: 1rem;
        }
        .basicText {
          font-size: 1.8rem;
          left: 1rem;
          bottom: 3rem;
        }
      }
    }

    .classInfo {
      width: 100%;
      font-size: 1.3rem;

      .classPrice {
        font-weight: bold;
      }
    }

    .payBenefit .pointBox {
      height: 6.3rem;
      font-size: 1.4rem;
    }
  }

  @media screen and (max-width: 430px) {
    width: 100%;
    .classCategory {
      .imgBox {
        .classBoys {
          width: 50%;
        }
        .basicText {
          font-size: 2.5rem;
        }
      }
      .classInfo {
        margin-top: 1rem;
        font-size: 1.5rem;
        margin-left: 0;
        align-items: end;
        .classPrice {
          font-size: 1.9rem;
          margin-top: 0.5rem;
        }
      }
    }
  }
`;

const PaymentSection = styled.section`
  width: 60%;
  margin-top: 7rem;

  .pointBox {
    width: 100%;
    background-color: var(--gray-100);
    height: 7.3rem;
    line-height: 7.3rem;
    padding-left: 2rem;
    border-radius: 10px;
    font-size: 16px;
    color: var(--gray-300);
  }

  .payBenefit {
    margin-bottom: 4rem;
  }

  .payBenefit:last-child {
    margin-bottom: 3rem;
  }

  .payPoint {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .payAllBtn {
    border: 1px solid var(--gray-200);
    width: 14rem;
    height: 7.3rem;
    border-radius: 10px;
    margin-left: 25px;
    font-size: 14px;
    color: var(--black-color);
  }

  .paySelect {
    display: flex;
    justify-content: space-between;
  }

  .paySelectBtn {
    background-color: var(--gray-100);
    width: 15.3rem;
    height: 6.3rem;
    border-radius: 10px;
    margin-top: 26px;
    font-size: 16px;
  }

  .selected {
    box-shadow: inset 0 0 0 2px var(--black-color);
  }

  .paySelectBtn:not(:first-child) {
    margin-left: 1rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 6rem;
  }

  @media screen and (max-width: 430px) {
    position: inherit;
    margin-top: 0;

    .payBenefit {
      margin-bottom: 0;
    }

    .pointBox {
      height: 5.5rem;
      line-height: 5.5rem;
      padding-left: 2rem;
      font-size: 1.4rem;
    }

    .payAllBtn {
      width: 13.5rem;
      height: 5.5rem;
    }
  }
`;

const RightSection = styled.section`
  width: 35%;
  font-size: 14px;
  text-align: right;
  position: absolute;
  right: 0rem;
  top: 0rem;

  button {
    width: 100%;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 20px;
    text-align: left;
  }

  .payCost::after {
    content: '';
    display: block;
    border: 0.5px solid var(--gray-200);
    width: 100%;
    margin-top: 4rem;
  }

  .payCost li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 32px;
  }

  .totalCost {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    margin-top: 1rem;
    .span {
      font-size: 3rem;
    }
  }

  .installmentInfo {
    display: block;
    text-align: right;
    color: var(--gray-200);
    font-weight: 500;
    font-size: 1.6rem;
    margin-bottom: 3.2rem;
  }

  button {
    transition: 0.1s;
  }

  @media screen and (max-width: 768px) {
    width: 45%;
    top: 0;
    right: 0;

    .installmentInfo {
      font-size: 1.2rem;
      margin: 0 0 1rem;
    }
    .payCost::after {
      margin-top: 0;
    }
    .totalCost {
      font-size: 1.6rem;
      margin-top: 0;
    }
  }

  @media screen and (max-width: 430px) {
    width: 100%;
    position: inherit;
    margin-top: 4rem;

    h3 {
      font-size: 1.6rem;
    }

    .payBtn {
      visibility: hidden;
    }

    .payBox {
      border: 1px solid var(--gray-300);
      border-radius: 10px;
      padding: 10px 5px;
    }
  }
`;

export { PaymentContainer, LeftSection, RightSection, PaymentSection };
