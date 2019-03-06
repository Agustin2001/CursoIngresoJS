function mostrar()
{
	var numero;
	var contador=1;
	var negativos=0;
	var positivos=0;
	var pares=0;
	var contador_negativo=0;
	var contador_positivo=0;
	var contador_ceros=0;

	while(contador)
	{
		contador++;
		numero = prompt("Ingrese un numero");

		if(numero == undefined)
		{
			alert("Ha cancelado la operacion.");
			break;
		}

		if(numero < 0)
		{
			negativos = negativos + parseInt(numero);
			contador_negativo++;
		}

		if(numero > 0)
		{
			positivos = positivos + + parseInt(numero);
			contador_positivo++;
		}
		if(numero == 0)
		{
			contador_ceros++;
		}
		
		if(numero%2 == 0 && numero > 0)
		{
			pares = pares + parseInt(numero);
		}



	}


	alert("La suma de los numeros negativos es " + negativos);
	alert("La suma de los numeros positivos es " + positivos);
	alert("La suma de los numeros pares es " + pares);
	alert("La diferencia entre positivos y negativos es de " + (negativos + positivos));
	alert("La cantidad de numeros negativos es de " + contador_negativo);
	alert("La cantidad de numeros positivos es de " + contador_positivo);
	alert("El promedio de los numeros positivos es de " + positivos/contador_positivo);
	alert("El promedio de los numeros negativos es de " + negativos/contador_negativo);
	alert("La cantidad de los 0 ingresados es de " + contador_ceros);




}//FIN DE LA FUNCIÓN