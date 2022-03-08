let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* 1
for (let number of numbers) {
    console.log(number);
} */

/* 2
let sum = 0;

for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
}

console.log(sum); */

/* 3 e 4
let sum = 0
let avg;
for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
    avg = sum / numbers.length;
}
console.log(avg); 

if (avg > 20) {
    console.log('valor maior que 20');
}
else console.log('valor menor ou igual a 20'); */

/* 5
let max = numbers[0];

for (let i = 1; i < numbers.length; i += 1) {
    if (max < numbers[i]) {
        max = numbers[i]
    }
}
console.log(max); */

/* 6 INCOMPLETE 
let odd = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === !0) {
        odd += 1;
        console.log(odd);
    }
    else if (odd === !0) {
        console.log(odd);
    }
    else console.log('nenhum valor encontrado');
} */

/* 7
let min = numbers[0];

for (let i = 1; i < numbers.length; i += 1) {
    if (min > numbers[i]) {
        min = numbers[i]
    }
}
console.log(min); */


