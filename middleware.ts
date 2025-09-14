import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

export default withAuth(
  async function middleware(_req: NextRequest) {
    // console.log("look at me", req.kindeAuth);
  },
  {
    isReturnToCurrentPage: true,
    loginPage: "/login",
    publicPaths: ["/", "/login"],
    // isAuthorized: ({ token }) => {
    //   // The user will be considered authorized if they have the permission 'eat:chips'
    //   return token.permissions.includes("eat:chips");
    // },
  }
);

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|auth|favicon.ico|robots.txt|images|login|test-route.*|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
