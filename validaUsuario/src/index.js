function validarUsuario(nome, idade){
    if(nome.trim().length > 3 & idade >= 18){
        console.log('Usuário válido')
        const dados = JSON.stringify({
            nomeUsuario: nome,
            idadeUsuario: idade
        })
        console.log(dados)
    }else{
        console.log('Usuário ', nome, ' inválido.')
    }
}

const usuario = [
{
    nome: 'Gabriel',
    idade: 22,
    nacionalidade: 'Brasileiro'
},
{
    nome: 'Julio',
    idade: 14,
    nacionalidade: 'Brasileiro'
},
{
    nome: 'Ga',
    idade: 12,
    nacionalidade: ''
},
{
    nome: 'Luiz',
    idade: 31,
    nacionalidade: 'Brasileiro'
}
]
const usuario1 = usuario[0]
const usuario2 = usuario[1]
const usuario3 = usuario[2]
const usuario4 = usuario[3]

validarUsuario(usuario1.nome, usuario1.idade)