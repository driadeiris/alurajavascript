//== (comparação implicita)

const numero =4;
const texto = '4';

console.log(numero == texto)
console.log(numero === texto)

//typeof

console.log(typeof numero)
console.log(typeof texto)

// == só compara o valor
// === compara valor e tipo de dado

//comversão explicita
//Number() ou String()

//operador termario

const idadeMinima = 18;
const idadeCliente = 16;

if(idadeCliente >=idadeMinima) {
    console.log("cerveja")
}else{
    console.log("suco")
}

//ou
//          condição                  ?  true    :false 
console.log(idadeCliente>=idadeMinima ? "cerveja":"suco")