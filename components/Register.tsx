import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    const { email, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    try {
      // const response = await gemini.auth.register({ email, password });
      // console.log('Registration successful', response);
      // Handle successful registration (e.g., redirect, display a message, etc.)
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Registration failed', error);
      // Handle registration failure (e.g., display an error message)
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white mx-auto">
        <h2 className="text-2xl font-bold text-center">Register</h2>
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