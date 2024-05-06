
const fs=require('fs');
const zlib=require('zlib');


//compressing the file
const gzip=zlib.createGzip();

const read=fs.createReadStream('./zlib.txt');
const write=fs.createWriteStream('./zlib.txt.gz');

read.pipe(gzip).pipe(write);

write.on('error',()=>{
    console.log("there is an error");
})

write.on('finish',()=>{
    console.log('data compressed successfully');
})


//decompressing the file

// const unzip=zlib.createUnzip();

// const read=fs.createReadStream('./zlib.txt.gz');
// const write=fs.createWriteStream('zlib1.txt');

// read.pipe(unzip).pipe(write);

// write.on('error',()=>{
//     console.log("there is an error");
// })

// write.on('finish',()=>{
//     console.log('data decompressed successfully');
// })