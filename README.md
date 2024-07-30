This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# EasyVote

<div style='text-align: center;'>
    <img src='https://upload.wikimedia.org/wikipedia/commons/d/dd/Strawpoll-logo-large.png' alt='EasyVote' width='400px' />
</div>

This is a simple voting app that allows users to create polls and vote on them. It is built with Next.js, TypeScript, and Tailwind CSS with Shadcn UI.

## Features
* Users can create polls with multiple options, edit once started and share the poll link with others to vote. All with **NO** authentication. 
* The poll creator can see the results of the poll in real-time.
* Polls can be single or multiple choice with images.
* Polls can be setup with a one-time vote by public IP.

## Tech Stack
* Next.js
* TypeScript
* Tailwind CSS
* Shadcn UI
* Supabase

## Running the app
1. Clone the repository
2. Install dependencies with the following command:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```
3. Create a `.env.local` file in the root of the project and add the following environment variables: 
```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```
4. Run the app with the following command:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Demo
[Click here to see the demo](https://easyvote.vercel.app/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
