export const verSaldo = (user) =>{
    if(!user) return { sucesso: false, erro: "Usuario nao definido"};
    return {sucesso: true, saldo: user.saldo};
}