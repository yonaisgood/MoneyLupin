import Header from '../../components/Header';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

import banner1 from '../../assets/images/banner1.png';
import banner2 from '../../assets/images/banner2.png';
import banner3 from '../../assets/images/banner3.png';

import best1 from '../../assets/images/best/1.png';
import best2 from '../../assets/images/best/2.png';
import best3 from '../../assets/images/best/3.png';
import best4 from '../../assets/images/best/4.png';
import { useEffect } from 'react';

import { contents } from './data';

const Home = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <section className="banners">
          <h2 className="a11y-hidden">메인 배너</h2>
          <ul>
            <li>
              <Link>
                <img src={banner1} alt="" />
              </Link>
            </li>
            <li>
              <Link>
                <img src={banner2} alt="" />
              </Link>
            </li>
            <li>
              <Link>
                <img src={banner3} alt="" />
              </Link>
            </li>
          </ul>
        </section>

        <section className="contents">
          <h2 className="a11y-hidden">콘텐츠</h2>
          <ul>
            {contents.map((content) => {
              return (
                <li>
                  <Link>
                    <img src={content.img} alt="" />
                    {content.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="classes">
          <h2>이번 달 BEST 강의</h2>
          <ul>
            <li>
              {/* 루팡 스쿨 기초반 상세로 */}
              <Link to="/">
                <img src={best1} alt="루팡 스쿨 기초반" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={best2} alt="루팡 스쿨 주식반" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={best3} alt="루팡 스쿨 중급반" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={best4} alt="서울 투자 중급반" />
              </Link>
            </li>
          </ul>
        </section>
      </StyledMain>
    </>
  );
};

const StyledMain = styled.main`
  .banners {
    overflow: hidden;
    ul {
      display: flex;
      height: 400px;
    }
    li {
      flex-shrink: 0;
      width: 100%;
    }
    img {
      object-fit: cover;
      /* object-position: 40% top; */
    }
  }

  .contents {
    margin: 50px 0 53px;
    ul {
      text-align: center;
    }
    li {
      display: inline-block;
      width: 92px;
      padding: 15px 0 13px;
      font-size: 1.6rem;
      line-height: 2.3rem;
      text-align: center;
      color: var(--black-color);
    }
    li + li {
      margin-left: 20px;
    }
    img {
      aspect-ratio: 92 / 80;
      margin-bottom: 18px;
    }
    a:hover > img {
      transition: 0.3s;
      transform: scale(115%);
    }
  }

  .classes {
    max-width: 1200px;
    margin: auto;

    h2 {
      margin-bottom: 20px;
      font-size: 3rem;
      line-height: 4.3rem;
      font-weight: 700;
    }

    ul {
      display: flex;
      gap: 27px;
    }
    li {
      aspect-ratio: 280 / 230;
      overflow: hidden;
      border-radius: 10px;
    }

    a:hover > img {
      transition: 0.3s;
      transform: scale(110%);
    }
  }
`;

export default Home;
