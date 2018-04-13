module.exports = function(app){
    app.get('/produtos',function(res,res){
        var connection = app.infra.connectionFactory();
        
        var produtosBanco = app.infra.produtosBanco;
        
        produtosBanco.lista(connection, function(erro,result){
            res.render('produtos/lista',{lista:result});
        });

        connection.end();
        // consulta
    });
}