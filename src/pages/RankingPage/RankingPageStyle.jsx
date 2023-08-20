import { styled } from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  padding: 122px 0 0;
  max-width: 1160px;
  margin: 0 auto;
  background-color: #e1e5f4;
`;
const LeftSection = styled.section`
  position: relative;
  background-color: #687de9;
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
      color: white;
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
      background-color: #e1e5f4;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #687de9;
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
    color: white;
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
`;
export { StyledMain, RightSection, LeftSection };
