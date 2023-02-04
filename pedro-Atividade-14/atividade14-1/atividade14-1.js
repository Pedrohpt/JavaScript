/* 1.Desenvolva o código capaz de somar dois números informados pelo usuário. Crie duas funções.
 Uma para realizar a soma,  e outra para imprimir o resultado.*/

var num1 = parseInt(window.prompt("Digite um numero: "))
var num2 = parseInt(window.prompt("Digite um numero: "))

 function soma(a, b){
    result = a + b
    return result
 }

 function imp(){
    window.alert("A soma dos números é: " + result)
 }
