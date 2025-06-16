/* Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 
input: 15 , 3
Output: El 15 es el número más grande
*/

let numero1 = parseInt(prompt("Escribí el primer número:"));
let numero2 = parseInt(prompt("Escribí el segundo número:"));

if (numero1 > numero2) {
  alert("El mayor de estos números es el: " + numero1);
} else if (numero2 > numero1) {
  alert("El mayor de estos números es el " + numero2);
} else {
  alert("Ninguno es mayor que el otro");
}
