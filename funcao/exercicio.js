// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma,
// subtração, multiplicação e divisão desses valores.


function calcularOperacoes (operador1, operador2) {
    console.log(operador1+operador2, operador1-operador2, operador1*operador2, operador1/operador2);
}

calcularOperacoes(10, 20)

// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua 
// classificação quanto ao tamanho de seus lados. 
// (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo)

function classificarTriangulo (lado1, lado2, lado3) {
    if(lado1 == lado2 && lado2 == lado3){
        return 'Equilátero'
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'Isósceles'        
    }else { 
        return 'Escaleno'
    }
}

console.log(classificarTriangulo(2, 2, 2));
console.log(classificarTriangulo(2, 3, 3));
console.log(classificarTriangulo(2, 3, 4));

// 03) Crie uma função que recebe dois parâmetros, base e expoente,
// e retorne a base elevada ao expoente.

function parametros (base, expoente) {
    return ( base ** expoente)
}

console.log(parametros (5, 3))

// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. 
// A função deverá imprimir o resultado e o resto da divisão destes dois valores.

function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(50, 4)

// 05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece 
//quando faz o seguinte comando no console: console.log(0.1 + 0.2); 
// O resultado será: 0.30000000000000004. Outra coisa importante de observar, é o fato que 
// o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer um exercício 
// simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
// que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).

function calculo(x, y) {
    const soma = (x + y)
    const total = soma.toFixed(2)
    return total
}
console.log(calculo(0.1, 0.2))

// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo
// de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime
// de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.

function dados(capitalInicial, taxaDeJuros, tempoDeAplicação) {
    return (capitalInicial * taxaDeJuros * tempoDeAplicação) + capitalInicial
}

console.log(dados(100, 0.1, 2))

function dados2(capitalInicial, taxaDeJuros, tempoDeAplicação) {
    return capitalInicial * (1 + taxaDeJuros) ** tempoDeAplicação
}

console.log(dados2(100, 0.1, 2))

// 07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de 
// realizar. Dito isto, elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. 
// Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que 
// na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. Como retorno deve 
// ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os 
// resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, 
// um string com a frase: “Delta é negativo”.

function bhaskara (ax2, bx, c) {
    let resultados = []
    let delta = (bx ** 2) - (4 * ax2 * c)
    if(delta < 0){
        return "Delta é negativo"
    } 
    let x1 = (-bx + Math.sqrt(delta))/(2*ax2)
    let x2 = (-bx - Math.sqrt(delta))/(2*ax2)
    resultados.push(x1)
    resultados.push(x2)
    return resultados   
}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))
    }

    console.log(delta())

}
