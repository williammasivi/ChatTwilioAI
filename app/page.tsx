"use client";
import Login from '@/components/Login';
import { useState } from 'react';



export default function Home() {
   const [messages, setMessages] = useState([
      { text: 'Hello! How can I help you today?', sender: 'bot' },
   ]);
   return (
      <div className='bg-gray-100 flex w-full h-full' >
         {/* login screen | register screen | history screen */}
         <aside className='h-full border-b border-gray-200 bg-white'>
            <Login />
         </aside>
         {/* chat bot */}
         <aside className='flex-1 h-full w-full'>
            <div className="w-full h-full bg-white rounded-lg shadow-lg overflow-hidden flex-1">
               <div className="p-4 border-b border-gray-200 bg-gray-50">
                  <h1 className="text-lg font-semibold text-gray-800">CHAT TWILIO AI</h1>
               </div>
               <div className="flex flex-col p-4 space-y-4 overflow-y-auto h-96">
                  {messages.map((message, index) => (
                     <div
                        key={index}
                        className={`flex ${message.sender === 'bot' ? 'justify-start' : 'justify-end'
                           }`}
                     >
                        <div
                           className={`${message.sender === 'bot' ? 'bg-gray-200' : 'bg-blue-500 text-white'
                              } p-3 rounded-lg max-w-xs`}
                        >
                           {message.text}
                        </div>
                     </div>
                  ))}
               </div>
               <div className="p-4 border-t border-gray-200 bg-gray-50">
                  <form
                     onSubmit={(e) => {
                        e.preventDefault();
                        // const input = e;
                        // const text = input.value;
                        // if (text.trim()) {
                        //    setMessages([...messages, { text, sender: 'user' }]);
                        //    input.value = '';
                        // }
                     }}
                  >
                     <div className="flex items-center space-x-4">
                        <input
                           type="text"
                           name="message"
                           placeholder="Type a message..."
                           className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                           type="submit"
                           className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                        >
                           Send
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </aside>
      </div>
   );
}
