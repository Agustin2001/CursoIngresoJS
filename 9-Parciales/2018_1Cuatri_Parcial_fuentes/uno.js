
function mostrar()
{
    var ancho;
    var largo;
    var perimetro;

    ancho=prompt("Ancho del rectangulo");
    largo=prompt("Largo del rectangulo");

    ancho=parseInt(ancho);
    largo=parseInt(largo);

    perimetro=(largo + largo + ancho + ancho);

    alert("El perimetro es: "+perimetro);
}
