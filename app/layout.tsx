import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import FloatingStars from "@/components/FloatingStars";
import Footer from "@/components/Footer";

export const metadata = {
  title: "⭐ Stellar Hub",
  description: "Gaming events, tournaments, and community 🌌",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <FloatingStars />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
