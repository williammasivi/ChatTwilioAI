import logo from '@/public/logo.png';
import Image from 'next/image';


export default function Logo() {
   return (
      <Image
         className='w-6 h-6 object-cover'
         src={logo}
         alt='twilio ai logo'
      />
   );
}