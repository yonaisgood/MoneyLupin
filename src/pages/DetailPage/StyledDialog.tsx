import { styled } from 'styled-components';

const StyledDialog = styled.dialog`
  border: none;
  padding: 0;
  background: none;
  max-width: 640px;
  width: calc(100% - 60px);
  position: relative;
  box-sizing: content-box;
  padding: 30px;

  strong {
    display: block;
    font-size: 3rem;
    font-weight: 400;
    text-align: center;
  }

  div:first-child {
    border-radius: 25px;
    background: var(--brand-sub-color);
    padding: 47px 0 56px;
    font-size: 3rem;
    color: var(--white-color);

    div {
      position: relative;
      margin: 25px auto 31px;
      img {
        margin: auto;
        width: 50px;
        aspect-ratio: 1/1;
      }
    }
    div::after,
    div::before {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: calc(50% - 36px);
      background: var(--white-color);
      height: 1px;
    }
    div::before {
      right: 0;
    }

    button {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      right: 27px;
      width: 50px;
      height: 50px;
      padding: 4px;
      border: 1px solid var(--white-color);
      border-radius: 10px;

      img {
        aspect-ratio: 1/1;
      }
    }
  }

  form {
    position: relative;
    margin: 0 47px;
  }

  label {
    display: block;
    width: 100%;
  }

  input {
    position: relative;
    width: 100%;
    padding: 44px 27px;
    font-size: 4rem;
    border-radius: 20px;
    border: 1px solid white;
  }

  .list-wrap {
    position: relative;
    z-index: -1;
    margin-top: -25px;
    padding: 77px 47px 52px; // 52 + 25
    border-radius: 0 0 25px 25px;
    color: var(--black-color);
    background: var(--gray-150);

    ul {
      margin-top: 27px;
    }

    li {
      background: var(--white-color);
      position: relative;
      border-radius: 20px;
      box-shadow: 4px 5px 9px 4px rgba(186, 186, 186, 0.25);
      padding: 16px 28px 38px;
    }

    li:not(:first-child) {
      margin-top: 24px;
    }

    img {
      aspect-ratio: 1/1;
    }
  }

  .day {
    display: block;
    font-size: 1.6rem;
    line-height: 2.3rem;
    font-weight: 700;
    color: var(--gray-300);
  }

  .time {
    font-size: 5rem;
    line-height: 6rem;
    font-weight: 700;
    color: var(--gray-300);
  }

  .delete-btn {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    right: 28px;
    width: 50px;
    height: 50px;
    padding: 4px;
    border-radius: 10px;
    border: 1px solid var(--gray-300);
  }

  .close-btn {
    position: absolute;
    top: 55px;
    right: 55px;
    width: 40px;
    aspect-ratio: 1 /1;
    background: none;
  }

  input::-webkit-calendar-picker-indicator {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    background: transparent;
    color: transparent;

    cursor: pointer;
  }

  input::before {
    content: attr(placeholder);
    width: 100%;
    height: 100%;
  }

  input:valid::before {
    display: none;
  }
  @media (min-width: 769px) {
    div:first-child form {
      width: 545px;
    }
  }

  @media (max-width: 768px) {
    max-width: 529px;

    div:first-child {
      padding: 40px 0 30px;

      div {
        position: relative;
        margin: 26px auto 29px;
        img {
          width: 30px;
        }
      }

      div::after,
      div::before {
        width: calc(50% - 30px);
      }

      button {
        right: 19px;
      }
    }

    form {
      margin: 0 27px;
      width: auto;
    }

    input {
      padding: 34px 19px;
      font-size: 3.5rem;
      line-height: 4.9rem;
    }

    .list-wrap {
      padding: 60px 27px 49px; //top += 25

      ul {
        margin-top: 35px;
      }

      li {
        padding: 11px 19px 34px;
      }
    }

    .time {
      font-size: 4rem;
      line-height: 4.4rem;
    }

    .delete-btn {
      right: 20px;
    }

    strong {
      font-size: 2.5rem;
    }

    .close-btn {
      top: 45px;
      right: 45px;
      width: 30px;
    }
  }

  @media (max-width: 430px) {
    input {
      padding: 17px 19px;
      font-size: 2rem;
      line-height: 2.9rem;
      border-radius: 15px;
    }

    strong {
      font-size: 1.8rem;
    }

    div:first-child {
      padding: 34px 0 33px;

      div::after,
      div::before {
        width: calc(50% - 25px);
      }

      button {
        padding: 2px;
        width: 30px;
        height: 30px;
        right: 14px;
      }
    }

    form {
      margin: 0 21px;
    }

    .list-wrap {
      padding: 45px 21px 32px; //top += 25

      ul {
        margin-top: 20px;
      }

      li {
        padding: 10px 20px 20px;
        border-radius: 15px;
      }

      .day {
        font-size: 1.2rem;
        line-height: 1.2rem;
      }

      .time {
        font-size: 2.5rem;
        line-height: 2.5rem;
      }

      .delete-btn {
        padding: 2px;
        width: 30px;
        height: 30px;
        right: 15px;
      }
    }

    .close-btn {
      top: 42px;
      right: 42px;
      width: 20px;
    }
  }
`;

export default StyledDialog;
