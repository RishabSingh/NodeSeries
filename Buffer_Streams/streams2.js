const express =require('express');
const fs=require('fs');

//use to check the memory usage of the system
const status=require('express-status-monitor');

const app=express();
app.use(status());

const Port=process.env.PORT || 8000;


//creating a stream to read data frm a file and send it to the user
app.get('/',(req,res)=>{
    const stream=fs.createReadStream('./stream.txt','utf-8');
        stream.on('data',(chunks)=>{
            res.write(chunks);
        })
        stream.on('end',()=>{
            res.end();
        })
    })


app.listen(Port,()=>{
    console.log(`server is running at port number ${Port} `);
})
