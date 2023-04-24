import { useEffect, useState } from 'react'
import { Main } from './style'
import axios from 'axios'
import { Divider, Input } from '@mui/material'
import Header from '../../components/header'
import gitphoto from '../../assets/git.png'
import Footer from '../../components/footer'

export default function Home() {
  const [name, setName] = useState('Deividi-Lucas')
  const [url, setUrl] = useState('')

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${name}`)
      .then(e => setUrl(e.data))
      .catch(function (error) {
        alert('Nome inválido')
      })
  }, [name])

  return (
    <>
      <Header title="GitPersonal" img={gitphoto} />
      <Main>
        <Input
          placeholder="Pesquise aqui:"
          onKeyUp={e => {
            if (e.key == 'Enter') {
              setName(e.target.value)
            }
          }}
        />

        <Divider orientation="horizontal" />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <img
            src={url?.avatar_url}
            alt="Github_photo"
            style={{ height: '3rem', width: '3rem', borderRadius: '1rem' }}
          />
          <span>Nome: {url.name}</span>
          <span>Localidade: {url?.location}</span>

          <span>Biografia: {url?.bio}</span>
          <span>Blog: {url?.blog}</span>
          <span>Seguidores: {url?.followers}</span>
          <span>Repositórios público: {url?.public_repos}</span>
        </div>
      </Main>
      <Footer />
    </>
  )
}
