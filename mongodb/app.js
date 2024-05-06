const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')

const app=express()

app.use(bodyParser.json());

const userSchema=new mongoose.Schema({
    name:String,
    email:String

})

const User= mongoose.model('users',userSchema);
//console.log(User.schema.obj);




mongoose.connect('mongodb://localhost:27017/config')
    .then(()=>{
        console.log("connected to mongodb");
    })

    const newUser1 = new User(
        {
        name: 'John Doe',
        email: 'john@example.com'
        }
    );

    const newUser2 = new User(
        {
        name: 'Sam Altman',
        email: 'sam@example.com'
        }
    );

    newUser1.save()
    newUser2.save()

        .then(() => {
            console.log('Users saved successfully:');
        })
        .catch(error => {
            console.error('Error saving user:', error);
        })

    .catch(()=>{
        console.log("error")
    })

app.listen(3000,()=>{
    console.log("server running at port 3000")
})




