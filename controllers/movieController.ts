import { Request, Response, NextFunction } from 'express'

import * as imdb from 'imdb-api'




/* ------------------------------------
.           GET ONE MOVIE
------------------------------------ */
export const get_one_movie = async (req: Request, res: Response, next: NextFunction)=>{
  try {
    const { movieName } = req.body;

    const movie = await imdb!.get({name: movieName }, {apiKey: process.env.IMDB_API_KEY, timeout: 30000});
    
    
    res.json(movie);    

  } catch (
    err) {
    next({err, req, res});
  }
}



