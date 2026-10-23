 
 export  function contaPalavrasDuplicadas(texto) {
  const resultado = {};
  let palavras = texto.replace(/[<>.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(/\s+/);
  palavras = palavras.forEach((palavra) => {
    resultado[palavra] = (resultado[palavra] || 0) + 1;
  })
  //return resultado = limpaPalavras(resultado);
  return resultado
}

function contaPalavras(texto) {
  texto = texto.split(/\s+/);
  console.log("Existem ", texto.length, " palavras no texto.");
}


//use programming-practice\contaPalavras\src> node cli.js ../arquivoTexto/textoExemplo.txt no terminal