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