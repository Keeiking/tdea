const { argv } = require('./users');
const funciones = require('./funtions');

let comando = argv._[0]
switch(comando){
	case 'crear':
	funciones.crear(argv._[0]);
	break

	case 'mostrar':
	funciones.mostrar();
	break

	case 'mostrarUser':
	funciones.mostrarUser(argv.documento);

	case 'mostrarmat':
	funciones.mostrarmat();
	break

	default:
	console.log('No ingreso un comando existente')
}

