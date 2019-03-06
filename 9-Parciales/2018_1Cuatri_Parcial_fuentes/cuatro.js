function mostrar()
{
    var num1 = parseInt(prompt("Ingrese el primer numero "));
    var num2 = parseInt(prompt("Ingrese el segundo numero"));
    var resultado;
    if(num1 == num2)
    {
        alert("Los numeros son " + num1 + " y " + num2);
    }

    if(num1 > num2)
    {
        resultado=(num1-num2)
        alert("La resta es " + resultado);
    }

    if(num1 < num2)
    {
        resultado=(num1+num2)
        alert("La suma es " + resultado);
    }

    if(resultado > 10)
    {
        alert("La suma es " + resultado + " y supero el 10");
    }


}
