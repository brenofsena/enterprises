import styled, { keyframes } from 'styled-components'

const Ring = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(1px);
  background-color: rgba(255, 255, 255, 0.6);
`

export const Spinner = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid ${(props) => props.theme.colors.greenyBlue};
    border-radius: 50%;
    animation-name: ${Ring};
    animation-duration: 1.2s;
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 1);
    animation-iteration-count: infinite;
    border-color: ${(props) => props.theme.colors.greenyBlue} transparent transparent transparent;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }

    &:nth-child(2) {
      animation-delay: -0.3s;
    }

    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`
