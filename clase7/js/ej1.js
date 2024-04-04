// formas de mostrar en navegador, en conclucion para imprimir los datos ingresados
// alert("ESTE MENSAJE ES DESDE OTRO ARCHIVO");
document.write("<h1>Mensaje para el navegador</h1>");
// document.write("<h2>hahahaha</h2>");
var nom, a,b,c,s;
nom=prompt("ingrese su nombre");
document.write("<h2>hola "+nom+" </h2>");//el documen.write es para mostrar el mensaje en el navegador
a=parseInt(prompt("ingrese a"));
b=parseInt(prompt("ingrese b"));
// c=prompt("ingrese c");
s=a+b;
alert("la suma es: "+s);//el comando alert sirve para mostrar el mensaje en una ventana emergente