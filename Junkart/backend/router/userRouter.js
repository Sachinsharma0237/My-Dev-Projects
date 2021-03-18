const { createUser, updateUser } = require("../controller/userController");
const userRouter = require("express").Router();

userRouter.route("").post(createUser).patch(updateUser);

module.exports = userRouter;