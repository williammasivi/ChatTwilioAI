"use client";
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Loading from '@/components/Loading';
import MakeMessageCall from '@/components/MakeMessageCall';
import ReactMarkdown from 'react-markdown';
import removeMd from 'remove-markdown';

const linkBACKEND = 'https://chattwilioai-backend.onrender.com/api/questions';

interface FormInputs {
   message: string;
}

export default function Home() {
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

   const onSubmit: SubmitHandler<FormInputs> = async (data) => {
      setIsWelcome(false);
      setLoading(true);
      if (!data.message.trim()) {
         setError('Error: Please enter something!');
         return;
      }
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
         const response = await fetch(linkBACKEND, options);
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
         setLoading(false);
         reset();
      } catch (error) {
         setError('Something went wrong! Please try again later.');
         setLoading(false);
      }
   };

   return (
      <div className='bg-gray-100 flex w-full h-full'>
         <aside className='h-full border-b border-r border-gray-200 hidden md:block p-4'>
            <MakeMessageCall lastResponse={
               chatHistory?.length == 0 ? "" : chatHistory[chatHistory?.length - 1].parts
            } />
         </aside>
         <aside className='w-full py-4 flex flex-col'>
            <div className="overflow-y-auto shadow-lg h-[80%] p-4 overflow-scroll">
               {error && <p className='text-red-500 text-center font-bold text-2xl'>{error}</p>}
               {isWelcome && <p className='text-5xl text-blue-500 font-bold text-center mt-12'>Hello! How can I help you today?</p>}
               {
                  loading ? (
                     <div className='flex w-full h-full items-center justify-center'>
                        <Loading />
                     </div>
                  ) : null
               }
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
            </div>

            {/* form to send data to the server */}

            <form
               onSubmit={handleSubmit(onSubmit)}
               className={'p-4 border-t border-gray-200 bg-gray-100 h-[75px]'}>
               <div className="flex items-center space-x-4">
                  <input
                     {...register("message")}
                     type="text"
                     placeholder="Type a message..."
                     className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700"
                  />
                  <button
                     type="submit"
                     className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                  >
                     Send
                  </button>
               </div>
            </form>

         </aside >
      </div >
   );
}