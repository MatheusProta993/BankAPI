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