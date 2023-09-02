import { styled } from 'styled-components';

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`;

const LeftSection = styled.section`
  width: 50%;

  .sinupBackground {
    object-fit: cover;

    @media screen and (max-width: 900px) {
      visibility: hidden;
    }
  }
`;

const RightSection = styled.section`
  width: 50%;
  display: flex;
  text-align: start;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (max-width: 430px) {
    width: 100%;
    padding: 0 3.6rem;
  }

  h1 {
    width: 100%;
    font-size: 4.5rem;
    margin-bottom: 9rem;

    @media screen and (max-width: 900px) {
      font-size: 4rem;
    }

    @media screen and (max-width: 430px) {
      font-size: 3rem;
      margin-bottom: 4rem;
    }
  }
`;
const FormContainer = styled.div`
  @media screen and (max-width: 430px) {
    width: 100%;
  }
`;

export { Section, LeftSection, RightSection, FormContainer };
