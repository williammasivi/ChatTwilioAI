import React from 'react';
import { useForm } from 'react-hook-form';


const Login = () => {
   const { register, handleSubmit, formState: { errors } } = useForm();
   const onSubmit = async (data: any) => {
      const { email, password } = data;
      try {
      } catch (error) {
         console.error('Login failed', error);
      }
   };

   return (
      <div className="flex items-center justify-center">
         <div className="w-full max-w-md p-8 space-y-6">
            <h2 className="text-2xl font-bold text-center">Login</h2>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
               <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                     type="email"
                     className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                     {...register('email', { required: true })}
                  />
                  {errors.email && <span>This field is required</span>}
               </div>
               <div>
                  <label className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                     type="password"
                     className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                     {...register('password', { required: true })}
                  />
                  {errors.password && <span>This field is required</span>}
               </div>
               <button
                  type="submit"
                  className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
               >
                  Login
               </button>
               <p>Are you new?</p>
               <button
                  type="submit"
                  className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
               >
                  REGISTER
               </button>
            </form>
         </div>
      </div>
   );
};

export default Login;