function mostrar()
{
   var precio;
   var descuento;
   var final;

   precio=parseInt(prompt("El precio es: "));
   descuento=parseInt(prompt("El descuento es de "));

   final=precio - (precio*descuento/100);

   document.getElementById("elPrecioFinal").value=final;

}
