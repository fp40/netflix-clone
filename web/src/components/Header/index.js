import React from 'react'

const Header = () => {
  return (
    <header class="row">
      <div class="col-2">
        <img src={require('../../assets/netflix-logo.png')} />
      </div>
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
    </header>
  )
}

export default Header
