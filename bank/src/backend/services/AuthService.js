import { cadastrados as cadastradosDB, salvarBanco } from "../repository/database.js";

export const cadastrar = (nome, cpf) =>{
    const existe = cadastradosDB.find(u => u.cpf === cpf);
    if (existe) return { sucesso: false, erro: "cpf já cadastrado"};
    const user = {name: nome, cpf: cpf, saldo: 200};
    cadastradosDB.push(user);
    salvarBanco();
    return {sucesso: true, nome: user.name, cpf: user.cpf};
}

export const login = (nome, cpf) =>{
        const user = cadastradosDB.find(n => n.name === nome && n.cpf === cpf);
        if (user){
            return {sucesso: true, user: user};
        } else{
            return {sucesso: false, erro: "Usuario nao encontrado"};
        }   
}


