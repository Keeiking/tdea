listaUsers = [];

const crear = (user) =>{
	listar();
	let us = {
		cedula: us.documento,
		nombre: us.nombre,
		apellidos: us.apellidos,
		email: us.email,
		telefono: us.telefono	
	};
	let duplicado = listaUsers.find(cc => cc.documento == user.cedula)
		if(!duplicado){
			listaUsers.push(us);
			console.log(listaUsers);
			guardar();	
		}else
			console.log('Ya existe otro usuario con ese documento');
		
}

const listar = () => {
	try{
		listaUsers = require('./listaUsers.js');
	} catch (error){
		listaUsers= [];
	}
		
}

const guardar = () => {
	let datos = JSON.stringify(listaUsers); 
	fs.writeFile('listaUsers.json', datos , (err) =>{
		if (err) throw (err);
			console.log('Archivo creado con éxito');
	})
}

const mostrar = () =>{
	listar()

	console.log('lista de usuarios')
	listaUsers.forEach(user => {
		console.log('cedula '+ user.cedula)
		console.log('nombre '+ user.nombre)
		console.log('apellidos ' + user.apellidos)
		console.log('email '+ user.email)
		console.log('telefono ' +user.telefono)
	})
}

const mostrarUser = (cedula) =>{
	listar()

		let us = listaUsers.find(user => user.documento == cedula)
		if(!us){
			console.log('No existe un user asociado a esta cedula')

		}else
			console.log('cedula '+ us.cedula)
			console.log('nombre '+ us.nombre)
			console.log('apellidos ' + us.apellidos)
			console.log('email '+ us.email)
			console.log('telefono ' +us.telefono)
		
}

const mostrarmat = () =>{
	listar()

		let gana = listaUsers.filter(mat => mat.matematicas >= 3)
		if(gana.length == 0){
			console.log('No gano nadie')
		}

		else
			gana.forEach(user => {
				console.log('cedula '+ user.cedula)
				console.log('nombre '+ user.nombre)
				console.log('apellidos ' + user.apellidos)
				console.log('email '+ user.email)
				console.log('telefono ' +user.telefono)
			})
}

module.exports{
	crear, 
	mostrar,
	mostrarUser,
	mostrarmat
}
