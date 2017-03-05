const mongoose     = require('mongoose')

	  //mongoose.connect('mongodb://localhost/mangas') // importarlo como un modulo independiente por seguridad donde se tenga la url del servicio en la nube
                        //mongodb://user:pass@host:port/db
	  mongoose.connect('mongodb://pepito:123456@ds117830.mlab.com:17830/mangas')

const mangaSchema   = new mongoose.Schema({
		nombre: {
			type: String,
			//required: 'No se  permite el nombre en blanco'
			//o required: true
		}
})

module.exports = mongoose.model('manga', mangaSchema)