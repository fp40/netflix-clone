import React from 'react'
import ModalFilme from '../../components/ModalFIlme'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Secao from '../../components/Secao'

const Home = () => {
  return (
    <>
      <ModalFilme />

      <div class="container-fluid">
        <Header />
      </div>

      <Hero />

      <div id="main-content">
        <Secao />
      </div>
    </>
  )
}

export default Home
