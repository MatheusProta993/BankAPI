import { cadastrados } from "../repository/database.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

export const cadastrar = (nome, cpf) =>{
    const user = {name: nome, cpf: cpf, saldo: 0};
    cadastrados.push(user);
    return {sucesso: true, user};
}

export const login = (nome, cpf) =>{
        const usuarioLogado = cadastrados.find(n => n.name === nome && n.cpf === cpf);
        if (usuarioLogado){
            return {sucesso: true, user: usuarioLogado};
        } else{
            return {sucesso: false, erro: "Erro ao logar usuario"};
        }   
}

export const sacar = (valor, user) =>{
    if (isNaN(valor)) {
        return {sucesso: false, erro: "valor não numerico inserido."};
    }
    
    if (valor > 0) {
        user.saldo += valor;
        return {sucesso: true, novoSaldo: user.saldo};
    } else{
        return {sucesso: false, erro: "Saldo insuficiente para saque"};
    }
}

export const transferir = (valor, user) =>{
    if (isNaN(valor)) {
        return {sucesso: false, erro: "valor não numerico inserido."};
    }
    
    if (valor > 0 && valor <= user.saldo) {
        user.saldo -= valor;
        return {sucesso: true, novoSaldo: user.saldo};
    } else{
        return {sucesso: false, erro: "saldo insuficiente para transferência"};
    }
}

export const verSaldo = (user) =>{
    return {sucesso: true, saldo: user.saldo};
}
