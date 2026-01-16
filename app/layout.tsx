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
    <html
      lang="en"
      className="h-full snap-y snap-mandatory overflow-x-hidden scroll-smooth"
    >
      <body
        className={`${inter.className} relative bg-gray-50 bg-gradient-to-b from-blue-100 via-blue-50 to-blue-200 text-gray-950`}
      >
        {/* <BackgroundAnimation /> */}
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Toaster position="top-right" />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
