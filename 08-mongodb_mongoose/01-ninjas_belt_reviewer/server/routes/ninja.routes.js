//import the controller file and give it a variable name to reference
const NinjaController = require("../controllers/ninja.controller")
const Ninja = require("../models/ninja.model")

module.exports = (app)=>{
    app.get("/api/hello", NinjaController.sayHello)
    //more routes here
    app.get("/api/ninjas", NinjaController.findAllNinjas)

    app.post("/api/ninjas", NinjaController.createNewNinja)

    app.get("/api/ninjas/:id", NinjaController.findOneNinja)

    app.put("/api/ninjas/:id", NinjaController.updateNinja)
    
    app.delete("/api/ninjas/:id", NinjaController.deleteNinja)    
    

}