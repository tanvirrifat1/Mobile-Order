import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { mobileSearchableFields } from './mobileOrder.constants';
import { IMobile, IMobileFilters } from './mobileOrder.interface';
import { Mobile } from './mobileOrder.model';

const insertIntoDB = async (payload: IMobile): Promise<IMobile> => {
  const result = await Mobile.create(payload);
  return result;
};

const getAllData = async (
  filters: IMobileFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IMobile[]>> => {
  // Extract searchTerm to implement search query
  const { searchTerm, ...filtersData } = filters;
  const { page, limit, skip } =
    paginationHelpers.calculatePagination(paginationOptions);

  const andConditions = [];
  // Search needs $or for searching in specified fields
  if (searchTerm) {
    andConditions.push({
      $or: mobileSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }
  // Filters needs $and to fullfill all the conditions
  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  type SortOrder = 'asc' | 'desc';

  type SortConditions = { [key: string]: SortOrder };

  const sortConditions: SortConditions = {};

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Mobile.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Mobile.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

export const mobileService = {
  insertIntoDB,
  getAllData,
};
