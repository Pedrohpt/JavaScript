/* 3.	Utilizando função com parâmetros, desenvolva o bloco de código capaz de receber o nome de uma determinada pessoa.
 Em um novo bloco de código(função), imprima a seguinte mensagem: “Bem vindo(a) nome informado”. Neste algoritmo teremos um mínimo de 02 funções.
*/

function recebeNome() {
    nome = window.prompt("Digite um nome: ")
    return nome
}

function imp(){
    window.alert("Bem vindo(a) " + nome)
}