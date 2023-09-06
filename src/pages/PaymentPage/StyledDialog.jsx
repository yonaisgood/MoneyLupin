import styled from 'styled-components';

const StyledDialog = styled.dialog`
  padding: 3.1rem 2.5rem 2.5rem;
  border: none;
  border-radius: 20px;
  .name {
    font-size: 1.6rem;
    line-height: 2.7rem;
    font-weight: 700;
    color: var(--black-color);
  }
  dl,
  .box {
    padding: 1.5rem 2rem 1.4rem;
    width: 100%;
    border: 1px solid var(--gray-300);
    border-radius: 10px;
    line-height: 2.7rem;
  }

  dl {
    display: flex;
    margin: 4rem 0 3rem;
    font-size: 1.4rem;
    color: var(--gray-300);
  }
  dt {
    font-weight: 700;
  }
  dd {
    margin: 0;
  }
  .price {
    margin-left: 4rem;
  }
  .total {
    margin: 0 0.8rem 0 auto;
  }
  .total,
  .totalPrice {
    font-size: 2rem;
    font-weight: 700;
    color: var(--error-color);
  }

  .box {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    color: var(--gray-300);
    font-weight: 700;
    span {
      margin-left: 1.4rem;
    }
  }

  input {
    margin-left: auto;
    appearance: none;
    width: 2rem;
    height: 2rem;
    transition: all 0.1s;
    background: ${(props) =>
      'url(' + props.$checkIcon + ')  no-repeat center / contain'};
  }

  input:checked {
    background-image: ${(props) => 'url(' + props.$checkCheckedIcon + ')'};
  }
  input:checked + span {
    color: var(--brand-color);
  }

  p {
    margin: 19px 0 87px;
    text-align: center;
    font-size: 1.6rem;
    line-height: 3rem;
    font-weight: 700;
    color: var(--gray-300);
  }
  .pay-btn {
    display: block;
    margin-left: auto;
    font-size: 1.6rem;
  }
  .close-btn {
    position: absolute;
    top: 25px;
    right: 25px;
    font-size: 1.6rem;
  }

  @media screen and (max-width: 780px) {
    padding: 2.3rem 1.6rem 1.6rem;
    width: 52.9rem;

    dl,
    .box {
      padding: 1rem 2rem 1.4rem;
    }

    dl {
      display: flex;
      margin: 4rem 0 3rem;
      font-size: 1.4rem;
      color: var(--gray-300);
    }

    dt,
    dd {
      font-size: 1.2rem;
      display: inline-block;
    }

    .price {
      margin-left: 2rem;
    }

    .total,
    .totalPrice {
      font-size: 1.5rem;
      font-weight: 700;
    }

    p {
      margin: 1.9rem 0 4.8rem;
      font-size: 1.2rem;
    }

    .pay-btn {
      display: block;
      margin-left: auto;
      font-size: 1.6rem;
    }

    .close-btn {
      top: 20px;
      right: 20px;
      font-size: 1.4rem;
    }
  }

  @media screen and (max-width: 430px) {
    dl {
      flex-wrap: wrap;
    }

    dl > div {
      width: 100%;
    }

    .price {
      margin-left: 0rem;
    }

    .total,
    .totalPrice {
      font-size: 1.4rem;
    }

    .agreeAll {
      font-size: 1.2rem;
    }

    .notification {
      width: 30rem;
      margin: 2rem auto;
      line-height: 20px;
    }

    button {
      margin: 0 auto;
    }
  }
`;
export default StyledDialog;
