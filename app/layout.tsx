import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";


type LayoutProps = {
   children: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "chat-twilio-ai",
   description: "CHAT-TWILIO-API is an innovative voice-based application leveraging Twilio Voice and Gemini AI to deliver seamless, intelligent, and human-like voice interactions for customer service and automated assistance. ",
};

export default function RootLayout({ children }: Readonly<LayoutProps>) {
   return (
      <html lang="en">
         <body className={`${inter.className} h-screen overflow-hidden`}>
            <Header />
            <main role="main" className="h-full w-full">
               {children}
            </main>
         </body>
      </html>
   );
}
