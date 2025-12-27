export { auth as middleware } from "@/auth";

export const config = {
  matcher: ["/dashboard/:path*"], // Matches all sub-routes of /dashboard
};
