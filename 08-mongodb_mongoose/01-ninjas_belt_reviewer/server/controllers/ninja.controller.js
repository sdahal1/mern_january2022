//The controller needs to be able to talk to the model (the code that represents the DB table)
const Ninja = require('../models/ninja.model');

module.exports.sayHello = (req,res)=>{
    res.json({msg: "hello mongoose modularized!!"})
}

module.exports.findAllNinjas = (req, res) => {
    Ninja.find()
        .then(allNinjas=>{
           res.json({results: allNinjas}) 
        })
        .catch(err=> res.json({ message: 'Something went wrong', error: err }))
}


// module.exports.findOneNinja = (req, res) => {
//     Ninja.findOne()
//     // User.findOne({ _id: req.params.id })
//     //     .then(oneSingleUser => res.json({ user: oneSingleUser }))
//     //     .catch(err => res.json({ message: 'Something went wrong', error: err }));
// }

module.exports.createNewNinja = (req, res) => {
    console.log("REQ.BODY--->",req.body)
    Ninja.create(req.body) //req.body represents the form info
        .then(newlyCreatedNinja =>{
            res.json({results: newlyCreatedNinja})
        })
        .catch(err=> res.json({ message: 'Something went wrong', error: err }))
}




