"use client";
import React, { useEffect } from "react";
import usePagination from "./usePagination";
import "./style.scss";
import { LeftArrowIcon, RightArrowIcon } from "@/lib/icons";
import Button from "../button";

interface PaginationProps<T> {
   items: T[];
   pageLimit: number;
   setPageItems: (items: T[]) => void;
}

const Pagination = <T,>({ items, pageLimit, setPageItems }: PaginationProps<T>) => {
   const { pageNumber, pageCount, changePage, pageData, nextPage, previousPage } = usePagination<T>(
      items,
      pageLimit
   );

   useEffect(() => {
      setPageItems(pageData());
   }, [pageNumber, setPageItems]);

   const renderPageNumbers = () => {
      const pageNumbers = [];
      for (let i = 1; i <= pageCount; i++) {
         if (i === pageNumber + 1) {
            pageNumbers.push(
               <li key={i} className="page__numbers active" onClick={() => changePage(i - 1)}>
                  {i}
               </li>
            );
         } else if (i === 1 || i === pageCount || Math.abs(i - (pageNumber + 1)) < 3) {
            pageNumbers.push(
               <li key={i} className="page__numbers" onClick={() => changePage(i - 1)}>
                  {i}
               </li>
            );
         } else if ((i === pageNumber - 2 || i === pageNumber + 4) && pageCount > 7) {
            pageNumbers.push(
               <li key={i} className="page__dots">
                  ...
               </li>
            );
         }
      }
      return pageNumbers;
   };

   return (
      <div className="container">
         <ul className="page">
            <Button startContent={<LeftArrowIcon />} variant="transparent" onClick={previousPage}>
               Prev
            </Button>
            {renderPageNumbers()}
            <Button endContent={<RightArrowIcon />} variant="transparent" onClick={nextPage}>
               Next
            </Button>
         </ul>
      </div>
   );
};

export default Pagination;
