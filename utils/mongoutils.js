const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name : String,
    author : String,
    tags : [String],
    date : {type : Date , default : Date.now },
    ispublished : Boolean
})

async function MongoConnection(url)
{
    mongoose.connect(url,{ useNewUrlParser: true })
        .then(()=>console.log("connection succesfull"))
        .catch((err)=>console.log(`Error while connecting to mongo ${err}`))
}

async function InsertIntoDb(req){
    const Course = mongoose.model("Course",schema)
    const course = new Course(req)
    const result = await course.save()
    console.log(result)
    const closeResults= mongoose.disconnect()
            .then((re)=> console.log(`close connection : ${re}`))
    
}

async function QueryFromMongo(limit)
{
        const Course = mongoose.model("Course",schema)
        const result = await Course.find().limit(limit)
        console.log(result)
        return result
}

exports.connect=MongoConnection
exports.insert=InsertIntoDb
exports.get=QueryFromMongo