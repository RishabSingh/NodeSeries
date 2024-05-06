const bodyParser = require('body-parser');
const express=require('express')

const app=express();



app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
        res.sendFile(__dirname+'/post.html');
})


app.post('/submit',(req,res)=>{
    const name=req.body.name;
    const reg=req.body.registration;

    res.send(`name of the user is ${name} and the registration number is ${reg}`);
})


app.listen(3000,()=>{
    console.log("server listening at port 3000");
})