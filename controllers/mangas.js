const mangas    = require('../models/mangas')

exports.insertarManga = (req, res) => {
		
		let manga = new mangas()

			manga.nombre = req.body.nombre

			manga.save( (err) => {

				if (err)
					res.send(err) 

				res.json({mensaje:'guardo'})
		})
		
	}

exports.listarMangas = (req, res) => {

		mangas.find((err, listado) => {

			if (err)
				res.send(err) 

			res.json(listado)
		}) 

}

exports.descripcionManga = (req, res) => {

		mangas.findById(req.params.manga_id, (err, doc) => {

			if (err)
				res.send(err) 

			res.json(doc) 
		})
}

exports.actualizarManga = (req, res) => {

		mangas.findById(req.params.manga_id, (err, doc) => {

			if (err)
				res.send(err);

			doc.nombre = req.body.nombre

			doc.save( (err) => {
				
				if (err)
					res.send(err)

				res.json({mensaje:'actualizo'})
			})

		})
	}

exports.eliminarManga = (req, res) => {

		mangas.remove({_id: req.params.manga_id}, (err) => {

				if (err)
					res.send(err)

				res.json({mensaje:'elimino'})
		})
}