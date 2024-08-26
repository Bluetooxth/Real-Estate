import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token")?.value;

  console.log(`Path: ${path}, Token: ${token}`);

  if (!token) {
    console.log("No token found");
    if (
      [
        "/",
        "/about",
        "/properties",
        "/properties/[slug]",
        "/login",
        "/signup",
      ].includes(path)
    ) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/login", request.url));
  } else {
    console.log("Token found");

    if (["/login", "/signup"].includes(path)) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    "/",
    "/properties",
    "/properties/[slug]",
    "/about",
    "/login",
    "/signup",
    "/update",
    "/dashboard",
    "/buy",
    "/listing",
    "/schedule",
  ],
};