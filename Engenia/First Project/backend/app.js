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

app.get("/user", function(req, res){
    
    mysqlConnection.query(' SELECT * FROM employee',(error, rows, fields)=>{
        if(!error){
            console.log(rows );
            res.json({
                message:"Successfully got All Users",
                rows
            })
        }else{
            console.log(error);
        }
    })
})

app.get("/user/:id", function(req, res){
    mysqlConnection.query('SELECT * FROM employee WHERE EmpID=?',[req.params.id], (error, rows, fields)=>{
        if( !error ){
            res.json({
                message:"Got user Successfully",
                rows
            })
        }else{
            res.json({
                message:"Failed to get user",
                error
            })
        }
    })
})

app.delete("/user/:id", function(req, res){
    mysqlConnection.query('DELETE FROM employee WHERE EmpId = ? ', [req.params.id], (error, rows, fields)=>{
        if( !error ){
            res.json({
                message:"User Deleted Successfully"
            })
        }else{
            res.json({
                message:"Failed to delete User",
                error
            })
        }
    })
})

app.post("/user/employees", function(req, res){
    let {EmpID, Name, EmpCode, Salary} = req.body;
    // console.log(EmpID, Name, EmpCode, Salary);
    let val = "INSERT INTO employee (EmpID, Name, EmpCode, Salary) VALUES ?";
    let values = [
        [ EmpID, Name, EmpCode, Salary ]
    ]
    mysqlConnection.query( val, [values], function(error, result){
        if( !error ){
            res.json({
                message:"User Created"
            })
        }else{
            res.json({
                error
            })
        }
    })
})

app.put("/user/update/:id", function(req, res){
    let id = req.params.id;
    let { Name, EmpCode, Salary } = req.body;
    let sql = `UPDATE employee SET
                Name = '${Name}',
                EmpCode = '${EmpCode}',
                Salary = ${Salary}
                WHERE EmpID = ${id}`
    console.log(sql);        
    mysqlConnection.query(sql, (error, result)=>{
        if(!error){
            res.json({
                message:"User updated",
                result    
            })
        }else{
            res.json({
                message:"Failed to update user",
                error
            })
        }
    })            
})

