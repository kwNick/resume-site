import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nick Piraino",
  description: "resume website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        <main className="max-w-2xl m-auto">{children}</main>
        </body>
    </html>
  );
}
