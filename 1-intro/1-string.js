const texto1 ="Olá, mundo";
const texto2 = 'olà, mundo';
const senha = "senhaSuperSegura456!";
const stringDeNumeros = '34567';

const citacao = 'Meu nome é ';
const meuNome = "Leonardo";

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

console.log(citacao + meuNome)

//template literal

const nome= "ju";
const idade= 2022-1981;
const cidadeNatal="São Paulo";
const apresentacao = "meu nome é "+ nome + ", minha idade é " + idade + " e nasci na cidade de "+ cidadeNatal;
console.log(apresentacao)

const apresentacao2 = `meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeNatal}.`;
console.log(apresentacao2)