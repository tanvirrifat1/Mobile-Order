import express from 'express';

import { cartController } from './cart.controller';

const router = express.Router();

router.get('/total', cartController.getAllData);

router.delete('/:id', cartController.deleteData);
router.post('/create-cart', cartController.insertIntoDb);

export const CartRoutes = router;
