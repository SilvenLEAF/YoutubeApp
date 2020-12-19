import { NextFunction, Request, Response, Router } from 'express';
import * as movieController from '../controllers/movieController';







const router = Router();




router.post('/', movieController.get_one_movie)



export default router;