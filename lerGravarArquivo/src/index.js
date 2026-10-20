const fs = require("fs").promises;
const caminhoTexto = process.argv[2];
const novoArquivo = process.argv[3];

async function lerArquivo(caminhoArquivo) {
  const texto = await fs.readFile(caminhoArquivo, 'utf-8');
  return texto
  
}
async function salvaTexto() {
  let texto = await lerArquivo(caminhoTexto)
  fs.writeFile(novoArquivo, texto)
}

salvaTexto();
