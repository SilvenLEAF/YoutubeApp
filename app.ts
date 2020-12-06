// modules to help developing
import dotenv from 'dotenv';     // to laod development variables on development mode
import chalk from 'chalk';      // chalk makes colorful console.logs only to make our development easier





if(process.env.NODE_ENV !== 'production'){
  // if we are on developemnt, load the development variables
  dotenv.config();
}




// core modules
import express, { Request, Response, NextFunction } from 'express';
import path from 'path'








// ----------------------------------FIRING EXPRESS APP
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, `client/build`)));








/* -----------------------------------------
.                   config
----------------------------------------- */
import './config/mongodbConfig'






/* -----------------------------------------
.                   routes
----------------------------------------- */



//                  mail routes
import ContactRoute from './routes/mailRoutes/ContactRoute'
app.use(ContactRoute);



// CATCH-ALL HANDLER
app.get('*', (req: Request, res: Response, next: NextFunction)=>{
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
})



// ERRORS HANDLER
app.use((errorObjectWithRequestAndResponse: {err: any, req: Request, res: Response})=>{
  const {err, req, res} = errorObjectWithRequestAndResponse;
  
  console.log(chalk.red(err.message));
  console.log(err);

  res.json({ msg: 'Server Error!', error: err.message });
})











// -----------------------------------------LISTEN
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${ PORT }`);
})