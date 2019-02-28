function mostrar()
{

	var n1;
	var n2;
	var n3;
	var n4;
	var n5;
	var contador=0;
	var acumulador;


	n1=parseInt(prompt("Numero 1 "));
	n2=parseInt(prompt("Numero 2 "));
	n3=parseInt(prompt("Numero 3 "));
	n4=parseInt(prompt("Numero 4 "));
	n5=parseInt(prompt("Numero 5 "));

	acumulador=(n1+n2+n3+n4+n5);

	promedio=(n1+n2+n3+n4+n5)/5

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN