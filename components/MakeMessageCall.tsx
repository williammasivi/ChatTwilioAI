import { useState } from 'react';
import { useForm } from 'react-hook-form';


export default function MakeMessageCall({ lastResponse }: { lastResponse: string | null }) {
   const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();
   const [response, setResponse] = useState('');
   const [loading, setLoading] = useState(false);
   const [isFormVisible, setIsFormVisible] = useState(false);

   const onSubmit = async (data: any) => {
      setLoading(true);
      // if (data.lastResponse == null || lastResponse?.trim().length == 0) {
      //    setLoading(false);
      //    setResponse('all fields are required');
      //    return;
      // }
      if (data.responseMode == 'on') {
         try {
            const options = {
               method: 'POST',
               body: JSON.stringify({
                  to: data.phoneNumber,
                  message: lastResponse
               }),
               headers: {
                  'Content-Type': 'application/json'
               }
            }
            const response = await fetch('https://chattwilioai-backend.onrender.com/send-sms', options);
            const result = await response.text();
            setResponse(result);
            setLoading(false);
            // reset();
         } catch (error: any) {
            setResponse(error?.message);
            // setError('Something went wrong! Please try again later.');
            setLoading(false);
         }
      }

      if (data.responseMode === 'call') {
         setResponse(`Calling... ${data.phoneNumber}`);
      }
   };

   const toggleFormVisibility = () => {
      setIsFormVisible(!isFormVisible);
   };

   const isSubmitDisabled = isSubmitting || !watch("phoneNumber") || !watch("responseMode");

   return (
      <div className="min-h-screen flex w-72 bg-gray-100">
         <div className="w-full">
            <button
               onClick={toggleFormVisibility}
               className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200 mb-4 text-sm hover:cursor-pointer"
            >
               {isFormVisible ? 'Hide the form' : 'Receive the response by call or message'}
            </button>
            {isFormVisible && (
               <form onSubmit={handleSubmit(onSubmit)} aria-labelledby="form-title">
                  <div className="mb-4">
                     <label htmlFor="phoneNumber" className="block text-gray-700 mb-2">Your phone number:</label>
                     <input
                        type="tel"
                        {...register("phoneNumber", { required: true })}
                        defaultValue={watch("phoneNumber", "")}
                        className="w-full px-3 py-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="+243971616131"
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
                              {...register("responseMode")}
                              defaultChecked={watch("responseMode") === 'message'}
                              className="mr-2"
                           />
                           <label htmlFor="message" className="text-gray-700">Message</label>
                        </div>
                        <div className="flex items-center">
                           <input
                              type="radio"
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
                     className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200 hover:cursor-pointer"
                     disabled={isSubmitDisabled}
                     aria-busy={loading}
                  >
                     {loading ? 'Sending in progress...' : 'Send'}
                  </button>
               </form>
            )}
            {response && (
               <div className={`text-white rounded-md ${response.split(' ')[0] == "Failed" ? 'bg-red-500' : 'bg-green-500'} mt-6 p-4`}>
                  <h2 className="text-xl font-semibold mb-2">Response :</h2>
                  <p className="">{response}</p>
                  {watch("responseMode") === 'call' && <p className="text-gray-700 mt-2">You will receive a call shortly.</p>}
               </div>
            )}
         </div>
      </div>
   );
}
