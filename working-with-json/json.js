// const json={
//     name:"rishab",
//     roll:"21",
//     email:"ris@gmail.com"
// }


// //used to convert an object into an string
// const data=JSON.stringify(json);
// console.log(data);



//task

const fs=require('fs');

const object={
    name:"rishab",
    id:"01",
    email:"ris@gmail.com"
}

//converting the object into json 
const jsonData=JSON.stringify(object);

//writing the object into file
fs.writeFileSync('./Json.json',jsonData);

//reading the file
const objectData=fs.readFileSync('./Json.json');

//converting the json into a js object and printing it 
const data=JSON.parse(objectData);
console.log(data);

