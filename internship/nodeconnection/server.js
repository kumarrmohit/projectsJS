const http=require("http")

const url=require("url")

http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("this is the info from front page")
    }
    if(req.url==="/gesturenames")
    {
        var username=['messi',"ronaldo","sachin"]
        res.end(JSON.stringify())
    }
    console.log("server running at 5000")
}).listen(5000)
