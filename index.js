const express = require("express");


const app = express();

app.get("/", function(req, resp){
resp.send("Funcionoooouuuu");
})

app.get("/contato", function(req, resp){
    resp.send("Pág de contato :) rrrrrrrrr ");
    })

    app.get("/produto", function(req, resp){
        resp.send("Pág de produto");
        })

//esta sempre deve ser a última linha quando usamos o express

app.listen(8081, function(){

    console.log("Servidor funcionando na url http://localhost:8081")

});
