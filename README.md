# hnalmatrix

A full SaaS starter for an AI-powered multilingual business platform for Morocco.

## What it includes

- AI-powered customer acquisition platform concept
- Business landing page and pricing website
- Business dashboard and lead pipeline
- AI customer chat simulation
- Business setup flow
- Payments and subscription sections
- Multilingual positioning in Arabic, French, and English
- Backend API mock endpoints for dashboard and chat
- Prisma data model structure for production database setup

## Tech stack

- Next.js 14
- React 18
- TypeScript
- Prisma
- SQLite-ready Prisma schema
- Next API routes

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create your environment file:
   ```bash
   cp .env.example .env
   ```
3. Run the app:
   ```bash
   npm run dev
   ```
4. Open http://localhost:3000

## Production notes

For production, you should connect:

- PostgreSQL instead of SQLite
- Auth provider (NextAuth, Clerk, or custom JWT)
- AI provider key for real live chat and lead scoring
- Payment provider and subscription system
- Email/WhatsApp integration
- Business onboarding and role management

## Current project status

This is a strong SaaS starter and MVP foundation for hnalmatrix. It is ready to be extended with authentication, database persistence, real AI flows, and production deployment.
