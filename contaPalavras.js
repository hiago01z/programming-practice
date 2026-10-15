const fs = require("fs");
const caminhoTexto = process.argv[2];


function extraiTexto(caminhoTexto) { 
  fs.readFile(caminhoTexto, "utf8", (erro, textoAqui) => {
    try {
      if (erro) {
        throw erro;
      }
      console.log(textoAqui);
    } catch (erro) {
      console.log("Ocorreu um erro: ", erro.code);
    }
  });
}

function contaPalavras(texto) {
  texto = texto.split(/\s+/);
  console.log("Existem ", texto.length, " palavras no texto.");
}

function limpaPalavras(palavras){
     palavrasLimpas = palavras.replace(/[<>.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    
}


extraiTexto(caminhoTexto);

