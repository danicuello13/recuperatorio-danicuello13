/* Actividad 1: Sumar Dos Números -- 2 PUNTOS

  Implementa la función llamada `sumarNumeros` que tome dos números como argumento y devuelva la suma de esos dos números.
*/

function sumarNumeros(num) {
  return num +4
}
sumarNumeros(5);


/* Actividad 2: Calcular el Factorial de un Número -- 3 PUNTOS

  Implementa la función llamada `calcularFactorial` que tome un número entero positivo como argumento y devuelva el factorial de ese número. El factorial de un número es el producto de todos los enteros positivos desde 1 hasta ese número.
  (recuerden que podemos realizar acciones repetitivas usando un FOR)
*/

function calcularFactorial(num) {
  if (num == 0)
    return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
calcularFactorial(5);
/* Actividad 3: Encontrar el Número Mayor en una Matriz -- 5 PUNTOS

  Escribe una función llamada `encontrarNumeroMayor` que tome una matriz de números como argumento y devuelva el número mayor de la matriz.
*/

function encontrarNumeroMayor(arr){
  let min = arr[0]
  let max = arr[0]
  for(let i = 0; i<arr.length; i++){
    if(min > arr[i]){
      min = arr[i]
    }
  } 
return [min, max]
}
encontrarNumeroMayor([10,7,3,9]);



// ❌NO ELIMINAR NI MODIFICAR NADA DEBAJO DE ESTA LINEA❌
module.exports = {
  sumarNumeros,
  calcularFactorial,
  encontrarNumeroMayor
}