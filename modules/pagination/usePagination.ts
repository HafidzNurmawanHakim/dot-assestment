import { useState } from "react";

interface PaginationResult<T> {
   pageNumber: number;
   pageCount: number;
   changePage: (pageNumber: number) => void;
   pageData: () => T[];
   nextPage: () => void;
   previousPage: () => void;
}

function usePagination<T>(items: T[], pageLimit: number): PaginationResult<T> {
   const [pageNumber, setPageNumber] = useState(0);
   const pageCount = Math.ceil(items.length / pageLimit);

   const changePage = (pN: number) => {
      setPageNumber(pN);
   };

   const pageData = () => {
      const start = pageNumber * pageLimit;
      const end = start + pageLimit;
      return items.slice(start, end);
   };

   const nextPage = () => {
      setPageNumber((prevPageNumber) => Math.min(prevPageNumber + 1, pageCount - 1));
   };

   const previousPage = () => {
      setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 0));
   };

   return {
      pageNumber,
      pageCount,
      changePage,
      pageData,
      nextPage,
      previousPage,
   };
}

export default usePagination;
