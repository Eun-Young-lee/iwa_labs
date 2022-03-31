exports.helloWorld = function(req, res){   
        res.json({message: "hello world",
        data:[
            req.params.foo,
            req.params.bar
        ]});      

};