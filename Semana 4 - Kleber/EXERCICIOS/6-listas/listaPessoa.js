var pessoa = ["Willian Cristiano Bertini","30","587.021.025-77", 1.78, true];

let i = 0;
while (i <= (pessoa.length - 1)){
    document.write(pessoa[i] + '<br>');
    i++;    
}
document.write('<br>');

/*
2. Crie um programa que recebe uma quantidade máxima de 10 de letras e ao final exibe todas elas no console.

Crie uma função chamada recebeLetra para pegar a letra e colocar na lista de letras.
*/
var letras = [];
let letraInformada;

function recebeLetra(){
    letraInformada = prompt("Informe uma letra: ");
    letras.push(letraInformada);
}

for (j = 1; j<=10; j++) {
    recebeLetra();
}

for (k = 0; k < (letras.length); k++){
    document.write(letras[k] + '<br>');
}

/*
3. Considerando o exercício anterior, refaça ele criando uma lista que irá armazenar as letras e em seguida 
mostre no console:

a) A primeira letra digitada
b) A quarta letra digitada
c) A quinta letra digitada
d) A última letra digitada
e) O tamanho da lista criada
*/
document.write('<br>');
document.write(`Primeira letra digitada: ${letras[0]} <br>`);
document.write(`Quarta letra digitada: ${letras[3]} <br>`);
document.write(`Quinta letra digitada: ${letras[4]} <br>`);
document.write(`Última letra digitada: ${letras[letras.length-1]} <br>`);
document.write(`Tamanho da lista criada: ${letras.length}`);