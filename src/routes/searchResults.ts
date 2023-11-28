import { Router, Request } from 'express';
import RequestController from '../controllers/ResultController';
const router = Router();


router.get('/', RequestController.getResults);

// router.get('/seed', RequestController.seedResults);

export default router;