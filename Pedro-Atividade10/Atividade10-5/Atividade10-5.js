var num1 = parseFloat(window.prompt("Digite um número"))
var sinal = (window.prompt("Digite o sinal da conta"))
var num2 = parseFloat(window.prompt("Digite um número"))

if (sinal == "+") {
    document.write(num1, " + ", num2, " = ", num1 + num2);
}
else if (sinal == "-") {
    document.write(num1, " - ", num2, " = ", num1 - num2);
}
else if (sinal == "*") {
    document.write(num1, " * ", num2, " = ", num1 * num2);
}
else if (sinal == "/") {
    document.write(num1, " / ", num2, " = ", num1 / num2);
}
else {
    document.write("ERRO")
}