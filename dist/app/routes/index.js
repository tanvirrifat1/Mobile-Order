"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cart_routes_1 = require("../modules/cart/cart.routes");
const mobileOrder_routes_1 = require("../modules/mobileOrder/mobileOrder.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    // ... routes
    {
        path: '/mobile',
        route: mobileOrder_routes_1.mobileOrderRouter,
    },
    {
        path: '/cart',
        route: cart_routes_1.CartRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
