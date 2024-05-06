const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')


const app=express()

app.use(express.json())

const userSchema=new mongoose.Schema({
    regNo:Number,
    name:String,
    marks:Number
})

const Users=mongoose.model('users',userSchema);


mongoose.connect('mongodb://localhost:27017/new1')
    .then(()=>{
        console.log("database connected successfully");
    })
    const user1=new Users({
        regNo:1,
        name:"rishab",
        marks:56
        
    })
    const user2=new Users({
        regNo:2,
        name:"harsh",
        marks:85
        
    })
    const user3=new Users({
        regNo:3,
        name:"subham",
        marks:83
        
    })
    const user4=new Users({
        regNo:2,
        name:"satyam",
        marks:75
        
    })
    const user5=new Users({
        regNo:4,
        name:"dhruv",
        marks:80
        
    })

    user1.save()
    user2.save()
    user3.save()
    user4.save()
    user5.save()
        .then(()=>{
            console.log("users data is saved successfully")
        })
        .catch(()=>{
            console.log("error while saving data");
        })
    
    .catch(()=>{
        console.log("error while connecting to the database");
    })


app.post('/users',async(req,res)=>{
    const newMarks=req.body.marks;
    const userUpdate=await Users.findOneAndUpdate({ regNo: 2 }, { marks: newMarks });
    if(!userUpdate){
        console.log("error while updating the marks");
    }
    res.send("marks updated successfully");
})

app.get('/users/marksGreaterThan80',async(req,res)=>{
    try{
        const users = await Users.find({ marks: { $gt: 80 } }); 
        res.json(users);
        res.end();
   
    }catch(error){
        console.error("Error while fetching users:", error);
        res.status(500).send("Internal server error");
    }
    
})


app.listen(3000,()=>{
    console.log("Server listening at port number 3000");
})