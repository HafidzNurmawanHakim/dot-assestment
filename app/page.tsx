"use server";
import styles from "./page.module.css";
import DefaultLayout from "@/modules/defaultLayout";
import axios from "axios";
import { Product } from "@/lib/_types";
import ProductList from "./components/ProductList";
import { fontPoppins } from "@/lib/fonts";

async function getData({ page = 1 }) {
   try {
      const data = await axios.get(
         // "",
         `${process.env.NEXT_PUBLIC_SERVICE_URL}/products?page=${page}`,
         {
            headers: {
               "Content-Type": "application/json",
            },
         }
      );

      if (data.status !== 200) {
         throw new Error(`Failed to fetch: ${data.statusText}`);
      }

      return data.data;
   } catch (error) {
      console.log({ error });
   }
}

export default async function Home({
   searchParams,
}: {
   searchParams?: {
      query?: string;
      page?: number;
   };
}) {
   const data: Product[] = await getData({ page: searchParams?.page });
   return (
      <DefaultLayout>
         <div className={styles.cssPurpleGradient}></div>
         <h1 className={styles.title + " " + fontPoppins.className}>Product</h1>
         <div className={styles.center}>
            <ProductList data={data} />
         </div>
         <div className={styles.cssRedGradient}></div>
      </DefaultLayout>
   );
}
