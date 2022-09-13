//let x = "";
//console.log(x);
//x = "oi";

//1 - declarar a função
                     //string
function imprimeTexto(texto){
    console.log(texto)
}

//2 - executa a função (1 ou mais vezes)

imprimeTexto("oi");
imprimeTexto("soma()");

//três formas de escrever funções

function soma(num1, num2){
    //outros códigos
    //vários console.log
    return num1+num2;
}

console.log(soma(4, 5));
console.log(soma(435, 554));

//parametros x argumentos

//ordem dos parâmetros

function nomeIdade(nome, idade){
    return  `meu nome é ${nome}, minha idade é ${idade}`;
}

console.log(nomeIdade(40, "juliana"))

function multiplica(num1 = 1, num2 = 1){
    return num1 * num2;
}
//                            5          9
console.log(multiplica(soma(2, 3), soma(4, 5)))
console.log(multiplica(soma(2, 3)))

