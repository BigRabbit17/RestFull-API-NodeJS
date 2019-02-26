const express = require("express");
const routes = express.Router();




const generes= [
    {"id":1,"name":"action"},
    {"id":2,"name":"horror"},
    {"id":3,"name":"scifi"},
    {"id":4,"name":"romance"},
    {"id":5,"name":"adventure"}
]


routes.get("/",(req,res)=>{
    res.status(200).send(generes);
})




module.exports=routes;


