function mostrar()
{

	var contador=1;
	var numax=0;
	var numen;
	var numero=0;
	var numeros=0;

	while(contador)
	{


		contador++;
		numero = prompt("Ingrese un numero");

		if(contador == 2)
		{
			numen = numero;
		}

		if(numero > numax)
		{
			numax = numero;
		}
		
		if(numero < numen)
		{
			numen = numero;
		}

		if(numero == undefined)
		{
			alert("La operacion ha sido cancelada.");
			break;
		}
		
	document.getElementById("maximo").value=numax;
	document.getElementById("minimo").value=numen;
	}
}




//FIN DE LA FUNCIÓN