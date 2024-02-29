import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nick Piraino",
  description: "Resume website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-zinc-950 text-gray-300">{children}</div>
        </body>
    </html>
  );
}
