const http=require("http");
const fs=require('fs');

const server=http.createServer(function(req,res){

    if(req.url=="/")
    {
        res.end( "This is the Home Page")
    }

    if(req.url=="/about")
    {
        res.end("This is the About Page");
    }

    if(req.url=="/contact")
    {
        res.end("This is the About Page");
    }
})

    async function createNewFile() {
        try {
            const data = await fs.writeFileSync('demo.txt', 'Hello World!');
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    }

(async ()=>{
    await createNewFile();
})();

server.listen(5500,function(){
    console.log("It's listening on 5500 PORT");
});