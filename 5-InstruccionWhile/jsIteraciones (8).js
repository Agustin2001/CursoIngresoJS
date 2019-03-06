function mostrar()
{
	var contador=1;
	var numero;
	var positivos=0;
	var negativos=1;

	while(contador)
	{
		contador++;
		numero=prompt("Ingrese un numero.");

	if(numero < 0)
	{
		negativos = negativos * parseInt(numero);
	}
	if(numero > 0)
	{
		positivos = positivos + parseInt(numero);
	}

	if(numero == undefined)
	{
		alert("La operacion ha sido cancelada.");
		break;
	}
	}

	document.getElementById("suma").value=positivos;
	document.getElementById("producto").value=negativos;

}//FIN DE LA FUNCIÓN