function corFundo() {
  var cor = prompt("Digite a cor preto para aplicar ao fundo");

  /*
  transformar os caracteres em maiuscula usamos o comando
  toUpperCase e para minuscula usamos o comando toLowerCase
  */
  cor = cor.toLowerCase();

  if (cor == "preto") {
    document.bgColor = "#000000";
  }
}

function corFundo2() {
  var cor = prompt("Digite a cor preto ou vermelha para o fundo");
  cor = cor.toLowerCase();
  if (cor == "preto") {
    document.bgColor = "black";
  } else if (cor == "vermelho") {
    document.bgColor = "red";
  } else {
    document.bgColor = "yellow";
  }
}

function mudaCor() {
  if (document.forms[0].cor[0].checked) {
    document.bgColor = "purple";
  } else if (document.forms[0].cor[1].checked) {
    document.bgColor = "green";
  } else if (document.forms[0].cor[2].checked) {
    document.bgColor = "grey";
  } else if (document.forms[0].cor[3].checked) {
    document.bgColor = "lightblue";
  } else if (document.forms[0].cor[4].checked) {
    document.bgColor = "#4a4a63";
  } else {
    alert("Escolha uma cor abaixo ☻");
  }
}
function mudarCor2() {
  
  console.log(document.forms[0].cor.value);
  
  
  switch (document.forms[0].cor.value) {
    case "Roxo":
      document.bgColor = "purple";
      break;

    case "Verde"
      document.bgColor = "green";
      break;

    case "Cinzento"
      document.bgColor = "grey";
      break;

    case "Azul claro"
      document.bgColor = "lightblue";
      break;

    case "Chumbo"
      document.bgColor = "#4a4a63";
      break;

    default:
      alert(" Escolha uma cor abaixo ☺ ");
      break;
  }
}
