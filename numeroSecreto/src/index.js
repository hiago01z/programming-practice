import { inicio } from "./cli.js";


 function escolhaDeNumero() {  
  console.log("Bem vindo ao jogo número secreto!");
  let numeroSecreto = Math.floor(Math.random() * 101); //cria o numero secreto e armazena na variável numeroSecreto
  inicio(numeroSecreto, escolhaDeNumero);
}
 escolhaDeNumero()