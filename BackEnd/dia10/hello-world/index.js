const readline = require('readline-sync');

const name = readline.question('Qual seu nome? ');
const age = readline.questionInt('Qual sua idade? ');

console.log(`Olá, ${name}! O Victor te ama há ${age - 22} anos!`);