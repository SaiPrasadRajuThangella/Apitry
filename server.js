const express = require("express")

const server = express();

const PORT = 8888;
function    onStartFn(){
    console.log(`Server have been started on http://localhost:${PORT}`)
}

function handleEmptyRouteFn(req,res){
    res.send("Hello This is my first API")
}
function calculateSum(num){
    let sum = 0
    for(let i=1;i<=num;i++){
        sum =sum+i
    }
    return sum
}
function handleSum(req,res){
    // console.log(req.query);
    res.send(`sum started of ${req.query.number} and it is  ${calculateSum(req.query.number)}`)
}

server.get("/",handleEmptyRouteFn)

server.get("/sum", handleSum)
server.listen(PORT, onStartFn)
                                      