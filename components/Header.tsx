// components/Header.js
// import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link"

export default function Header() {
//   const { data: session } = useSession();

  return (
    <header className="bg-indigo-600 p-4 shadow-md sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-white text-xl font-bold">
            <h1>Twilio AI Chat</h1>
          </Link>
          <nav className="space-x-4 flex">
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
        {/* <div className="flex items-center space-x-4">
          {session ? (
            <>
              <div className="relative">
                <button className="flex items-center space-x-2 text-white focus:outline-none">
                  <img
                    src={session.user.image}
                    alt="User Profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{session.user.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                  <Link href="/profile">
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Profile
                    </a>
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </>
          ) : (
            <button
              onClick={() => signIn()}
              className="px-4 py-2 bg-white text-indigo-600 font-bold rounded hover:bg-gray-200"
            >
              Sign In
            </button>
          )}
        </div> */}
      </div>
    </header>
  );
}
