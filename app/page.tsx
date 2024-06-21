"use client";
import Login from '@/components/Login';
import Register from '@/components/Register';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface Message {
  text: string;
  sender: 'bot' | 'user';
}

interface FormInputs {
  message: string;
}

export default function Home() {
   const [messages, setMessages] = useState<Message[]>([
      { text: 'Hello! How can I help you today?', sender: 'bot' },
   ]);

   const { register, handleSubmit, reset } = useForm<FormInputs>();

   const onSubmit: SubmitHandler<FormInputs> = (data) => {
      if (data.message.trim()) {
         setMessages([...messages, { text: data.message, sender: 'user' }]);
         reset();
      }
   };

   return (
      <div className='bg-gray-100 flex w-full h-full'>
         <aside className='h-full border-b border-gray-200 bg-white'>
            <Register />
         </aside>
         <aside className='flex-1 h-full w-full'>
            <div className="w-full h-full bg-white rounded-lg shadow-lg overflow-hidden flex-1">
               <div className="p-4 border-b border-gray-200 bg-gray-50">
                  <h1 className="text-lg font-semibold text-gray-800">CHAT TWILIO AI</h1>
               </div>
               <div className="flex flex-col p-4 space-y-4 overflow-y-auto h-96">
                  {messages.map((message, index) => (
                     <div
                        key={index}
                        className={`flex ${message.sender === 'bot' ? 'justify-start' : 'justify-end'}`}
                     >
                        <div
                           className={`${message.sender === 'bot' ? 'bg-gray-200' : 'bg-blue-500 text-white'} p-3 rounded-lg max-w-xs`}
                        >
                           {message.text}
                        </div>
                     </div>
                  ))}
               </div>
               <div className="p-4 border-t border-gray-200 bg-gray-50">
                  <form onSubmit={handleSubmit(onSubmit)}>
                     <div className="flex items-center space-x-4">
                        <input
                           {...register("message")}
                           type="text"
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