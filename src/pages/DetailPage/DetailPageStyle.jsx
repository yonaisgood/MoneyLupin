import { styled } from 'styled-components';

const StyledMain = styled.main`
  padding: 214px 0 100px;
  max-width: 77%;
  margin: 0 auto;

  .section1 {
    display: flex;
    justify-content: space-between;
    gap: 42px;
    margin-bottom: 30px;
  }

  .basicImg {
    width: 70rem;
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

  .mainTitle {
    font-size: 20px;
    font-weight: 900;
    margin-top: 10px;
  }

  .subTitle {
    font-size: 29px;
    line-height: 6rem;
    font-weight: 700;
    margin: 0;
  }

  .priceBox {
    color: var(--import-color);
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  .priceSale {
    margin-left: 103px;
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

  .section2 {
    width: 70rem;
    border: 1px solid red;
  }

  .section2 ul li:hover {
    transition: 0.3s;
    transform: scale(103%);
  }

  h3 {
    clear: left;
    font-size: 20px;
    margin-bottom: 27px;
  }

  hr {
    width: 388px;
    border: 0px;
    height: 1px;
    background-color: var(--gray-100);
  }

  ul {
    display: grid;
    width: 70rem;
    height: 460px;
    gap: 27px 15px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;
export default StyledMain;
