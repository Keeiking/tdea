const hbs = require('hbs');
const fs = require('fs');
listaCursos = [];
listaInscritos = [];


hbs.registerHelper('crearCurso',(curso) => {
	listaCursos = require('../cursos.json');

	curso = {
		id: cursos.id,
		nombre: cursos.nombre,
		modalidad: cursos.modalidad,
		descripcion: cursos.descripcion,
		valor : cursos.valor,
		intensidad : cursos.intensidad,
		estado : cursos.estado
	}
		let duplicado = listaCursos.find(cursoo => cursoo.id == cursos.id)
		if(!duplicado){
			listaCursos.push(curso);
			let datos = JSON.stringify(listaCursos); 
	        fs.writeFile('./cursos.json', datos , (err) =>{
		    if (err) throw (err);
			   console.log('Archivo creado con éxito');
	})
		}else
			console.log('Ya existe otro usuario con ese documento');
	
})

hbs.registerHelper('mostrarDisponibles', () =>{
	listaCursos = require('../cursos.json');
	let texto;
	let abiertos =  listaCursos.filter(curso => curso.estado == 'abierto')
		if(abiertos.length == 0){
			console.log('No hay cursos disponibles')
		}
		
		else
			texto = "<div class='form-group'> \
						<label>Nombre del curso</label>\
						<select class='form-control' name='curso'>";

			abiertos.forEach(disponibles => {
				texto = texto + '<option>' + disponibles.nombre + '</option>'
			})
			texto = texto + '</select></div>'
			return texto;
})

hbs.registerHelper('mostrarTodos', () =>{
	listaCursos = require('../cursos.json');
	let texto;
			texto = "<div class='form-group'> \
						<label>Nombre del curso</label>\
						<select class='form-control' name='curso' id='curso' onchange='ShowSelected()'>";

			listaCursos.forEach(curs => {
				texto = texto + '<option>' + curs.nombre + '</option>'
			})
			texto = texto + '</select></div>'
			return texto;
})

hbs.registerHelper('listar', () =>{
	listaCursos = require('../cursos.json')

	let texto =  "<table class='table table-striped table-dark' style = 'margin-top : 20px'> \
		 <thead> \
		 <th>id</th> \
		 <th>nombre</th> \
		 <th>modalidad</th> \
		 <th>descripción</th> \
		 <th>valor</th> \
		 <th>intensidad</th> \
		 <th>estado</th> \
		 </thead> \
		 <tbody>";

	listaCursos.forEach(curso =>{

		texto= texto + 
				'<tr>' + 
				'<td>'+ curso.id + '</td>'+
				'<td>'+ curso.nombre + '</td>'+
				'<td>'+ curso.modalidad + '</td>'+
				'<td>'+ curso.descripcion + '</td>'+
				'<td>'+ curso.valor + '</td>'+
				'<td>'+ curso.intensidad + '</td>'+
				'<td>'+ curso.estado + '</td></tr>';
	})
	texto = texto +'</tbody></table>';
	return texto;

})

hbs.registerHelper('inscribirCurso',(inscrito) => {
	listaInscritos = require('../inscritos.json');

	inscrito = {
		documento: inscritoo.documento,
		nombre: inscritoo.nombre,
		curso: inscritoo.curso,
		email: inscritoo.email,
		telefono: inscritoo.telefono
	}
		let texto = '';
		let duplicado = listaInscritos.find(insc => insc.documento == inscrito.documento && insc.curso == inscrito.curso)
		if(!duplicado){
			listaInscritos.push(inscrito);
			texto = "<h2 style='color: white'>Registro exitoso</h2>"+
						"<p style='color: white'>el usurio con el documento " + inscrito.documento +" ha sido inscrito en el curso " +inscrito.curso+" exitosamente</p>"

			let datos = JSON.stringify(listaInscritos);

			fs.writeFile('./inscritos.json', datos , function (err) {
	  			if (err) throw err;
	  			console.log("archivo creado con exito");
			});
		}else
			texto =  '<h2 style="color: white">Registro Incorecto</h2>'+
						'<p style="color: white">el usurio con el documento ' + inscrito.documento +' no ha podido registrarse, debido a que ya se encuentra inscrito en este curso  ' + inscrito.curso +'</p>'


		return texto;
})


