function mostrar()
{

var sexo = prompt("ingrese f ó m .");

document.getElementById('Sexo').value="femenino"
document.getElementById('Sexo').value="masculino"


while(sexo == 'f'){
document.getElementById('Sexo').value="femenino";
}
while(sexo == 'm'){
    document.getElementById('Sexo').value="masculino";
}
}//FIN DE LA FUNCIÓN