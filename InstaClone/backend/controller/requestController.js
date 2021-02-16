const followerModel = require("../model/followerModel");
const followingModel = require("../model/followingModel");
const userModel = require("../model/userModel");



async function sendRequest(req, res) {
    try{
        let { uid, followId } = req.body;
        let doc = await userModel.find({_id:followId}).exec();
        console.log(doc);
        if(doc[0].isPublic){
            //isPublic = true;
            await followingModel.create({
                uid,
                followId
            })
            await followerModel.create({
                uid:followId,
                followerId:uid
            })
            res.json({
                message:"request sent and accepted!"
            })
        }else{
             //isPublic = false;
            await followingModel.create({
                uid,
                followId,
                isAccepted:false
            })
            await followerModel.create({
                uid:followId,
                followerId:uid
            })
            res.json({
                message:"request sent and Pending!"
            })
        }
    }
    catch(error){
            res.json({
                message:"Failed to send request!",
                error
            })
    }
}


module.exports.sendRequest = sendRequest;