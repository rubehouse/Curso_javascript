//Criação de suas variaveis para arealização de calculos matematicos
var n1;
var n2;
/*
interagir com o usuario e pedir os valores para N1 e N2
*/
n1 = prompt("Digite um valor", "");
n2 = prompt("Digite outro valor", "");

/*
para o java script realizar a operação aritmetica de soma e necessario fazer a converção das variaveis  n1 e n2 para numero pois o retorno do prompt e sempre como texto, ou seja, o comando prompt sempre trata o seu conteudo como texto.
Faremos a conversão usando o comando parseInt(passe para inteiro)
*/
n1 = parseInt(n1);
ne = parseInt(n2);
soma = n1 + n2;
subtrair = n1 - n2;
multiplicar = n1 * n2;
dividir = n1 / n2;
resto = n1 % n2;

//Vamos apresentar os resultados em tela de console
console.log(soma);
console.log(subtrair);
console.log(multiplicar);
console.log(dividir);
console.log(resto);
