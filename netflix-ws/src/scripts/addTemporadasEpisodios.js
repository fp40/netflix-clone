const database = require('../services/database')
const Filme = require('../models/filme')
const Temporada = require('../models/temporada')
const Episodio = require('../models/episodio')

const addTemporadasEpisodios = async () => {
  try {
    const series = await Filme.find({ tipo: 'serie' }).select('_id')
    for (let serie of series) {
      console.log(`FILME ${serie}-----`)
      const numTemporadas = Math.floor(Math.random() * 5) + 1
      for (let i = 1; i <= numTemporadas; i++) {
        console.log(`Inserindo temporada ${i} de ${numTemporadas}`)
        const temporada = await new Temporada({
          filme_id: serie,
          titulo: `Temporada ${i}`,
        }).save()

        const numEpisodios = Math.floor(Math.random() * 5) + 1
        for (let x = 1; x <= numEpisodios; x++) {
          console.log(`Inserindo episodios ${x} de ${numEpisodios}`)
          await new Episodio({
            temporada_id: temporada._id,
            titulo: `Episódios ${x}`,
            numero: x,
            descricao:
              'Vivamus sem ex, gravida eu urna a, pulvinar porta elit. Curabitur risus est, ullamcorper id lorem sit amet, hendrerit viverra libero. Cras molestie lorem quis ullamcorper interdum. Phasellus id libero elit.',
            capa: 'https://picsum.photos/300/200',
          }).save()
        }
      }
    }
    console.log('FINAL DO SCRIPT')
  } catch (err) {
    console.log(err.message)
  }
}

addTemporadasEpisodios()
