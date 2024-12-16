import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default async function middleware(req) {
    // Handle localization middleware first
    const response = intlMiddleware(req);

    // Protected routes for authentication
    const protectedRoutes = ["/admin/dashboard"];
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    const isProtectedRoute = protectedRoutes.some((path) =>
        req.nextUrl.pathname.startsWith(path)
    );

    if (isProtectedRoute && !token) {
        // Redirect to admin login page if token is missing
        return NextResponse.redirect(new URL("/admin", req.url));
    }

    // Return response after middleware processing
    return response;
}

export const config = {
    matcher: [
        "/", // Root path
        "/((?!api|_next|_vercel|.*\\..*).*)", // Match all except API, Next.js internal paths, or static files
        "/(en|id)/:path*", // Locale-based paths
        "/admin/:path*", // Admin-related paths
    ],
};
