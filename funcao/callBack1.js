const fabricantes = ["Mercedes", "Audi", "BMW", "Ferrari", "VW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(fabricantes) {
    console.log(fabricantes)
})