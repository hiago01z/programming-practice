import http from "http";

const PORT = 3000;
const rotas = {
    '/': 'Essa é a área inicial',
    '/livros': 'Os livros estão aqui'
}
const server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type":"text/plain"});
    res.end(rotas[req.url])
});

server.listen(PORT, ()=> {
    console.log('Olá mundo')
})
