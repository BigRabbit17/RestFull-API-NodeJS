const gdebug=require("debug")("debug:general");
const express=require("express");
const config=require("config")
const app=express();
const Joi=require("joi");
const logger=require("./middleware/logger");
const morgan=require("morgan");
const helmet=require("helmet");
const courses=require("./routes/courses")
const home=require("./routes/home")
const generes= require("./routes/generes")

//req-res processing pipeline / middlewere
app.use(helmet());
app.use(express.json());
app.use(logger);
app.use("/api/courses",courses);
app.use("/",home);
app.use("/api/generes",generes);


if (app.get("env") === "development")
{
    gdebug(`environment ${app.get("env")}`)
    app.use(morgan("tiny"));
}

app.listen(process.env.PORT||3000);
