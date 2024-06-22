import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import "./index.css";


type LayoutProps = {
   children: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "chat-twilio-ai",
   description: "CHAT-TWILIO-API is an innovative voice-based application leveraging Twilio Voice and Gemini AI to deliver seamless, intelligent, and human-like voice interactions for customer service and automated assistance. ",
   icons: {
      icon: '/favicon.ico'
   }
};

export default function RootLayout({ children }: Readonly<LayoutProps>) {
   return (
      <html lang="en">
         <body className={`${inter.className} h-screen overflow-hidden`}>
            <Layout>
               {children}
            </Layout>
         </body>
      </html>
   );
}
