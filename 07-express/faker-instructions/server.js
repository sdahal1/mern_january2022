const faker = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;


class User{
    constructor(){
        this._id= faker.datatype.uuid();
        this.firstName = faker.name.firstName();
    }
}


//route
app.get("/api/users/new", (req,res)=>{
    let newUser = new User()

    res.json({result:newUser})
})





app.listen( port, () => console.log(`Listening on port: ${port}`) );