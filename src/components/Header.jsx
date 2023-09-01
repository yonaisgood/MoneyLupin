import { styled } from 'styled-components';
import person from '../assets/icons/person.svg';
import logo from '../assets/images/header,footer/logo.png';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Header = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <StyledHeader $person={person}>
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
        {user && (
          <>
            <Link to="/" id="log" onClick={logout}>
              로그아웃
            </Link>
          </>
        )}
        {!user && (
          <>
            <Link to="/login" id="log">
              로그인
            </Link>
          </>
        )}
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  z-index: 995;
  width: 100%;
  background: white;
  border-bottom: 2px solid var(--gray-100); // 확인 필요

  div {
    position: relative;
    box-sizing: content-box;
    padding: 34px 25px 12px;
    max-width: 1185px;
    margin: auto;
  }

  h1 {
    margin-bottom: 31px;
    width: 94px;
  }

  img {
    aspect-ratio: 94 / 20;
  }

  button {
    margin-right: 30px;
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
    display: flex;
    gap: 10px 30px;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
  }

  a,
  button {
    color: var(--black-color);
  }

  a,
  button,
  #log {
    font-size: 1.6rem;
    line-height: 2.3rem;
  }

  #log {
    position: absolute;
    display: flex;
    padding: 9px 10px 9px 14px;
    top: 22px;
    right: 25px;
    border-radius: 10px;
    border: 1px solid var(--gray-200);
    color: var(--gray-200);
  }

  #log::before {
    content: '';
    display: inline-block;
    width: 16px;
    aspect-ratio: 1/1;
    margin-right: 13px;
    background: ${(props) => 'url(' + props.$person + ')'} no-repeat center /
      contain;
    line-height: 0;
  }

  @media (max-width: 768px) {
    div {
      padding: 28px 25px 22px;
    }
    h1 {
      margin-bottom: 15px;
    }
    button {
      margin-right: 16px;
    }
    a,
    button {
      font-size: 1.4rem;
      line-height: 2rem;
    }
    #log {
      padding: 9px;
      font-size: 0;
      line-height: 0;
    }
    #log::before {
      margin-right: 0;
    }
    ul {
      gap: 16px;
    }
  }

  /* 중단점 컨펌 */
  @media (max-width: 609px) {
    div {
      position: relative;
      padding: 41px 22px;
      line-height: 0;
    }
    h1 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin: 0;
    }
    button {
      margin: 0;
      font-size: 0;
      line-height: 0;
    }
    nav {
      display: none;
    }
    #log {
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

export default Header;
