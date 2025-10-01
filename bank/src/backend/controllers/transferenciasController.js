import { sacar as sacarService, transferir as transferirService } from "./src/backend/services/transferenciasService.js";
const sacarController = sacarService();
const transferirController = transferirService();

export const sacar = (valor, user) =>{
    return sacarController.sacar(valor, user);
}

export const transferir = (valor, user) =>{
    return transferirController.transferir(valor, user);
}