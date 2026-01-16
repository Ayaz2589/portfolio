import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components";
import { ActiveSectionContextProvider } from "@/context";
import { BackgroundAnimation } from "@/components";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ayaz's Portfolio",
  description: "Ayaz's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} relative`}>
        <BackgroundAnimation />
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Toaster position="top-right" />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
