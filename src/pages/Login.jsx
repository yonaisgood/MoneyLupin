import { styled } from 'styled-components';
import StyledForm from '../components/Form';
import loginBg from '../assets/images/login-bg.png';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <StyledMain url={loginBg}>
      <h1 className="a11y-hidden">Lupin</h1>
      <article>
        <StyledH2>Log in</StyledH2>
        <StyledForm>
          <label>
            Email
            <input type="email" />
          </label>
          <strong>*올바른 이메일 형식이 아닙니다.</strong>
          <label>
            Password
            <input type="password" />
          </label>
          <button>Log in</button>
        </StyledForm>
        <span className="text">아직 회원이 아니신가요?</span>
        <Link to="/join">회원가입</Link>
      </article>
    </StyledMain>
  );
};
const StyledMain = styled.main`
  min-height: 100vh;
  width: 50%;
  display: flex;
  margin-left: auto;
  article {
    max-width: 408px;
    margin: auto;
  }

  .text {
    display: inline-block;
    margin-top: 23px;
    font-size: 1.8rem;
    line-height: 2.9rem;
    color: var(--gray-300);
  }

  a {
    display: inline-block;
    float: right;
    margin: 18px -5px 0 0;
    padding: 5px;
    line-height: 2.9rem;
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--black-color);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 50%;
    background: ${(props) => 'url(' + props.url + ')'} no-repeat right bottom /
      cover;
  }
`;
const StyledH2 = styled.h2`
  margin-bottom: 73px;
  font-size: 4.5rem;
  line-height: 6.5rem;
  color: var(--black-color);
`;

export default Login;
