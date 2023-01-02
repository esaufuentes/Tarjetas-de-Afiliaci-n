const tarjeta = document.querySelector('#tarjeta'),
	  btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
	  formulario = document.querySelector('#formulario-tarjeta'),
	  numeroTarjeta = document.querySelector('#tarjeta .numero'),
	  nombreTarjeta = document.querySelector('#tarjeta .nombre'),
	  telefonoTarjeta = document.querySelector('#tarjeta .tel'),
	  estadoCivil = document.querySelector('#tarjeta .estadoc'),
	  DireccionTarjeta = document.querySelector('#tarjeta .dir'),
	  NacionalidadTarjeta = document.querySelector('#tarjeta .nacionalidad'),
	  OcupacionTarjeta = document.querySelector('#tarjeta .ocupacion'),
	  EdadTarjeta = document.querySelector('#tarjeta .edad'),
	  GradoTarjeta = document.querySelector('#tarjeta .gradoe'),

	  logoMarca = document.querySelector('#logo-marca'),
	  firma = document.querySelector('#tarjeta .firma p'),
	  mesExpiracion = document.querySelector('#tarjeta .mes'),
	  yearExpiracion = document.querySelector('#tarjeta .year'),
	
	  ccv = document.querySelector('#tarjeta .ccv');


// * Volteamos la tarjeta para mostrar el frente.
const mostrarFrente = () => {
	if(tarjeta.classList.contains('active')){
		tarjeta.classList.remove('active');
	}
}

// * Rotacion de la tarjeta
tarjeta.addEventListener('click', () => {
	tarjeta.classList.toggle('active');
});

// * Boton de abrir formulario
btnAbrirFormulario.addEventListener('click', () => {
	btnAbrirFormulario.classList.toggle('active');
	formulario.classList.toggle('active');
});

// * Select del mes generado dinamicamente.
for(let i = 1; i <= 12; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectMes.appendChild(opcion);
}
// * Select año
for(let i = 1; i <= 120; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectEdad.appendChild(opcion);
}





// * Select del año generado dinamicamente.
const yearActual = new Date().getFullYear();
for(let i = yearActual; i <= yearActual + 8; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectYear.appendChild(opcion);
}

// * Input numero de tarjeta
formulario.inputNumero.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputNumero.value = valorInput
	// Eliminamos espacios en blanco
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '')
	// Ponemos espacio cada cuatro numeros
	.replace(/([0-9]{4})/g, '$1 ')
	// Elimina el ultimo espaciado
	.trim();

	numeroTarjeta.textContent = valorInput;

	if(valorInput == ''){
		numeroTarjeta.textContent = '#### #### #### ####';

		logoMarca.innerHTML = '';
	}


	// Volteamos la tarjeta para que el usuario vea el frente.
	mostrarFrente();
});



// * Input numero telefono
formulario.inputTel.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputTel.value = valorInput
		// Eliminamos espacios en blanco
		.replace(/\s/g, '')
		// Eliminar las letras
		.replace(/\D/g, '')
		// Ponemos espacio cada cuatro numeros
		.replace(/([0-4]{2})/g, '$1 ')
		// Elimina el ultimo espaciado
		.trim();

	telefonoTarjeta.textContent = valorInput;

	if (valorInput == '') {
		telefonoTarjeta.textContent = '## #### ####';

		logoMarca.innerHTML = '';
	}

	// Volteamos la tarjeta para que el usuario vea el frente.
	mostrarFrente();
});

// * Input nombre de tarjeta
formulario.inputNombre.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
	nombreTarjeta.textContent = valorInput;
	firma.textContent = valorInput;

	if(valorInput == ''){
		nombreTarjeta.textContent = 'Esau Fuentes Diego';
	}

	mostrarFrente();
});

// * Input NSS
formulario.inputEstadoc.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputEstadoc.value = valorInput.replace(/[0-9]/g, '');
	estadoCivil.textContent = valorInput;
	firma.textContent = valorInput;

	if (valorInput == '') {
		estadoCivil.textContent = 'SOLTERO';
	}

	mostrarFrente();
});
// * Input Direccion
formulario.inputDir.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputDir.value = valorInput.replace();
	DireccionTarjeta.textContent = valorInput;
	firma.textContent = valorInput;

	if(valorInput == ''){
		DireccionTarjeta.textContent = 'REGION SIN NUMERO NUMERO 13 MZ 18';
	}

	mostrarFrente();
});

// * Input OCUPACIÓN
formulario.inputOcupacion.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputOcupacion.value = valorInput.replace();
	OcupacionTarjeta.textContent = valorInput;
	firma.textContent = valorInput;

	if(valorInput == ''){
		OcupacionTarjeta.textContent = 'ESTUDIANTE';
	}

	mostrarFrente();
});



// * Input Nacionalidad
formulario.inputNacionalidad.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputNacionalidad.value = valorInput.replace(/[0-9]/g, '');
	NacionalidadTarjeta.textContent = valorInput;
	firma.textContent = valorInput;

	if(valorInput == ''){
		NacionalidadTarjeta.textContent = 'REGION SIN NUMERO NUMERO 13 MZ 18';
	}

	mostrarFrente();



});








// * Input numero Edad
formulario.inputEdad.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputEdad.value = valorInput
		// Eliminamos espacios en blanco
		.replace(/\s/g, '')
		// Eliminar las letras
		.replace(/\D/g, '')
		// Ponemos espacio cada cuatro numeros
		.replace(/([0-3]{3})/g, '$1 ')
		// Elimina el ultimo espaciado
		.trim();

		EdadTarjeta.textContent = valorInput;

	if (valorInput == '') {
		EdadTarjeta.textContent = '###';

		logoMarca.innerHTML = '';
	}

	// Volteamos la tarjeta para que el usuario vea el frente.
	mostrarFrente();


});

// * Input Grado de estudios
formulario.inputGradoe.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputGradoe.value = valorInput.replace();
	GradoTarjeta.textContent = valorInput;
	firma.textContent = valorInput;

	if(valorInput == ''){
		GradoTarjeta.textContent = 'LIC. EN GASTRONIMIA';
	}

	mostrarFrente();



});




// * Select edad
formulario.selectEdad.addEventListener('change', (e) => {
	EdadTarjeta.textContent = e.target.value;
	mostrarFrente();
});


// * Select mes
formulario.selectMes.addEventListener('change', (e) => {
	mesExpiracion.textContent = e.target.value;
	mostrarFrente();
});

// * Select Año
formulario.selectYear.addEventListener('change', (e) => {
	yearExpiracion.textContent = e.target.value.slice(2);
	mostrarFrente();
});

