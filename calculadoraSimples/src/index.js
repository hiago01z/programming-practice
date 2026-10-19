import soma from "./operacoes/soma.js"
import multiplicação from "./operacoes/multiplicacao.js"
import divisao from "./operacoes/divisao.js"
import subtracao from "./operacoes/subtracao.js"
import { realizaOperacao } from "./cli.js";

function calculo(numero1, numero2, operacao ){
    console.log(operacao(numero1, numero2))
};

realizaOperacao(calculo, soma, subtracao, multiplicação, divisao)