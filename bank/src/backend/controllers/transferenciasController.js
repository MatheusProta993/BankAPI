import { sacar as sacarService, transferir as transferirService } from "../services/transferenciasService.js";

export const sacar = (valor, user) =>{
    return sacarService(valor, user);
}

export const transferir = (valor, user, destinatario) =>{
    return transferirService(valor, user, destinatario);
}