"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mobile = void 0;
const mongoose_1 = require("mongoose");
const mobileItem = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    processor: {
        type: String,
        required: true,
    },
    memory: {
        type: String,
        required: true,
    },
    os: {
        type: String,
    },
    rating: {
        type: Number,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Mobile = (0, mongoose_1.model)('mobiles', mobileItem);
