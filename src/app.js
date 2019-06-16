const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
require('./helpers');
 
const directoriopublico = path.join(__dirname, '../public');
const directoriopartials = path.join(__dirname, '../partials');

app.use(express.static(directoriopublico));
hbs.registerPartials(directoriopartials);

app.set ('view engine', 'hbs');

app.get('/', (req, res) =>{
	res.render('index');
});

app.get('/create', (req, res) =>{
	res.render('create')
});

app.get('/inscribir', (req, res) =>{
	res.render('inscribir')
});

 
app.listen(3000, () => {
	console.log('Escuchando en el puerto 3000')
})
