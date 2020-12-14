import { Request, Response, NextFunction } from 'express'

import * as imdb from 'imdb-api'




/* ------------------------------------
.           GET ONE MOVIE
------------------------------------ */
export const get_one_movie = async (req: Request, res: Response, next: NextFunction)=>{
  try {
    const movie = await imdb!.get({name: 'Tangled'}, {apiKey: process.env.IMDB_API_KEY, timeout: 30000});
    
    res.json(movie);
    

  } catch (
    err) {
    next({err, req, res});
  }
}



