import { Request, Response, NextFunction } from 'express'






/* ------------------------------------
.           GET ONE MOVIE
------------------------------------ */
export const get_one_movie = async (req: Request, res: Response, next: NextFunction)=>{
  try {
        
    res.json(`Hello there! I'm SilvenLEAF`);    

  } catch (
    err) {
    next({err, req, res});
  }
}



