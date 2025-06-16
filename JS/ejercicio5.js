/* Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt
*/

let numero1 = parseInt(prompt("Ingresá un número:"))
let numero2 = parseInt(prompt("Ingresá un segundo número:"))
const suma = numero1+numero2
document.writeln("El resultado de sumar ambos números indicados es: "+suma)