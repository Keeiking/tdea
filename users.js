const documento ={
	demand: true,
	alias : 'd'
}

const nombre ={
	demand: true,
	alias: 'n'
}

const apellidos = {
	demand: true,
	alias : 'a'
}

const email = {
	demand : true,
	alias : 'e'
}

const telefono = {
	demand : true,
	alias : 't'
}

usuario = {
	documento,
	nombre,
	apellidos,
	email,
	telefono,
}

const argv = require ('yargs')
			.command('crear', 'Crear un usuario', usuario)
			.command('mostrra', 'muestra la lista de users')
			.argv;

module.exports = {
	argv
};
