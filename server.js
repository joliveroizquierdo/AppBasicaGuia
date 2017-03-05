const   express    		= require('express')
const	bodyParser 		= require('body-parser')
const	routes 			= require('./routes/rutas')
const   cors            = require('cors')

const port = 8080;
const app  = express()

	  app.use(bodyParser.json())

	  app.use(bodyParser.urlencoded({extended: true}))

	  app.use(cors())

	  //app.use(cors({origin: 'http://localhost:8080'}));

	  app.get('/', function (req, res, next) {
		  res.json({msg: 'This is CORS-enabled for all origins!'})
	  })

	  app.use('/api', routes)

	  app.listen(port, () => console.log('El servidor está corriendo en el puerto: ' + port))

