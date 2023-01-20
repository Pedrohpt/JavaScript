var n = parseInt(window.prompt("Digite um numero inteiro"));

while (n < 0) {
    var n = parseInt(window.prompt("Número regeitado"+ "\n" + "Digite um numero inteiro"));
}

var total=n/2;
if(n%2 == 0){
	result = ("Par");
}else{
	result = ("Impar");
}

quadrado = (n**2);

window.alert(n + " é " + result + "\n" + n + " ao quadrado é: " + quadrado)