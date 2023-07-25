import React, { useState } from 'react'
import Header from '../../components/Header'

import api from '../../services/api'

const Login = () => {
  const [credenciais, setCredenciais] = useState({
    email: '',
    senha: '',
  })

  const login = async () => {
    try {
      const response = await api.post('/usuario/login', credenciais)
      const res = response.data

      if (res.error) {
        alert(res.message)
        return false
      }

      localStorage.setItem('@user', JSON.stringify(res.usuario))
      window.location.reload()
    } catch (err) {
      alert(err.message)
    }
  }
  return (
    <div
      id="bg_filmes"
      class="container-fluid"
      style={{
        position: 'fixed',
        height: '100%',
      }}
    >
      <Header hideMenu />
      <div id="login_box">
        <h1 class="text-white">Entrar</h1>
        <br />
        <>
          <input
            type="email"
            class="form-control form-control-lg"
            placeholder="Email ou número de telefone"
            onChange={(e) => {
              setCredenciais({
                ...credenciais,
                email: e.target.value,
              })
            }}
          />
          <br />
          <input
            type="password"
            class="form-control form-control-lg"
            placeholder="Senha"
            onChange={(e) => {
              setCredenciais({
                ...credenciais,
                senha: e.target.value,
              })
            }}
          />
          <br />
          <br />
          <button id="btn_login" onClick={login} class="btn btn-lg w-100">
            Entrar
          </button>
          <div class="row mt-4">
            <div class="col">
              <input type="checkbox" /> Lembrar de mim.
            </div>
            <div class="col d-flex justify-content-end">
              <a href="#">Precisa de ajuda?</a>
            </div>
          </div>
          <br />
          <div class="row mt-4">
            <div class="col">
              <p id="text_sign">
                Novo na Netflix? <a href="#">Registre-se agora.</a>
              </p>
            </div>
          </div>
        </>
      </div>
    </div>
  )
}

export default Login
