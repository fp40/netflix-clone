import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'

const Rotas = () => {
  const logado = localStorage.getItem('@user')

  return (
    <BrowserRouter>
      <Routes>
        {!logado && <Route path="/" element={<Login />} />}
        {logado && <Route path="/" element={<Home />} />}
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas
