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
    idade: 27,
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

validarUsuario(usuario[1].nome, usuario[1].idade)