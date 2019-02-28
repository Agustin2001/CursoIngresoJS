function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");

	document.getElementById("Numero").value=numero;

	while(numero > 0 && numero < 10){
		alert("El numero es " + numero);
	}

}//FIN DE LA FUNCIÓN