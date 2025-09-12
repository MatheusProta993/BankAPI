import { sacar, transferir } from "./src/backend/services/transferenciasService.js";
const sacarController = sacar();
const transferirController = transferir();

export const sacar = (valor, user) =>{
    return sacarController.sacar(valor, user);
}

export const transferir = (valor, user) =>{
    return transferirController.transferir(valor, user);
}