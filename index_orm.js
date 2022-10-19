(async() =>{
    const database = require ('./model/services/dborm');
    const Cliente =  require('./model/entidade/cliente');

    console.log(' Criar tabela =======================');
    const resultado = await database.sequelize.sync();
    console.log(resultado);
})();