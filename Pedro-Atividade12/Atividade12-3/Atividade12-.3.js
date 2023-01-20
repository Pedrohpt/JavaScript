idade = [0,0,0,0,0]

maior = parseInt(0);
menor = parseInt(0);

for (var i = 0; i < 5; i++) {
    idade[i] = parseInt(window.prompt("Digite a uma idade"));
}

for (var i = 0; i < 5; i++) {
    if (idade[i] >= 18) {
        maior = (maior + 1)
    }
}

menor = (5 - maior)

window.alert(maior + " são maiores de 18" + "\n" + menor + " são menores de 18")