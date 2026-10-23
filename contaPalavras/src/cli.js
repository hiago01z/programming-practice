import fs from "node:fs/promises";
import { contaPalavrasDuplicadas } from "./index.js";
import trataErros from "./erros/trataErros.js";
import { coletaKeys } from "./helpers.js";
const caminhoTexto = process.argv[2];
const caminhoPalavrasDuplicadas = process.argv[3];

async function lerArquivo() {
  try {
    const texto = await fs.readFile(caminhoTexto, "utf8");
    return texto;
  } catch (erro) {
    trataErros(erro);
  }
}

async function salvaContagemPalavras() {
  try {
    let texto = await lerArquivo();
    const palavrasDuplicadas = await JSON.stringify(
      contaPalavrasDuplicadas(texto),
    );
    fs.writeFile(caminhoPalavrasDuplicadas, palavrasDuplicadas);
  } catch (erro) {
    trataErros(erro);
  }
}

salvaContagemPalavras();
//use programming-practice\contaPalavras\src> node cli.js ../arquivoTexto/textoExemplo.txt /caminhoNovoArquivo/arquivo.txt no terminal
