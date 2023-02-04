/* 
5.Utilizando função, desenvolva uma calculadora capaz de realizar as seguintes operações básicas:
-Adição (a + b).
-Subtração (a - b).
-Multiplicação (a * b).
-Divisão (a / b).
*/

var num1 = parseInt(window.prompt("Digite o primeiro numero: "))
var operador = window.prompt("Digite o operador: ")
var num2 = parseInt(window.prompt("Digite o segundo numero: "))


function soma(a,b){
    result = a + b
    return result
}

function subtração(a,b){
    result = a - b
    return result
    
}

function multiplicação(a,b){
    result = a * b
    return result

}

function divisão(a,b){
    result = a / b
    return result

}

function calc(a,b){
    if (operador == "+") {
        soma(a,b)
    }
    else if (operador == "-"){
        subtração(a,b)
    }
    else if (operador == "*"){
        multiplicação(a,b)
    }
    else if (operador == "/"){
        divisão(a,b)
    }
    else {
        result = ("ERRO")
    }
}

function imp(){
    window.alert("Resultado: " + result)
}

