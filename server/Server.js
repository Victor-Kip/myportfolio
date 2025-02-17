const express = require("express");
const cors = require("cors");
const mySql = require('mysql2');
require("dotenv").config();

const app = express();
const port = process.env.port || 5000

app.use(cors());
app.use(express.json());

const database = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'MyOscVic2@',
    database:'portfoliodb'
});

app.post('/feedback',(req,res)=>{
    const{message,email,fullName} = req.body;
    const sql = 'insert into feedback VALUES (?,?,?)';
    database.query(sql,[email,fullName,message]),(err,res)=>{
        if(err){
            console.error("Error inserting into database",err)
            return res.status(500).json({message:'sending failed',err})
        }
        else{
            res.status(201).json({message:'message sent successfully'})
        }
        
    }   
});

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})