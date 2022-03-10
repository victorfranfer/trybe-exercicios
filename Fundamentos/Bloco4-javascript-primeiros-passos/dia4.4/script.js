let info1 = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// console.log('Bem-vinda, ' + info.personagem);

info1.recorrente = 'Sim';

// console.log(info);

// for (key in info) {
//   console.log(key);
// }

// for (key in info1) {
//   console.log(info1[key]);
// }

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics#178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
}

let infos = [];
infos.push(info1);
infos.push(info2);

console.log(info1.personagem + ' e ' + info2.personagem);
console.log(info1.origem + ' e ' + info2.origem);
console.log(info1.nota + ' e ' + info2.nota);

if (info1.recorrente === info2.recorrente) {
  console.log('Ambos recorrentes');
}
else {
  console.log(info1.recorrente + ' e ' + info2.recorrente);
}

// console.log(infos);