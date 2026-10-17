//importa o módulo "readline", depois cria uma interface e guarda em rl
import readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function inicio(numeroSecreto, escolhaDeNumero) {
  rl.question("Escolha um número de 0 á 100: ", (escolha) => {
    //coleta a resposta do usuário
    escolha = Number(escolha); //transforma a resposta em number
    if (isNaN(escolha)) {
      //caso seja NaN, exibe mensagem e reinicia a coleta de resposta do usuário
      console.log("Digite somente números");
      inicio(numeroSecreto, escolhaDeNumero);
    } else if (escolha === numeroSecreto) {
      //caso o usuário acerte, exibe mensagem e perguna se quer refazer ou sair
      console.log("Parabéns, você acertou!");
      tentarNovamente(escolhaDeNumero);
    } else if (escolha < numeroSecreto) {
      //caso o usuário erre exibe mensagem informando se a resposta é menor ou maior que o numero secreto
      console.log(
        "O numero secreto é maior que ",
        escolha,
        ". Tente novamente seu animal",
      );
      inicio(numeroSecreto, escolhaDeNumero);
    } else if (escolha > numeroSecreto) {
      console.log(
        "O numero secreto é menor que ",
        escolha,
        ". Tente novamente seu animal",
      );
      inicio(numeroSecreto, escolhaDeNumero);
    }
  });
}

function tentarNovamente(funcao) {
  rl.question(
    "Digite 1 para tentar novamente ou qualquer outra tecla para sair: ",
    (resposta) => {
      if (resposta == "1") {
        funcao()
      } else {
        console.log("Saindo..");
        rl.close();
      }
    },
  );
}
