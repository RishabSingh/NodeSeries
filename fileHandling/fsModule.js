const fs =require('fs');


//synchronous
fs.writeFileSync('./text.txt',"hello we are learning Node!!\n");
fs.appendFileSync('./text.txt',"my name is nodemon\n");


//asynchronous
fs.writeFile('./text1.txt',"hi everybody\n",(err)=>{})
fs.appendFile('text1.txt',"my name is rishab",(err)=>{});

//reading data from a file


//synchronous
const result=fs.readFileSync('./contact.txt','utf-8');
console.log(result);


//asynchronous
fs.readFile('./contact.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);

    }else{
        console.log(data);
    }
})
//creating a copy of a file
fs.cpSync('./text.txt','rishab.txt');

//deleting a file
fs.unlinkSync('./text1.txt');


//toCheck if a file exist or not 
console.log(fs.existsSync('./text.txt'));