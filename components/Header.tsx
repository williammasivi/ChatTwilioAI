"use client";
import Link from "next/link";
import Logo from "./Logo";
import { useState } from "react";


export default function Header() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   return (
      <header className="bg-blue-500 p-4 px-12 shadow-md sticky top-0">
         <div className="flex items-center justify-between">
            <Link href="/" className="text-white text-xl font-bold flex items-center">
               <Logo />
               <h1>Twilio AI Chat</h1>
            </Link>
            <nav className="hidden md:flex space-x-4">
               <Link href="/" className="text-white hover:underline">
                  <p>Home</p>
               </Link>
               <Link href="/chat" className="text-white hover:underline">
                  <p>Chat</p>
               </Link>
            </nav>
            <div className="md:hidden">
               <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white focus:outline-none"
               >
                  <svg
                     className="w-6 h-6"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                     ></path>
                  </svg>
               </button>
            </div>
         </div>
         {isMenuOpen && (
            <nav className="md:hidden bg-blue-500">
               <Link href="/" className="block text-white hover:underline px-4 py-2">
                  <p>Home</p>
               </Link>
               <Link href="/chat" className="block text-white hover:underline px-4 py-2">
                  <p>Chat</p>
               </Link>
            </nav>
         )}
      </header>
   );
}