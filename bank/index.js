import {login, cadastrar, sacar, transferir, verSaldo, contaAtual, logout} from "./src/controllers/func.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

function menuPrincipal(){
    
    while (true){
    
    console.log("1 - CADASTRO");
    console.log("2 - LOGIN");
    console.log("0 - SAIR");    
    let resp = prompt();
    switch (resp) {
        case "1":
            let nomeCadastro = prompt("Insira seu nome para cadastro: ").toUpperCase();
            const cpfCadastro = prompt("Insira seu cpf para cadastro: ");
            const resultadoCadastro = cadastrar(nomeCadastro, cpfCadastro);
            if (resultadoCadastro.sucesso) {
                console.log("Sucesso ao cadastrar usuario:", resultadoCadastro.user);
                // return resultadoCadastro.user; entraria como se tivesse logado direto
            } else {
                console.log("Falha ao cadastrar:", resultadoCadastro, resultadoCadastro.user);
            }
            break;
        case "2":
            let nomeLogin = prompt("Insira seu nome: ('#' para voltar)").toUpperCase();
            if (nomeLogin === '#') return null;
            const cpfLogin = prompt("Insira seu cpf: ('#' para voltar)");
            if (cpfLogin === '#') return null;
            const resultadoLogin = login(nomeLogin, cpfLogin);
            if (resultadoLogin.sucesso) {
                console.log("Sucesso ao logar:",resultadoLogin.user);
                return resultadoLogin.user; 
            } else{
                console.log("Erro ao logar:",resultadoLogin.erro);
            }
            break;
        case "0":
            console.log("saindo do banco...");
            process.exit(0);
        default:
            console.log("Opcao invalida")
            break;
        }
    }   
}

function menuBanco (usuario) {
    while (contaAtual) {
    console.log("1 - VER SALDO");
    console.log("2 - TRANSFERIR");
    console.log("3 - SACAR");
    console.log("0 - LOGOUT");
    let resp = prompt();
    switch (resp) {
        case "1":
            const resultadoSaldo = verSaldo(usuario);
            console.log(resultadoSaldo.saldo);
            break;
        case "2":
            const valorTransferencia = Number(prompt("insira valor para transferência"));
            const resultadoTransferencia = transferir(valorTransferencia, usuario);
            if (resultadoTransferencia.sucesso) {
                console.log("Sucesso na transferencia de", valorTransferencia);
                console.log("Novo saldo de:",resultadoTransferencia.novoSaldo);
            } else{
                console.log("Erro ao transferir",resultadoTransferencia.erro);
            }
            break;
        case "3":
            const valorSaque = Number(prompt("insira valor para saque: "));
            const resultadoSaque = sacar(valorSaque, usuario);
            if (resultadoSaque.sucesso) {
                console.log("Sucesso no saque de", valorSaque);
                console.log("Novo saldo de: ",resultadoSaque.novoSaldo);
            } else{
                console.log("Erro ao sacar", resultadoSaque.erro)
            }
            break;
        case "0":
            logout();
        default:
            break;
        }
    }
}
function main(){
    while (true) {
        const usuario = menuPrincipal();
        if (!usuario) continue; // pra quando digitar #
        menuBanco(usuario);
    }
}
main();

