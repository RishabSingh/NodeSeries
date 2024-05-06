const fs=require('fs');

fs.readFile('./Json.json',(err,data)=>{
    if(err){
        console.log("Error while reading the data")
    }else{
        const content=JSON.parse(data);
        console.log(content);
    }
    })