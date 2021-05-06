const mysql = require('mysql');
const express = require('express');
const app = express();
const path = require('path');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');

app.use( express.json() );
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(fileUpload());

const mysqlConnection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Sachin@12345",
    database:"mydatabase",
    multipleStatements:true
})

mysqlConnection.connect( (error)=>{
    if(!error){
        console.log("DataBase Connected");
    }else{
        console.log("DB connection Faied", JSON.stringify(error));
    }
})

let port =  process.env.PORT || 3000;
app.listen( port, function(){
    console.log(`Server Started At port ${port}`);
})

app.post("/api/user/upload", function(req, res){
    if( req.method == "POST"){

        let {firstName, lastName, emailId, mobile, password}  = req.body;
        let fname = firstName;
        let lname = lastName;
        let mob = mobile;
        let email = emailId;
        let pass = password;

        if( !req.files ){
            return res.status(400).send("No files were uploaded")
        }else{
            let file = req.files.uploaded_image;
            let img_name = file.name;
            if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"||file.mimetype == "image/gif"){
                file.mv('public/images/' + file.name, function(error){
                    if( error ){
                        return res.status(500).send(err);
                    }else{                                                                                      
                        // let sql = "INSERT INTO `userdata` (`first_name`,`last_name`,`email_id`,`image`,`mob_no`,`password`)` VALUES ('" + fname + "', '" + lname + "', '" + email + "' , '" + img_name + "' , '" + mob + "' , '" + pass + "')";
                        let sql = `INSERT INTO userdata (first_name, last_name, email_id, image, mob_no, password) VALUES('${firstName}', '${lastName}', '${emailId}', '${img_name}', ${mobile}, '${password}' ); `
                        
                        mysqlConnection.query(sql, (error, result)=>{
                            if(!error){
                                res.json({
                                    message:"USer Created Successfully",
                                    result
                                })
                            }else{
                                res.json({
                                    message:"Failed to create user",
                                    error
                                })
                            }
                        })
                    }

                })
            }else{
                res.json({
                    message:"This format is not allowed , please upload file with '.png','.gif','.jpg'",
                })
            }

        }
    }
})