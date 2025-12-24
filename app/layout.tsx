import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "test-8",
  description: "test-8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
