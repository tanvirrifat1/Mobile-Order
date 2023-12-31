export type IMobile = {
  name: string;
  details: string;
  image: string;
  price: string;
  type: string;
  processor: string;
  memory: string;
  rating: number;
  os: string;
};

export type IMobileFilters = {
  searchTerm?: string;
};
