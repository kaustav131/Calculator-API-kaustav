// Add the Calculator APIs

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname))
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/main.html'));
});

//your code here

app.post('/add', (req, res)=>{
  const {num1, num2} = req.body
  if(typeof num1 != Number || typeof num2 != Number)
  return res.send({status: "error"})
  res.send({          
    status: "success",  
    message: "the sum of given two numbers",  
    sum: num1+num2
    })
})

module.exports = app;
