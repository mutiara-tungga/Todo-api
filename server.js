var express = require('express');
var bodyParser = require('body-parser'); //digunakan untuk mengambil data yang banyak(data json) dari body yang di request (contohnya adalah yang digunakan di method POST)
var _ = require('underscore'); //dapat digunakan di array dan ... (undescorejs.org)

var app = express();
var PORT = 3000;
var todos = [];
var todoNextId = 1;

app.use(bodyParser.json());

// var todos = [{
// 	id: 1,
// 	description: 'Meet mom for lunch',
// 	completed: false
// },{
// 	id: 2,
// 	description:'Go to market',
// 	completed:false
// },{
// 	id:3,
// 	description:'Sleep',
// 	completed:true
// }]

app.get('/', function (req, res){
	res.send('Todo API Root');
});

app.get('/todos', function (req, res) {
	res.json(todos); //send json from object
})

app.get('/todos/:id', function (req, res) {
	var todoId = parseInt(req.params.id, 10); //ini berupa string
	// var todoObject;

	// todos.forEach(function (todo){
	// 	if (todo.id === todoId) {
	// 		todoObject = todo;
	// 	}
	// });
	/////kode di atas dapat di ringkas dengan modul underscore seperti di bawah ini
	var todoObject = _.findWhere(todos, {id: todoId});

	if (typeof todoObject === 'undefined') {
		res.status(404).send();
	}else{
		res.json(todoObject);
	}

	res.send ('Asking for todo with id of '+ req.params.id)
})

app.post ('/todos', function (req, res) {
	var body = _.pick(req.body, 'description', 'completed');
	//trim digunakan untuk menghilangkan spasi dari kata (di depan dan belakang kata) jika di tengah tidak akan hilang
	if(! _.isBoolean(body.completed) || !_.isString(body.description) || body.description.trim().length === 0){
		return res.status(400).send(); //400 digunakan untuk jika ada request yang tidak dapat diselesaikan
	}

	body.description = body.description.trim();
	body.id = todoNextId++;

	todos.push(body);

	res.json(body);
});

//DELETE /todos/:id
app.delete('/todos/:id', function (req, res){
    var todoId = parseInt(req.params.id, 10);
	var matchedTodo = _.findWhere(todos, {id: todoId});
	
	if (!matchedTodo){
		res.status(404).json({"error": "no todo found with id"});
	}else {
	    todos = _.without(todos, matchedTodo);
		res.json(matchedTodo);
	}
});

app.listen(PORT, function () {
	console.log('express listening on port : '+PORT);
});