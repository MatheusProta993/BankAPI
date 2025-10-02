import fs from "fs";
import path from "path";

const ARQUIVO_DATABASE = path.resolve("./src/backend/repository/database.json");

export let cadastrados = JSON.parse(
    fs.existsSync(ARQUIVO_DATABASE) ? fs.readFileSync(ARQUIVO_DATABASE, "utf-8") : "[]"
);

export const salvarBanco = () => {
    fs.writeFileSync(ARQUIVO_DATABASE, JSON.stringify(cadastrados, null, 2));
}