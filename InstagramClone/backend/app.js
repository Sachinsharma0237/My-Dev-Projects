const express = require('express');
const requestRouter = require('./router/requestRouter');
const userRouter = require('./router/userRouter');
const postRouter = require('./router/postRouter')
const app = express();



app.use( express.static("public") );

app.use( express.json() )

//for all user related functions navigate to userRouter
app.use("/api/user", userRouter);


app.use("/api/request", requestRouter);

app.use("/api/post", postRouter);


let port = process.env.PORT || 4000;
app.listen(port, function(){
    console.log(`server started at ${port}`);
})

