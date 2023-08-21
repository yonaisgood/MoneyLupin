import { styled } from 'styled-components';

const StyledDialog = styled.dialog`
  border: none;
  padding: 0;
  border-radius: 25px;
  background: #f0f0f2;

  strong {
    display: block;
    font-size: 3rem;
    font-weight: 400;
    text-align: center;
  }

  div:first-child {
    border-radius: 25px;
    background: #687de9;
    padding: 47px 0 56px;
    font-size: 3rem;
    color: white;

    div {
      position: relative;
      margin: 25px auto 31px;
      img {
        margin: auto;
        width: 50px;
        aspect-ratio: 1/1;
      }
    }
    div::after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: calc(50% - 36px);
      background: white;
      height: 1px;
    }
    div::before {
      content: '';
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      width: calc(50% - 36px);
      background: white;
      height: 1px;
    }

    form {
      position: relative;
      padding: 0 47px;
    }

    button {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      right: 75px;
      width: 50px;
      height: 50px;
      border: 1px solid white;
      border-radius: 10px;
      img {
        margin: auto;
        width: 36px;
        aspect-ratio: 1/1;
      }
    }
  }

  .list-wrap {
    padding: 52px 47px;
    color: var(--black-color);

    ul {
      margin-top: 27px;
    }

    li {
      background: white;
      position: relative;
      border-radius: 20px;
      box-shadow: 4px 5px 9px 4px rgba(186, 186, 186, 0.25);
      padding: 16px 28px 32px;
    }

    li:not(:first-child) {
      margin-top: 24px;
    }

    .day {
      display: block;
      font-size: 1.6rem;
      line-height: 2.3;
      font-weight: 700;
      color: var(--gray-300);
    }
    .time {
      font-size: 5rem;
      line-height: 6rem;
      font-weight: 700;
      color: var(--gray-300);
    }

    button {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      right: 28px;
      width: 50px;
      height: 50px;
      border-radius: 10px;
      border: 1px solid var(--gray-300);
    }
    img {
      margin: auto;
      width: 24px;
      aspect-ratio: 1/1;
    }
  }

  & > button {
    position: absolute;
    top: 25px;
    right: 25px;
    background: none;
  }

  input[type='datetime-local'] {
    position: relative;
    width: 545px;
    border-radius: 20px;
    border: 1px solid white;
    padding: 44px 28px;
  }

  input[type='datetime-local']::-webkit-calendar-picker-indicator {
    // 아이콘 영역을 확장해서 input의 어떤 곳을 클릭해도 캘린더를 클릭한 것과 같은 효과
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    // 아이콘을 사라지게 만듬
    background: transparent;
    color: transparent;

    cursor: pointer;
  }

  // placeholder를 커스텀하기 위한 선택자
  // 기본적으로 type datetime-local인 input은 placeholder가 먹히지 않기 때문
  input[type='datetime-local']::before {
    content: attr(
      placeholder
    ); // input 태그의 placeholder라는 속성값을 가져와서 content로 사용한다. 보통은 placeholder보다는 data-placeholder라는 커스텀 속성을 만들어서 사용하시는 것 같다.
    width: 100%;
    height: 100%;
  }

  // input에 어떠한 유효값이 입력된 상태인지 확인하는 선택자
  // 날짜를 선택하면 유효값이 입력된다.
  // 이 속성을 활용하고자 한다면 반드시 태그에 required 속성을 달아줘야한다.
  input[type='datetime-local']:valid::before {
    display: none; // 유효값이 입력된 경우 before에 있는 것을 사라지게 한다. 즉, placeholder를 사라지게 한다.
  }
`;

export default StyledDialog;
