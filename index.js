const express = require("express") ; 
const serve = express();

serve.get("/" ,(req,res)=>
{
    res.send("hello")
    
} )
serve.get("/loveaum/:name" ,(req,res)=>
{
    let name = req.params.name ; 
    res.send( name   +" i love you"); 
    
} )

serve.listen(8000,()=>{
    console.log("Server Start => port 8000");
})
