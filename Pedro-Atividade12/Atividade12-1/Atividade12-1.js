nota = [0,0,0,0,0]

soma = 0

for (var i = 0; i < 5; i++) {
    nota[i] = parseFloat(window.prompt("Digite a uma nota"));
}


for(var i = 0; i < nota.length; i++) {
    soma += nota[i];
}

media = (soma / 5)

window.alert("A média das notas é:" + media)