var http = require('http');

const server=http.createServer(function(req,res){
        const url=req.url;

        res.write(url);
        res.end();
            //routing
        // if (url === '/') {
        //     res.writeHead(200, {'Content-Type': 'text/plain'});
        //     res.end('Welcome to the homepage!');
        // } 

        // if (url === '/about') {
        //     res.writeHead(200, {'Content-Type': 'text/plain'});
        //     res.end('Welcome to the About!');
        // } 

       
});

server.listen(3000,()=>{
    console.log("listening at port 3000");
})