const Connection = require('mysql2/typings/mysql/lib/Connection');

async function connect(){
    //Confima se está conectado com a varável global
    if(global.connection && global.connection.state !== 'disconnected')
    return global.connection;

    const mysql = require('msql12/promise');
    const connection = await mysql.createConnection("mysql://root:root@localhost:3306/aula");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}
async function selectUsuario(){
    const conn = await connect();
    const [row] = await conn.query('SELECT * FROM usuario;');
}
module.exports = {selectUsuario}