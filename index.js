import 'dotenv/config'
import * as db from "./db.js"
import express from "express"

const port = process.env.PORT;
const app = express();

app.use(express.json());

app.get("/", (req, res) =>{
    res.json({
       message: "Funcionando"
    });
});

app.listen(port);
console.log("Back-end rodando!");
