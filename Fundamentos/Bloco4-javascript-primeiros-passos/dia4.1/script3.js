const a = 3;
const b = 3;
const c = 7;

if (a > b && a > c) {
    console.log(a);
}
else if (b > c && b > a) {
    console.log(b);
}
else if (c > b && c > a) {
    console.log(c);
}
else console.log('ih, deu ruim...')