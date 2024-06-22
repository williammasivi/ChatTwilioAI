import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function MakeMessageCall() {
   const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();
   const [response, setResponse] = useState('');
   const [loading, setLoading] = useState(false);
   const [isFormVisible, setIsFormVisible] = useState(false);

   const onSubmit = (data: any) => {
      setLoading(true);
      setTimeout(() => {
         const aiResponse = "Ceci est une réponse simulée.";
         setResponse(aiResponse);
         setLoading(false);

         if (data.responseMode === 'call') {
            console.log(`Appel à ${data.phoneNumber} avec le message: ${aiResponse}`);
         } else {
            console.log(`Message envoyé à ${data.phoneNumber}: ${aiResponse}`);
         }
      }, 2000);
   };

   const toggleFormVisibility = () => {
      setIsFormVisible(!isFormVisible);
   };

   const isSubmitDisabled = isSubmitting || !watch("phoneNumber") || !watch("responseMode");

   return (
      <div className="min-h-screen bg-gray-100 flex p-4 w-96 shadow-lg">
         <div className="w-full">
            <button
               onClick={toggleFormVisibility}
               className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200 mb-4 text-sm"
            >
               {isFormVisible ? 'Hide the form' : 'Receive the response by call or message'}
            </button>
            {isFormVisible && (
               <form onSubmit={handleSubmit(onSubmit)} aria-labelledby="form-title">
                  <div className="mb-4">
                     <label htmlFor="phoneNumber" className="block text-gray-700 mb-2">Your phone number:</label>
                     <input
                        type="tel"
                        id="phoneNumber"
                        {...register("phoneNumber", { required: true })}
                        defaultValue={watch("phoneNumber", "")}
                        className="w-full px-3 py-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="06 12 34 56 78"
                        aria-required="true"
                        aria-describedby="phone-help"
                     />
                     <p id="phone-help" className="text-sm text-gray-600 mt-1">Enter your phone number to receive the response.</p>
                  </div>
                  <div className="mb-4">
                     <span className="block text-gray-700 mb-2">Choose the response mode:</span>
                     <div className="mt-2 flex flex-col space-y-2" role="radiogroup" aria-labelledby="response-mode">
                        <div className="flex items-center">
                           <input
                              type="radio"
                              id="message"
                              {...register("responseMode")}
                              defaultChecked={watch("responseMode") === 'message'}
                              value="message"
                              className="mr-2"
                           />
                           <label htmlFor="message" className="text-gray-700">Message</label>
                        </div>
                        <div className="flex items-center">
                           <input
                              type="radio"
                              id="call"
                              {...register("responseMode")}
                              defaultChecked={watch("responseMode") === 'call'}
                              value="call"
                              className="mr-2"
                           />
                           <label htmlFor="call" className="text-gray-700">Call</label>
                        </div>
                     </div>
                  </div>
                  <button
                     type="submit"
                     className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                     disabled={isSubmitDisabled}
                     aria-busy={loading}
                  >
                     {loading ? 'Sending in progress...' : 'Send'}
                  </button>
               </form>
            )}
            {response && (
               <div className="mt-6 p-4 bg-gray-100 rounded">
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">Réponse :</h2>
                  <p className="text-gray-700">{response}</p>
                  {watch("responseMode") === 'call' && <p className="text-gray-700 mt-2">Vous recevrez un appel sous peu.</p>}
               </div>
            )}
         </div>
      </div>
   );
}
