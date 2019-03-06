function mostrar()
{
    var precio;
    var porcentaje;
    var final;

    precio = parseInt(prompt("Ingrese el monto"));
    porcentaje = parseInt(prompt("Ingrese el porcentaje de descuento."));


    final = precio - (precio*porcentaje/100);

    document.getElementById("elPrecioFinal").value = final
}
