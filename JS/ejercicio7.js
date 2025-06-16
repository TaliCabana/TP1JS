/*Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 
input: 15 , 3, 9
Output: El 15 es el número más grande
*/

let num1 = parseInt(prompt("Ingresá el primer número: "));
let num2 = parseInt(prompt("Ingresá el segundo número: "));
let num3 = parseInt(prompt("Ingresá el tercer número: "));

if (num1 == num2 && num1 == num3) {
  alert("Ninguno de los números es mayor que el otro, todos son iguales");
} else if (num1 >= num2 && num1 >= num3) {
  alert("El mayor de los 3 números es el: " + num1);
} else if (num2 >= num1 && num2 >= num3) {
  alert("El mayor de los 3 números es el: " + num2);
} else if (num3 >= num1 && num3 >= num2) {
  alert("El mayor de los 3 números es el: " + num3);
}
