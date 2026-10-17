import readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function coletaNumerosMostraResultado(calculo, operacao) {
  let numero1 = null;
  let numero2 = null;
  coletaNumero1(numero1);
  coletaNumero2(numero2);
  calculo(numero1, numero2, operacao);
}

function coletaOperacao(operacao) {
  rl.question(
    "Escolha a operação digitando + para soma, - para subtração, / para divisão ou * para multiplicação: ",
    (resposta) => {
      if (
        resposta == "/" ||
        resposta == "*" ||
        resposta == "-" ||
        resposta == "+"
      ) {
               
      } else {
        console.log("Escolha uma operação válida.");
        coletaNumerosMostraResultado();
      }
    },
  );
}

function coletaNumero1(numero) {
  return rl.question("Digite o primeiro número: ", (primeiroNumero) => {
    numero = Number(primeiroNumero);
    if (isNaN.numero1) {
      return numero;
    } else {
      console.log("Digite somente números.");
      coletaNumero1();
    }
  });
}

function coletaNumero2(numero) {
  return rl.question("Digite o segundo número: ", (segundoNumero) => {
    numero = Number(segundoNumero);
    if (isNaN.numero) {
      return numero;
    } else {
      console.log("Digite somente números.");
      coletaNumero2();
    }
  });
}
