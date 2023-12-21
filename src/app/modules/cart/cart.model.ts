import { Schema, model } from 'mongoose';
import { ICart } from './cart.interface';

const cartItem = new Schema<ICart>(
  {
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
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Cart = model<ICart>('cart', cartItem);
