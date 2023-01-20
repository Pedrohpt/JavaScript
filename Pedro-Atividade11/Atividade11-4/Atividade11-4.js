var n = [0, 0, 0]

for (var i = 0; i < 3; i++) {
    n[i] = parseInt(window.prompt("Digite um numero"))
}

n.sort(function(a,b){
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});

document.write("Ordem crescente: " + n)