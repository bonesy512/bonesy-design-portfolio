import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default async function middleware(req) {
  // Handle localization middleware first
  const response = intlMiddleware(req);

  // Check for authentication on protected routes
  const protectedRoutes = ["/admin/dashboard"];
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const isProtectedRoute = protectedRoutes.some((path) =>
    req.nextUrl.pathname.startsWith(path)
  );

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  return response;
}

export const config = {
  matcher: [
    // Match internationalized pathnames and admin routes
    "/",
    "/((?!api|_next|_vercel|.*\\..*).*)",
    "/(en|id)/:path*",
    "/admin/:path*",
  ],
};
