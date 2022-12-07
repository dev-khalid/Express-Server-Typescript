import express,{Request,Response,NextFunction,Application,ErrorRequestHandler} from 'express'; 
import createHttpError from 'http-errors';
import {Server} from 'node:http'
const app:Application = express(); 
app.get('/',(req:Request,res:Response,next:NextFunction)=> {
    res.send('Hello from typescript application Server!'); 
 }); 


app.use((req:Request,res:Response,next:NextFunction)=> { 
    next(new createHttpError.NotFound()); 
})
const errorHandler:ErrorRequestHandler = (err,req,res,next) => { 
    res.status(err?.status || 500)
    res.send(
        {
            status:err.status||500,
            message:err.message
        }
    )
}
app.use(errorHandler); 

app.listen(5000,()=> { 
    console.log('Server running on port : 5000'); 
})