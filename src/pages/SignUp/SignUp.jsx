import { useState, useEffect } from 'react';
import StyledForm from '../../components/Form';
import { Section, LeftSection, RightSection } from './SignUpStyle';
import Button from '../../components/Button';
import SignUpBack from '../../assets/images/login,signup/signup-bg.png';
import { useSignup } from '../../hooks/useSingup';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const { signup } = useSignup();

  useEffect(() => {
    const setTitle = () => {
      const titleElement = document.getElementsByTagName('title')[0];
      titleElement.innerHTML = '회원가입 | Lupin';
    };
    setTitle();
  }, []);

  const handleData = (event) => {
    if (event.target.type === 'email') {
      setEmail(event.target.value);
    } else if (event.target.type === 'password') {
      setPassword(event.target.value);
    } else if (event.target.type === 'text') {
      setDisplayName(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password, displayName);
    signup(email, password, displayName);
  };
  return (
    <>
      <Section>
        <LeftSection>
          <img className="sinupBackground" src={SignUpBack} alt="배경" />
        </LeftSection>

        <RightSection>
          <h2 className="a11y-hidden">create account</h2>
          <h1>Create Account</h1>
          <StyledForm onSubmit={handleSubmit}>
            <label htmlFor="">
              Email
              <input type="email" onChange={handleData} value={email} />
            </label>
            <strong>*올바른 이메일 형식이 아닙니다.</strong>
            <label htmlFor="">
              Password
              <input type="password" onChange={handleData} value={password} />
            </label>
            <label htmlFor="">
              별명
              <input type="text" onChange={handleData} value={displayName} />
            </label>
            <Button>Sign Up</Button>
          </StyledForm>
        </RightSection>
      </Section>
    </>
  );
};

export default SignUp;
