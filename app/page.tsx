"use client";
import { useState } from 'react';
import Login from '@/components/Login';
import Split from 'react-split';



export default function Home() {
   const [messages, setMessages] = useState([
      { text: 'Hello! How can I help you today?', sender: 'bot' },
   ]);
   return (
      <div className='bg-gray-100 flex w-full h-full' >
         {/* login screen | register screen | history screen */}
         <Split
            className="split w-full h-full"
            minSize={300}
            gutterSize={1}
         >

            <aside className='h-full border-r border-gray-300 bg-gray-50'>
               <Login />
            </aside>
            {/* chat bot */}
            <aside className='flex-1 h-full w-full'>
               <div className="w-full h-full bg-white shadow-lg overflow-hidden flex-1 flex flex-col">
                  <div className="flex flex-col p-4 space-y-4 overflow-y-auto flex-6 h-[80%]">
                     <div className='w-full h-full overflow-scroll'>
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
                  </div>
                  <div className="p-4 border-t border-gray-200 bg-gray-50 h-[20%] sticky bottom-0">
                     <form
                        onSubmit={(e) => {
                           e.preventDefault();
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
         </Split>
      </div>
   );
}
