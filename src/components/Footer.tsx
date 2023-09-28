import { styled } from 'styled-components';
import logo from '../assets/images/header,footer/logo-gray.png';
import githubIcon from '../assets/images/header,footer/icon-github.png';
import { Link } from 'react-router-dom';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <div className="footerContainer">
        <h1>
          <img className="logoGray" src={logo} alt="루팡로고" />
        </h1>
        <div className="footerText">
          <p>상업적 목적이 없는 포트폴리오용 사이트 입니다.</p>
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

  .footerContainer {
    max-width: 1185px;
    background-color: var(--gray-100);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 52px 10px;
    margin: 0 auto;
  }

  h1 {
    width: 110px;

    .logoGray {
      object-fit: contain;
    }
  }

  .footerText {
    width: 70%;
    color: var(--gray-300);
    line-height: 2rem;

    p {
      font-size: 1.8rem;
      font-weight: bold;
      margin: 0;
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

  @media (max-width: 768px) {
    .footerContainer {
      max-width: 768px;
      padding: 30px 25px;
      position: relative;
    }

    .footerText {
      width: 70%;
      padding-left: 2rem;
      p {
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: 560px) {
    .footerContainer {
      max-width: 560px;
      padding: 30px 25px;
      position: relative;
    }

    .footerText {
      width: 90%;
      position: absolute;
      left: 0;

      p {
        font-size: 1.6rem;
      }
    }

    .logoGray {
      visibility: hidden;
    }
  }

  //모바일 사이즈
  @media (max-width: 430px) {
    .footerContainer {
      max-width: 768px;
      padding: 30px 25px;
    }

    .footerText {
      width: 83%;
      p {
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: 410px) {
    .footerText {
      width: 83%;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default Footer;
