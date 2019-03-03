const express=require("express");
const router=express.Router();
const Joi=require("joi");
const mongo = require("../utils/mongoutils")

function validateSchema(course,verb)
{
    if(verb==="post")
    {
        const schemaPost={
            name: Joi.string().min(2).required(),
            author: Joi.string().min(2).required(),
            tags : Joi.array().items(Joi.string()),
            ispublished : Joi.boolean().required()
        }
        return Joi.validate(course,schemaPost);
    }

    if(verb==="put")
    {
        const schemaPut={
            id: Joi.number().integer().min(1).required(),
            name: Joi.string().min(2).required()
        }
        return Joi.validate(course,schemaPut);
    }

    if(verb === "delete")
    {
        const schemaPut={
            id: Joi.number().integer().min(1).required(),
        }
        return Joi.validate(course,schemaPut);

    }
    

}

router.get("/",async (req,res)=>{

   const connection = await mongo.connect("mongodb://localhost:27017/playground")
   const result= await mongo.get(4)
   console.log("ageye",result)
   res.send(result)
   console.log(`Get ${req.url}`);
})

router.get("/:id",(req,res)=>{
    const course=courses.find(c => c.id === parseInt(req.params.id));
    console.log(`Get ${req.url}`)
    if(!course)
    {
        res.status(404).send("404 not found");
    } else
    {
        res.send(course);
    }
})

router.post("/",(req,res)=>{
    console.log(`Post ${req.url}`);
    
    const result= validateSchema(req.body,"post");
    if(result.error===null)
    {
        const course={
            id: courses.length+1,
            name: req.body.name
        }
        courses.push(course);
        res.status(201);
        res.send(course);
        return;
    }

    if(result.error!=null)
    {
        res.status(400).send(result.error.details[0].message);
        return;
    }
})

// router.post("/",(req,res)=>{
//     const result=validateSchema((req.body),"post")
//     if(result.error===null)
//     {
//         InsertIntoDb(req.body)
//         .then(res.send("succ"))
//         .catch((err)=>res.send(err))
//     }
//     else
//     {
//         res.send(result.error)
//     }

  
// })

router.put("/",(req,res)=>{
    //look for the course if not there then return 404
    //if the the course is found but the payload is not in good shape return 400
    //update the resource and send the updated response
    console.log(`Put ${req.url}`)
    const course=courses.find(c => c.id === parseInt(req.body.id));
 
    const result=validateSchema(req.body,"put");
    if(result.error!== null)
    {
        res.status(400).send(result.error.details[0].message);
        return;
    }
    else{
        if(!course)
        {
            res.status(404).send("404 not found");
            return;
        }
        else{
            course.name=req.body.name;  
            console.log(course);
            res.send(course);
        }
    }
})

router.delete("/",(req,res)=>{
    console.log(`Delete ${req.url}`)
    const result=validateSchema(req.body,"delete");
    if(result.error!== null)
    {
        res.status(400).send(result.error.details[0].message);
        return;
    }
    const course=courses.find(c => c.id === parseInt(req.body.id));
    if(!course)
    {
        res.status(404).send("404 not found");
        return;
    }

    const index=courses.indexOf(course);
    courses.splice(index,1);
    res.send(course);

})

module.exports=router;
