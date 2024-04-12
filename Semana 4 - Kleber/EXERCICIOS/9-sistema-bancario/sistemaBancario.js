let chaveSeguranca;
let senhaRedefinida;
prompt('Informe a senha:');
let opcao = prompt('Senha incorreta. Seu cartão foi bloqueado. Se desejar ir a uma agência, digite "A" ou se '+
    'deseja desbloquear com sua chave de segurança, digite "D".');

if (opcao == 'A') {
    document.write('Será um prazer atendê-la em uma agência.');
} else if (opcao == 'D') {
    chaveSeguranca = prompt('Digite a chave de segurança que foi enviada para seu e-mail cadastrado');
    if (chaveSeguranca == 9999){
        senhaRedefinida = prompt('Redefina a senha:');
    } else {
        document.write('Você deve ir a uma agência!');
    }
}