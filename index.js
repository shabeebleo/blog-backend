const express = require('express')
const cors = require('cors')
const app = express()


app.use(express.json());
app.get('/register',(req,res)=>{
res.json('test ok3')
})
app.use(cors())

app.listen(4000,()=>{
    console.log("app is running");
});


app.post('/register',(req,res)=>{
    const {username,password}=req.body
    console.log(username,password,"registeringgggg inputs")
    res.json({requestData:{username,password}})
    })

    