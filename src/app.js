const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser')
require('./helpers');
 
const directoriopublico = path.join(__dirname, '../public');
const directoriopartials = path.join(__dirname, '../partials');

app.use(express.static(directoriopublico));
hbs.registerPartials(directoriopartials);
app.use(bodyParser.urlencoded({ extended: false }));

app.set ('view engine', 'hbs');

app.get('/', (req, res) =>{
	res.render('index');
});

app.get('/create', (req, res) =>{
	res.render('create')
});


app.post('/show', (req, res) =>{

	res.render('show', cursos ={
		id: parseInt(req.body.id),
		nombre: req.body.nombre,
		modalidad: req.body.modalidad,
		descripcion:req.body.descripcion,
		valor: parseInt(req.body.valor),
		intensidad: parseInt(req.body.intensidad),
		estado: req.body.estado 
	});
});

app.get('/inscribir', (req, res) =>{
	res.render('inscribir')
});

app.post('/validacion', (req, res) =>{
	res.render('validacion', inscritoo ={
		documento: req.body.documento,
		nombre: req.body.nombre,
		curso: req.body.curso,
		email:req.body.email,
		telefono: req.body.telefono
	});
	console.log(req.body.documento)
});

app.get('/show-interesado', (req, res) =>{
	res.render('show-interesado')
});

app.get('/inscritosCursos', (req, res) =>{
	res.render('inscritosCursos')
});

app.post('/respuesta', (req, res) =>{
	res.render('respuesta',{
		curso : req.body.curso
	})
});

app.get('eliminar', (req, res) =>{
	res.render('respuesta',{
		curso : req.body.curso
	})
});


 
app.listen(3000, () => {
	console.log('Escuchando en el puerto 3000')
})
