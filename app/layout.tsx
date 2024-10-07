// Suggested code may be subject to a license. Learn more: ~LicenseLog:3030011026.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:536602289.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2730201107.
import { Public_Sans } from "next/font/google";
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body className={`${publicSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
