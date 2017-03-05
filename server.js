const   express    		= require('express')
const	bodyParser 		= require('body-parser')
const	routes 			= require('./routes/rutas')
const   cors            = require('cors')

const port = 8080;
const app  = express()

	  app.use(bodyParser.json())

	  app.use(bodyParser.urlencoded({extended: true}))

	  //app.use(cors())
	  app.use(function(req, res, next) {
		  res.header("Access-Control-Allow-Origin", "*");
		  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		  next();
	  })

	  app.use('/api', routes)

	  app.listen(port, () => console.log('El servidor está corriendo en el puerto: ' + port))

