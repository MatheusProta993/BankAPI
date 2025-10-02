import { cadastrados, salvarBanco } from "../repository/database.js";

export const sacar = (valor, user) =>{
    if (!user) return { sucesso: false, erro: "Usuário não definido" };
    if (isNaN(valor)) return { sucesso: false, erro: "Valor não numérico" };
    if (valor <= 0) return { sucesso: false, erro: "Valor inválido" };
    if (valor > user.saldo) return { sucesso: false, erro: "Saldo insuficiente" };
    user.saldo -= valor;
    salvarBanco();
    return { sucesso: true, novoSaldo: user.saldo };
}

export const transferir = (valor, user, cpfDestinatario) =>{
    if(!user) return { sucesso: false, erro: "Usuario nao definido"};
    
    if (isNaN(valor)) return {sucesso: false, erro: "Valor não numerico inserido."};
    
    const destinatario = cadastrados.find(n => n.cpf === cpfDestinatario)
    if(!destinatario) return { sucesso: false, erro: "Destinatario nao encontrado"}

     if (valor <= 0 || valor > user.saldo) return { sucesso: false, erro: "Saldo insuficiente" };

    user.saldo -= valor;
    destinatario.saldo += valor;

    salvarBanco();

  return {
    sucesso: true,
    novoSaldo: user.saldo,
    saldoDestinatario: destinatario.saldo
  };
};