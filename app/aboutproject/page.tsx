export default function Documentation() {
   return (
      <div className="px-8 md:px-14 lg:px-72 overflow-scroll">
         <h1 className="text-2xl font-bold text-center text-slate-500 py-2">AI Chat Application</h1>
         <p>This application is an interactive AI-powered chat interface that allows users to engage in conversations with an AI model. Here are the key features and functionalities:</p>
         <div className="mb-4">
            <h2 className="font-bold my-1">1.	User Interface: </h2>
            <ol>
               <li>The app has a clean, modern interface with a chat window and a message input area.</li>
               <li>It's responsive, with a sidebar that's visible on larger screens.</li>
            </ol>
         </div>

         <div className="mb-4">
            <h2 className="font-bold my-1">2.	Conversation Functionality:</h2>
            <ul>
               <li>Users can type messages and send them to the AI.</li>
               <li>The AI responds to user messages, creating a back-and-forth conversation.</li>
               <li>The chat history is displayed in the main window, with user messages and AI responses clearly distinguished.</li>
            </ul>
         </div>
         <div className="mb-4">
            <h2 className="font-bold my-1">3.	AI Integration:</h2>
            <ul>
               <li>The app connects to a backend API (hosted at https://chattwilioai-backend.onrender.com/api/questions) to process user messages and generate AI responses.</li>
               <li>It maintains a conversation history, allowing for context-aware responses from the AI</li>
            </ul>
         </div>

         <div className="mb-4">
            <h2 className="font-bold my-1">4.	Text-to-Speech:</h2>
            <ul>
               <li>The app includes a text-to-speech feature for AI responses.</li>
               <li>Users can click a button to have the AI's messages read aloud.</li>
               <li>The speech can be toggled on and off.</li>
            </ul>
         </div>
         <div className="mb-4">
            <h2 className="font-bold my-1">5.	Markdown Support: </h2>
            <ul>
               <li>AI responses are rendered with Markdown formatting, allowing for rich text responses.</li>
            </ul>
         </div>

         <div className="mb-4">
            <h2 className="font-bold my-1">6.	Loading States:</h2>
            <ul>
               <li>The app shows a loading indicator while waiting for the AI's response.</li>
            </ul>
         </div>
         <div className="mb-4">
            <h2 className="font-bold my-1">7.	Error Handling:</h2>
            <ul>
               <li>It displays error messages if there are issues with the input or the API connection.</li>
            </ul>
         </div>
         <div className="mb-4">
            <h2 className="font-bold my-1">8.	Accessibility:</h2>
            <ul>
               <li>The app includes some accessibility features, such as the text-to-speech functionality.</li>
            </ul>
         </div>
         <div className="mb-4">
            <h2 className="font-bold my-1">9.	Responsive Design:</h2>
            <ul>
               <li>The layout adapts to different screen sizes, with a sidebar that's visible on larger screens.
                  This application serves as a user-friendly interface for interacting with an AI model, making it easy for users to have dynamic, text-based conversations with AI assistance. The inclusion of features like text-to-speech and Markdown support enhances the user experience and accessibility of the app.</li>
            </ul>
         </div>

      </div>
   );
}