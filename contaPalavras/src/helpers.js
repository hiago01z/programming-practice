function filtraOcorrencias(paragrafo) {
  return Object.keys(paragrafo).filter((chave) => paragrafo[chave] > 1);
}


function montaSaidaArquivo(listaPalavras) {
  let textoFinal = "";
  listaPalavras.forEach((paragrafo, indice) => {
    const palavrasDuplicadas = filtraOcorrencias(paragrafo);
    if (palavrasDuplicadas.length === 0) {
      return;
    }
    const duplicadas = palavrasDuplicadas.join(", ");
    textoFinal += `palavras duplicadas no parágrafo ${indice + 1}: ${duplicadas}\n`;
  });

  return textoFinal;
}

export { montaSaidaArquivo };
