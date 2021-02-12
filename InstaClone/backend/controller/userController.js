const userModel = require("../model/userModel");


function createUser(req, res){
    userModel.create({
        name:"Sachin Sharma",
        username:"you_know_shady",
        bio:"an engineer",
        email:"sachinsharma0237@gmail.com",
        password:"12345",
        isPublic:"false",
    }).then(function(createdUser){
        res.json({
            createdUser
        })
    })
}


module.exports.createUser = createUser;