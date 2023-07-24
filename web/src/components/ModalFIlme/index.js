import React from 'react'
import Episodio from '../Episodio'

const ModalFilme = () => {
  return (
    <div class="modal fade" id="modal-filme">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-hero">
            <div class="buttons_hero">
              <img src={require('../../assets/logo-diabo.png')} />
              <div class="col-12 modal-hero-infos">
                <button class="btn btn-lg btn-custom-white">
                  <span class="mdi mdi-play"></span>Assistir
                </button>
                <a
                  href="#"
                  class="btn-custom-round border-white btn btn-lg rounded-circle opacity-50"
                >
                  <span class="mdi mdi-thumb-up-outline text-white"></span>
                </a>
                <a
                  href="#"
                  class="btn-custom-round border-white btn btn-lg rounded-circle opacity-50"
                >
                  <span class="mdi mdi-thumb-down-outline text-white"></span>
                </a>
                <a
                  href="#"
                  class="btn-custom-round border-white btn btn-lg rounded-circle opacity-50"
                >
                  <span class="mdi mdi-plus text-white"></span>
                </a>
              </div>
            </div>
          </div>
          <div class="modal-infos">
            <div class="container">
              <div class="row">
                <div class="col-7">
                  <p class="filme_descricao">
                    Profane preachers. Corrupt Authorities. Killer Lovers. In a
                    city full of sinners, a young man seeks justice.
                  </p>
                </div>
                <div class="col-5">
                  <p class="filme_elenco">
                    Cast:
                    <text>
                      Silvio Sampaio, Juliana Righi, Omar Sampaio, Mikael Lopes.
                    </text>
                    <br />
                    <br />
                    Genres: <text>Action, adventure, dramatic.</text>
                    <br />
                    <br />
                    Scenes and moments: <text>Violent.</text>
                  </p>
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-7">
                  <h3 class="text-white">Episódios</h3>
                </div>
                <div class="col-5 text-right">
                  <select class="form-control">
                    <option>Temporada 1</option>
                    <option>Temporada 2</option>
                    <option>Temporada 3</option>
                    <option>Temporada 4</option>
                  </select>
                </div>
              </div>

              <div class="row">
                <ul id="lista_episodios">
                  <Episodio />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalFilme
