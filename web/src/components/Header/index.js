/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'

const Header = ({ hideMenu }) => {
  const [user, setUser] = useState({})

  const logout = () => {
    localStorage.clear()
    window.location.reload()
  }

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('@user')))
  }, [])
  return (
    <header class="row">
      <div class="col-2">
        <img src={require('../../assets/netflix-logo.png')} />
      </div>
      {!hideMenu && (
        <div class="col-8">
          <ul class="menu_list">
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="#">Séries</a>
            </li>
            <li>
              <a href="#">Fimes</a>
            </li>
            <li>
              <a href="#">Mais Recentes</a>
            </li>
            <li>
              <a href="#">Minha Lista</a>
            </li>
          </ul>
        </div>
      )}
      <div className="col-2 text-end">
        <a
          onClick={logout}
          className="pointer text-white text-decoration-none "
        >
          Olá, {user?.nome}. Sair
        </a>
      </div>
    </header>
  )
}

export default Header
