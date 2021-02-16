const followerModel = require("../model/followerModel");
const followingModel = require("../model/followingModel");
const userModel = require("../model/userModel");



async function sendRequest(req, res) {
    try{
        let { uid, followId } = req.body;
        let doc = await userModel.find({_id:followId}).exec();
        console.log(doc);
        if(doc[0].isPublic=="true"){                    //isPublic = true;
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
            res.json({
                message:"Request sent and Pending!"
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

async function acceptRequest(req, res) {
    try{
        let{ uid, toBeAccepted } = req.body;
        let doc = await followingModel.find({followId:uid}).exec();
        console.log(doc);
        doc[0].isAccepted = true;
        await doc[0].save();
        await followerModel.create({
            uid,
            followerId : toBeAccepted
        });
        res.json({
            message:"Request Accepted!!!"
        })
    }
    catch(error){
        res.json({
            message:"failed to accept request!!!!",
            error
        })
    }
}

async function pendingRequests(req, res) {
    try{
        let {uid}= req.params;
        let docs = await followingModel.find({followId:uid, isAccepted:false}).exec();
        console.log(docs); 
        let requests = [];
        for(let i = 0; i < docs.length; i++){
            let uid = docs[i].uid;
            let user = await userModel.findById(uid);
            requests.push(user);
        }
        console.log(requests);
        res.json({
            message:"Succesfully got pending list",
            requests
        })
    }
    catch(error){
        res.json({
            message:"failed To Get List"
        })

    }
}


module.exports.sendRequest = sendRequest;
module.exports.acceptRequest = acceptRequest;
module.exports.pendingRequests = pendingRequests;
