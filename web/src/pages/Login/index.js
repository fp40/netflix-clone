import React from 'react'
import Header from '../../components/Header'

const Login = () => {
  return (
    <div
      id="bg_filmes"
      class="container-fluid"
      style={{
        position: 'fixed',
        height: '100%',
      }}
    >
      <Header />
      <div id="login_box">
        <h1 class="text-white">Entrar</h1>
        <br />
        <form>
          <input
            type="email"
            class="form-control form-control-lg"
            placeholder="Email ou número de telefone"
          />
          <br />
          <input
            type="password"
            class="form-control form-control-lg"
            placeholder="Senha"
          />
          <br />
          <br />
          <button id="btn_login" class="btn btn-lg btn-block w-100">
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
        </form>
      </div>
    </div>
  )
}

export default Login
