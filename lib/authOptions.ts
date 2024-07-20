import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
   pages: {
      signIn: "/login",
   },
   providers: [
      Credentials({
         type: "credentials",
         credentials: {
            username: {},
            password: {},
         },
         authorize: async (credentials, req) => {
            if (!credentials) {
               console.log("Credentials not provided");
               return null;
            }

            const { username, password } = credentials;

            try {
               if (username === "test" && password === "test123") {
                  return {
                     id: "test-12322",
                     name: "test",
                     email: "test@gmail.com",
                  };
               } else {
                  console.log("User not found");
                  return null;
               }
            } catch (error) {
               console.error("Error during authorization", error);
               return null;
            }
         },
      }),
   ],
   session: {
      strategy: "jwt",
   },
   callbacks: {
      async jwt({ token, user, trigger, session }) {
         if (user) {
            token.user = user;
         }

         return Promise.resolve({ ...token });
      },
      session: async ({ session, token }) => {
         if (token?.user) {
            session.user = token.user;
         }
         return {
            ...session,
            user: {
               name: token.name,
               id: token.id,
               email: "test@gmail.com",
            },
            expires: "1d",
         };
      },
   },
   events: {},
};

export default authOptions;
