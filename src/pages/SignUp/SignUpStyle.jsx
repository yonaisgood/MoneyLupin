import { styled } from 'styled-components';

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const LeftSection = styled.section`
  width: 50%;
  .sinupBackground {
    object-fit: cover;
  }
`;

const RightSection = styled.section`
  width: 50%;
  display: flex;
  text-align: start;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    width: 408px;
    font-size: 4.5rem;
    margin-bottom: 9rem;
  }
`;

export { Section, LeftSection, RightSection };
