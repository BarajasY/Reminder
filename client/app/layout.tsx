"use client"
import "../styles/globals.css";
import { Poppins } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const poppins = Poppins({ weight: ["800", "400"], subsets: ["latin"] });

export const metadata:{title:string, description:string} = {
  title: "Reminder",
  description:
    "A way to remind me of school tasks that i must do in my uni platform.",
};

const queryclient:QueryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryclient}>
        <body className={poppins.className}>{children}</body>
      </QueryClientProvider>
    </html>
  );
}
