import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { ICart } from './cart.interface';
import { Cart } from './cart.model';

const interIntoDb = async (payload: ICart): Promise<ICart> => {
  const res = await Cart.findOne({
    email: payload.email,
    productId: payload.productId,
  });
  if (res) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'already add to cart');
  }
  const result = await Cart.create(payload);
  return result;
};

const getAllData = async (payload: ICart): Promise<ICart[]> => {
  const result = await Cart.find({ email: payload.email });

  return result;
};

const deleteData = async (id: string) => {
  const result = await Cart.deleteOne({ _id: id });
  return result;
};

export const cartService = { interIntoDb, getAllData, deleteData };
