import { styled } from 'styled-components';

const StyledMain = styled.main`
  box-sizing: content-box;
  padding: 214px 25px 100px;
  max-width: 1185px;
  margin: 0 auto;

  .section1 {
    display: flex;
    /* align-items: center; */
    max-width: 100%;
    gap: 42px;
    margin-bottom: 30px;
  }

  .basicImg {
    max-width: 100%;
    border-radius: 10px;
    object-fit: cover;
    overflow: hidden;
  }

  .txtWrapper {
    flex-basis: 388px;
    flex-grow: 1;
  }

  .mainTitle {
    font-size: 2rem;
    font-weight: 900;
    margin-top: 10px;
  }

  .subTitle {
    font-size: 2.9rem;
    font-weight: 700;
    margin: 15px 0;
  }
  .reviewBox {
    display: flex;
    gap: 10px;
    margin-bottom: 29px;
  }

  .reviewIcon {
    display: inline-block;
    width: 21.2px;
    height: 21.2px;
  }

  .reviewScore {
    font-size: 1.4rem;
    font-weight: 900;
  }

  .reviewTxt {
    font-size: 1.4rem;
    color: var(--gray-300);
  }

  .priceBox {
    display: flex;
    align-items: center;
    color: var(--import-color);
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  .priceSale {
    margin-left: auto;
    font-size: 30px;
  }

  .price {
    color: var(--black-color);
    text-align: right;
    margin-left: 5px;
  }

  .btnTxt {
    font-size: 1.4rem;
    font-weight: 700;
    margin: 30px 0 20px;
  }
  hr {
    width: 100%;
    border: 0px;
    height: 1px;
    background-color: var(--gray-100);
  }

  h3 {
    clear: left;
    font-size: 2rem;
    margin-bottom: 27px;
  }

  .section2 {
    width: 70rem;
  }

  .section2 ul li:hover {
    transition: 0.3s;
    transform: scale(103%);
  }
  .section2 ul li img {
    border-radius: 2rem;
    box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.1);
    aspect-ratio: 366/223;
  }

  .section2 ul {
    display: grid;
    width: 755px;
    /* height: 460px; */
    gap: 27px 15px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  /* 임시 */
  .openTime {
    display: block;
    text-align: center;
    font-size: 1.6rem;
    margin-bottom: 20px;
  }
  @media (min-width: 769px) {
    .basicImg {
      min-width: 0;
    }

    .section2 {
      width: calc(100% - 388px - 42px);
    }

    .section2 ul {
      width: 100%;
      grid-template-columns: repeat(auto-fit, minmax(300px, auto));
      grid-template-rows: auto;
    }
    .section2 li {
      min-width: 300px;
    }
  }
  @media (max-width: 768px) {
    max-width: 722px;
    padding: 190px 25px 68px;
    .section1 {
      display: flex;
      flex-wrap: wrap;
      gap: 50px;
      margin-bottom: 65px;
    }

    .basicImg {
      /* flex-shrink: 0; */
      min-width: 347px;
      aspect-ratio: 347/283;
    }

    .mainTitle {
      font-size: 1.5rem;
    }

    .subTitle {
      font-size: 2.1rem;
      margin: 10px 0;
    }
    .reviewBox {
      margin-bottom: 15px;
    }

    .reviewScore {
      font-size: 1.2rem;
    }

    .reviewTxt {
      font-size: 1.2rem;
      color: var(--gray-300);
    }

    .priceBox {
      color: var(--import-color);
      font-size: 1.8rem;
      margin-bottom: 15px;
    }

    .priceSale {
      /* margin-left: 73px; */
      font-size: 2.5rem;
    }

    .price {
      color: var(--black-color);
      text-align: right;
      margin-left: 5px;
    }

    .btnTxt {
      font-size: 1.2rem;
      margin: 10px 0;
    }
    h3 {
      clear: left;
      font-size: 1.6em;
      margin-bottom: 20px;
    }
    button {
      width: 100%;
    }
    .section2 {
      width: auto;
    }

    .section2 ul li:hover {
      transition: 0.3s;
      transform: scale(103%);
    }
    .section2 ul li img {
      border-radius: 2rem;
      box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.1);
    }

    .section2 ul {
      width: 100%;
      gap: 27px 50px; //임의
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }

    /* 임시 */
    .openTime {
      display: block;
      text-align: center;
      font-size: 1.6rem;
      margin-bottom: 20px;
    }

    .basicImg,
    .txtWrapper {
      flex-grow: 1;
      flex-basis: calc(50% - 25px);
      min-width: 240px; //임의
    }
  }
  /* @media (max-width: 700px) {
    .basicImg {
      flex-shrink: 0;
    }
    .section1 {
      flex-wrap: wrap;
    }
  } */

  @media (max-width: 430px) {
    padding: 124px 20px 35px;
    max-width: 390px;

    .section1 {
      gap: 30px;
      margin-bottom: 30px;
    }

    .section2 {
      width: auto;
    }
    .section2 ul {
      width: 100%;
      gap: 27px;
      grid-template-columns: 1fr;
    }
    .basicImg {
      flex-shrink: 1;
      min-width: 0;
    }
    .basicImg {
      width: 100%;
    }
  }
`;
const WhiteButton = styled.button`
  margin-top: 57px;
  padding: 16px 0;
  width: 100%;
  font-size: 1.6rem;
  line-height: 2.9rem;
  font-weight: 700;
  border-radius: 10px;
  border: 1px solid var(--black-color);
  color: var(--black-color);

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 15px;
    padding: 9px 0;
    font-size: 1.4rem;
  }
  @media (max-width: 430px) {
    margin-top: 17px;
  }

  &::before {
    content: '';
    margin-right: 10px;
    width: 24px;
    aspect-ratio: 1/1;
    background: ${(props) => 'url(' + props.$watchBlackIcon + ')'} no-repeat
      center / contain;
  }
`;
export { StyledMain, WhiteButton };
