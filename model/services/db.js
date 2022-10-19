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

async function insertUsuario(usuario){
    const conn = await connect();
    const sql = 'INSERT INTO usuario(nome,senha) VALUES (?,?);';
    const values = [usuario.nome, usuario.senha];
    return await conn.query(sql, values);
}

module.exports = {selectUsuario, insertUsuario}

async function deleteUsuario(id){
    const conn = await connect();
    const sql = 'DELETE FROM usuario where id=?;';
    return await conn.query(sql, [id]);
}

module.exports = {selectUsuario, insertUsuario, deleteUsuario}

async function updateUsuario(id, usuario){
    const conn = await connect();
    const sql = 'UPDATE usuario SET nome=?, senha=? WHERE id=?';
    const values = [usuario.nome, usuario.senha, id];
    return await conn.query(sql, values);
}

module.exports = {selectUsuario, insertUsuario, deleteUsuario, updateUsuario}