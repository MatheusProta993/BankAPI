import { cadastrar, login, logout } from "./src/backend/services/authService.js";
const cadastrarController = cadastrar();
const loginController = login();
const logoutController = logout();

export const cadastrar = (nome, cpf) =>{
    return cadastrarController.cadastrar(nome, cpf);
}

export const login = (nome, cpf) =>{
    return loginController.login(nome, cpf);  
}

export const logout = () =>{
   return logoutController.logout();
}