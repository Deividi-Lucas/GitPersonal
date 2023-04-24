import styled from 'styled-components'
import { color } from '../../utils/color'

export const Main = styled.footer`
  height: 20vh;
  background: ${color.roxo};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  img:hover {
    transition: 200ms;
    transform: scale(120%);
  }

  h5:hover {
    color: ${color.white};
    transition: 200ms;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column-reverse;
  }
`
