const userModel = require("../model/userModel");


async function createUser(req, res){  
    try{
        let userObject = req.body;
        let userCreated = await userModel.create(userObject);
        console.log(userCreated);
        res.json({
            message:"user created!!!",
            userCreated
        })
    }
    catch(error){
        console.log(error);
        res.json({
            message:"user not created!!!",
            error
        })
    }
}
function getAllUsers(req, res){
    
}
function getUserById(req, res){

}
function updateUserById(req, res){

}
function deleteUserById(req, res){

}



module.exports.createUser = createUser;
module.exports.getAllUsers = getAllUsers;
module.exports.getUserById = getUserById;
module.exports.updateUserById = updateUserById;
module.exports.deleteUserById = deleteUserById;