const contenedorMedio = document.getElementById("medio");
const divExtra = document.getElementById("extra");

function openFile(event) {
    var input = event.target;
    var reader = new FileReader();

  
    reader.readAsText(input.files[0]);

    reader.onload = function(){
        var text = reader.result;
        var XMLdocument = removeWhiteSpace(text);

        getDocumentXML(XMLdocument);
    };

};


function getDocumentXML(xmlDocument){
	var parser = new DOMParser();
	var xmlDOM = parser.parseFromString(xmlDocument, "text/xml");
	addContenido(xmlDOM);
}

function addContenido(xmlDoc){

	

		var listaTweets = xmlDoc.getElementsByTagName("tweet");

		 
		for(var tweet=0; tweet< listaTweets.length ; tweet++){
			var divElementosTweets = document.createElement("div");
			divElementosTweets.classList.add("elementosTweets");
			contenedorMedio.appendChild(divElementosTweets);


			var divUsuario = document.createElement("div");
			divUsuario.classList.add("usuario");
			divElementosTweets.appendChild(divUsuario);

			
				var imagenUsuario = document.createElement("img");
				imagenUsuario.src= listaTweets[tweet].childNodes[0].firstChild.nodeValue;
				imagenUsuario.classList.add("imagenIcono");
				divUsuario.appendChild(imagenUsuario);

				var nombreUsuario = document.createElement("h3");
				nombreUsuario.innerText = listaTweets[tweet].childNodes[1].firstChild.nodeValue;
				divUsuario.appendChild(nombreUsuario);

				var correoUsuario = document.createElement("h4");
				correoUsuario.innerText = listaTweets[tweet].childNodes[2].firstChild.nodeValue;
				divUsuario.appendChild(correoUsuario);
			

			var textoTweet = document.createElement("p");
			textoTweet.innerText = listaTweets[tweet].childNodes[3].firstChild.nodeValue;
			divElementosTweets.appendChild(textoTweet);

			var imagenTweet = document.createElement("img");
			imagenTweet.src = listaTweets[tweet].childNodes[4].firstChild.nodeValue;
			imagenTweet.classList.add("imagenTweet");
			
			divElementosTweets.appendChild(imagenTweet);



			
			var raya = document.createElement("hr");
			contenedorMedio.appendChild(raya);

		}

		

		var listaSugerencias = xmlDoc.getElementsByTagName("sugerencia");

	
		for(var sugerencia=0; sugerencia< listaSugerencias.length ; sugerencia++){

			var divContenedorSugerencia = document.createElement("div");
			divContenedorSugerencia.classList.add("contenedorSugerencia");
			divExtra.appendChild(divContenedorSugerencia);

			var imagenSugerencia = document.createElement("img");
			imagenSugerencia.src = listaSugerencias[sugerencia].childNodes[0].firstChild.nodeValue;
			imagenSugerencia.classList.add("imagenIcono");
			divContenedorSugerencia.appendChild(imagenSugerencia);


			var divH3 = document.createElement("div");
			divContenedorSugerencia.appendChild(divH3);
			var nombreH3 = document.createElement("h3");
			nombreH3.innerText = listaSugerencias[sugerencia].childNodes[1].firstChild.nodeValue;
			divH3.appendChild(nombreH3);

			var divP = document.createElement("div");
			divContenedorSugerencia.appendChild(divP);
			var correoSugerencia = document.createElement("p");
			correoSugerencia.innerText = listaSugerencias[sugerencia].childNodes[2].firstChild.nodeValue;
			divP.appendChild(correoSugerencia);

			var botonSeguir = document.createElement("button");
			botonSeguir.classList.add("boton");
			botonSeguir.innerText= "Seguir";
			divContenedorSugerencia.appendChild(botonSeguir);

		}


		var listaPasando = xmlDoc.getElementsByTagName("recomendacion");
		var divH2Pasando = document.createElement("div");
		var h2Pasando = document.createElement("h2");
		h2Pasando.innerText = "Qué está pasando";
		divExtra.appendChild(divH2Pasando);
		divH2Pasando.appendChild(h2Pasando);

		for(var recomendacion =0 ; recomendacion<listaPasando.length; recomendacion++){
			divContenedorSugerenciaRecomendacion = document.createElement("div");
			divContenedorSugerenciaRecomendacion.classList.add("contenedorSugerencia");
			divExtra.appendChild(divContenedorSugerenciaRecomendacion);

			var divH3Recomendacion = document.createElement("div");
			divContenedorSugerenciaRecomendacion.appendChild(divH3Recomendacion);
			var tituloH3 = document.createElement("h3");
			tituloH3.innerText = listaPasando[recomendacion].childNodes[0].firstChild.nodeValue;
			divH3Recomendacion.appendChild(tituloH3);

			var divImagenRecomendacion = document.createElement("div");
			divContenedorSugerenciaRecomendacion.appendChild(divImagenRecomendacion);
			var imagenRecomendacion = document.createElement("img");
			imagenRecomendacion.src = listaPasando[recomendacion].childNodes[1].firstChild.nodeValue;
			imagenRecomendacion.classList.add("imagenPasando");
			divImagenRecomendacion.appendChild(imagenRecomendacion);



		}


	

}



function removeWhiteSpace(xmlDoc){
	xmlDoc = xmlDoc.replace(/>\s*/g, '>');  
	xmlDoc = xmlDoc.replace(/\s*</g, '<');  
	return xmlDoc;
}



