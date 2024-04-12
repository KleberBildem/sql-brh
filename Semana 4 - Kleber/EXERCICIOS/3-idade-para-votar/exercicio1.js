let idade = prompt("Informe a idade");

if (idade >= 18 & idade <= 70){
    document.write('Voto obrigatório!');
} else if (idade < 16) {
    document.write('Não pode votar!')
} else document.write('Voto opcional!')
