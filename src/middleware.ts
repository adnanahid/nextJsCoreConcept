import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const dummyData = {
    role: "user",
    email: "test@admin.com",
  };

  const isAdminPage = request.nextUrl.pathname.includes("admin");

  if (isAdminPage && dummyData.role !== "admin") {
    return NextResponse.redirect(new URL("/", request.url));
  } else return NextResponse.next();
}
