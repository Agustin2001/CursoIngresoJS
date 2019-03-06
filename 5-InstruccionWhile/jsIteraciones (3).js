function mostrar()
{

var clave 
var contador=3;


while(contador > 0)
{
    contador--;
    clave = prompt("ingrese el número clave.");

    if(clave == "utn750")
    {
        alert("La clave ingresada es correcta");
        break;
    }
    
    if(clave != "utn750")
    {
        alert("La clave ingresada es incorrecta");
    }
}


}//FIN DE LA FUNCIÓN
