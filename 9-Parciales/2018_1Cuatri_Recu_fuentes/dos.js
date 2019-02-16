function mostrar()
{
  var compra;
  var resultado;
  var resultadoiva;

  compra = prompt("Su compra es de: ");

  compra = parseInt(compra);
  resultado = parseInt(resultado);
  resultadoiva = parseInt(resultadoiva);

  resultado = (compra - (compra *10/100)); 
  resultadoiva = (resultado +( resultado * 21/100));

  alert("Tu compra es de " + compra + " tenes un descuento del 10% queda en " + resultado + " mas el iva es " + resultadoiva);

}
