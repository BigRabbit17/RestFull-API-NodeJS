const Joi=require("joi");

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
            name: Joi.string().min(2),
            author: Joi.string().min(2),
            tags : Joi.array().items(Joi.string()),
            ispublished : Joi.boolean()
        }
        return Joi.validate(course,schemaPut);
    }

    if(verb === "delete")
    {
        const schemaPut={
            id: Joi.string().min(1).required(),
        }
        return Joi.validate(course,schemaPut);

    }
    

}

exports.validate=validateSchema