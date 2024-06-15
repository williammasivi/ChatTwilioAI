import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import gemini from 'gemini';


const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleLogin = async (e: any) => {
      e.preventDefault();
      try {
         // const response = await gemini.auth.login({ email, password });
         // console.log('Login successful', response);
         // Handle successful login (e.g., redirect, display a message, etc.)
      } catch (error) {
         console.error('Login failed', error);
         // Handle login failure (e.g., display an error message)
      }
   };

   return (
      <div className="flex items-center justify-center">
         <div className="w-full max-w-md p-8 space-y-6">
            <h2 className="text-2xl font-bold text-center">Login</h2>
            <form className="space-y-4" onSubmit={handleLogin}>
               <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                     type="email"
                     className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:ring-blue-500 focus:border-blue-500 hover:cursor-pointer"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     required
                     placeholder='Enter your Email'
                  />
               </div>
               <div>
                  <label className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                     type="password"
                     className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     required
                     placeholder='Enter your password'
                  />
               </div>
               <button
                  type="submit"
                  className="w-full px-4 py-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
               >
                  Login
               </button>
               <p>Are you new?</p>
               <button
                  type="submit"
                  className="w-full px-4 py-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
               >
                  REGISTER
               </button>
            </form>
         </div>
      </div>
   );
};

export default Login;
