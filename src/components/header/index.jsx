import { Main, Title } from './style'

export default function Header({ img, title }) {
  return (
    <Main>
      <img src={img} alt="PhotoInBlog" />
      <Title>{title}</Title>
    </Main>
  )
}
