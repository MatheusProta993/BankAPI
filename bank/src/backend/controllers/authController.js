import { cadastrar as cadastrarService, login as loginService, logout as logoutService} from "./src/backend/services/authService.js";
const cadastrarController = cadastrarService();
const loginController = loginService();
const logoutController = logoutService();

export const cadastrar = (nome, cpf) =>{
    return cadastrarController.cadastrar(nome, cpf);
}

export const login = (nome, cpf) =>{
    return loginController.login(nome, cpf);  
}

export const logout = () =>{
   return logoutController.logout();
}