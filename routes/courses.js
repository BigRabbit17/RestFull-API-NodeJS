const express=require("express");
const router=express.Router();
const mongo = require("../utils/mongoutils")
const validateReq=require("../utils/validateSchema")
const mongoUrl= process.env.MONGOURL

router.get("/",async (req,res)=>{

   const connection = await mongo.connect(mongoUrl)
   const result= await mongo.get(4)
   res.send(result)
   console.log(`Get ${req.url}`);
})

router.get("/:id",async (req,res)=>{
    const connection = await mongo.connect(mongoUrl)
    const queryresult = mongo.QueryById(req.params.id)
                .then((result)=>res.send(result))
                .catch((err)=>res.status(404).send("404 not found"))
    console.log(`Get ${req.url}`)
})

router.post("/",async (req,res)=>{
    console.log(`Post ${req.url}`);
    console.log(mongoUrl)
    const result= validateReq.validate(req.body,"post");
    if(result.error===null)
    {
        const connection = await mongo.connect(mongoUrl)
        const result= await mongo.insert(req.body)
        res.status(201).send(result);
        return;
    }
    if(result.error!=null)
    {
        res.status(400).send(result.error.details[0].message);
        return;
    }
})

router.put("/:id",async (req,res)=>{
    console.log(`Put ${req.url}`)
    const result=validateReq.validate(req.body,"put");    
    if(result.error!== null)
    {
        res.status(400).send(result.error.details[0].message);
        return;
    }
    else{
        const connection = await mongo.connect(mongoUrl)
        const findEntry=mongo.QueryById(req.params.id)
                    .then(async ()=>{
                        const result=await mongo.update({_id : req.params.id},req.body)
                        res.send("Updated")
                    })
                    .catch((err)=>res.status(404).send("404 not found"))
    }
})

router.delete("/",async (req,res)=>{
    console.log(`Delete ${req.url}`)
    const result=validateReq.validate(req.body,"delete");    
    if(result.error!== null)
    {
        res.status(400).send(result.error.details[0].message);
        return;
    }
    else{
        const connection = await mongo.connect(mongoUrl)
        console.log(req.body.id)
        const findEntry=await mongo.QueryById(req.body.id)
                    .then(()=>{
                        mongo.delete(req.body.id)
                        res.send("Deleted")
                    })
                    .catch((err)=>res.status(404).send("404 not found"))
        return
    }
})

module.exports=router;
