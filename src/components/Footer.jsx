import { styled } from 'styled-components';
import logo from '../assets/images/logo.png';
import githubIcon from '../assets/images/icon-github.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footerContainer">
        <h1>
          <img className="logoGray" src={logo} alt="루팡로고" />
        </h1>
        <div className="footerText">
          <p>상업적 목적이 없는 포트폴이오용 사이트 입니다.</p>
          <span>Lupin. &#169; 2023. All Right Reserved.</span>
        </div>
        <Link to="https://github.com/yonainthefish/MoneyLupin" target="_blank">
          <img className="githubIcon" src={githubIcon} alt="github 이동버튼" />
        </Link>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: var(--gray-100);
  width: 100%;
  position: absolute;
  bottom: 0;
  .footerContainer {
    background-color: var(--gray-100);
    max-width: 1185px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 52px 0px;
    margin: 0 auto;
  }

  h1 {
    width: 110px;
    .logoGray {
      object-fit: contain;
    }
  }

  .footerText {
    width: 100%;
    color: var(--gray-300);
    padding-left: 11.8rem;
    line-height: 1rem;
    p {
      font-size: 1.8rem;
      font-weight: bold;
    }
    span {
      font-size: 1.3rem;
    }
  }

  .githubIcon {
    width: 3rem;
    height: 3rem;
    transition: all ease 0.3s;
    &:hover {
      transform: rotate(20deg);
    }
  }
`;

export default Footer;
