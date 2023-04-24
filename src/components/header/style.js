import styled from 'styled-components'
import { color } from '../../utils/color'

export const Main = styled.div`
  background: ${color.black};
  display: flex;
  justify-content: space-around;
  padding: 0.5rem;

  img {
    width: 3rem;
    transition: 200ms;
    &:hover {
      transform: scale(110%);
    }
    &:active {
      animation: rotateLogo 1s;
    }
  }

  @keyframes rotateLogo {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
`
export const Title = styled.h1`
  color: ${color.white};
`
