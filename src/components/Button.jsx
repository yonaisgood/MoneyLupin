import { styled, css } from 'styled-components';

const Button = ({ children, ...props }) => {
  return <BtnStyle {...props}>{children}</BtnStyle>;
};

const size = {
  l: css`
    width: 388px;
    padding: 17px 0;
    line-height: 2.9rem;
    font-size: 1.6rem;
  `,
  m: css`
    width: 240px;
    padding: 18px 0;
    line-height: 3.5rem;
    font-size: 2.4rem;
  `,
};

const BtnStyle = styled.button`
  ${(props) => size[props.size || 'l']}
  background-color: var(--brand-color);
  color: white;
  border-radius: 10px;
  font-weight: 700;

  &:disabled {
    background-color: var(--brand-color-light);
    cursor: default;
  }
`;
export default Button;