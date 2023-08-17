import Header from '../../components/Header';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import best1 from '../../assets/images/best/1.png';
import best2 from '../../assets/images/best/2.png';
import best3 from '../../assets/images/best/3.png';
import best4 from '../../assets/images/best/4.png';

import { contents, banners } from './data';

const Home = () => {
  const [autoSlide, setAutoSlide] = useState(true);
  const [currBanner, setCurrBanner] = useState(0);
  const bannerList = useRef(null);

  const hideBanner = (currIndex) => {
    setCurrBanner(currIndex);
    [...bannerList.current.children].forEach((v, i) => {
      if (i === currIndex) {
        v.setAttribute('aria-hidden', 'false');
        v.firstElementChild.removeAttribute('tabIndex');
      } else {
        v.setAttribute('aria-hidden', 'true');
        v.firstElementChild.setAttribute('tabIndex', '-1');
      }
    });
  };

  const onLive = () => {
    bannerList.current.setAttribute('aria-live', 'polite');
  };

  const offLive = () => {
    bannerList.current.setAttribute('aria-live', 'off');
  };

  const rotateSlide = () => {
    return setInterval(() => {
      const bannersTransform = bannerList.current.style.transform;

      if (bannersTransform === '') {
        bannerList.current.style.transform = 'translateX(-100%)';
        hideBanner(1);
        return;
      }

      const bannersX = parseInt(bannersTransform.replace(/[^\d-]/g, ''));
      const currBannerIndex = bannersX / -100 + 1;
      if (currBannerIndex < banners.length) {
        bannerList.current.style.transform = `translateX(${bannersX - 100}%)`;
        hideBanner(currBannerIndex);
      } else {
        bannerList.current.style.transform = '';
        hideBanner(0);
      }
    }, 2000);
  };

  useEffect(() => {
    let interval;
    if (autoSlide) {
      offLive();
      interval = rotateSlide();
    } else {
      onLive();
    }
    return () => clearInterval(interval);
  }, [autoSlide]);
  return (
    <>
      <Header />
      <StyledMain>
        <section
          className="banners"
          onFocus={() => setAutoSlide(false)}
          onBlur={() => setAutoSlide(true)}
          onMouseOver={() => setAutoSlide(false)}
          onMouseOut={() => setAutoSlide(true)}
          // 암시적으로 role='region'
          aria-roledescription="carousel"
          aria-label="배너 슬라이드"
        >
          <h2 className="a11y-hidden">메인 배너</h2>
          <ul ref={bannerList} aria-live="off">
            {banners.map((banner, i) => {
              return (
                <li
                  role="group"
                  aria-roledescription="slide"
                  aria-hidden={currBanner !== i}
                >
                  <Link>
                    <img src={banner.img} alt="" />
                    {banner.text.map((text, i) => {
                      if (!i) {
                        return text;
                      } else {
                        return (
                          <>
                            <br />
                            {text}
                          </>
                        );
                      }
                    })}
                    {/* <br />
                    {`${banners.length}개의 슬라이드 중 ${i + 1}번`} */}
                  </Link>
                </li>
              );
            })}
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
