# AI Image Platform Micro SaaS

AI Powered Image generator

## ⚙️ Tech Stack

- Next.js
- TypeScript
- MongoDB
- Clerk
- Cloudinary - Image and Video API
- Stripe - Payment
- Shadcn UI
- TailwindCSS
- Svix - Webhook

## Live Demo
🔗 [Imaginify Site Demo](https://imaginify-25052024-fep9uolfj-heralds-projects.vercel.app)

## Getting Started

 🛠️ First, create the **.env.local** file in the root directory of this project and insert the following variables
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

🚀 Second, run the development server:

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Reference

- [Clerk Webhook Documentation](https://clerk.com/docs/integrations/webhooks/overview?_gl=1*1z07l0o*_gcl_au*MTExMDc1MzM0Ni4xNzE0NjY4NTI4)
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Help to resolved the issue on Clerk Webhook](https://www.youtube.com/watch?v=UTjwyDuVjRM)
- [Inspired by Adrian Hajdin's AI Image SaaS Project.](https://github.com/adrianhajdin/ai_saas_app)
