const express=require('express');
const app=express();


const Port=process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'})
    res.write("hello we get your request");
    res.end();
})

app.post('/postReq',(req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'})
    res.write("hello we get your request");
    res.end();
})


app.listen(Port,()=>{
    console.log("server running at 3000");
})