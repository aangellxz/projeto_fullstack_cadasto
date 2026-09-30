import { Pool } from "pg";

export async function connect() {

        if(global.connection){
        return global.conn
    };

    const pool = new Pool({
        connectionString: process.env.CONNECTION_STRING,
    });

    const client = await pool.connect();
    console.log("Criou o Pool de Conexão.");

    const res = await client.query("SELECT now()");
    console.log(res.rows[0]);
    client.release(); // Libera a conexão

    global.connection = pool; // Guarda nums área global da aplicação
    return pool.connect();
};

connect()