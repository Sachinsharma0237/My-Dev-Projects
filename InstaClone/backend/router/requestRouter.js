const { sendRequest,acceptRequest, pendingRequests, deleteRequest, cancelRequest, unfollow, getAllFollowing, getAllFollowers, getSuggestions, deleteFollower
} = require("../controller/requestController");
const requestRouter = require("express").Router();

requestRouter.route("").post(sendRequest).get(getAllFollowing);
requestRouter.route("/followers").get(getAllFollowers).delete(deleteFollower)
requestRouter.route("/accept").post(acceptRequest);
requestRouter.route("/suggestion").get(getSuggestions);
requestRouter.route("/:uid")
.get(pendingRequests)
.delete(deleteRequest)
.patch(cancelRequest)
.post(unfollow);


module.exports = requestRouter;