var express = require('express');
var app = express();
var PORT = 3000;
var todos = [{
	id: 1,
	description: 'Meet mom for lunch',
	completed: false
},{
	id: 2,
	description:'Go to market',
	completed:false
},{
	id:3,
	description:'Sleep',
	completed:true
}]

app.get('/', function (req, res){
	res.send('Todo API Root');
});

app.get('/todos', function (req, res) {
	res.json(todos); //send json from object
})

app.get('/todos/:id', function (req, res) {
	var todoId = parseInt(req.params.id, 10); //ini berupa string
	var todoObject;

	todos.forEach(function (todo){
		if (todo.id === todoId) {
			todoObject = todo;
		}
	});

	if (typeof todoObject === 'undefined') {
		res.status(404).send();
	}else{
		res.json(todoObject);
	}

	res.send('Asking for todo with id of '+ req.params.id)
})

app.listen(PORT, function () {
	console.log('express listening on port : '+PORT);
});