hbs.registerHelper('mostrarInteresado', () =>{
	listaCursos = require('../cursos.json')

	let texto =  "<div class='accordion' id='accordionExample' style ='margin-top: 20px'>";
	var i = 0; 

	let abiertos =  listaCursos.filter(curso => curso.estado == 'abierto')
		if(abiertos.length == 0){
			console.log('No hay cursos disponibles')
		}
		
		else

			abiertos.forEach(disponible =>{

			texto= texto +
					 '<div class="card" style="background: rgb(0, 0, 0 , 0.8)">\
					    <div class="card-header" id="heading'+i+'">\
					      <h2 class="mb-0">\
					        <button class="btn btn-link" style="color:white" type="button" data-toggle="collapse" data-target="#collapse'+i+'" aria-expanded="false" aria-controls="collapse'+i+'">\
					          '+ disponible.nombre +'\
					        </button>\
					      </h2>\
					    </div>\
\
					    <div id="collapse'+i+'" class="collapse" aria-labelledby="heading'+i+'" data-parent="#accordionExample">\
					      <div class="card-body" style="color: white; margin-left: 20px">\
					        descripción : '+ disponible.descripcion +'<br>\
					        modalidad : '+ disponible.modalidad +'<br>\
					        valor : '+ disponible.valor +'<br>\
					        intensidad : '+ disponible.intensidad +'\
					      </div>\
					    </div>\
					  </div>';

                 i = i+1;
			   
	})
	texto = texto + '</div>';
	console.log(i);
	return texto;
})


hbs.registerHelper('mostrarInscritosCurso', (curso) =>{
	listaCursos = require('../cursos.json');
	listaInscritos = require('../inscritos.json');
	let texto;

	let inscritosCurso = listaInscritos.filter(buscar=> buscar.curso == curso);
		if(!inscritosCurso){
					texto = "<h2 style='color: white'>Curso "+ curso +"</h2>"+
						"<p style='color: white'>Este curso no tiene personas inscritas</p>";
		}
		else
		texto =  "<table class='table table-hover table-dark' style = 'margin-top : 20px'> \
								 <thead> \
								 <th>Documento</th> \
								 <th>Nombre</th> \
								 <th>Email</th> \
								 <th>telefono</th> \
								 <th>eliminar</th> \
								 </thead> \
								 <tbody>";
		inscritosCurso.forEach(inscrito=>{

			texto= texto + 
					'<tr>' + 
					'<td>'+ inscrito.documento + '</td>'+
					'<td>'+ inscrito.nombre + '</td>'+
					'<td>'+ inscrito.email + '</td>'+
					'<td>'+ inscrito.telefono +'</td>'+
					'<td><a href="/repuesta" action="{{{eliminarInscrito documento}}}" class="btn btn-primary">eliminar</a></td></tr>';
		})	
	
		texto = texto +'</tbody></table>';
		return texto;
})


hbs.registerHelper('eliminarInscrito', (doc) =>{
	console.log("ejecutando function")
	listaCursos = require('../cursos.json');
	listaInscritos = require('../inscritos.json');
	let texto;
	let datos;


	let lstIncritos = listaInscritos.filter(buscar=> buscar.documento != 12);
		console.log(doc);
		if(!inscritosCurso){
					texto = "<h2 style='color: white'>Curso "+ curso +"</h2>"+
						"<p style='color: white'>Este curso no tiene personas inscritas</p>";
		}
		else
			datos = JSON.stringify(lstIncritos);

			fs.writeFile('./inscritos.json', datos , function (err) {
	  			if (err) throw err;
	  			console.log("archivo creado con exito");
			});
})