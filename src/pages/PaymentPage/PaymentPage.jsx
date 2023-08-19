import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  PaymentContainor,
  RightSection,
  LeftSection,
} from './PaymentPageStyle';
import BasicClass from '../../assets/images/best/1.png';
import Button from '../../components/Button';

const PaymentPage = () => {
  return (
    <>
      <Header />
      <PaymentContainor>
        <LeftSection>
          <h2 className="a11y-hidden">주문결제</h2>
          <h1>주문결제</h1>
          <div className="className">
            <img className="classImg" src={BasicClass} alt="" />
            <div className="classInfo">
              <p>[루팡스쿨 기초반] 월급모아 부자되는 가장 빠른 법</p>
              <p className="classPrice">월 9,900 원</p>
            </div>
          </div>
          <section className="payMethod">
            <div className="payBenefit">
              <h2 className="a11y-hidden">쿠폰</h2>
              <h3>쿠폰</h3>
              <p>사용가능한 쿠폰이 없습니다.</p>
            </div>
            <div className="payBenefit">
              <h2 className="a11y-hidden">포인트</h2>
              <h3>포인트</h3>
              <div className="payPoint">
                <p>0</p>
                <button className="payAllBtn" type="submit">
                  전액사용
                </button>
              </div>
            </div>
            <div className="payBenefit">
              <h2 className="a11y-hidden">결제수단</h2>
              <h3>결제수단</h3>
              <div className="paySelect">
                <button className="paySelectBtn" type="button">
                  신용카드
                </button>
                <button className="paySelectBtn" type="button">
                  A페이
                </button>
                <button className="paySelectBtn" type="button">
                  B페이
                </button>
                <button className="paySelectBtn" type="button">
                  C페이
                </button>
              </div>
            </div>
          </section>
        </LeftSection>
        <RightSection>
          <h3>결제금액</h3>
          <ul className="payCost">
            <li>
              <p>총 강의 금액</p>
              <strong>118,800 원</strong>
            </li>
            <li>
              <p>총 강의 금액</p>
              <span>118,800 원</span>
            </li>
            <li>
              <p>총 강의 금액</p>
              <span>0 원</span>
            </li>
          </ul>
          <div className="totalCost">
            <p>총 결제금액</p>
            <span>118,800 원</span>
          </div>
          <span className="installmentInfo">12개월 할부 시 월 9,900원</span>
          <Button>결제하기</Button>
        </RightSection>
      </PaymentContainor>
      <Footer />
    </>
  );
};

export default PaymentPage;
