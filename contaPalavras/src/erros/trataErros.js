export default function trataErros(erro) {
  if (erro) {
    throw new Error(`Ocorreu um erro: ${erro.code}`);
  }
};


