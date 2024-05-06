const fs=require('fs');


//don't take callback as a parameter 
const read= fs.createReadStream(__dirname + '/stream.txt','utf-8');


//on event listener
read.on('data',function(chunk){
        console.log("data received");
        console.log(chunk);
})

read.on('error',function(){
    console.log('err occur while passing the data');
})

