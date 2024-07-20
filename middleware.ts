import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
   let currentUser = request.cookies.get("next-auth.session-token")?.value;
   console.log(request.url, "ss");
   if (currentUser && !request.nextUrl.pathname.startsWith("/")) {
      return Response.redirect(new URL("/", request.url));
   }
   if (!currentUser && !request.nextUrl.pathname.startsWith("/login")) {
      return Response.redirect(new URL("/login", request.url));
   }
}

export const config = {
   matcher: ["/", "/login"],
};
