const   express    		= require('express')
const	bodyParser 		= require('body-parser')
const   cors            = require('cors')
const	routes 			= require('./routes/rutas')


const port = 8080;
const app  = express()

	  app.use(bodyParser.json())

	  app.use(bodyParser.urlencoded({extended: true}))

	  app.use(cors())

	  app.use('/api', routes)

	  app.listen(port, () => console.log('El servidor está corriendo en el puerto: ' + port))

