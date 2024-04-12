let cidades = ['Belo Horizonte','São Paulo','Salvador','Campo Grande','Curitiba'];
let quantidadeClientes = [23,12,11,10,8];
let faturamento = [2950,3950,1329,2412,626];



let somaQuantidadeClientes = 0;
let i=0;
while (i <= quantidadeClientes.length - 1){
    somaQuantidadeClientes = somaQuantidadeClientes + quantidadeClientes[i];
    i++;
}
document.write(`Nas capitais de BH, SP, BA, MS e PR, Jéssica possui ${somaQuantidadeClientes} clientes. <br><br>`);

/*
2. Calcule a média de faturamento por cliente de cada cidade e obtenha como resultado strings semelhantes a:
"Faturamento médio por cliente:"
"Belo Horizonte: R$ 128"
"São Paulo: R$ 329"
"Salvador: R$ 121"
"Campo Grande: R$ 241"
"Curitiba: R$ 78"
Utilize Math.round()!
*/
let mediaFaturamento = [];
i = 0;
document.write('Faturamento médio por cliente: <br>')
while (i <= quantidadeClientes.length - 1){
    mediaFaturamento[i] = faturamento[i] / quantidadeClientes[i];
    document.write(cidades[i] + ': R$' + Math.round(mediaFaturamento[i]) + '<br>');
    i++;
}
document.write('<br>');
/*
3. Calcule a média de faturamento por cliente, com base em todos os clientes dessas cinco cidades e atribua o 
valor numa string semelhante a:
"Faturamento médio por cliente nas cinco cidades onde Jéssica mais tem clientes ativos é de R$ 176"
*/
let somaMediaFaturamento = 0;
i=0;
while (i <= faturamento.length - 1){
    somaMediaFaturamento = somaMediaFaturamento + faturamento[i];
    i++;
}
let mediaFaturamentoGeral = Math.round(somaMediaFaturamento / somaQuantidadeClientes);
document.write(`Faturamento médio por cliente nas cinco cidades onde Jéssica mais tem clientes ativos é `+
    `de R$${mediaFaturamentoGeral}`);
document.write('<br><br>');
/*
4. Sabendo que Jéssica oferece frete grátis para seus clientes e possui uma parceria com uma transportadora, 
considere as seguintes informações sobre os custos com frete que ela possui:

Frete fixo para o estado de São Paulo = R$ 9,00 por produto vendido
Frete para os demais estados do Brasil = R$ 14,00 por produto vendido
O custo de produção dos seus produtos representam 20% do valor faturado (descontando o valor do envio)
Com base nessas informações, ela quer automatizar o cálculo de seu lucro por cidade. Crie as lógicas de cálculos 
que serão implementadas no programa para preencher a coluna lucro. Utilize console.log() para fazer os testes e 
lembre-se de utilizar variáveis para armazenar valores.
*/
let lucroPorCidade = 0;
let frete = 0;
let custoProducao = 0;
document.write('Cidade---Quantidade de clientes---Faturamento---Lucro por cidade <br>');
i=0;
while (i <= quantidadeClientes.length - 1){
    if (cidades[i] == 'São Paulo'){
        frete = 9;
    } else {
        frete = 14;
    }
    lucroPorCidade = faturamento[i] - ( (frete * quantidadeClientes[i] ) + (faturamento[i] * 0.2));
    document.write(cidades[i] +'---'+ quantidadeClientes[i]+'---' + faturamento[i]+ '---' + Math.round(lucroPorCidade));
    document.write('<br>');
    i++;
}