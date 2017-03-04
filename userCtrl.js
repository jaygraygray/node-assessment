const users = require('./lib/userData.json')
		tools = require('./users.js')
module.exports = {

	readAll : function() {
		return users;
	},

	findUserByID : function(id) {
		return	tools.find('id', id)
	},

	getAdmins : function() {
		return tools.find('type', 'admin')
	},

	getNonAdmins : function() {
		return tools.find('type', 'user')
	},

	getUsersByFavorite : function(fav) {
		return tools.findOne('favorites', fav)
	},

	getUsersByAgeLimit : function(age) {
		//will get all users AT THIS SPECIFIC AGE
		//take age, loop through each year. if there's a matchign age
		//push to new result
		var result = []
		for (var i = 0; i < age; i++) {
			if (tools.find('age', age)) {
				result.push(users[i])
			}
		}
		console.log(result)
		return result
	},

	findUserByQuery : function(query, value) {
		var results
		if (query === 'last_name') {
			results = tools.find('last_name', value)
		}

		if (query === 'email') {
			results = tools.find('email', value)
		}
		return results
	},

	createUser : function(userObj) {
		//console.log(tools.add(userObj))
		return tools.add(userObj)
	},

	updateUser : function(userID, obj) {
		if(this.findUserByQuery('id', userID)) {
			return tools.update(obj[key], obj[key][value], obj);
		}
	},
	removeUser : function(id) {
		tools.remove("id", id)
		//console.log(users)
		return users
	}
}