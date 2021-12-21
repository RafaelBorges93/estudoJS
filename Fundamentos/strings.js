const escola = "Cod3r"

console.log(escola.charAt(0))
console.log(escola.charAt(1))
console.log(escola.charAt(2))// pega o caractere dentro da string
console.log(escola.charAt(3))
console.log(escola.charAt(4))
console.log(escola.charAt(5))

console.log(escola.charCodeAt(3)) // pega o codigo do caractere a partir do charcodeat
console.log(escola.indexOf(3))
console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log("Escola ".concat(escola).concat("!"))
console.log(escola.replace(3, "e"))
console.log(escola.replace(/\d/, "e"))

console.log("Ana,Maria,Pedro" .split(","))
