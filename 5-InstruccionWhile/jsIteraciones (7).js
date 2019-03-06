function mostrar()
{
	var contador=1;
	var numero;
	var suma=0;
	var promedio;
	
	while(contador)
	{
		contador++;
		numero = prompt("ingrese un numero.");	

		if(numero == undefined)
		{
			alert("La operacion ha sido cancelada");
			break;
		}

		suma = suma + parseInt(numero);

		document.getElementById("suma").value=suma;
		document.getElementById("promedio").value=suma/(contador-1);

	}	

}//FIN DE LA FUNCIÓN