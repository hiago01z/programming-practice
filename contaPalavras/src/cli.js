import fs from "node:fs/promises";
import { contaPalavrasDuplicadas } from "./index.js";
import trataErros from "./erros/trataErros.js";
const caminhoTexto = process.argv[2];
const caminhoPalavrasDuplicadas = process.argv[3];

async function lerArquivo() {
  let texto = await fs.readFile(caminhoTexto, "utf8");
  const palavrasDuplicadas = await contaPalavrasDuplicadas(texto);
  return palavrasDuplicadas;
}

async function salvaContagemPalavras() {
  const palavrasDuplicadas = await JSON.stringify(lerArquivo())
  fs.writeFile(caminhoPalavrasDuplicadas, palavrasDuplicadas)
}

salvaContagemPalavras()
//use programming-practice\contaPalavras\src> node cli.js ../arquivoTexto/textoExemplo.txt /caminhoNovoArquivo/arquivo.txt no terminal
