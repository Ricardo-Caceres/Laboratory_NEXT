import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";
import { ThemeProvider } from "../components/ThemeProvider";

// Configure Google Fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "DevKit Laboratory - React & Next.js Examples",
  description: "Comprehensive examples and guides for React Hooks, Patterns, Architectures, and Next.js APIs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <Breadcrumbs />
          <main className="min-h-[calc(100vh-8rem)]">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
