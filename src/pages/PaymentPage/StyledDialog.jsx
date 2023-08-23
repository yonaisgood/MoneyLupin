import styled from 'styled-components';

const StyledDialog = styled.dialog`
  padding: 31px 25px 25px;
  border: none;
  border-radius: 20px;
  .name {
    font-size: 1.6rem;
    line-height: 2.7rem;
    font-weight: 700;
    color: var(--black-color);
  }
  dl,
  div {
    padding: 15px 20px 14px;
    width: 691px;
    border: 1px solid var(--gray-300);
    border-radius: 10px;
    line-height: 2.7rem;
  }

  dl {
    display: flex;
    margin: 43px 0 30px;
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
    margin-left: 40px;
  }
  .total {
    margin: 0 0.8rem 0 auto;
  }
  .total,
  .total + dd {
    font-size: 2rem;
    font-weight: 700;
    color: var(--error-color);
  }

  div {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    color: var(--gray-300);
    font-weight: 700;
    span {
      margin-left: 14px;
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
`;
export default StyledDialog;
