const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

//database connectivity
const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"db_team",
});

con.connect(err=>{
    if(err){
        console.error("Connection Failed❌");
    }else{console.log("COnnection Successfully✅")};
})

const PORT = 1337;
app.listen(PORT,()=>{
    console.log(`Server running on https://Localhost:${PORT}.`);
})