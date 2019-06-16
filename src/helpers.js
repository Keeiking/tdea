const hbs = require('hbs');

hbs.registerHelper('listar', () =>{
	listaUser = require('./archivo.json')
	let texto = 'Lista users';

	listaUser.forEach(user =>{
		texto = texto + 
				"Cedula " + user.documento + '/n' +
				"Nombre " + user.nombre + '/n'
	})
	return texto;

})