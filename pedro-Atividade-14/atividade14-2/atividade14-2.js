/* 2.Desenvolva o bloco de código capaz de receber e calcular a média de 05 notas informadas pelo usuário.
 Neste algoritmo precisaremos de uma função para a soma das notas, outra para o cálculo da média e uma terceira para a impressão. 
 */

var nota = [0]
var result = 0

function recebeNotas(){
for (i = 0; i < 5; i++) {

   nota[i] = parseInt(window.prompt("Digite a " + (i+1)+ "º nota: "))
}
}

 function somaNotas(nota){
   for (i = 0; i < 5; i++) {
      result = result + nota[i]
   }

    return result
 }

 function mediaNotas(){
    media = result / 5
    return media
 }

 function imp(){
    window.alert("Sua média é: " + media)
 }