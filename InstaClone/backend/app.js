const express = require('express');
const userRouter = require("./router/userRouter");
const app = express();



app.use( express.json() );

//for all user related functions navigate to userRouter
app.use("/api/user", userRouter);



let port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log(`server started at ${port}`);
})

