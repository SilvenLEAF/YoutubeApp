import { NextFunction, Request, Response, Router } from 'express';
import * as movieController from '../controllers/movieController';







const router = Router();




router.get('/movie', movieController.get_one_movie)



export default router;