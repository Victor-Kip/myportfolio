const express = require("express");
const cors = require("cors");
const mySql = require('mysql2');
require("dotenv").config();

const app = express();
const port = process.env.port || 5000

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use(express.json());

const database = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'MyOscVic2@',
    database:'portfoliodb'
});

app.post('/feedback', (req, res) => {
    const { message, email, fullName } = req.body;
  
    // Validate the input
    if (!message || !email || !fullName) {
      return res.status(400).json({ error: 'All fields (message, email, fullName) are required.' });
    }
  
    const sql = 'INSERT INTO feedback (name, email , message) VALUES (?, ?, ?)';
    database.query(sql, [fullName,email, message], (err, result) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ error: 'Failed to submit feedback. Please try again later.' });
      }
  
      // Success response
      res.status(200).json({ message: 'Message sent successfully!' });
    });
  });

app.get('/getfeedback',(req,res)=>{
  const sql = 'SELECT * FROM feedback';
  database.query(sql,(err,result)=>{
    if(err){
      console.log("An error occured",err.stack)
    }
    return res.json(result)
  })
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})