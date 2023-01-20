var n = parseInt(window.prompt("Digite um número inteiro"))
var n2 = parseInt(window.prompt("Digite um número inteiro"))
while (n2 == 0){
    var n2 = parseInt(window.prompt("Digite um número inteiro"))
}

result = (n / n2)

document.write("resultado: " + result.toFixed(2))