const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

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
    }else{console.log("Connection Successfully✅")};
})

app.post('/api/register', (req, res) => {

    console.log("BODY RECEIVED:", req.body);

    const { full_name, role, email, mobile_no, gender, password } = req.body;

    const query = `
        INSERT INTO user_register
        (full_name,email,password,mobile_no,role,gender)
        VALUES (?,?,?,?,?,?)
    `;

    con.query(
        query,
        [full_name, email, password, mobile_no, role, gender],
        (err, result) => {

            if (err) {
                console.log("SQL ERROR:", err);
                return res.status(500).json({
                    error: err.sqlMessage
                });
            }

            res.json({
                message: "Data Inserted",
                userId: result.insertId
            });
        }
    );
});

const PORT = 1337;
app.listen(PORT,()=>{
    console.log(`Server running on https://Localhost:${PORT}.`);
})

