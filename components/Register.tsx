import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';

const Register = () => {
   const { register, handleSubmit, formState: { errors } } = useForm();
   const [isRegistered, setIsRegistered] = useState(false);
   const [errorMessage, setErrorMessage] = useState('');
   const [userEmail, setUserEmail] = useState('');
   const [avatarUrl, setAvatarUrl] = useState<null | any>(null);

   const onSubmit = async (data: any) => {
      const { email, password, confirmPassword } = data;

      if (password !== confirmPassword) {
         setErrorMessage('Passwords do not match');
         return;
      }

      try {
         setIsRegistered(true);
         setUserEmail(email);
         setErrorMessage('');
      } catch (error) {
         console.error('Registration failed', error);
         setErrorMessage('Registration failed. Please try again.');
      }
   };

   const handleAvatarChange = (e: any) => {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
         setAvatarUrl(reader.result);
      };

      if (file) {
         reader.readAsDataURL(file);
      }
   };

   return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
         {isRegistered && (
            <div className="fixed top-4 right-4 flex items-center space-x-4">
               <label htmlFor="avatarInput" className="cursor-pointer">
                  {avatarUrl ? (
                     <Image src={avatarUrl} alt="Avatar" className="w-16 h-16 rounded-full object-cover border-2 border-blue-500" />
                  ) : (
                     <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg border-2 border-blue-500">
                        {userEmail.charAt(0).toUpperCase()}
                     </div>
                  )}
               </label>
               <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="hidden"
                  id="avatarInput"
               />
            </div>
         )}

         <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center text-gray-700">Register</h2>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
               <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                     type="email"
                     title="Email Address"
                     placeholder="Enter your email address"
                     className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                     {...register('email', { required: true })}
                  />
                  {errors.email && <span className="text-red-500">This field is required</span>}
               </div>
               <div>
                  <label className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                     type="password"
                     title="Password"
                     placeholder="Enter your password"
                     className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                     {...register('password', { required: true })}
                  />
                  {errors.password && <span className="text-red-500">This field is required</span>}
               </div>
               <div>
                  <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                  <input
                     type="password"
                     title="Confirm Password"
                     placeholder="Confirm your password"
                     className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                     {...register('confirmPassword', { required: true })}
                  />
                  {errors.confirmPassword && <span className="text-red-500">This field is required</span>}
               </div>
               {errorMessage && <p className="text-red-500">{errorMessage}</p>}
               <button
                  type="submit"
                  className="w-full px-4 py-2 font-medium text-white bg-blue-500 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
               >
                  Register
               </button>
            </form>
         </div>
      </div>
   );
};

export default Register;