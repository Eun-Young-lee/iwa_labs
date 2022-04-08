module.exports.UPLOAD_PATH = 'uploads';

const express=require("express"),
      router = express.Router(),
    //itemCtrl =require("./item-controller"),
    imageCtrl = require('./image-controller'),     
     userCtrl = require("./user-controller"),
     multer = require('multer'),
     upload = multer({ dest: module.exports.UPLOAD_PATH });

    //router.get("/:foo/:bar", itemCtrl.helloWorld);
    router.post('/users', userCtrl.createUser); 
    router.get('/users', userCtrl.getUsers); 
    router.get('/users/:id', userCtrl.getUser); 
    router.put('/users/:id', userCtrl.updateUser); 
    router.delete('/users/:id', userCtrl.deleteUser); 
    
module.exports = router;

