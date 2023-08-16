import StyledForm from "../components/Form";

const Login = () => {
  return (
    <>
      <StyledForm>
        <label htmlFor="">
          Email
          <input type="email" />
        </label>
        <strong>*올바른 이메일 형식이 아닙니다.</strong>
        <label htmlFor="">
          Password
          <input type="password" />
        </label>
        <button>Log in</button>
      </StyledForm>
    </>
  );
};

export default Login;
