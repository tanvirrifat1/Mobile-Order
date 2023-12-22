"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const mongoose_1 = require("mongoose");
const cartItem = new mongoose_1.Schema({
    name: {
        type: String,
    },
    details: {
        type: String,
    },
    image: {
        type: String,
    },
    processor: {
        type: String,
    },
    memory: {
        type: String,
    },
    type: {
        type: String,
    },
    price: {
        type: String,
    },
    email: {
        type: String,
    },
    productId: {
        type: String,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Cart = (0, mongoose_1.model)('cart', cartItem);
