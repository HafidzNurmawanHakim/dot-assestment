"use client";
import { LockIcon, MailIcon } from "@/lib/icons";
import "./style.scss";
import clsx from "clsx";
import { fontPoppins } from "@/lib/fonts";
import { signIn, useSession } from "next-auth/react";
import { ChangeEvent, FormHTMLAttributes, useEffect } from "react";
import { Logo } from "@/lib/logo";
import { useRouter } from "next/navigation";

export default function Page() {
   const session = useSession();
   const router = useRouter();
   useEffect(() => {
      if (session) {
         router.push("/");
      }
   }, [session]);

   const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
      console.log("first");
      e.preventDefault();
      try {
         const formData = new FormData(e.target);
         const formProps = Object.fromEntries(formData);
         const res = await signIn("credentials", {
            ...formProps,
            redirect: true,
            callbackUrl: "/",
         });
         return res;
      } catch (error) {
         console.log(error);
         return alert("Username or Password invalid!");
      }
   };

   return (
      <div className={clsx("screen-1", fontPoppins.className)}>
         <div className="logo">
            <div className="svg-logo">
               <Logo />
            </div>
         </div>

         <form action="" onSubmit={handleSubmit}>
            <div className="username">
               <label htmlFor="username" className={fontPoppins.className}>
                  Username
               </label>
               <div className="sec-2">
                  <MailIcon className="icon" />
                  <input
                     className={fontPoppins.className}
                     type="text"
                     name="username"
                     placeholder="Username"
                  />
               </div>
            </div>
            <div className="password">
               <label htmlFor="password" className={fontPoppins.className}>
                  Password
               </label>
               <div className="sec-2">
                  <LockIcon className="icon" />
                  <input
                     className={fontPoppins.className}
                     type="password"
                     name="password"
                     placeholder="Password"
                  />
               </div>
            </div>
            <button type="submit" className={clsx("login", fontPoppins.className)}>
               Login
            </button>
         </form>
         <div className={clsx("footer", fontPoppins.className)}>
            <span className={fontPoppins.className}>Sign up</span>
            <span className={fontPoppins.className}>Forgot Password?</span>
         </div>
      </div>
   );
}
