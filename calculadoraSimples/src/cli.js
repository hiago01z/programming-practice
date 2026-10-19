import readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function realizaOperacao(
  calculo,
  soma,
  subtracao,
  multiplicação,
  divisao,
) {
  const iniciarNovamente = () =>
    realizaOperacao(calculo, soma, subtracao, multiplicação, divisao);

  rl.question(
    "Escolha a operação digitando + para soma, - para subtração, / para divisão ou * para multiplicação: ",
    (resposta) => {
      let operacao;

      switch (resposta.trim()) {
        case "+":
          operacao = soma;
          break;
        case "-":
          operacao = subtracao;
          break;
        case "*":
          operacao = multiplicação;
          break;
        case "/":
          operacao = divisao;
          break;
        default:
          console.log("Escolha uma operação válida.");
          return iniciarNovamente();
      }

      coletaNumero1((numero1) => {
        coletaNumero2((numero2) => {
          calculo(numero1, numero2, operacao);
          reiniciar(iniciarNovamente);
        });
      });
    },
  );
}

export function coletaNumero1(callback) {
  rl.question("Digite o primeiro número: ", (resposta) => {
    const numero = Number(resposta);

    if (resposta.trim() === "" || !Number.isFinite(numero)) {
      console.log("Digite somente números.");
      return coletaNumero1(callback);
    }

    callback(numero);
  });
}

export function coletaNumero2(callback) {
  rl.question("Digite o segundo número: ", (resposta) => {
    const numero = Number(resposta);

    if (resposta.trim() === "" || !Number.isFinite(numero)) {
      console.log("Digite somente números.");
      return coletaNumero2(callback);
    }

    callback(numero);
  });
}

export function reiniciar(funcao) {
  rl.question(
    "Digite 1 para reiniciar ou qualquer outra tecla para sair: ",
    (resposta) => {
      if (resposta.trim() === "1") {
        funcao();
      } else {
        rl.close();
      }
    },
  );
}
