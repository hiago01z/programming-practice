const fs = require('fs');
const caminhoTexto = process.argv[2];


function lerArquivo(caminhoArquivo){
     fs.readFile(caminhoArquivo, 'utf-8', (erro, texto)=> {
            console.log(texto)
    })

};

lerArquivo(caminhoTexto)