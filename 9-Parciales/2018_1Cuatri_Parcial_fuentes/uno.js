
function mostrar()
{
    var ancho;
    var largo;
    var perimetro;

    ancho = parseInt(prompt("Ingrese el ancho de un rectangulo."));
    largo = parseInt(prompt("Ingrese el largo de un rectangulo."));

    perimetro = ancho + ancho + largo + largo;

    alert("El perimetro del rectangulo es de " + perimetro);
}
