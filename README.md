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
🔗 [Imaginify Site Demo](https://imaginify-25052024-fep9uolfj-heralds-projects.vercel.app)

## Getting Started

🔢 First, setup the local environment variables by creating the `.env.local` file

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# MongoDB
MONGODB_URL=mongodb+srv://<username>:<password>@<host>.mongodb.net/?retryWrites=true&w=majority&appName=<appName>

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

### 🔖 References

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Clerk Webhooks getting started](https://clerk.com/blog/webhooks-getting-started)
- [Svix webhook quick start](https://docs.svix.com/quickstart)
- [Clerk Webhook Documentation](https://clerk.com/docs/integrations/webhooks/overview?_gl=1*1z07l0o*_gcl_au*MTExMDc1MzM0Ni4xNzE0NjY4NTI4)
- [Help to resolved the issue on Clerk Webhook](https://www.youtube.com/watch?v=UTjwyDuVjRM)
- [Inspired by Adrian Hajdin's AI Image SaaS Project.](https://github.com/adrianhajdin/ai_saas_app)
