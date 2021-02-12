const mongoose = require("mongoose");

const {DB_CONFIG} = require("../config/secrets");

mongoose.connect(DB_CONFIG, {useNewUrlParser: true, useUnifiedTopology: true}).then(function(obj){
    //console.log(obj);
    console.log("db connected");
})

module.exports.mongoose = mongoose;