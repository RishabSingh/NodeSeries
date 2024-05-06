var http=require('http'); //to create the server
var url=require('url'); //to parsed the url
const fs=require('fs'); // to read the file

const server=http.createServer(function(req,res){
        var q=url.parse(req.url,true);
        var filename="."+q.pathname;
        fs.readFile(filename,function (err,data){
            if(err){
                res.writeHead(404,{'content-Type':'text/html'});
                return res.end("404 ERROR");
            }
            res.writeHead(200,{'content-Type':'text/html'});
            res.write(data);
            return res.end();
        })
})

server.listen(3000,()=>{
    console.log("server running at 3000");
})