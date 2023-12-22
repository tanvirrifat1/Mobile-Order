"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mobileOrderRouter = void 0;
const express_1 = __importDefault(require("express"));
const mobileOrder_controller_1 = require("./mobileOrder.controller");
const router = express_1.default.Router();
router.get('/', mobileOrder_controller_1.mobileController.getAllData);
router.post('/', mobileOrder_controller_1.mobileController.insertIntoDB);
exports.mobileOrderRouter = router;
