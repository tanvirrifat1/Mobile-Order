import express from 'express';
import { mobileController } from './mobileOrder.controller';

const router = express.Router();

router.get('/', mobileController.getAllData);
router.post('/', mobileController.insertIntoDB);

export const mobileOrderRouter = router;
