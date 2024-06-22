export default function History({ messages }: { messages: string[] | null }) {
   return (
      <div className="p-4 bg-gray-100 rounded shadow">
         <h2 className="text-lg font-bold mb-4">Chat History</h2>
         <div className="space-y-4">

         </div>
      </div>
   );
}

/*


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
*/