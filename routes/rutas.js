const express         = require('express')
const router          = express.Router()
const controllers     = require('../controllers/mangas')

router.route('/mangas')
	  .post(controllers.insertarManga)
	  .get(controllers.listarMangas)

router.route('/manga/:manga_id')
	  .get(controllers.descripcionManga)
	  .put(controllers.actualizarManga)
	  .delete(controllers.eliminarManga)


module.exports = router // las rutas deben estar agrupadas por modelos, es decir, estudiante, profesor, igual a como esta en las lineas superiores, preferiblemente en otro archivo 
