import logo from '@/public/logo.svg';
import Image from 'next/image';


export default function Logo() {
   return (
      <Image
         className='w-10 h-10 object-cover'
         src={logo}
         alt='twilio ai logo'
      />
   );
}