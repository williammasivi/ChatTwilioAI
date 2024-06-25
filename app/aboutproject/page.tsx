export default function Documentation() {
  return (
    <div className="overflow-y-auto h-screen">
      <div className="overflow-hidden bg-white p-4 md:p-10">
        <h1 className="text-2xl md:text-4xl font-bold text-blue-600 mb-4 md:mb-8 text-center">AI Chat Application Documentation</h1>
        
        <section className="mb-4 md:mb-8">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 md:mb-4">Overview</h3>
          <p className="text-sm md:text-base text-gray-700">
            The AI Chat Application is an interactive AI-powered chat interface that allows users to engage in dynamic, text-based conversations with an AI model. This application is designed to be user-friendly, with features enhancing accessibility, usability, and interactivity.
          </p>
        </section>
        
        <section className="mb-4 md:mb-8">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 md:mb-4">Features and Functionalities</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-gray-200 rounded-lg p-4 md:p-6">
              <h5 className="text-lg md:text-xl font-semibold text-gray-700 mb-1 md:mb-2">1. User Interface</h5>
              <p className="text-sm md:text-base text-gray-700">
                Clean, Modern Interface: The application features a sleek and intuitive design, ensuring ease of use.
              </p>
              <p className="text-sm md:text-base text-gray-700">
                Responsive Design: The layout adapts seamlessly to different screen sizes, including a sidebar that's visible on larger screens.
              </p>
              <p className="text-sm md:text-base text-gray-700">
                Chat Window and Message Input: The main interface consists of a chat window displaying the conversation and a message input area for users to type and send messages.
              </p>
            </div>
            
            <div className="bg-gray-200 rounded-lg p-4 md:p-6">
              <h5 className="text-lg md:text-xl font-semibold text-gray-700 mb-1 md:mb-2">2. Conversation Functionality</h5>
              <p className="text-sm md:text-base text-gray-700">
                Interactive Messaging: Users can type messages in the input area and send them to the AI by pressing a send button or hitting enter.
              </p>
              <p className="text-sm md:text-base text-gray-700">
                Dynamic Responses: The AI processes user messages and generates appropriate responses, creating an engaging back-and-forth conversation.
              </p>
              <p className="text-sm md:text-base text-gray-700">
                Chat History: The conversation history is displayed in the main window, with user messages and AI responses clearly distinguished for easy readability.
              </p>
            </div>
            
            <div className="bg-gray-200 rounded-lg p-4 md:p-6">
              <h5 className="text-lg md:text-xl font-semibold text-gray-700 mb-1 md:mb-2">3. Text-to-Speech</h5>
              <p className="text-sm md:text-base text-gray-700">
                The application includes a text-to-speech feature that allows users to listen to the AI's responses. This enhances accessibility for users with visual impairments or those who prefer auditory learning.
              </p>
            </div>
            
            <div className="bg-gray-200 rounded-lg p-4 md:p-6">
              <h5 className="text-lg md:text-xl font-semibold text-gray-700 mb-1 md:mb-2">4. Markdown Support</h5>
              <p className="text-sm md:text-base text-gray-700">
                Users can format their messages using Markdown, adding elements such as bold, italics, links, and lists to enhance the clarity and richness of their communication.
              </p>
            </div>
            
          </div>
        </section>
        
        <section className="mb-4 md:mb-8">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 md:mb-4">Technical Details</h3>
          
          <div className="bg-gray-200 rounded-lg p-4 md:p-6 mb-4">
            <h5 className="text-lg md:text-xl font-semibold text-gray-700 mb-1 md:mb-2">API Integration</h5>
            <p className="text-sm md:text-base text-gray-700">
              Endpoint: The application sends user messages to the backend API at <a href="https://chattwilioai-backend.onrender.com/api/questions" className="text-blue-500">https://chattwilioai-backend.onrender.com/api/questions</a>.
            </p>
            <p className="text-sm md:text-base text-gray-700">
              Request Method: Messages are sent using HTTP POST requests.
            </p>
            <p className="text-sm md:text-base text-gray-700">
              Response Handling: The application processes the JSON responses from the API to display AI messages in the chat window.
            </p>
          </div>
          
          <div className="bg-gray-200 rounded-lg p-4 md:p-6 mb-4">
            <h5 className="text-lg md:text-xl font-semibold text-gray-700 mb-1 md:mb-2">Frontend Technologies</h5>
            <p className="text-sm md:text-base text-gray-700">
              The frontend of the application is built using React, ensuring a dynamic and responsive user interface. Tailwind CSS is used for styling, providing a modern and consistent look and feel across the application.
            </p>
          </div>
          
          <div className="bg-gray-200 rounded-lg p-4 md:p-6">
            <h5 className="text-lg md:text-xl font-semibold text-gray-700 mb-1 md:mb-2">Backend Technologies</h5>
            <p className="text-sm md:text-base text-gray-700">
              The backend API is built using Node.js and Express, ensuring efficient handling of user requests and AI responses. The AI model is integrated using the OpenAI API, providing state-of-the-art natural language processing capabilities.
            </p>
          </div>
          
        </section>
        
        <section className="mb-4 md:mb-8">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 md:mb-4">Conclusion</h3>
          <p className="text-sm md:text-base text-gray-700">
            The AI Chat Application provides a robust and user-friendly platform for engaging in text-based conversations with an AI. Its features, including text-to-speech, Markdown support, and responsive design, enhance the user experience and accessibility, making it a versatile tool for a wide range of users.
          </p>
        </section>
      </div>

    </div>
  );
}
