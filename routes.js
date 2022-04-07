const express=require("express"),
      router = express.Router(),
      itemCtrl =require("./item-controller"),
      userCtrl = require("./user-controller");

    router.get("/:foo/:bar", itemCtrl.helloWorld);
    router.post('/users', userCtrl.createUser); 
    router.get('/users', userCtrl.getUsers); 
    router.get('/users/:id', userCtrl.getUser); 
    router.put('/users/:id', userCtrl.updateUser); 

    
module.exports = router;

