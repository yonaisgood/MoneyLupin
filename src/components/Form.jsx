import {styled} from "styled-components";

const StyledForm = styled.form`
  label {
    display: block;
    font-size: 1.8rem;
    color: var(--gray-300);
  }

  input {
    display: block;
    width: 408px;
    padding: 12px 0;
    font-size: 1.6rem;
    color: var(--gray-300);
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
    width: 240px;
  }
`;

export default StyledForm;
