export default function Documentation() {
   return (
      <div>
         <h1>AI Chat Application</h1>
         <p>This application is an interactive AI-powered chat interface that allows users to engage in conversations with an AI model. Here are the key features and functionalities:</p>
         <p>1.	User Interface: </p>
         <p>o	The app has a clean, modern interface with a chat window and a message input area.</p>
         <p>o	It's responsive, with a sidebar that's visible on larger screens.</p>

         <div>
            <h3>2.	Conversation Functionality:</h3>
            <p>
            o	Users can type messages and send them to the AI.
o	The AI responds to user messages, creating a back-and-forth conversation.
o	The chat history is displayed in the main window, with user messages and AI responses clearly distinguished.
            </p>

         </div>

         <div>

            <h3>3.	AI Integration:</h3>
            <p>o	The app connects to a backend API (hosted at https://chattwilioai-backend.onrender.com/api/questions) to process user messages and generate AI responses.
            o	It maintains a conversation history, allowing for context-aware responses from the AI.</p>

         </div>

         <div>4.	Text-to-Speech: </div>

         <p>
         o	The app includes a text-to-speech feature for AI responses.
o	Users can click a button to have the AI's messages read aloud.
o	The speech can be toggled on and off.
         </p>
 

      <div>
         <h3>5.	Markdown Support: </h3>
         <p>o	AI responses are rendered with Markdown formatting, allowing for rich text responses.</p>
      </div>





6.	Loading States: 
o	The app shows a loading indicator while waiting for the AI's response.
7.	Error Handling: 
o	It displays error messages if there are issues with the input or the API connection.
8.	Accessibility: 
o	The app includes some accessibility features, such as the text-to-speech functionality.
9.	Responsive Design: 
o	The layout adapts to different screen sizes, with a sidebar that's visible on larger screens.
This application serves as a user-friendly interface for interacting with an AI model, making it easy for users to have dynamic, text-based conversations with AI assistance. The inclusion of features like text-to-speech and Markdown support enhances the user experience and accessibility of the app.

      </div>
   );
}