function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while(numero)
	{
		if(numero >= 0 && numero <= 9)
		{
			document.getElementById("Numero").value = numero;
			break;
		}
		if(numero < 0 || numero > 9)
		{
			document.getElementById("Numero").value = "El numero ingresado no es valido.";
			break;
		}
	}

}//FIN DE LA FUNCIÓN