import fs from 'fs';
import { contaPalavrasDuplicadas } from './index.js';
import trataErros  from './erros/trataErros.js';
const caminhoTexto = process.argv[2];

  fs.readFile(caminhoTexto, "utf8", (erro, textoAqui) => {
    try {
      if (erro) throw erro;
      console.log(textoAqui);
      contaPalavrasDuplicadas(textoAqui);
    } catch (erro) {
      trataErros(erro);
    }
  });

//use programming-practice\contaPalavras\src> node cli.js ../arquivoTexto/textoExemplo.txt no terminal
