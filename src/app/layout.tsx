import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalProvider } from "@/contexts/global";
import { Container } from "@/components/layout/container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EasyVote",
  description:
    "Create polls and vote on them easily with EasyVote. EasyVote is a simple and easy-to-use voting platform that allows you to create polls and vote on them. No authentication required, just create a poll and start voting!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <GlobalProvider>
          <Container>{children}</Container>
        </GlobalProvider>
      </body>
    </html>
  );
}
