import { clerkMiddleware, authMiddleware } from "@clerk/nextjs/server";
 
export default authMiddleware({
    publicRoutes: ['/api/webhooks/clerk']
});

//export default clerkMiddleware()
 
export const config = {
  //matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
  //matcher: [ '/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};