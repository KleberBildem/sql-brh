let raio = 3.5;
let altura = 1.6;

let areaBase = Math.PI * (raio * raio);
let volumeMetrosCubicos = areaBase * altura;
let volumeLitros = Math.round(volumeMetrosCubicos * 1000);

document.write(`O volume da piscina (raio da base de 3,5m e altura 1,6m) é: `)
document.write('<br>');
document.write(volumeLitros);