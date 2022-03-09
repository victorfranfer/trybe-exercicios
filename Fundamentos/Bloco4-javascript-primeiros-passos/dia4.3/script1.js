// 1- DONE 
// let tenFactorial = [];

// for (let i = 0; i < 10; i += 1) {
//   tenFactorial.push(i + 1);
// }
// console.log(tenFactorial);

// function fact(x) {
//     return (x === 0) ? 1 : x * fact(x - 1);
// }

// console.log(tenFactorial.map(fact));

// 2 - DONE 

//let word = 'tryber';

// function reverse(word) {
//     return word.split("").reverse().join("");
// }
// console.log(word);
// console.log(reverse(word));

// 3 - DONE
// let arr = ['java', 'javascript', 'python', 'html', 'css'];
// let lgth = 0;
// let longest;

// for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i].length > lgth) {
//         lgth = arr[i].length;
//         longest = arr[i];
//     }
// }

// console.log(longest);

// 4

// let primeNum = [];
// let highestPrimeNum;

// for (let i = 0; i < 50; i += 1) {
//     if 
//   primeNum.push(i + 1);
// }
// console.log(primeNum);

function isPrime(num) {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}

function display(n) {
    var arr = [2];
    for ( var i = 3; i < n; i+=2 ) {
        if ( isPrime(i) ) {
            arr.push(i);
        }
    }
    console.log(arr); // use arr result on your own
    let highest = arr[0];
    for (let i = 0; i < arr.length; i += 1) {
        if (highest < arr[i]) {
            highest = arr[i];
        }
    }
    console.log(highest);
}

display(50);



// for (let i = 0; i < primeNum.length; i += 1) {
//     if (primeNum[i] % primeNum[i += 1] === !0 && primeNum[i] % primeNum[i * 2 === !0]){
//         highestPrimeNum = primeNum[i];
//     }
// }
// console.log(highestPrimeNum);


