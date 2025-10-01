import { verSaldo as verSaldoService } from "./src/backend/services/saldoService.js";
const verSaldoController = verSaldoService();

export const verSaldo = (user) =>{
    return verSaldoController.verSaldo(user);
}
