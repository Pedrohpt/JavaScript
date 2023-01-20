var nome = window.prompt("Digite seu nome: ");
var sexo = window.prompt("Digite seu sexo: ").toUpperCase;

var peso = parseInt(window.prompt("Digite seu peso: "))
var altura = parseFloat(window.prompt("Digite sua altura: "))
var imc = (peso/(altura ** 2))
var classificação = 0

if (sexo = "MASCULINO") {
    if (imc < 18.5) {
        classificação = "Magreza";
    }
    else if (imc >= 18.5 & imc <= 24.9) {
        classificação = "Normal";
    }
    else if (imc >= 25 & imc <= 29.9) {
        classificação = "Sobrepeso";
    }
    else if (imc >= 30 & imc <= 34.9) {
        classificação = "Obesidade grau I";
    }
    else if (imc >= 35 & imc <= 39.9) {
        classificação = "Obesidade grau II";
    }
    else {
        classificação = "Obesidade grau III"
    }
}

else {
    if (imc < 19.1) {
        classificação = "A baixo do peso";
    }
    else if (imc >= 19.1 & imc <= 25.8) {
        classificação = "Normal";
    }
    else if (imc >= 25.9 & imc <= 28.3) {
        classificação = "Sobrepeso";
    }
    else if (imc >= 27.4 & imc <= 32.4) {
        classificação = "Obesidade grau I";
    }
    else if (imc >= 32.5 & imc <= 39) {
        classificação = "Obesidade grau II";
    }
    else {
        classificação = "Obesidade grau III"
    }
}

window.alert(nome + ", seu IMC é: " + imc.toFixed(2) + "\n" + "Classificado como: " + classificação)