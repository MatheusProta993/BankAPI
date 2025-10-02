import { verSaldo as verSaldoService } from "../services/saldoService.js";

export const verSaldo = (user) =>{
    return verSaldoService(user);
}
