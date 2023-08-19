import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import StyledMain from './DetailPageStyle';
import basicBig from '../../assets/images/basic_big.png';
import reviewIcon from '../../assets/images/reviews.svg';
import review1 from '../../assets/images/review/review1.png';
import review2 from '../../assets/images/review/review2.png';
import review3 from '../../assets/images/review/review3.png';
import review4 from '../../assets/images/review/review4.png';
const DetailPage = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <section className="section1">
          <h2 className="a11y-hidden">강의 상세 페이지</h2>
          <img className="basicImg" src={basicBig} alt="루팡스쿨 기초반" />
          <div className="txtWrapper">
            <div className="mainTitle">[루팡스쿨 기초반]</div>
            <p className="subTitle">월급모아 부자되는 가장 빠른 법</p>
            <div className="reviewBox">
              <img className="reviewIcon" src={reviewIcon} alt="리뷰아이콘" />
              <span className="reviewScore">4.99</span>
              <span className="reviewTxt">+999개 수강 후기</span>
            </div>
            <div className="priceBox">
              <strong className="priceTxt">1차 신청</strong>
              <strong className="priceSale">20%</strong>
              <strong className="price">월 9,900원</strong>
            </div>
            <hr />
            <p className="btnTxt">회원을 위한 혜택</p>
            <Link to="/payment">
              <Button size="l">결제하기</Button>
            </Link>
          </div>
        </section>
        <section className="section2">
          <h3>베스트 수강 후기</h3>
          <ul>
            <li>
              <img src={review1} alt="리뷰 1" />
            </li>
            <li>
              <img src={review2} alt="리뷰 2" />
            </li>
            <li>
              <img src={review3} alt="리뷰 3" />
            </li>
            <li>
              <img src={review4} alt="리뷰 4" />
            </li>
          </ul>
        </section>
      </StyledMain>
      <Footer />
    </>
  );
};
export default DetailPage;
