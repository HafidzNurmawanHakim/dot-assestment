"use client";
import { Logo } from "@/lib/logo";
import "./style.scss";

import React from "react";
import { signOut, useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import Button from "@/modules/button";
import { LockIcon } from "@/lib/icons";

function index() {
   const session = useSession();
   return (
      <nav id="navbar">
         <div className="nav">
            <div className="logo">
               <Logo viewBox="0 0 128 48" />
            </div>
            {session ? (
               <Button
                  variant="danger"
                  onClick={() => signOut({ redirect: true, callbackUrl: "/login" })}
               >
                  Sign Out
               </Button>
            ) : (
               <Button>SignIn</Button>
            )}
         </div>
      </nav>
   );
}

export default index;
