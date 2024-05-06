var http=require('http');
var url=require('url');


const server=http.createServer(function(req,res){

    //response header
   res.writeHead(200,{'content-type':'text/html'})

   var q=url.parse(req.url,true).query;
   var txt=q.year+ " "+ q.month;
   res.end(txt);

})

server.listen(3000,()=>{
    console.log("server listening at 3000");
})