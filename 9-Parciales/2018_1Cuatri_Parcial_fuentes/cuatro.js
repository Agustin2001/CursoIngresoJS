function mostrar()
{
    var n1;
    var n2;
    var resultado;

    n1=parseInt(prompt("El primer numero es "));
    n2=parseInt(prompt("El segundo numero es "));

    if(n1 == n2){
        alert("Los numeros son " + n1 + " y " + n2)
    }
    if(n1 > n2){
        resultado=n1-n2
        alert(resultado);
    }
    if(n1 < n2){
        resultado=n1+n2
        alert(resultado);
    }
    if(resultado > 10){
        alert("La suma es " + resultado + " y supero el 10");
    }

}
