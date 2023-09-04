import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { contents, banners, best } from './data';
import Modal from './Modal';
import Derection from '../../assets/images/direction.png';
import arrowLeft from '../../assets/icons/arrow-left.svg';

const Home = () => {
  const [autoSlide, setAutoSlide] = useState(true);
  const [slideBtn, setSlideBtn] = useState(true);
  const [currBanner, setCurrBanner] = useState(0);
  const bannerList = useRef(null);
  const bestList = useRef(null);

  const onLive = () => {
    bannerList.current.setAttribute('aria-live', 'polite');
  };

  const offLive = () => {
    bannerList.current.setAttribute('aria-live', 'off');
  };

  useEffect(() => {
    let interval;
    if (autoSlide) {
      onLive();
      interval = rotateSlide();
    } else {
      offLive();
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

  const slideLastToFirst = (bannersX) => {
    bannerList.current.style.transform = `translateX(${bannersX - 100}%)`;
    setCurrBanner(0);
    setTimeout(() => {
      bannerList.current.style.transition = 'none';
      bannerList.current.style.transform = 'translateX(-100%)';
    }, 300);
    setTimeout(() => {
      bannerList.current.style.transition = '0.3s';
    }, 400);
  };

  const slideFirstToLast = () => {
    bannerList.current.style.transform = '';
    setCurrBanner(banners.length - 1);
    setTimeout(() => {
      bannerList.current.style.transition = 'none';
      bannerList.current.style.transform = `translateX(${
        banners.length * -100
      }%)`;
    }, 300);
    setTimeout(() => {
      bannerList.current.style.transition = '0.3s';
    }, 400);
  };

  const slideToNextEl = () => {
    const bannersTransform = bannerList.current.style.transform;

    if (bannersTransform === '') {
      bannerList.current.style.transform = 'translateX(-100%)';
      setCurrBanner(0);
      return;
    }

    const bannersX = parseInt(bannersTransform.replace(/[^\d-]/g, ''));
    const currBannerIndex = bannersX / -100;

    if (currBannerIndex < banners.length) {
      bannerList.current.style.transform = `translateX(${bannersX - 100}%)`;
      setCurrBanner(currBannerIndex);
    } else {
      slideLastToFirst(bannersX);
    }
  };

  const rotateSlide = () => {
    return setInterval(() => {
      slideToNextEl();
    }, 3000);
  };

  // 연속 클릭 방지
  const preventDoubleClick = () => {
    setSlideBtn(false);
    setTimeout(() => {
      setSlideBtn(true);
    }, 500);
  };

  const handleNextBtn = (e) => {
    e.preventDefault();
    if (!slideBtn) {
      return;
    }
    preventDoubleClick(e.currentTarget);
    slideToNextEl();
  };

  const handlePrevBtn = (e) => {
    e.preventDefault();
    if (!slideBtn) {
      return;
    }
    preventDoubleClick(e.currentTarget);
    const bannersTransform = bannerList.current.style.transform;
    if (bannersTransform !== '' && bannersTransform !== 'translateX(-100%)') {
      const bannersX = parseInt(bannersTransform.replace(/[^\d-]/g, ''));
      bannerList.current.style.transform = `translateX(${bannersX + 100}%)`;
      const currIndex = bannersX / -100 - 2;
      setCurrBanner(currIndex);
    } else {
      slideFirstToLast();
    }
  };

  // 이번 달 BEST 강의
  const viewWidth = document.documentElement.clientWidth;
  let Start;
  let End;
  let classesWidth;
  if (viewWidth > 430) {
    classesWidth = 1210;
  } else {
    classesWidth = 1088;
  }

  const slide = () => {
    let x = (End - Start) * 2;
    if (bestList.current.style.transform === '') {
      if (-x + viewWidth > classesWidth) {
        bestList.current.style.transform = `translateX(${
          -classesWidth + viewWidth
        }px)`;
      } else if (x < 0) {
        bestList.current.style.transform = `translateX(${x}px)`;
      }
    } else {
      const currX = parseInt(
        bestList.current.style.transform.replace(/[^\d-]/g, '')
      );
      if (-currX - x + viewWidth > classesWidth) {
        bestList.current.style.transform = `translateX(${
          -classesWidth + viewWidth
        }px)`;
      } else if (-currX < x) {
        bestList.current.style.transform = '';
      } else {
        bestList.current.style.transform = `translateX(${currX + x}px)`;
      }
    }
  };

  const handleDragStart = (e) => {
    if (viewWidth < classesWidth) {
      Start = e.clientX;
    }
  };

  const handleDragEnd = (e) => {
    if (viewWidth < classesWidth) {
      End = e.clientX;
      slide();
    }
  };

  const handleTouchStart = (e) => {
    if (viewWidth < classesWidth) {
      Start = e.changedTouches[0].pageX;
    }
  };

  const handleTouchEnd = (e) => {
    if (viewWidth < classesWidth) {
      End = e.changedTouches[0].pageX;
      slide();
    }
  };

  return (
    <>
      <Header />
      <Modal />
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

          <div className="btn-wrap">
            <button className="prev-btn" onClick={handlePrevBtn}>
              <img src={arrowLeft} alt="이전" />
            </button>
            <button className="next-btn" onClick={handleNextBtn}>
              <img src={arrowLeft} alt="다음" />
            </button>
          </div>

          <ul ref={bannerList} aria-live="off" className="banner-list">
            {banners.map((banner, i) => {
              return (
                <li
                  aria-roledescription="slide"
                  aria-hidden={currBanner !== i}
                  key={i}
                >
                  <Link tabIndex={currBanner === i ? '' : '-1'}>
                    <img
                      src={
                        viewWidth <= 430
                          ? banner.imgMobile
                          : viewWidth <= 768
                          ? banner.imgTablet
                          : banner.img
                      }
                      alt=""
                    />
                    <p className="a11y-hidden">{banner.text.join(' ')}</p>
                    <br />
                    {`${banners.length}개의 슬라이드 중 ${i + 1}번`}
                  </Link>
                </li>
              );
            })}
          </ul>

          <ul className="indicator">
            {banners.map((_, i) => {
              if (currBanner === i) {
                return <li className="current"></li>;
              } else {
                return <li></li>;
              }
            })}
          </ul>
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
          <img
            className="direction"
            src={Derection}
            alt="베스트 강의를 가리키는 손가락"
          />
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
                    <img
                      src={viewWidth > 430 ? v.img : v.imgSmall}
                      alt={v.name}
                    />
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

    .btn-wrap {
      position: absolute;
      display: flex;
      justify-content: space-between;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: calc(100% - 50px);
      max-width: 1394px;
      box-sizing: content-box;
      z-index: 100;
    }

    button {
      width: 30px;
      aspect-ratio: 1/1;
    }

    .next-btn {
      transform: rotate(180deg);
    }

    .banner-list {
      display: flex;
      height: 400px;
      transition: 0.3s;

      li {
        flex-shrink: 0;
        width: 100%;
      }

      a:focus {
        outline-offset: -2px;
      }

      img {
        object-fit: cover;
      }
    }

    /* 인디케이터 */
    .indicator {
      position: absolute;
      bottom: 23px;
      left: 50%;
      transform: translate(-50%);
      line-height: 0;

      li {
        display: inline-block;
        width: 7px;
        height: 7px;
        background: white;
        border-radius: 5px;
      }

      li:not(:first-child) {
        margin-left: 8px;
      }

      .current {
        background: var(--gray-300);
      }
    }
  }

  .contents {
    margin: 50px auto 53px;
    padding: 0 25px;

    ul {
      justify-content: center;
      display: grid;
      grid-template-columns: repeat(auto-fit, 94px);
      gap: 10px;
    }

    li {
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
    box-sizing: content-box;
    padding-left: 25px;
    margin: 0 auto 60px;
    overflow-x: hidden;
    position: relative;

    h2 {
      margin-bottom: 20px;
      font-size: 3rem;
      line-height: 4.3rem;
      font-weight: 700;
    }

    .direction {
      width: 120px;
      height: 120px;
      position: absolute;
      top: 50px;
      left: 0px;
      animation-name: finger;
      animation-duration: 0.5s;
      animation-duration: leaner;
      animation-iteration-count: 1000000;
      animation-direction: alternate;
      z-index: 800;
    }

    @-webkit-keyframes finger {
      0% {
        top: 20px;
      }
      100% {
        left: 10px;
      }
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

    img {
      object-fit: cover;
    }

    a:hover > img {
      transition: 0.3s;
      transform: scale(110%);
    }
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    .banners li img {
      object-position: -360px top;
    }
  }

  @media (max-width: 768px) {
    padding: 107px 0 0;

    .banners {
      .banner-list {
        aspect-ratio: 768 / 300;
        height: auto;
      }

      .btn-wrap {
        button {
          width: 20px;
        }
      }

      .indicator {
        li {
          display: inline-block;
          width: 6px;
          height: 6px;
          background: white;
          border-radius: 5px;
        }

        li:not(:first-child) {
          margin-left: 7px;
        }
      }
    }
  }

  .contents {
    margin: 60px auto;

    ul {
      grid-template-columns: repeat(auto-fit, 80px);
      gap: 45px 35px;
      line-height: 2rem;
      font-size: 1.4rem;
    }

    li {
      padding: 0;
    }
  }

  .classes h2 {
    margin-bottom: 24px;
    font-size: 2.5rem;
    line-height: 3.6rem;
  }

  @media (max-width: 609px) {
    padding: 96px 0 0;
  }

  @media (max-width: 430px) {
    margin: 0 auto 60px;

    .banners {
      .banner-list {
        aspect-ratio: 430 / 249;
      }

      .btn-wrap {
        width: calc(100% - 40px);
      }
    }

    .contents {
      margin: 50px auto;

      ul {
        gap: 30px 23px;
      }
    }

    .classes {
      padding-left: 20px;

      ul {
        gap: 20px;
      }

      li {
        width: 252px;
        aspect-ratio: 252 / 157;
      }

      h2 {
        margin-bottom: 20px;
        font-size: 2rem;
        line-height: 1.7rem;
      }
    }
  }
`;

export default Home;
