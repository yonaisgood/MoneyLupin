import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { PaymentContainor, RightSection } from './PaymentPageStyle';

const PaymentPage = () => {
  return (
    <>
      <Header></Header>
      <PaymentContainor>
        <h2 className="a11y-hidden">주문결제</h2>
        <RightSection>
          <h1>주문결제</h1>
          <div>
            <img src="" alt="" />
            <div>
              <p>[루팡스쿨 기초반] 월급모아 부자되는 가장 빠른 법</p>
              <p>월 9,900 원</p>
            </div>
          </div>
          <section>
            <h3>쿠폰</h3>
            <p>사용가능한 쿠폰이 없습니다.</p>
            <h3>포인트</h3>
            <div>
              <p>0</p>
              <button>전액사용</button>
            </div>
            <h3>결제수단</h3>
            <div>
              <button>신용카드</button>
              <button>A페이</button>
              <button>B페이</button>
              <button>C페이</button>
            </div>
          </section>
        </RightSection>
        <section>
          <h3>결제금액</h3>
          <ul>
            <li>
              <p>총 강의 금액</p>
              <strong>118,800 원</strong>
            </li>
            <li>
              <p>총 강의 금액</p>
              <strong>118,800 원</strong>
            </li>
            <li>
              <p>총 강의 금액</p>
              <strong>118,800 원</strong>
            </li>
          </ul>
          <div>
            <p>총 결제금액</p>
            <strong>118,800 원</strong>
          </div>
          <span>12개월 할부 시 월 9,900원</span>
        </section>
        <button>결제하기</button>
      </PaymentContainor>
      <Footer></Footer>
    </>
  );
};

export default PaymentPage;
