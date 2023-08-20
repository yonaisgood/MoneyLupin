import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { StyledMain, RightSection, LeftSection } from './RankingPageStyle';
import rankImg from '../../assets/images/rank_man.png';

const RankingPage = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <LeftSection>
          <article>
            <img src={rankImg} alt="깃발을 든 우주비행사" />
            <div>
              <h2>공실스 님의 순위는?</h2>

              <strong>
                28<span>위</span>
              </strong>

              <p>18 : 00 : 26</p>
            </div>
          </article>
        </LeftSection>
        <RightSection>
          <h2>전체 순위</h2>
          <ul>
            <li>
              <div>1</div>
              <p>공실스</p>
              <p>18:00:01</p>
            </li>
            <li>
              <div>2</div>
              <p>공실스</p>
              <p>18:00:01</p>
            </li>
            <li>
              <div>3</div>
              <p>공실스</p>
              <p>18:00:01</p>
            </li>
            <li>
              <div>4</div>
              <p>공실스</p>
              <p>18:00:01</p>
            </li>
            <li>
              <div>5</div>
              <p>공실스</p>
              <p>18:00:01</p>
            </li>
            <li>
              <div>6</div>
              <p>공실스</p>
              <p>18:00:01</p>
            </li>
            <li>
              <div>7</div>
              <p>공실스</p>
              <p>18:00:01</p>
            </li>
            <li>
              <div>8</div>
              <p>공실스</p>
              <p>18:00:01</p>
            </li>
            <li>
              <div>9</div>
              <p>공실스</p>
              <p>18:00:01</p>
            </li>
            <li>
              <div>10</div>
              <p>공실스</p>
              <p>18:00:01</p>
            </li>
            <li>
              <div>11</div>
              <p>공실스</p>
              <p>18:00:01</p>
            </li>
            <li>
              <div>12</div>
              <p>공실스</p>
              <p>18:00:01</p>
            </li>
            <li>
              <div>13</div>
              <p>공실스</p>
              <p>18:00:01</p>
            </li>
            <li>
              <div>14</div>
              <p>공실스</p>
              <p>18:00:01</p>
            </li>
            <li>
              <div>15</div>
              <p>공실스</p>
              <p>18:00:01</p>
            </li>
            <li>
              <div>16</div>
              <p>공실스</p>
              <p>18:00:01</p>
            </li>
            <li>
              <div>17</div>
              <p>공실스</p>
              <p>18:00:01</p>
            </li>
            <li>
              <div>18</div>
              <p>공실스</p>
              <p>18:00:01</p>
            </li>
            <li>
              <div>19</div>
              <p>공실스</p>
              <p>18:00:01</p>
            </li>
            <li>
              <div>20</div>
              <p>공실스</p>
              <p>18:00:01</p>
            </li>
          </ul>
        </RightSection>
      </StyledMain>
      <Footer />
    </>
  );
};
export default RankingPage;
