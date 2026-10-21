import 'dotenv/config'
import cors from "cors"
import * as db from "./db.js"
import express from "express"

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/clientes", async(req, res) =>{
 const clientes = await db.selectClientes();
 res.json(clientes);
});

app.post("/clientes", async (req, res) =>{
    await db.insertClientes(req.body);
    res.sendStatus(201)
});

app.listen(port);
console.log("Back-end rodando!");
