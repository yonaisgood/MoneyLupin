import { styled } from 'styled-components';

const StyledForm = styled.form`
  label {
    display: block;
    font-size: 1.8rem;
    color: var(--gray-300);
  }

  input {
    display: block;
    width: 408px;
    padding: 10px 0;
    line-height: 2.2rem;
    font-size: 1.6rem;
    color: var(--black-color);
    border-bottom: 3px solid var(--black-color);
  }

  label:not(:first-child) {
    margin-top: 24px;
  }

  strong {
    display: block;
    margin-top: 12px;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.4rem;
    color: var(--error-color);
  }

  button {
    margin-top: 30px;
  }

  @media (max-width: 768px) {
    strong {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 430px) {
    label {
      font-size: 1.5rem;
      line-height: 2.3rem;
    }
    input {
      width: 100%;
      font-size: 1.5rem;
      line-height: 1.8rem;
    }
    label:not(:first-child) {
      margin-top: 20px;
    }
  }
`;

export default StyledForm;
