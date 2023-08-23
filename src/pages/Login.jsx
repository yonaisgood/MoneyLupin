import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import StyledForm from '../components/Form';
import loginBg from '../assets/images/login,signup/login-bg.png';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error, login } = useLogin();

  useEffect(() => {
    const setTitle = () => {
      const titleElement = document.getElementsByTagName('title')[0];
      titleElement.innerHTML = '로그인 | LUPIN';
    };
    setTitle();
  }, []);

  const handleData = (event) => {
    if (event.target.type === 'email') {
      setEmail(event.target.value);
    } else if (event.target.type === 'password') {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(email, password);
  };

  return (
    <StyledMain url={loginBg}>
      <h1 className="a11y-hidden">Lupin</h1>
      <article>
        <StyledH2>Log in</StyledH2>
        <StyledForm onSubmit={handleSubmit}>
          <label>
            Email
            <input type="email" required onChange={handleData} value={email} />
          </label>

          <label>
            Password
            <input
              type="password"
              required
              onChange={handleData}
              value={password}
            />
          </label>
          <Button size="m" disabled={!email || password.length < 5}>
            Log in
          </Button>
        </StyledForm>
        <span className="text">아직 회원이 아니신가요?</span>
        <Link to="/signup">회원가입</Link>
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
