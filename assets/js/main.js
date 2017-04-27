var encontrados = document.getElementById("imprimir");
		var clases = document.getElementsByClassName("mensaje");
		encontrados.innerHTML= "</br>La respuesta es: son <strong>" + clases.length + "</strong> class= "mensaje en el documento!";

		function mostrarResultados(){
			var mens1="Es muy poco";
			var mens2="No está mal";
			var mens3="son muchos!";

			if (clases.length == 1){
				document.write("Mensaje: " + mens1);
			}
				else if (clases.length > 2 && clases.length < 4){
					document.write("Mensaje: " + mens2);
					}
			else {
				document.write("Mensaje: " + mens3);
			}
			
		}
		mostrarResultados();