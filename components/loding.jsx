import React, { useState, useEffect } from 'react';

const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simuler un chargement de 3 secondes
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {loading ? (
        <div className="flex flex-col items-center">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-blue-500 h-32 w-32 animate-spin mb-4"></div>
          <p className="text-lg text-blue-500">Chargement en cours...</p>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-3xl font-bold text-blue-500">Contenu chargé !</h1>
        </div>
      )}
    </div>
  );
};

export default Loading;


