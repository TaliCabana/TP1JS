/*Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: 
input: 20
input: 210
Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3, por 5 y por 7.
*/

const numero = parseInt(prompt("Ingresá un número:"));
if (
  numero % 2 === 0 &&
  numero % 3 === 0 &&
  numero % 5 === 0 &&
  numero % 7 === 0
) {
  document.writeln(`El número indicado ${numero} es divisible en 2, 3, 5 y 7`);
} else if (numero % 2 === 0 && numero % 3 === 0 && numero % 5 === 0) {
  document.writeln(`El número indicado ${numero} es divisible en 2, 3 y 5`);
} else if (numero % 2 === 0 && numero % 3 === 0 && numero % 7 === 0) {
  document.writeln(`El número indicado ${numero} es divisible en 2, 3 y 7`);
} else if (numero % 2 === 0 && numero % 5 === 0 && numero % 7 === 0) {
  document.writeln(`El número indicado ${numero} es divisible en 2, 5 y 7`);
} else if (numero % 3 === 0 && numero % 5 === 0 && numero % 7 === 0) {
  document.writeln(`El número indicado ${numero} es divisible en 3, 5 y 7`);
} else if (numero % 2 === 0 && numero % 3 === 0){
  document.writeln(`El número indicado ${numero} es divisible en 2 y 3`);
} else if (numero % 2 === 0 && numero % 5 === 0){
  document.writeln(`El número indicado ${numero} es divisible en 2 y 5`);
} else if (numero % 2 === 0 && numero % 7 === 0){
  document.writeln(`El número indicado ${numero} es divisible en 2 y 7`);
} else if (numero % 3 === 0 && numero % 5 === 0){
  document.writeln(`El número indicado ${numero} es divisible en 3 y 5`);
} else if (numero % 3 === 0 && numero % 7 === 0){
  document.writeln(`El número indicado ${numero} es divisible en 3 y 7`);
} else if (numero % 5 === 0 && numero % 7 === 0){
  document.writeln(`El número indicado ${numero} es divisible en 5 y 7`);
} else if(numero % 2 === 0){
    document.writeln(`El número elegido ${numero} es divisible en 2 ✌`)
} else if (numero % 3 === 0){
    document.writeln(`El número elegido ${numero} es divisible en 3 👌`)
}  else if (numero % 5 === 0){
    document.writeln(`El número elegido ${numero} es divisible en 5 🖐🏽`)
} else if (numero % 7 === 0){
    document.writeln(`El número elegido ${numero} es divisible en 7 🤘🏽`)
} else{
    document.writeln("El número elegido no es divisible ni en 2, ni en 3, ni en 5, ni en 7 🙅🏽‍♀️")
}

