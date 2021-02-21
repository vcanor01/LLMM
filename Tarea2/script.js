
const button = document.getElementById("button");

	const nombre = document.getElementById("nombre");
	const apellidos = document.getElementById("apellidos");
	const dni = document.getElementById("dni");
	const estado = document.getElementById("estado");
	const hobbys = document.getElementsByName("hobby"); 
	const nacimiento = document.getElementById("nacimiento");
	const condiciones = document.getElementById("condiciones");
	const resultado = document.getElementById("resultado");

	let hobbyElegido= "";
	let eleccionCondiciones= "No";


button.onclick = mostrarTexto;

let miArray = [];

function mostrarArrayPorConsola(elemento){

		miArray.push(elemento.value);

	    console.log(miArray);
}


function mostrarTexto(){
	//let miArray = new Array();

	resultado.classList.remove("oculta") ;

	for (var i = 0, length = hobbys.length; i < length; i++){
		if(hobbys[i].checked){
			hobbyElegido= hobbys[i];
			break;
		}
	}

	if(condiciones.checked){
		eleccionCondiciones = "Si";
	}

	resultado.value = 
	"Nombre: " + nombre.value +
	", Apellidos: " + apellidos.value +
	", DNI: " + dni.value + 
	", Estado actual: " + estado.value +
	", Fecha de nacimiento: " + nacimiento.value+
	", Hobby: " + hobbyElegido.value +
	" ¿Condiciones aceptadas? "+ eleccionCondiciones;

	mostrarArrayPorConsola(resultado);


	return false;

}
    



