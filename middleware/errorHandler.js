const { stack } = require("../routes/users");

const notFound = (req,res,next )=>{
    const error = new Error(
        'Not found: ${req.originalUrl}'
    );
    res.status(404);
    next(error);
};
 const errorHandler = (err,req,res,next)=>{
  const statuscode = res.statusCode  == 200? 500 : res.statusCode;
   req.status(statuscode);
   req.json({message:err?.message,
stack:err?.stack

   });
 } 

 module.exports= {errorHandler,notFound}