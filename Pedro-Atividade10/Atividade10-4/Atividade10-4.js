var nome = window.prompt("Digite seu nome: ")
var peso = parseInt(window.prompt("Digite seu peso: "))
var altura = parseFloat(window.prompt("Digite sua altura: "))
var imc = (peso/(altura ** 2))
var classificação = 0


if (imc < 18.5) {
    classificação = "Magreza";
}
else if (imc > 18.5 & imc < 24.9) {
    classificação = "Normal";
}
else if (imc > 25 & imc < 29.9) {
    classificação = "Sobrepeso";
}
else if (imc > 30 & imc < 34.9) {
    classificação = "Obesidade grau I";
}
else if (imc > 35 & imc < 39.9) {
    classificação = "Obesidade grau II";
}
else {
    classificação = "Obesidade grau III"
}

document.write(nome + ", seu IMC é: " + imc.toFixed(2) + ". Classificado como: " + classificação)