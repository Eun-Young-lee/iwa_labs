const express=require("express"),
    router = express.Router();

    app.get("/:foo/:bar", (req, res)=>{
        res.json({message: "hello world",
        data:[
            req.params.foo,
            req.params.bar
        ]});
      })

module.exports = router;

