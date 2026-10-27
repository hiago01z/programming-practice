import fs from "fs";
import trataErros from "./erros/funcoesErro.js";
import { contaPalavras } from "./index.js";
import { montaSaidaArquivo } from "./helpers.js";
import { Command } from "commander";
import path from "path";

const program = new Command();

function processaArquivo(texto, destino) {
  fs.readFile(texto, "utf-8", (erro, texto) => {
    try {
      if (erro) throw erro;
      const resultado = contaPalavras(texto);
      criaESalvaArquivo(resultado, destino);
    } catch (erro) {
      trataErros(erro);
    }
  });
}

async function criaESalvaArquivo(listaPalavras, endereco) {
  const arquivoNovo = `${endereco}/resultado.txt`;
  const textoPalavras = montaSaidaArquivo(listaPalavras);

  try {
    await fs.promises.writeFile(arquivoNovo, textoPalavras);
    console.log("arquivo criado");
  } catch (erro) {
    throw erro;
  }
}

program
  .version("0.0.1")
  .option("-t, --texto <string>", "Texto a ser lido")
  .option("-d, --destino <string>", "Destino do novo arquivo")
  .action((options) => {
    const { texto, destino } = options;

    if (!texto || !destino) {
      console.error("Texto ou destino do novo arquivo inválido");
      program.help();
      return;
    }
    const caminhoTexto = path.resolve(texto);
    const caminhoDestino = path.resolve(destino);

    try {
      processaArquivo(caminhoTexto, caminhoDestino);
    } catch (erro) {
      console.log("Ocorreu um erro:", erro);
    }
  });

program.parse();
