"use client";
import Link from "next/link";
import { useState } from "react";


export default function Header() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   return (
      <header className="bg-indigo-600 p-4 shadow-md sticky top-0">
         <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
               <Link href="/" className="text-white text-xl font-bold">
                  <h1>Twilio AI Chat</h1>
               </Link>
               <nav className="hidden md:flex space-x-4">
                  <Link href="/" className="text-white hover:underline">
                     <p>Home</p>
                  </Link>
                  <Link href="/profile" className="text-white hover:underline">
                     <p>Profile</p>
                  </Link>
                  <Link href="/chat" className="text-white hover:underline">
                     <p>Chat</p>
                  </Link>
               </nav>
            </div>
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
            <nav className="md:hidden bg-indigo-600">
               <Link href="/" className="block text-white hover:underline px-4 py-2">
                  <p>Home</p>
               </Link>
               <Link href="/profile" className="block text-white hover:underline px-4 py-2">
                  <p>Profile</p>
               </Link>
               <Link href="/chat" className="block text-white hover:underline px-4 py-2">
                  <p>Chat</p>
               </Link>
            </nav>
         )}
      </header>
   );
}