import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(['/api/webhooks/clerk']);

export default clerkMiddleware((auth, request) =>{ 
  if(isPublicRoute(request)){
    console.log("clerkMiddleware... request: ",request)
    //auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};