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

module.exports.findOneNinja = (req, res) => {
    Ninja.findOne({_id: req.params.id})
        .then(singleNinja =>{
           res.json({results: singleNinja}) 
        })
        .catch(err=> res.json({ message: 'Something went wrong', error: err }))
}

module.exports.createNewNinja = (req, res) => {
    console.log("REQ.BODY--->",req.body)
    Ninja.create(req.body) //req.body represents the form info
        .then(newlyCreatedNinja =>{
            res.json({results: newlyCreatedNinja})
        })
        .catch(err=> res.json({ message: 'Something went wrong', error: err }))
}


module.exports.updateNinja = (req,res)=>{
    Ninja.findOneAndUpdate(
        {_id: req.params.id}, //which ninja to update by _id
         req.body, //form info
         { new: true, runValidators: true } //return back teh newly updated ninja info
         )
        .then(updatedNinja=>{
            res.json({results: updatedNinja})
        })
        .catch(err=> res.json({ message: 'Something went wrong', error: err }))
}


module.exports.deleteNinja = (req,res)=>{
    Ninja.deleteOne({_id: req.params.id})
        .then(deletedNinja =>{
            res.json({results: deletedNinja})
        })
        .catch(err=> res.json({ message: 'Something went wrong', error: err }))
}



