import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import StyledForm from '../components/Form.jsx';
import loginBg from '../assets/images/login,signup/login-bg.png';
import Button from '../components/Button.jsx';
import { useLogin } from '../hooks/useLogin.js';

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

  const handleData = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.type === 'email') {
      setEmail(event.target.value);
    } else if (event.target.type === 'password') {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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

interface props {
  url: string;
}

const StyledMain = styled.main<props>`
  min-height: 100vh;
  display: flex;

  article {
    margin: auto;
  }

  .text,
  a {
    line-height: 2.9rem;
    font-size: 1.8rem;
  }

  .text {
    display: inline-block;
    margin-top: 23px;
    color: var(--gray-300);
  }

  a {
    display: inline-block;
    float: right;
    margin: 18px -5px 0 0;
    padding: 5px;
    font-weight: 700;
    color: var(--black-color);
  }

  @media (min-width: 769px) {
    width: 50%;
    margin-left: auto;
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
  }

  @media (max-width: 768px) {
    .text {
      margin-top: 25px;
    }

    .text,
    a {
      line-height: 2.6rem;
      font-size: 1.8rem;
    }

    a {
      margin: 20px -5px 0 0;
      padding: 5px;
    }
  }

  @media (max-width: 430px) {
    article {
      margin: auto 36px;
      width: 100%;
    }

    .text {
      margin-top: 35px;
    }

    .text,
    a {
      font-size: 1.5rem;
      line-height: 2.3rem;
    }

    a {
      margin: 30px -5px 0 0;
      padding: 5px;
    }
  }
`;

const StyledH2 = styled.h2`
  margin-bottom: 73px;
  font-size: 4.5rem;
  line-height: 6.5rem;
  color: var(--black-color);

  @media (max-width: 768px) {
    margin-bottom: 80px;
    font-size: 4rem;
    line-height: 5.8rem;
  }

  @media (max-width: 430px) {
    margin-bottom: 70px;
    font-size: 3rem;
    line-height: 5.1rem;
  }
`;

export default Login;
