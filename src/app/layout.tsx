import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Minimalist Website",
  description: "A clean, modern, minimalist single-page site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white font-sans antialiased min-h-screen">{children}</body>
    </html>
  );
}
