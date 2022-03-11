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

// EXERCICIO 4 INCOMPLETO - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres

// function longestName(array) {
//   // if (array.length === 0) {
//   //   return -1;
//   // }
  
//   for (let i = 0; i < array.length; i += 1) {
//     firstName = array[0].split("");
//   let longest = firstName.length;
//     let name = array[i].split("");
//     if (name.length > longest) {
//       longest = array[i];
//     }
//     console.log(longest);
//   }
  
// }

// longestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);

// EXERCICIO 5 INCOMPLETO - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete;

// function mode(array) {
//   return array.sort((a, b) =>
//     array.filter(v => v===a).length
//     - array.filter(v => v===b).length
//   ).pop();
//   console.log(arra)
// }

// mode([2, 3, 2, 5, 8, 2, 3])

// EXERCICIO 6 - Crie uma função que receba um número natural (inteiro não negativo) N e retorne o somatório de todos os os números de 1 até N.

// function sumOneToN(N) {
//   let array =
// }

// EXERCICIO 7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Ending sempre será menor que word.

// function (word, ending) {
//   if (word.length <= ending.length)
// }