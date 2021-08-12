interface IQueryObj {
  page: number;
  limit: number;
}

interface IPagination {
  page: number;
  pages: number;
  total: number;
}

export { IQueryObj, IPagination };
