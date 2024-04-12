let base;
let altura;
let raio;

let areaRetangulo;
function calculoAreaRetangulo(){
    areaRetangulo = base * altura;
    document.write(`Área do retângulo: ${areaRetangulo} <br>`);
}

let areaCirculo;
function calculoAreaCirculo(){
    areaCirculo = 3.14 * (raio * raio);
    document.write(`Área do círculo: ${areaCirculo} <br>`);
}

let areaTriangulo;
function calculoAreaTriangulo(){
    areaTriangulo = (base * altura)/2;
    document.write(`Área do triângulo: ${areaTriangulo} <br>`);
}

base = 12;
altura = 5;
raio = 3;

calculoAreaRetangulo();
calculoAreaCirculo();
calculoAreaTriangulo();
