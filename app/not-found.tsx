import Link from 'next/link'


export default function NotFound() {
   return (
      <div className='flex h-screen items-center flex-col gap-8 pt-20 px-4'>
         <h2 className='text-3xl font-bold text-blue-500 text-center'>Not Found</h2>
         <p>Could not find requested resource</p>
         <Link href="/" className='bg-blue-500 rounded-md px-4 h-10 flex items-center justify-center font-bold text-white hover:bg-blue-400'>Return Home</Link>
      </div>
   );
}