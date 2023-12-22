"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartRoutes = void 0;
const express_1 = __importDefault(require("express"));
const cart_controller_1 = require("./cart.controller");
const router = express_1.default.Router();
router.get('/total', cart_controller_1.cartController.getAllData);
router.delete('/:id', cart_controller_1.cartController.deleteData);
router.post('/create-cart', cart_controller_1.cartController.insertIntoDb);
exports.CartRoutes = router;
