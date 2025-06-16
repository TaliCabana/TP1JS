/* Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: 
input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2.
*/

let numero = parseInt(prompt("Ingresá un múmero para que veamos si es divisible en 2: "))

if (numero % 2 == 0){
    document.writeln("El número indicado ➡ "+ numero+" es divisible en 2 💪🏻")
} else {
    document.writeln("El número indicado ➡ "+ numero+" no es divisible en 2 🤔")
}