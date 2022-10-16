import { useLoading } from 'libs/zustand/store';
import styled from 'styled-components';

const Loading = () => {
  const { loading } = useLoading();
  if (loading) {
    return (
      <Wrapper>
        {/* <!-- Google Chrome --> */}
        {/* <InfinityChrome>
        <div></div>
        <div></div>
        <div></div>
      </InfinityChrome> */}

        {/* <!-- Safari and others --> */}
        <Infinity>
          <div>
            <span></span>
          </div>
          <div>
            <span></span>
          </div>
          <div>
            <span></span>
          </div>
        </Infinity>
        <LoadingTitle>
          <div>퍼즐을 생성 중입니다.</div>
          <div>잠시만 기다려주세요.</div>
        </LoadingTitle>
      </Wrapper>
    );
  } else {
    return <></>;
  }
};

export default Loading;

const Wrapper = styled.div`
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.bgColor};
  pointer-events: none;
`;

const Infinity = styled.div`
  width: 120px;
  height: 60px;
  position: relative;
  div,
  span {
    position: absolute;
  }
  div {
    top: 0;
    left: 50%;
    width: 60px;
    height: 60px;
    animation: rotate 6.9s linear infinite;
    span {
      left: -8px;
      top: 50%;
      margin: -8px 0 0 0;
      width: 16px;
      height: 16px;
      display: block;
      background-color: ${({ theme }) => theme.loadingColor1};
      box-shadow: 2px 2px 8px ${({ theme }) => theme.loadingColor1}09;
      border-radius: 50%;
      transform: rotate(90deg);
      animation: move 6.9s linear infinite;
      &:before,
      &:after {
        content: '';
        position: absolute;
        display: block;
        border-radius: 50%;
        width: 14px;
        height: 14px;
        background: inherit;
        top: 50%;
        left: 50%;
        margin: -7px 0 0 -7px;
        box-shadow: inherit;
      }
      &:before {
        animation: drop1 0.8s linear infinite;
      }
      &:after {
        animation: drop2 0.8s linear infinite 0.4s;
      }
    }
    &:nth-child(2) {
      animation-delay: -2.3s;
      span {
        animation-delay: -2.3s;
      }
    }
    &:nth-child(3) {
      animation-delay: -4.6s;
      span {
        animation-delay: -4.6s;
      }
    }
  }

  @keyframes moveSvg {
    0% {
      offset-distance: 0%;
    }
    25% {
      background: ${({ theme }) => theme.loadingColor2};
    }
    75% {
      background: ${({ theme }) => theme.loadingColor3};
    }
    100% {
      offset-distance: 100%;
    }
  }
  @keyframes move {
    0%,
    50% {
      left: -8px;
    }
    25% {
      background: ${({ theme }) => theme.loadingColor2};
    }
    75% {
      background: ${({ theme }) => theme.loadingColor3};
    }
    50.0001%,
    100% {
      left: auto;
      right: -8px;
    }
  }
  @keyframes rotate {
    50% {
      transform: rotate(360deg);
      margin-left: 0;
    }
    50.0001%,
    100% {
      margin-left: -60px;
    }
  }
  @keyframes drop1 {
    100% {
      transform: translate(32px, 8px) scale(0);
    }
  }
  @keyframes drop2 {
    0% {
      transform: translate(0, 0) scale(0.9);
    }
    100% {
      transform: translate(32px, -8px) scale(0);
    }
  }
`;

const LoadingTitle = styled.div`
  margin: 12px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    margin: 8px 0 0;
  }
`;

const InfinityChrome = styled.div`
  width: 128px;
  height: 60px;
  div {
    position: absolute;
    width: 16px;
    height: 16px;
    background: ${({ theme }) => theme.loadingColor1};
    box-shadow: 2px 2px 8px ${({ theme }) => theme.loadingColor1}09;
    border-radius: 50%;
    animation: moveSvg 6.9s linear infinite;
    -webkit-filter: url(#goo);
    filter: url(#goo);
    transform: scaleX(-1);
    offset-path: path("M64.3636364,29.4064278 C77.8909091,43.5203348 84.4363636,56 98.5454545,56 C112.654545,56 124,44.4117395 124,30.0006975 C124,15.5896556 112.654545,3.85282763 98.5454545,4.00139508 C84.4363636,4.14996252 79.2,14.6982509 66.4,29.4064278 C53.4545455,42.4803627 43.5636364,56 29.4545455,56 C15.3454545,56 4,44.4117395 4,30.0006975 C4,15.5896556 15.3454545,4.00139508 29.4545455,4.00139508 C43.5636364,4.00139508 53.1636364,17.8181672 64.3636364,29.4064278 Z");
    &:before,
    &:after {
      content: '';
      position: absolute;
      display: block;
      border-radius: 50%;
      width: 14px;
      height: 14px;
      background: inherit;
      top: 50%;
      left: 50%;
      margin: -7px 0 0 -7px;
      box-shadow: inherit;
      }
      &:before {
        animation: drop1 .8s linear infinite;
      }
      &:after {
        animation: drop2 .8s linear infinite .4s;
      }
      &:nth-child(2) {
        animation-delay: -2.3s;
      }
      &:nth-child(3) {
        animation-delay: -4.6s;
      }
    }
  }

  @keyframes drop1 {
    100% {
      transform: translate(32px, 8px) scale(0);
    }
  }
  @keyframes drop2 {
    0% {
      transform: translate(0, 0) scale(.9);
    }
    100% {
      transform: translate(32px, -8px) scale(0);
    }
  }
`;
