import express from 'express';
import { CartRoutes } from '../modules/cart/cart.routes';
import { mobileOrderRouter } from '../modules/mobileOrder/mobileOrder.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/mobile',
    route: mobileOrderRouter,
  },
  {
    path: '/cart',
    route: CartRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
