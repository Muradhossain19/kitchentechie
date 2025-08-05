// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

// Import components using their full file path
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "KitchenTechie - Smart Kitchen Gadgets",
  description: "Your guide to the best smart kitchen gadgets and tech.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Header />
          <main
            style={{
              flexGrow: 1,
              width: "90%",
              maxWidth: "1300px",
              margin: "2rem auto",
            }}
          >
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
