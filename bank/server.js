import express from "express";
import cors from "cors";

import {login, cadastrar} from "./src/backend/controllers/authController.js";
import { verSaldo } from "./src/backend/controllers/saldoController.js";
import { sacar, transferir } from "./src/backend/controllers/transferenciasController.js";
import { cadastrados } from "./src/backend/repository/database.js";
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// ------------------ auth

app.post("/cadastrar", (req, res)=>{
    const { nome, cpf } = req.body;
    res.json(cadastrar(nome.toUpperCase(), cpf));
});

app.post("/login", (req, res)=>{
    const { nome, cpf } = req.body;
    res.json(login(nome.toUpperCase(), cpf));
});

// ------------------ banco

app.get("/saldo/:cpf", (req, res)=>{
    const user = cadastrados.find(u => u.cpf === req.params.cpf);
    if(!user) return res.status(404).json({ erro: "usuario nao encontrado"});
    res.json(verSaldo(user));
});

app.post("/saque/:cpf", (req, res)=>{
    const user = cadastrados.find(u => u.cpf === req.params.cpf);
    if(!user) return res.status(404).json({ erro: "usuario nao encontrado"});
    res.json(sacar(Number(req.body.valor), user));
});

app.post("/transferencia/:cpf", (req, res)=>{
    const user = cadastrados.find(u => u.cpf === req.params.cpf);
    if(!user) return res.status(404).json({ erro: "usuario nao encontrado"});
    const { valor, destinatario } = req.body;
    res.json(transferir(Number(valor), user, destinatario));
});


// ------------------ server


app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})






