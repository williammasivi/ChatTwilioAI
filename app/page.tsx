"use client";
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Loading from '@/components/Loading';
import MakeMessageCall from '@/components/MakeMessageCall';
import ReactMarkdown from 'react-markdown';
import removeMd from 'remove-markdown';
import { TbSend2 } from "react-icons/tb";


interface FormInputs {
   message: string;
}

export default function Home() {
   const BACKEND_API_LINK = 'https://chattwilioai-backend.onrender.com/api/questions';
   const [error, setError] = useState("");
   const [loading, setLoading] = useState(true);
   const [isWelcome, setIsWelcome] = useState(true);
   const [chatHistory, setChatHistory] = useState<Array<{ role: string; parts: string; }>>([]);
   const { register, handleSubmit, reset } = useForm<FormInputs>();
   const [isSpeaking, setIsSpeaking] = useState(false);

   function speak(text: string) {
      if ('speechSynthesis' in window) {
         if (isSpeaking) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
         } else {
            setIsSpeaking(true);
            const plainText = removeMd(text);
            const utterance = new SpeechSynthesisUtterance(plainText);
            utterance.onend = () => setIsSpeaking(false);
            window.speechSynthesis.speak(utterance);
         }
      } else {
         alert("Text-to-speech not supported in this browser.");
      }
   }

   // Handle the loading
   const [isWaitingForAI, setIsWaitingForAi] = useState(false);
   const onSubmit: SubmitHandler<FormInputs> = async (data) => {
      setIsWelcome(false);
      setLoading(true);
      if (!data.message.trim()) {
         setError('Error: Please enter something!');
         return;
      }
      setIsWaitingForAi(true);
      try {
         const options = {
            method: 'POST',
            body: JSON.stringify({
               history: chatHistory,
               message: data.message
            }),
            headers: {
               'Content-Type': 'application/json'
            }
         }
         const response = await fetch(BACKEND_API_LINK, options);
         const result = await response.text();
         setChatHistory(function (prevChatHistory) {
            return [...prevChatHistory, {
               role: 'user',
               parts: data.message,
            },
            {
               role: 'model',
               parts: result
            }];
         });
         setIsWaitingForAi(false);
         reset();
      } catch (error) {
         setError('Something went wrong! Please try again later.');
         setIsWaitingForAi(false);
      }
   };

   return (
      <div className='bg-gray-100 flex w-full h-full'>
         <aside className='h-full border-b border-r border-gray-200 hidden md:block p-4'>
            <MakeMessageCall lastResponse={
               chatHistory?.length == 0 ? "" : chatHistory[chatHistory?.length - 1].parts
            } />
         </aside>
         <aside
            className='w-full py-4 flex flex-col h-screen'
            style={{ height: 'calc(100vh-200px)' }}>
            <div className="overflow-y-auto shadow-lg h-[100%] p-4 overflow-scroll">
               {error && <p className='text-red-500 text-center font-bold text-2xl'>{error}</p>}
               {isWelcome && <p className='text-3xl text-slate-500 font-bold text-center mt-12'>Hello! How can I help you today?</p>}

               {chatHistory?.map((chatItem, index) => (
                  <div
                     key={index}
                     className={`flex mb-4 ${chatItem?.role == 'model' ? 'justify-start' : 'justify-end'}`}
                  >
                     <div className={`p-4 rounded-md ${chatItem?.role == 'model' ? 'bg-gray-200' : 'bg-blue-500 text-white'} relative`}>

                        <p>{chatItem?.role}:</p>
                        <ReactMarkdown>{chatItem?.parts}</ReactMarkdown>
                        {chatItem?.role === 'model' && (
                           <button
                              onClick={() => speak(chatItem.parts)}
                              className="absolute bottom-2 right-2 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition-colors"
                           >
                              {isSpeaking ? '🔊' : '🔈'}
                           </button>
                        )}

                     </div>
                  </div>

               ))}
               {isWaitingForAI && (
                  <div className='flex w-full items-center justify-center'>
                     <Loading />
                  </div>
               )}
            </div>

            {/* form to send data to the server */}

            <form
               onSubmit={handleSubmit(onSubmit)}
               className={'h-[150px] px-2 md:px-4 lg:px-6'}>
               <div className="p-3 flex bg-white gap-2 items-center md:space-x-4 md:px-4 py-2 border border-gray-300 rounded-lg mt-3">
                  <input
                     {...register("message")}
                     type="text"
                     placeholder="Type a message..."
                     className="flex-1 rounded-lg focus:outline-none text-slate-700 outline-none"
                  />
                  <button
                     type="submit"
                  >
                     <TbSend2
                        color='#4343f3'
                        size={24}
                     />
                  </button>
               </div>
            </form>

         </aside>
      </div >
   );
}