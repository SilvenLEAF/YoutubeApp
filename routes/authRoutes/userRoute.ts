import { Router} from 'express';
import * as userController from '../../controllers/userController';



const router = Router();








router.get('/all', userController.get_all_users);
router.delete('/', userController.delete_account);
router.put('/', userController.update_account);

router.put('/changeEmail', userController.change_email);













export default router;