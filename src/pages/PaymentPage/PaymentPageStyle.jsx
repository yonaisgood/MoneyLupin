import styled from 'styled-components';

const PaymentContainor = styled.div`
  position: relative;
  max-width: 1185px;
  margin: 0 auto;
  padding-top: 12.2rem;
  display: flex;
  justify-content: space-between;
`;

const LeftSection = styled.section`
  width: 70rem;
  padding-top: 4rem;

  h1 {
    font-size: 30px;
    margin-bottom: 19px;
  }

  .className {
    display: flex;
    align-items: center;
    gap: 6px;

    .classImg {
      width: 231px;
    }

    .classInfo {
      font-size: 20px;
      font-weight: bold;
    }

    .classPrice {
      font-size: 25px;
      margin-top: -10px;
    }
  }

  .payMethod {
    margin-top: 3rem;

    .payBenefit {
      margin-bottom: 4rem;

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
    }

    h3 {
      font-size: 20px;
      font-weight: bold;
    }

    p {
      width: 100%;
      background-color: var(--gray-100);
      padding: 26px 20px;
      border-radius: 10px;
      font-size: 16px;
      color: var(--gray-300);
    }
  }
`;

const RightSection = styled.section`
  padding-top: 5rem;
  width: 38.8rem;
  font-size: 14px;
  margin-left: 3rem;

  h3 {
    font-size: 20px;
    margin-bottom: 20px;
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
  }

  .installmentInfo {
    display: block;
    text-align: right;
    color: var(--gray-200);
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 3.2rem;
  }

  button {
    transition: 0.1s;
  }
`;

export { PaymentContainor, LeftSection, RightSection };
