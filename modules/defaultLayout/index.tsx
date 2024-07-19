import Navbar from "@/modules/navbar";
import styles from "@/app/page.module.css";
import clsx from "clsx";
import { fontPoppins } from "@/lib/fonts";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
   return (
      <div className="">
         <Navbar />
         <main className={clsx(styles.main, fontPoppins.className)}>{children}</main>
      </div>
   );
}
