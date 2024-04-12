let numero1 = 9;
let numero2 = 8;

document.write(`Número um: ${numero1}`);
document.write('<br>');
document.write(`Número dois: ${numero2}`);
document.write('<br>');
document.write('<br>');

document.write('Variáveis trocadas:');
document.write('<br>');
let troca = numero1;
numero1 = numero2;
numero2 = troca;

document.write(`Número um: ${numero1}`);
document.write('<br>');
document.write(`Número dois: ${numero2}`);
