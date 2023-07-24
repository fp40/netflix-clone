import React from 'react'

const Hero = () => {
  return (
    <div id="hero" class="container-fluid">
      <div class="container">
        <div class="row" id="hero_infos">
          <div class="col-6">
            <img class="logo" src={require('../../assets/logo-diabo.png')} />
            <h1 class="text-white">
              <img src={require('../../assets/top-10.png')} />
              Top 1 de hoje no Brasil
            </h1>
            <h5 class="text-white">
              Profane preachers. Corrupt Authorities. Killer Lovers. In a city
              full of sinners, a young man seeks justice.
            </h5>
            <br />
            <button class="btn btn-lg btn-custom-white">
              <span class="mdi mdi-play"></span>Assistir
            </button>
            <button class="btn btn-lg btn-custom-translucent">
              <span class="mdi mdi-information-outline"></span>
              Mais Informações
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
