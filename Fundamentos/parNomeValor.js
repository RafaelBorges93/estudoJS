// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaa' // contexto léxico 2
    return saudacao
}

const saudacao2 = 'Eita!!!'

// Obejtos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 80,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(saudacao2)
console.log(exec())
console.log(cliente)
