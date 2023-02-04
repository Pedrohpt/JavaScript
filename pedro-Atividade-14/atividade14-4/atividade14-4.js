/* 4.Utilizando função, desenvolva um algoritmo capaz de receber um número inteiro e positivo qualquer (n).
 Calcular o fatorial do número informado. 
Vejamos: 
1! = 1.
N = 5.
5! = 5 * (5-1)  *  (5-2) * (5-3) * (5-4).
5! = 120.
*/

n = parseInt(window.prompt("Digite um número: "))
result = n

function fatorial() {
    for (i = 1; i < n; i++) {
        result *= i
        }
        
        alert(result)
    }