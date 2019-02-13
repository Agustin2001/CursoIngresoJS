function mostrar()
{
    var precio;
    var porcentaje;

    precio=prompt("Precio: ");
    porcentaje=prompt("Porcentaje de descuento");
    
   document.getElementById("elPrecioFinal").value = precio - (precio*porcentaje/100);
}
