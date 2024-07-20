"use client";
import styles from "../page.module.css";
import { Product } from "@/lib/_types";
import Card from "@/modules/card";
import Pagination from "@/modules/pagination";
import { useState } from "react";

function ProductList({ data = [] }: { data: Product[] }) {
   const [showData, setShowData] = useState<Product[]>([]);
   return (
      <div>
         <div className={styles.list}>
            {showData.map((item, i) => {
               return <Card data={item} key={item.id} />;
            })}
         </div>
         <Pagination items={data} pageLimit={6} setPageItems={setShowData} />
      </div>
   );
}

export default ProductList;
