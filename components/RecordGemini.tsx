'use client'
import React, { useState, useRef } from 'react';

const AIChatButton: React.FC = () => {
    const [response, setResponse] = useState<string>('');
    const recognitionRef = useRef<SpeechRecognition | null>(null);

    const startListening = () => {
        const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
        const recognition = new SpeechRecognition();
        recognitionRef.current = recognition;

        recognition.onstart = () => console.log('Voice recognition started. Speak into the microphone.');
        recognition.onresult = (event: SpeechRecognitionEvent) => {
            const transcript = event.results[0][0].transcript;
            console.log('You said: ', transcript);
            getAIResponse(transcript);
        };

        recognition.onerror = (event: SpeechRecognitionError) => console.error('Speech recognition error', event.error);

        recognition.start();
    };

    const getAIResponse = async (question: string) => {
        const apiKey = 'YOUR_OPENAI_API_KEY';
        const url = 'https://api.openai.com/v1/engines/davinci-codex/completions';

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        };

        const data = {
            prompt: question,
            max_tokens: 150
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data)
            });

            const result = await response.json();
            const aiText = result.choices[0].text.trim();
            console.log('AI says: ', aiText);
            setResponse(aiText);
            speak(aiText);
        } catch (error) {
            console.error('Error fetching AI response:', error);
        }
    };

    const speak = (text: string) => {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);
        synth.speak(utterance);
    };

    return (
        <div className="flex flex-col items-center">
            <button 
                onClick={startListening} 
                className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            >
                Posez une question
            </button>
            {response && (
                <p className="mt-4 text-center text-lg text-gray-800">
                    Réponse de l'IA: {response}
                </p>
            )}
        </div>
    );
};

export default AIChatButton;
