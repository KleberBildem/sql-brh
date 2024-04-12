a. nome (string)
b. telefone (string)
c. se possui convênio médico ou não (booleano)
d. profissão (string)
e. salário (number) */

let nome = 'Willian Cristiano Bertini';
let telefone = '(16)99719-8004';
let convenio = false;
let profissao = 'Desenvolvedor';
let salario = 8000;


let textoConvenio = convenio == true ? 'possui convênio' : 'não possui convênio';
let profissional = `O profissional ${nome}, telefone ${telefone}, ${textoConvenio}, profissão ${profissao} e salário R$${salario}.`;

document.write(profissional);