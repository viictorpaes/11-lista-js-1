/**** Escreva o código abaixo 👇******/
function somar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

function subtrair(a, b) {
  return a - b;
}

function dividir(a, b) {
  if (b === 0) {
    throw new Error("Erro: divisão por zero");
  }
  return a / b;
}
function calcularMedia(...notas) {
  if (notas.length === 1 && Array.isArray(notas[0])) {
    notas = notas[0];
  }
  if (notas.length === 0) return 0;
  const soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
  return soma / notas.length;
}
function elevarPotencia(base, expoente) {
  return Math.pow(base, expoente);
}

function calcularAreaRetangulo(base, altura) {
  return base * altura;
}
function verificarParOuImpar(numero) {
  return numero % 2 === 0 ? "par" : "ímpar";
}

function calcularRaizQuadrada(numero) {
  return Math.sqrt(numero);
}

function calcularHipotenusa(catetoA, catetoB) {
  return Math.sqrt(catetoA ** 2 + catetoB ** 2);
}








/**** Escreva o código acima ☝️******/

//Não altere as linhas abaixo
module.exports = {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
};
