// components/VoiceRecorder.js
import React, { useState, useEffect, useRef } from 'react';

const VoiceRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');
//   const mediaRecorder = useRef(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef([]);

  useEffect(() => {
    if (isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  }, [isRecording]);

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        mediaRecorder.current = new MediaRecorder(stream);
        mediaRecorder.current.start();
        mediaRecorder.current.ondataavailable = (event) => {
          audioChunks.current.push(event.data);
        };
        mediaRecorder.current.onstop = () => {
          const audioBlob = new Blob(audioChunks.current, { type: 'audio/wav' });
          const audioUrl = URL.createObjectURL(audioBlob);
          setAudioURL(audioUrl);
          audioChunks.current = [];
        };
      })
      .catch(err => {
        console.error("Error accessing microphone: ", err);
      });
  };

  const stopRecording = () => {
    if (mediaRecorder.current) {
      mediaRecorder.current.stop();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <button
        onClick={() => setIsRecording(!isRecording)}
        className={`px-4 py-2 mb-4 text-white ${isRecording ? 'bg-red-500' : 'bg-blue-500'} rounded-lg`}
      >
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
      {audioURL && (
        <audio controls src={audioURL} className="mt-4">
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};

export default VoiceRecorder;
