let array = [];

for (let i = 0; i < 25; i += 1) {
  array.push(i + 1);
}
console.log(array);

for (let number of array) {
  console.log(number / 2);
}
