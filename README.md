# AI Image Platform Micro SaaS

AI Powered Image generator

## ⚙️ Tech Stack

- Next.js
- TypeScript
- MongoDB
- Clerk - Auth, User Management
- Cloudinary - Image and Video API
- Stripe - Payment
- [Shadcn UI](https://ui.shadcn.com/)
- TailwindCSS
- Svix - Webhook
- [Ngrok - Webhook | Test locally](https://ngrok.com/)

## Live Demo
🔗 [Imaginify Site Demo](https://imaginify-25052024-heralds-projects.vercel.app)

## Getting Started

🔢 First, setup the local environment variables by creating the `.env.local` file

```env
# CLERK 
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<Clerk API - Publishable key>
CLERK_SECRET_KEY=<Clerk API - Secret keys>
WEBHOOK_SECRET=<Clerk Webhooks EndPoint - Signing Secret>

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# MONGODB
MONGODB_URL=mongodb+srv://<username>:<password>@<host>.mongodb.net/?retryWrites=true&w=majority&appName=<appName>

# CLOUDINARY
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

```

🧩 Second, install the dependencies:

```bash
npm install

```

🚀 Third, run the development server:

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 🗒️ Additional Notes

- Changed the middleware to use clerkMiddleware instead of authMiddleware.
- If Clerk shows a "Signature not found" error, use Ngrok to track the webhook issue.
- After deploying on Vercel, check the domain endpoint and update Clerk.
- UI Improvement
  - SheetContent closes after clicking the Link.
  - Added margin to the content on transformative pages.


### 🔖 References

- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Webhooks getting started](https://clerk.com/blog/webhooks-getting-started)
- [Svix webhook quick start](https://docs.svix.com/quickstart)
- [Clerk Webhook Documentation](https://clerk.com/docs/integrations/webhooks/overview?_gl=1*1z07l0o*_gcl_au*MTExMDc1MzM0Ni4xNzE0NjY4NTI4)
- [Clerk - Create Route Matcher](https://clerk.com/docs/references/nextjs/clerk-middleware#create-route-matcher)
- [Simple Implementation of Next JS and Clerk Webhook](https://www.youtube.com/watch?v=UTjwyDuVjRM)
- [Inspired by Adrian Hajdin's AI Image SaaS Project.](https://github.com/adrianhajdin/ai_saas_app)