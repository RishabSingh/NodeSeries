const connect=require('connect')
const app=connect()


function logger(req,res,next){
    console.log(`${req.url} and ${req.method}`);
    next();
}

app.use(logger);


app.use((req,res)=>{
    console.log("hello from connect");
})

app.listen(3000,()=>{
    console.log("server listening at port 3000");
})