// esta parter es para condicionales
var anio,edad;
anio=parseInt(prompt("ingrese su año de nacimiento"));
edad=2024-anio;
if(edad>=18){
    alert("Su edad es: "+ edad+" es mayor de eadad");
}
else{
    alert("Su edad es: "+ edad+" es menor de edad");
}
// este parte es para hacer una multiple condicional 
var dia;
dia=parseInt(prompt("ingrese el dia entre 1 y 7"));

switch(dia)
{
    case 1: alert("lunes");break;
    case 2: alert("martes");break;
    case 3: alert("miercoles");break;
    case 4: alert("jueves");break;
    case 5: alert("viernes");break;
    case 6: alert("sabado");break;
    case 7: alert("domingo");break;
    default: alert("fuera de rango");
}
