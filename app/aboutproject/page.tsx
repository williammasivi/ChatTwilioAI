export default function Documentation() {
   return (
     <div className="p-6 min-h-screen">
       <div className="max-w-4xl mx-auto p-8 overflow-scroll">
         <h1 className="text-4xl font-bold text-blue-600 mb-6">AI Chat Application Documentation</h1>
         
         <section>
           <h3 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h3>
           <p className="text-gray-700 mb-6">
             The AI Chat Application is an interactive AI-powered chat interface that allows users to engage in dynamic, text-based conversations with an AI model. This application is designed to be user-friendly, with features enhancing accessibility, usability, and interactivity.
           </p>
         </section>
         
         <section>
           <h3 className="text-2xl font-semibold text-gray-800 mb-4">Features and Functionalities</h3>
           
           <div className="mb-6">
             <h5 className="text-xl font-semibold text-gray-700 mb-2">1. User Interface</h5>
             <p className="text-gray-700">
               <span className="block mb-2">Clean, Modern Interface: The application features a sleek and intuitive design, ensuring ease of use.</span>
               <span className="block mb-2">Responsive Design: The layout adapts seamlessly to different screen sizes, including a sidebar that's visible on larger screens.</span>
               <span className="block">Chat Window and Message Input: The main interface consists of a chat window displaying the conversation and a message input area for users to type and send messages.</span>
             </p>
           </div>
           
           <div className="mb-6">
             <h5 className="text-xl font-semibold text-gray-700 mb-2">2. Conversation Functionality</h5>
             <p className="text-gray-700">
               <span className="block mb-2">Interactive Messaging: Users can type messages in the input area and send them to the AI by pressing a send button or hitting enter.</span>
               <span className="block mb-2">Dynamic Responses: The AI processes user messages and generates appropriate responses, creating an engaging back-and-forth conversation.</span>
               <span className="block">Chat History: The conversation history is displayed in the main window, with user messages and AI responses clearly distinguished for easy readability.</span>
             </p>
           </div>
           
           <div className="mb-6">
             <h5 className="text-xl font-semibold text-gray-700 mb-2">3. AI Integration</h5>
             <p className="text-gray-700">
               <span className="block mb-2">Backend API Connection: The app connects to a backend API hosted at <a href="https://chattwilioai-backend.onrender.com/api/questions" className="text-blue-500">https://chattwilioai-backend.onrender.com/api/questions</a> to process user messages and generate AI responses.</span>
               <span className="block">Context-Aware Responses: The app maintains a conversation history, enabling the AI to provide contextually relevant responses based on previous interactions.</span>
             </p>
           </div>
           
           <div className="mb-6">
             <h5 className="text-xl font-semibold text-gray-700 mb-2">4. Text-to-Speech</h5>
             <p className="text-gray-700">
               <span className="block mb-2">AI Responses Read Aloud: Users can click a button to have the AI's messages read aloud.</span>
               <span className="block">Toggle Speech: The text-to-speech functionality can be toggled on and off, allowing users to customize their experience.</span>
             </p>
           </div>
           
           <div className="mb-6">
             <h5 className="text-xl font-semibold text-gray-700 mb-2">5. Markdown Support</h5>
             <p className="text-gray-700">
               <span className="block">Rich Text Responses: AI responses are rendered with Markdown formatting, supporting bold, italics, links, and other rich text elements to enhance the clarity and expressiveness of the messages.</span>
             </p>
           </div>
           
           <div className="mb-6">
             <h5 className="text-xl font-semibold text-gray-700 mb-2">6. Loading States</h5>
             <p className="text-gray-700">
               <span className="block">Loading Indicator: The app displays a loading indicator while waiting for the AI's response, ensuring users are aware that their message is being processed.</span>
             </p>
           </div>
           
           <div className="mb-6">
             <h5 className="text-xl font-semibold text-gray-700 mb-2">7. Error Handling</h5>
             <p className="text-gray-700">
               <span className="block mb-2">Error Messages: The application displays error messages if there are issues with user input or the API connection, providing users with feedback and troubleshooting information.</span>
             </p>
           </div>
           
           <div className="mb-6">
             <h5 className="text-xl font-semibold text-gray-700 mb-2">8. Accessibility</h5>
             <p className="text-gray-700">
               <span className="block">Accessibility Features: The inclusion of text-to-speech functionality and other accessibility features ensures that the app can be used by a broader audience, including those with visual impairments.</span>
             </p>
           </div>
           
           <div className="mb-6">
             <h5 className="text-xl font-semibold text-gray-700 mb-2">9. Responsive Design</h5>
             <p className="text-gray-700">
               <span className="block mb-2">Adaptable Layout: The application's layout adapts to different screen sizes, optimizing the user experience on both desktop and mobile devices.</span>
               <span className="block">Sidebar Visibility: On larger screens, a sidebar is visible, providing additional navigation or information without cluttering the main chat interface.</span>
             </p>
           </div>
         </section>
         
         <section>
           <h3 className="text-2xl font-semibold text-gray-800 mb-4">Technical Details</h3>
           
           <div className="mb-6">
             <h5 className="text-xl font-semibold text-gray-700 mb-2">API Integration</h5>
             <p className="text-gray-700">
               <span className="block mb-2">Endpoint: The application sends user messages to the backend API at <a href="https://chattwilioai-backend.onrender.com/api/questions" className="text-blue-500">https://chattwilioai-backend.onrender.com/api/questions</a>.</span>
               <span className="block mb-2">Request Method: Messages are sent using HTTP POST requests.</span>
               <span className="block">Response Handling: The application processes the JSON responses from the API to display AI messages in the chat window.</span>
             </p>
           </div>
           
           <div className="mb-6">
             <h5 className="text-xl font-semibold text-gray-700 mb-2">Text-to-Speech Implementation</h5>
             <p className="text-gray-700">
               <span className="block mb-2">Speech Synthesis API: The text-to-speech functionality leverages the Web Speech API, specifically the SpeechSynthesis interface, to convert AI responses into spoken words.</span>
               <span className="block">Toggle Functionality: Users can enable or disable the text-to-speech feature through a toggle button in the user interface.</span>
             </p>
           </div>
           
           <div className="mb-6">
             <h5 className="text-xl font-semibold text-gray-700 mb-2">Markdown Rendering</h5>
             <p className="text-gray-700">
               <span className="block">Markdown Parser: The application uses a Markdown parser (such as Marked.js) to convert Markdown-formatted text into HTML, ensuring that AI responses are displayed with appropriate formatting.</span>
             </p>
           </div>
           
           <div className="mb-6">
             <h5 className="text-xl font-semibold text-gray-700 mb-2">Error Handling</h5>
             <p className="text-gray-700">
               <span className="block mb-2">User Feedback: If there is an error with the API connection or user input, the application displays a user-friendly error message in the chat window.</span>
               <span className="block">Retry Mechanism: Users can retry sending their message if an error occurs, with the application attempting to re-establish the connection or process the input again.</span>
             </p>
           </div>
           
           <div className="mb-6">
             <h5 className="text-xl font-semibold text-gray-700 mb-2">Responsive Design</h5>
             <p className="text-gray-700">
               <span className="block mb-2">CSS Media Queries: The application's CSS includes media queries to adjust the layout based on the screen size.</span>
               <span className="block">Sidebar Adaptation: The sidebar is designed to be visible on larger screens and hidden or collapsible on smaller screens to maximize the chat window's usability.</span>
             </p>
           </div>
         </section>
         
         <section>
           <h3 className="text-2xl font-semibold text-gray-800 mb-4">Conclusion</h3>
           <p className="text-gray-700">
             The AI Chat Application provides a robust and user-friendly platform for engaging in text-based conversations with an AI. Its features, including text-to-speech, Markdown support, and responsive design, enhance the user experience and accessibility, making it a versatile tool for a wide range of users.
           </p>
         </section>
       </div>
     </div>
   );
 }
 