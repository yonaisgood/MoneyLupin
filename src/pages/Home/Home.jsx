import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { contents, banners, best } from './data';

const Home = () => {
  const [autoSlide, setAutoSlide] = useState(true);
  const [currBanner, setCurrBanner] = useState(0);
  const bannerList = useRef(null);
  const bestList = useRef(null);

  useEffect(() => {
    const setTitle = () => {
      const titleElement = document.getElementsByTagName('title')[0];
      titleElement.innerHTML = '홈 | Lupin';
    };
    setTitle();
  }, []);

  const hideBanner = (currIndex) => {
    setCurrBanner(currIndex - 1);
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
      const currBannerIndex = bannersX / -100;

      if (currBannerIndex + 1 === banners.length) {
        bannerList.current.style.transform = `translateX(${bannersX - 100}%)`;
        hideBanner(3);
        setTimeout(() => {
          bannerList.current.style.transition = 'none';
          bannerList.current.style.transform = '';
        }, 300);
        setTimeout(() => {
          bannerList.current.style.transition = '0.3s';
        }, 400);
      } else if (currBannerIndex < banners.length) {
        bannerList.current.style.transform = `translateX(${bannersX - 100}%)`;
        hideBanner(currBannerIndex + 1);
      }
    }, 3000);
  };

  // 재생 / 정지
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

  // 첫번째, 마지막 배너 클론
  useEffect(() => {
    const cloneFirstBanner =
      bannerList.current.firstElementChild.cloneNode(true);
    const cloneLastBanner = bannerList.current.lastChild.cloneNode(true);
    cloneFirstBanner.setAttribute('aria-hidden', 'true');
    cloneLastBanner.setAttribute('aria-hidden', 'true');
    cloneFirstBanner.firstElementChild.setAttribute('tabindex', '-1');
    cloneLastBanner.firstElementChild.setAttribute('tabindex', '-1');

    bannerList.current.appendChild(cloneFirstBanner);
    bannerList.current.prepend(cloneLastBanner);
    bannerList.current.style.transform = 'translateX(-100%)';
  }, []);

  // 이전, 다음
  const handlePrevBtn = (e) => {
    e.preventDefault();
    const bannersTransform = bannerList.current.style.transform;
    if (bannersTransform !== '' && bannersTransform !== 'translateX(-100%)') {
      const bannersX = parseInt(bannersTransform.replace(/[^\d-]/g, ''));
      bannerList.current.style.transform = `translateX(${bannersX + 100}%)`;
      const currIndex = bannersX / -100 - 1;
      hideBanner(currIndex);
    }
  };

  const handleNextBtn = (e) => {
    e.preventDefault();
    const bannersTransform = bannerList.current.style.transform;

    if (bannersTransform === '' && banners.length !== 1) {
      bannerList.current.style.transform = 'translateX(-200%)';
      hideBanner(2);
      return;
    }

    const bannersX = parseInt(bannersTransform.replace(/[^\d-]/g, ''));
    const currBannerIndex = bannersX / -100 + 1;

    if (currBannerIndex <= banners.length) {
      bannerList.current.style.transform = `translateX(${bannersX - 100}%)`;
      hideBanner(currBannerIndex);
    }
  };

  // 이번 달 BEST 강의
  const viewWidth = window.innerWidth;
  let Start;
  let End;

  const slide = () => {
    let x = (End - Start) * 2;
    if (bestList.current.style.transform === '') {
      if (-x + viewWidth > 1185) {
        bestList.current.style.transform = `translateX(${-1185 + viewWidth}px)`;
      } else if (x < 0) {
        bestList.current.style.transform = `translateX(${x}px)`;
      }
    } else {
      const currX = parseInt(
        bestList.current.style.transform.replace(/[^\d-]/g, '')
      );
      if (-currX - x + viewWidth > 1185) {
        bestList.current.style.transform = `translateX(${-1185 + viewWidth}px)`;
      } else if (-currX < x) {
        bestList.current.style.transform = '';
      } else {
        bestList.current.style.transform = `translateX(${currX + x}px)`;
      }
    }
  };

  const handleDragStart = (e) => {
    if (viewWidth < 1185) {
      Start = e.clientX;
    }
  };

  const handleDragEnd = (e) => {
    if (viewWidth < 1185) {
      End = e.clientX;
      slide();
    }
  };

  const handleTouchStart = (e) => {
    if (viewWidth < 1185) {
      Start = e.changedTouches[0].pageX;
    }
  };

  const handleTouchEnd = (e) => {
    if (viewWidth < 1185) {
      End = e.changedTouches[0].pageX;
      slide();
    }
  };

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
          aria-roledescription="carousel"
          aria-label="배너 슬라이드"
        >
          <h2 className="a11y-hidden">메인 배너</h2>

          <button
            className="prev-btn"
            aria-label="이전"
            onClick={handlePrevBtn}
          ></button>
          <button
            className="next-btn"
            aria-label="다음"
            onClick={handleNextBtn}
          ></button>

          <ul ref={bannerList} aria-live="off">
            {banners.map((banner, i) => {
              return (
                <li
                  role="group"
                  aria-roledescription="slide"
                  aria-hidden={currBanner !== i}
                  key={i}
                >
                  <Link tabIndex={currBanner === i ? '' : '-1'}>
                    <img src={banner.img} alt="" />
                    <p className="a11y-hidden">{banner.text.join(' ')}</p>
                    <br />
                    {`${banners.length}개의 슬라이드 중 ${i + 1}번`}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div>
            {currBanner + 1} / {banners.length}
          </div>
        </section>

        <section className="contents">
          <h2 className="a11y-hidden">콘텐츠</h2>
          <ul>
            {contents.map((content, i) => {
              return (
                <li key={i}>
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
          <ul
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            ref={bestList}
          >
            {best.map((v, i) => {
              return (
                <li key={i}>
                  <Link to={v.link}>
                    <img src={v.img} alt={v.name} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </StyledMain>
      <Footer />
    </>
  );
};

const StyledMain = styled.main`
  padding: 122px 0 0; // 확인 필요

  .banners {
    position: relative;
    overflow: hidden;

    button {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.6);
      box-shadow: 0 0 2px var(--gray-300);
      z-index: 100;
      border-radius: 50px;
    }
    .prev-btn {
      left: 60px;
    }
    .next-btn {
      right: 60px;
    }

    /* 임시 */
    button::before,
    button::after {
      content: '';
      position: absolute;
      width: 2px;
      height: 14px;
      border-radius: 2px;
      background: var(--black-color);
    }
    .next-btn::after {
      transform: rotate(45deg);
      bottom: 8px;
    }
    .next-btn::before {
      transform: rotate(-45deg);
      top: 9px;
    }
    .prev-btn::after {
      transform: rotate(45deg);
      top: 9px;
      left: 18px;
    }
    .prev-btn::before {
      transform: rotate(-45deg);
      bottom: 8px;
      left: 18px;
    }
    /* *** */

    ul {
      display: flex;
      height: 400px;
      transition: 0.3s;
    }
    li {
      flex-shrink: 0;
      width: 100%;
    }

    a:focus {
      outline-offset: -2px;
    }

    img {
      object-fit: cover;
      object-position: 36% top;
    }

    /* 인디케이터 */
    div {
      width: 80px;
      padding: 11px 0;
      position: absolute;
      bottom: 24px;
      left: 50%;
      transform: translate(-50%);
      text-align: center;
      font-size: 1.4rem;
      font-weight: 500;
      color: var(--black-color);
      background: rgba(255, 255, 255, 0.6);
      box-shadow: 0 0 2px rgba(35, 35, 35, 0.25);
      border-radius: 20px;
    }
  }

  .contents {
    margin: 50px 0 53px;
    padding: 0 40px; // 임시

    ul {
      display: flex;
      gap: 20px;
      justify-content: center;
    }

    @media (max-width: 1179px) {
      ul {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
      }
      li {
        margin: auto;
      }
    }

    li {
      flex-shrink: 0;
      max-width: 92px;
      padding: 15px 0 13px;
      font-size: 1.6rem;
      line-height: 2.3rem;
      text-align: center;
      color: var(--black-color);
    }

    img {
      height: auto;
      aspect-ratio: 92 / 80;
      margin-bottom: 18px;
    }

    a:hover > img {
      transition: 0.3s;
      transform: scale(115%);
    }
  }

  .classes {
    max-width: 1185px;
    margin: 0 auto 100px;
    overflow-x: hidden;

    h2 {
      margin-bottom: 20px;
      font-size: 3rem;
      line-height: 4.3rem;
      font-weight: 700;
    }

    ul {
      display: flex;
      gap: 27px;
      transition: 0.5s;
    }

    li {
      width: calc((1185px - 27px * 3) / 4);
      flex-shrink: 0;
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
