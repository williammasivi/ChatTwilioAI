import React, { useState } from 'react';

function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [responseMode, setResponseMode] = useState('message');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleResponseModeChange = (e) => {
    setResponseMode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const aiResponse = "Ceci est une réponse simulée.";
      setResponse(aiResponse);
      setLoading(false);

      if (responseMode === 'call') {
        console.log(`Appel à ${phoneNumber} avec le message: ${aiResponse}`);
      } else {
        console.log(`Message envoyé à ${phoneNumber}: ${aiResponse}`);
      }
    }, 2000);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const isSubmitDisabled = loading || response === '';

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <button
          onClick={toggleFormVisibility}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200 mb-4 text-sm"
          style={{ maxWidth: '200px' }}
        >
          {isFormVisible ? 'Masquer le formulaire' : 'Recevez la réponse par appel ou message'}
        </button>
        {isFormVisible && (
          <form onSubmit={handleSubmit} aria-labelledby="form-title">
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-gray-700 mb-2">Votre numéro de téléphone :</label>
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                className="w-full px-3 py-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring focus:border-blue-300"
                placeholder="06 12 34 56 78"
                aria-required="true"
                aria-describedby="phone-help"
              />
              <p id="phone-help" className="text-sm text-gray-600 mt-1">Entrez votre numéro de téléphone pour recevoir la réponse.</p>
            </div>
            <div className="mb-4">
              <span className="block text-gray-700 mb-2">Choisissez le mode de réponse :</span>
              <div className="mt-2 flex flex-col space-y-2" role="radiogroup" aria-labelledby="response-mode">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="message"
                    name="responseMode"
                    value="message"
                    checked={responseMode === 'message'}
                    onChange={handleResponseModeChange}
                    className="mr-2"
                    aria-checked={responseMode === 'message'}
                  />
                  <label htmlFor="message" className="text-gray-700">Message texte</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="call"
                    name="responseMode"
                    value="call"
                    checked={responseMode === 'call'}
                    onChange={handleResponseModeChange}
                    className="mr-2"
                    aria-checked={responseMode === 'call'}
                  />
                  <label htmlFor="call" className="text-gray-700">Appel</label>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
              disabled={isSubmitDisabled}
              aria-busy={loading}
            >
              {loading ? 'Envoi en cours...' : 'Envoyer'}
            </button>
          </form>
        )}
        {response && (
          <div className="mt-6 p-4 bg-gray-100 rounded">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Réponse :</h2>
            <p className="text-gray-700">{response}</p>
            {responseMode === 'call' && <p className="text-gray-700 mt-2">Vous recevrez un appel sous peu.</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;


