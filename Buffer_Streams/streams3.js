const fs=require('fs');

const read=fs.createReadStream('./stream.txt');

const write=fs.createWriteStream('./stream1.txt');

read.pipe(write);

read.on('err',()=>{
    console.log("there is an error while writing the file");
})

write.on('err',()=>{
    console.log("there is an error while writing the file");
})

write.on('finish',()=>{
    console.log("data written successfully");
})