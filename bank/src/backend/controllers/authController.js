import { cadastrar as cadastrarService, login as loginService} from "../services/authService.js";

export const cadastrar = (nome, cpf) =>{
    return cadastrarService(nome, cpf);
};

export const login = (nome, cpf) =>{
    return loginService(nome, cpf);  
};

