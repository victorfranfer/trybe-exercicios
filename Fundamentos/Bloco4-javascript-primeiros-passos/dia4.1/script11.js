const salarioBruto = 2635.35;

if (salarioBruto <= 1556.94 && salarioBruto >= 0) {
    salarioBase = salarioBruto * 0.92;
}
else if (salarioBruto <= 2594.92 && salarioBruto > 1556.94) {
    salarioBase = salarioBruto * 0.91;
}
else if (salarioBruto <= 5189.82 && salarioBruto > 2594.92) {
    salarioBase = salarioBruto * 0.89;
}
else if (salarioBruto > 5189.82) {
    salarioBase = salarioBruto - 570.88;
}
else console.log("Error");

let valorImposto;

if (salarioBase <= 1903.98) {
    salarioLiquido = salarioBase;
}
else if (salarioBase <= 2826.65 && salarioBase > 1903.98) {
    valorImposto = salarioBase * 0.075 - 142.80;
}
else if (salarioBase <= 3751.05 && salarioBase > 2826.65) {
    valorImposto = salarioBase * 0.15 - 354.80;
}
else if (salarioBase <= 4664.68 && salarioBase > 3751.05) {
    valorImposto = salarioBase * 0.225 - 636.13;
}
else if (salarioBase > 4664.68) {
    valorImposto = salarioBase * 0.275 - 869.36;
}

let salarioLiquido = salarioBase - valorImposto;
console.log(salarioLiquido)