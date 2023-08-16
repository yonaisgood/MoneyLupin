import { styled } from 'styled-components';
import person from '../assets/icons/person.svg';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <StyledHeader person={person}>
      <div>
        <h1>
          <Link to="/">
            <img src={logo} alt="lupin 로고" />
          </Link>
        </h1>

        <button>
          <span className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </span>
          카테고리
        </button>
        <nav>
          <ul>
            <li>
              <Link to="/">NEW 클래스</Link>
            </li>
            <li>
              <Link to="/">BEST 클래스</Link>
            </li>
            <li>
              <Link to="/">얼리버드 혜택</Link>
            </li>
            <li>
              <Link to="/">1:1 코칭</Link>
            </li>
            <li>
              <Link to="/">이벤트</Link>
            </li>
            <li>
              <Link to="/">커리큘럼</Link>
            </li>
          </ul>
        </nav>
        <Link to="/login" id="login">
          로그인
        </Link>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  border-bottom: 2px solid var(--gray-100); // 확인 필요

  div {
    position: relative;
    padding: 34px 0 12px;
    max-width: 1185px;
    margin: auto;
    font-size: 16px;
    color: var(--black-color);
  }

  h1 {
    margin-bottom: 31px;
    width: 94px;
  }

  img {
    aspect-ratio: 94 / 20;
  }

  .hamburger {
    display: inline-block;
    margin-right: 7px;
    span {
      display: block;
      width: 18px;
      height: 2px;
      background: var(--black-color);
    }
    span + span {
      margin-top: 3px;
    }
  }

  nav {
    display: inline-block;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    margin-left: 30px;
    display: inline-block;
  }

  #login {
    position: absolute;
    display: flex;
    padding: 10px 11px;
    top: 22px;
    right: 27px;
    border-radius: 10px;
    border: 1px solid var(--gray-200);
    line-height: 2.2rem;
    color: var(--gray-200);
  }

  #login::before {
    content: '';
    display: inline-block;
    width: 16px;
    aspect-ratio: 1/1;
    margin-right: 13px;
    background: ${(props) => 'url(' + props.person + ')'} no-repeat center /
      contain;
  }
`;

export default Header;
