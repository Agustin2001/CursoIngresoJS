function mostrar()
{
	/* jose     m       25
 maria      f       16
 jesus      m       33
 fer        f        82
 1-cantidad de mujeres=2
 2-cantidad de hombres=2
 3-cantidad de menores de edad=1
 4-cantidad de mayores de edad=3
 5-la edad mas baja=16
 6-la edad mas alta=81
 7-promedio de edad de mujeres=48
 8-promedio de edad de hombres=29
 9-promedio de edad total=38
 10-nombre del mas viejo=fer
 11-nombre dek mnas joven
 12-sexo dek mnas viejo
 13-nombre de kla mujer mas vieja*/
function mostrar()
{
	var nombre;
	var sexo;
	var nota;
	var contador;
	var sumaDeNotas=0;
	var cantidadDeHombresAprobados=0;
	var notaMinima=10;
	var sexoNotaMinima;

	for (contador=0;contador<5;contador++)
	{

		nombre=prompt("ingrese nombre");
		sexo=prompt("ingrese sexo");
		

		while(sexo!="m"&&sexo!="f")
		{
			sexo=prompt("ingrese sexo");
		}
		
		nota=prompt("ingrese nota");
		nota=parseInt(nota);

		while(isNaN(nota)||nota<0||nota>10)
		{
			nota=prompt("ingrese nota");
			nota=parseInt(nota);
		}
		

		sumaDeNotas=nota+sumaDeNotas;

		if (sexo=="m"&&nota>=6)
		{
			cantidadDeHombresAprobados++;
		}
		if (nota<notaMinima)
		{
			notaMinima=nota;
			sexoNotaMinima=sexo;
		}






	}

		alert("el promedio es "+ (sumaDeNotas/5));
		alert("la nota mas baja es "+notaMinima+"su sexo es "+sexoNotaMinima);
		alert("la cantidad de hombres aprobados son "+cantidadDeHombresAprobados);
}
}
