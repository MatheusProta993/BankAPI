import { verSaldo } from "./src/backend/services/saldoService.js";
const verSaldoController = verSaldo();

export const verSaldo = (user) =>{
    return verSaldoController.verSaldo(user);
}
