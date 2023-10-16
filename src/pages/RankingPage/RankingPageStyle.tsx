import { styled } from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  padding: 122px 0 0;
  max-width: 1160px;
  margin: 0 auto;
  background-color: var(--gray-250);
  @media (max-width: 768px) {
    padding: 105px 0 0;
  }
  @media (max-width: 609px) {
    padding: 94px 0 0;
    flex-direction: column;
  }
  @media (max-width: 430px) {
    flex-direction: column;
  }
`;
const LeftSection = styled.section`
  position: relative;
  background-color: var(--brand-sub-color);
  width: 580px;
  border-top-right-radius: 30px;
  article {
    position: absolute;
    top: 192px;
    display: flex;
    img {
      width: 300px;
      height: 340px;
    }
    div {
      color: var(--white-color);
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px;
    }
    h2 {
      font-size: 25px;
    }
    strong {
      font-size: 50px;
    }
    strong span {
      font-size: 20px;
    }
    p {
      font-size: 16px;
      margin: 0;
    }
  }
  @media (max-width: 768px) {
    article {
      position: static;
    }
    article img {
      width: 225px;
      height: 280px;
      position: absolute;
      top: 47px;
    }
    article div {
      position: absolute;
      top: 266px;
      left: 105px;
    }
  }
  @media (max-width: 609px) {
    width: 100%;
    height: 462px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 30px;

    article {
      position: absolute;
      top: 100px;
    }
    article img {
      width: 160px;
      height: 210px;
      position: static;
    }
    article div {
      position: static;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px;
    }
  }
`;
const RightSection = styled.section`
  width: 580px;
  padding: 42px 10px 42px 73px;

  h2 {
    font-size: 20px;
    margin-bottom: 28px;
  }
  ul {
    height: 750px;
    overflow: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 10px;
      background-color: var(--gray-250);
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: var(--brand-sub-color);
    }
  }
  li {
    display: flex;
    gap: 30px;
    align-items: center;
    border-bottom: 1px solid var(--gray-200);
    padding: 0 20px;
    margin-right: 130px;
  }
  ul li div {
    width: 30px;
    height: 30px;
    font-size: 20px;
    color: var(--white-color);
    background-color: var(--brand-color);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ul li p {
    font-size: 16px;
  }
  ul li p:last-child {
    margin-left: auto;
  }
  @media (max-width: 768px) {
    padding: 60px 10px 60px 40px;
    li {
      padding: 0;
      margin-right: 30px;
    }
    h2 {
      font-size: 1.8rem;
    }
    ul li p {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 609px) {
    width: 100%;
  }
  @media (max-width: 430px) {
    padding: 25px 10px 25px 37px;
    width: 100%;
  }
`;
export { StyledMain, RightSection, LeftSection };
