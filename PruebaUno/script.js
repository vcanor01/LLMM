const contenedorNoticia = document.getElementById("contenedor");


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
	addNoticias(xmlDOM);
}


function addNoticias(xmlDoc){

		var listaNoticias = xmlDoc.getElementsByTagName("noticia");

		for (var noticia = 0; noticia < listaNoticias.length; noticia++) {


			var Noticias = document.createElement("div");
			Noticias.classList.add("noticia");



			var titulo = document.createElement("h1");

			titulo.innerHTML = listaNoticias[noticia].childNodes[0].firstChild.nodeValue;
			Noticias.appendChild(titulo);


			var texto = document.createElement("p");
			texto.innerHTML =  listaNoticias[noticia].childNodes[2].firstChild.nodeValue;
			Noticias.appendChild(texto);

			var img = document.createElement("img");
			img.src = listaNoticias[noticia].childNodes[3].firstChild.nodeValue;
			Noticias.appendChild(img);

			var fecha = document.createElement("p");
			fecha.innerHTML = listaNoticias[noticia].childNodes[1].firstChild.nodeValue;
			Noticias.appendChild(fecha);



			contenedorNoticia.appendChild(Noticias);

		}
}


function removeWhiteSpace(xmlDoc){
	xmlDoc = xmlDoc.replace(/>\s*/g, '>');  // Reemplaza el signo y todos los espacios en blanco a continuación "> " por ">" 
	xmlDoc = xmlDoc.replace(/\s*</g, '<');  // Reemplaza lo mismo pero con el otro signo "< " por "<"
	return xmlDoc;
}