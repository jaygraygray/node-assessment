const 	express = require('express')
		app = express();
		port = 9090;
		userCtrl = require('./userCtrl')
		bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.get('/api/users', function(req, res) {
	if (req.query.id) {
		res.status(200).send(userCtrl.findUserByID(req.query.id))
	} 
	if (req.query.getall) {
		res.status(200).send(userCtrl.readAll())
	}
	if (req.query.age) {
		res.status(200).send(userCtrl.getUsersByAgeLimit(req.query.age))
	}

	if (req.query.lastname) {
		res.status(200).send(userCtrl.findUserByQuery('last_name', req.query.lastname))
	} 
	if (req.query.email) {
		res.status(200).send(userCtrl.findUserByQuery('email', req.query.email))
	} 

	// FAVS NOT WORKING
	if (req.query.fav) {
		//console.log(req.query.fav)
		res.status(200).send(userCtrl.getUsersByFavorite(req.query.fav))
	}
	if (req.query.deleteID) {
		//console.log(req.query.deleteID)
		res.status(200).send(userCtrl.removeUser(req.query.deleteID))
	}
})



app.get('/api/admins', function(req, res) {
	res.status(200).send(userCtrl.getAdmins())
})
app.get('/api/nonadmins', function(req, res) {
	res.status(200).send(userCtrl.getNonAdmins())
})

app.post('/api/users', function(req, res) {
	console.log(req.body)
	res.status(200).send(userCtrl.createUser(req.body))
})

//nto working yet
//app.put('/api/users', )

app.post('api/users', function(req, res) {f
	res.status(200).send(userCtrl.removeUser(req.query.id))
})



app.listen(port, function() {
	console.log("Listening on port ", port)
})