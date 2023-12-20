import express from 'express';
import { mobileOrderRouter } from '../modules/mobileOrder/mobileOrder.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/mobile',
    route: mobileOrderRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
