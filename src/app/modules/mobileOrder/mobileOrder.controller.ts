import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { mobileFilterableFields } from './mobileOrder.constants';
import { IMobile } from './mobileOrder.interface';
import { mobileService } from './mobileOrder.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await mobileService.insertIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'create mobile successfully!',
    data: result,
  });
});

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, mobileFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await mobileService.getAllData(filters, paginationOptions);

  sendResponse<IMobile[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'mobile departments fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

export const mobileController = {
  insertIntoDB,
  getAllData,
};
