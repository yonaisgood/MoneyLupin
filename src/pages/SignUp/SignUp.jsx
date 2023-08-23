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
  const [isEmailError, setIsEmailError] = useState(true);
  const [isPasswordError, setIsPasswordError] = useState(true);
  const [isDisplayNameError, setIsDisplayNameError] = useState(true);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [displayNameErrorMessage, setDisplayNameErrorMessage] = useState('');
  const emailPattern = /^[a-zA-Z0-9+_.-]+@[a-z0-9.-]+\.[a-z0-9.-]+$/;
  const { error, signup } = useSignup();

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

      if (emailPattern.test(email)) {
        setIsEmailError(false);
        setEmailErrorMessage('');
      } else {
        setIsEmailError(true);
        setEmailErrorMessage('*이메일 형식이 맞지 않습니다.');
      }
      console.log(emailErrorMessage);
    } else if (event.target.type === 'password') {
      setPassword(event.target.value);
      if (password.length < 5) {
        setIsPasswordError(true);
        setPasswordErrorMessage('*비밀번호는 6자 이상이어야 합니다.');
      } else {
        setIsPasswordError(false);
        setPasswordErrorMessage('');
      }
      console.log(passwordErrorMessage);
    } else if (event.target.type === 'text') {
      setDisplayName(event.target.value);
      if (displayName.length < 1) {
        setIsDisplayNameError(true);
        setDisplayNameErrorMessage('*별명은 2자 이상이어야 합니다.');
      } else {
        setIsDisplayNameError(false);
        setDisplayNameErrorMessage('');
      }
      console.log(displayNameErrorMessage);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEmailError || isPasswordError || isDisplayNameError) return;
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
              <input
                type="email"
                required
                onChange={handleData}
                value={email}
              />
            </label>
            {isEmailError && <strong>{emailErrorMessage}</strong>}

            <label htmlFor="">
              Password
              <input
                type="password"
                required
                onChange={handleData}
                value={password}
              />
            </label>
            {isPasswordError && <strong>{passwordErrorMessage}</strong>}
            <label htmlFor="">
              별명
              <input
                type="text"
                required
                onChange={handleData}
                value={displayName}
              />
            </label>
            {isDisplayNameError && <strong>{displayNameErrorMessage}</strong>}
            <Button
              size="m"
              disabled={isEmailError || isPasswordError || isDisplayNameError}
            >
              Sign Up
            </Button>
          </StyledForm>
        </RightSection>
      </Section>
    </>
  );
};

export default SignUp;
