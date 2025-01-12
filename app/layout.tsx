import Navbar from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://postgres-prisma.vercel.app"),
  title: "AquaMeuch",
  description: "Meuch",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="overflow-x-hidden overflow-y-auto">
      <body className={inter.variable}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
