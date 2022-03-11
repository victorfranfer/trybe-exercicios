// FUNÇÕES - EXERCÍCIO 1 - Crie uma função que receba uma string e retorne true e for um palíndromo ou false se não for

// function verificaPalindrome(word) {
//   let reverseWord = word.split("").reverse().join("");
//   let isPalindrome;
//   if (reverseWord === word) {
//     isPalindrome = true;
//   }
//   else {
//     isPalindrome = false;
//   }
//   console.log(isPalindrome);
// }
// verificaPalindrome('arara');
// verificaPalindrome('desenvolvimento');

// EXERCICIO 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// function highestValueIndex(array) {
//   if (array.length === 0) {
//     return -1;
//   }
//   let max = array[0];
//   let maxIndex = 0;

//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] > max) {
//       maxIndex = i;
//       max = array[i];
//     }
//   }
//   console.log(maxIndex);
// }

// highestValueIndex([2, 3, 6, 7, 10, 1]);

// EXERCICIO 3 - Crie uma função que receba uma rray de inteiros e retorne o índice de menor valor.

// function lowestValueIndex(array) {
//   if (array.length === 0) {
//     return -1;
//   }
//   let min = array[0];
//   let minIndex = 0;

//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] < min) {
//       minIndex = i;
//       min = array[i];
//     }
//   }
//   console.log(minIndex);
// }

// lowestValueIndex([2, 4, 6, 7, 10, 0, -3]);