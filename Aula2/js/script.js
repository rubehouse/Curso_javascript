//Vamos criar uma janela de alerta para saldar os usuarios
alert("Ola seja bem vindo!");
/*
Vamos pedir ao usuario que digite seu nome e depois mostraremos em uma caixa de alerta.
 para executar a operação iremos guardar o nome do usuario em uma variavel, essa variavel tera o nome de "nome"
*/
var nome = promp("Digite seu nome", "Escreva seu nome aqui");
alert(nome);

document.getElementById("titulo").innerHTML = nome;
/* Para apresentar o nome do usuario na pagina HTML foi necessario criar algum alemento de "link relação" da pagina javascript.
Para esse vinculo usamos o comando document.getElementById
-document refere-se so bidy da pagina HTML
-get(obter) Elent(Elemento)By(por)Id (identificação)
-Inner (Interno ou seja dentro)HTML
entao pegamos um elemento que seja no body por seu id e inserimos um conteudo em HTML, que nesse caso eo nome do usuario*/
