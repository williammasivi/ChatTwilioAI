

// components/History.js
export default function History({ messages }: { messages: string[]| null }) {
   return (
     <div className="p-4 bg-gray-100 rounded shadow">
       <h2 className="text-lg font-bold mb-4">Chat History</h2>
       <div className="space-y-4">
         {/* {messages?.map(({sender, text}, index) => (
           <div key={index} className={`p-2 rounded ${sender === "bot" ? "bg-indigo-100" : "bg-gray-200"}`}>
             <p><strong>{sender}:</strong> {text}</p>
           </div>
         ))} */}
       </div>
     </div>
   );
 }