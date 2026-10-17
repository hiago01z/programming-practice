//importa o módulo "readline", guarda em readline depois cria uma interface e guarda em rl
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function escolhaDeNumero() {  
  console.log("Bem vindo ao jogo número secreto!");
  let numeroSecreto = Math.floor(Math.random() * 101); //cria o numero secreto e armazena na variável numeroSecreto

  function reiniciando() {
    rl.question("Escolha um número de 0 á 100: ", (escolha) => { //coleta a resposta do usuário
      escolha = Number(escolha); //transforma a resposta em number
      if (isNaN(escolha)) { //caso seja NaN, exibe mensagem e reinicia a coleta de resposta do usuário 
        console.log("Digite somente números");
        reiniciando();
      } else if (escolha == numeroSecreto) {//caso o usuário acerte, exibe mensagem e perguna se quer refazer ou sair
        console.log("Parabéns, você acertou!");
        rl.question(
          "Digite 1 para tentar novamente ou qualquer outra tecla para sair: ",
          (resposta) => {
            if (resposta == "1") {
              escolhaDeNumero();
            } else {
              console.log("Saindo..");
              rl.close();
            }
          },
        );
      } else if (escolha < numeroSecreto) {//caso o usuário erre exibe mensagem informando se a resposta é menor ou maior que o numero secreto
        console.log(
          "O numero secreto é maior que ",
          escolha,
          ". Tente novamente seu animal",
        );
        reiniciando();
      } else {
        console.log(
          "O numero secreto é menor que ",
          escolha,
          " tente novamente seu animal",
        );
        reiniciando();
      }
    });
  }
  reiniciando();
}

escolhaDeNumero();
