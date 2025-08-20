import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Build With Myversity - Startup? At This Age? Absolutely.",
  description: "The First Startup Experience for Kids (9–14) — an 8-week journey to spot problems, build MVPs, and pitch to real entrepreneurs.",
  keywords: ["startup", "kids", "entrepreneurship", "mvp", "myversity", "education"],
  authors: [{ name: "Myversity" }],
  openGraph: {
    title: "Build With Myversity - Startup Experience for Kids",
    description: "An 8-week journey for kids aged 9-14 to spot problems, build MVPs, and pitch to real entrepreneurs.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build With Myversity - Startup Experience for Kids",
    description: "An 8-week journey for kids aged 9-14 to spot problems, build MVPs, and pitch to real entrepreneurs.",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-background text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
