function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var numero;

	numero=parseInt(Math.random()*10 + 1);

	alert("El numero es " + numero);

	 if(numero == 9 || numero == 10) {
        alert("EXCELENTE");
    }
    if(numero >= 4 && numero <= 8){
        alert("APROBO");
	}
	 if(numero < 4) {
        alert("Vamos, la proxima se puede");
    }

}//FIN DE LA FUNCIÓN