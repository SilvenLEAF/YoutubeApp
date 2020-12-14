import { NextFunction, Request, Response, Router } from 'express';

import * as imdb from 'imdb-api'



const router = Router();




router.get('/movie', async(req: Request, res: Response, next: NextFunction)=>{

    const movie = await imdb!.get({name: 'Tangled'}, {apiKey: process.env.IMDB_API_KEY, timeout: 30000});
    
    res.json(movie);

    
 
})



export default router;