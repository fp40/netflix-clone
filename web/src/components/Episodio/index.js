import React from 'react'

const Episodio = () => {
  return (
    <li>
      <div class="row">
        <div class="col-1 my-auto text-center">
          <h3 class="text-white">1</h3>
        </div>
        <div class="col-4">
          <img
            class="img-fluid"
            src={require('../../assets/diabo-nosso-de-cada-dia-capa.jpg')}
          />
        </div>
        <div class="col-7">
          <h6 class="text-white">Nome do episódio</h6>
          <p>
            Profane preachers. Corrupt Authorities. Killer Lovers. In a city
            full of sinners, a young man seeks justice.
          </p>
        </div>
      </div>
    </li>
  )
}

export default Episodio
