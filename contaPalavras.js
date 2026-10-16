const fs = require("fs");
const trataErros = require("./trataErros");
const caminhoTexto = process.argv[2];

function extraiExibeTexto(caminhoTexto) {
  fs.readFile(caminhoTexto, "utf8", (erro, textoAqui) => {
    try {
      if (erro) throw erro;
      console.log(textoAqui);
      contaPalavrasDuplicadas(textoAqui);
    } catch (erro) {
      trataErros(erro);
    }
  });
}

function contaPalavrasDuplicadas(texto) {
  const resultado = {};
  let palavras = texto.split(/\s+/);
  palavras = palavras.forEach((palavra) => {
    resultado[palavra] = (resultado[palavra] || 0) + 1;
  });
  console.log(resultado);
}

function contaPalavras(texto) {
  texto = texto.split(/\s+/);
  console.log("Existem ", texto.length, " palavras no texto.");
}

function limpaPalavras(palavras) {
  palavras = palavras.replace(/[<>.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  return palavras;
}

extraiExibeTexto(caminhoTexto);
