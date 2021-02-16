
let botonEmpezar = document.getElementById("botonEmpezar");

botonEmpezar.onclick = generarAnimacion;

function generarAnimacion(){

	botonEmpezar.classList.add("oculta");

	function eliminarIcono(elemento){
	elemento.remove();
    }


   function ponerIcono(){

	const iconoBallon = document.createElement("div");

	iconoBallon.classList.add("iconoBallon");
	iconoBallon.innerHTML="🎈";

	iconoBallon.style.left = Math.random()*100 + "vw";

	document.body.appendChild(iconoBallon);

	setTimeout(eliminarIcono,5000,iconoBallon);
    }

setInterval(ponerIcono,1000);


}

