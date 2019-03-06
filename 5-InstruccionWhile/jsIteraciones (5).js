function mostrar()
{

var sexo;

sexo = prompt("Ingrese 'f' (femenino) o 'm' (masculino). ");

while(sexo)
{
    if(sexo != "f" && sexo != "m")
    {
        document.getElementById('Sexo').value="El sexo ingresado es incorrecto.";
        break;
    }
    if(sexo == "m")
    {
        document.getElementById('Sexo').value="Masculino"
        break;
    }
    if(sexo == "f")
    {
        document.getElementById('Sexo').value="Femenino"
        break;
    }
}

}//FIN DE LA FUNCIÓN