import type { Metadata } from "next";
import "./globals.css";

import { MainLayout } from "../components/layout/main-layout";

export const metadata: Metadata = {
  title: "ToneCheck",
  description: "Analyze and rewrite your tone with clarity and confidence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-gemini-black text-white">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
