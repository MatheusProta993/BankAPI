import { cadastrados } from "../repository/database.js";

export let contaAtual = null;

export const cadastrar = (nome, cpf) =>{
    const user = {name: nome, cpf: cpf, saldo: 0};
    cadastrados.push(user);
    return {sucesso: true, user};
}

export const login = (nome, cpf) =>{
        contaAtual = cadastrados.find(n => n.name === nome && n.cpf === cpf);
        if (contaAtual){
            return {sucesso: true, user: contaAtual};
        } else{
            return {sucesso: false, erro: "Erro ao logar usuario"};
        }   
}

export const logout = () =>{
   contaAtual = null;
   return {sucesso: true, user: contaAtual};
}
