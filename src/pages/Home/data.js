import content1 from '../../assets/icons/contents/1.png';
import content2 from '../../assets/icons/contents/2.png';
import content3 from '../../assets/icons/contents/3.png';
import content4 from '../../assets/icons/contents/4.png';
import content5 from '../../assets/icons/contents/5.png';
import content6 from '../../assets/icons/contents/6.png';
import content7 from '../../assets/icons/contents/7.png';
import content8 from '../../assets/icons/contents/8.png';
import content9 from '../../assets/icons/contents/9.png';
import content10 from '../../assets/icons/contents/10.png';

import banner1 from '../../assets/images/banners/1.png';
import banner2 from '../../assets/images/banners/2.png';
import banner3 from '../../assets/images/banners/3.png';

import best1 from '../../assets/images/best/1.png';
import best2 from '../../assets/images/best/2.png';
import best3 from '../../assets/images/best/3.png';
import best4 from '../../assets/images/best/4.png';

import bestSmall1 from '../../assets/images/best-small/1.png';
import bestSmall2 from '../../assets/images/best-small/2.png';
import bestSmall3 from '../../assets/images/best-small/3.png';
import bestSmall4 from '../../assets/images/best-small/4.png';

const contents = [
  { name: '1:1 코칭', img: content1 },
  { name: 'NEW', img: content2 },
  { name: '부동산', img: content3 },
  { name: '주식', img: content4 },
  { name: 'BEST', img: content5 },
  { name: '커뮤니티', img: content6 },
  { name: '창업 모임', img: content7 },
  { name: '피드백 신청', img: content8 },
  { name: '강의 후기', img: content9 },
  { name: '문의', img: content10 },
];

const banners = [
  {
    text: [
      '친구도 나도 일석이조 30000 포인트 혜택',
      '친구에게 강의를 소개하고, 초대해 주세요',
      '친구 초대하기',
    ],
    img: banner1,
  },
  {
    text: [
      'NEW 이번달 신규강의 얼리버드 혜택과 만나기',
      '이번달 신규 강의 가장 처음 만나보세요 !',
      '혜택 받으러 가기',
    ],
    img: banner2,
  },
  {
    text: [
      'BEST 강의 만나러 가기',
      '이번달 신규 강의 가장 처음 만나보세요 !',
      '혜택 받으러 가기',
    ],
    img: banner3,
  },
];

const best = [
  {
    name: '루팡 스쿨 기초반',
    img: best1,
    imgSmall: bestSmall1,
    link: '/detail',
  },
  { name: '루팡 스쿨 주식반', img: best2, imgSmall: bestSmall2, link: '/' },
  { name: '루팡 스쿨 중급반', img: best3, imgSmall: bestSmall3, link: '/' },
  { name: '서울 투자 중급반', img: best4, imgSmall: bestSmall4, link: '/' },
];

export { contents, banners, best };
