import { ReactNode, useEffect, useState } from "react";
import Image from 'next/image';
import Header from "@/components/Header";


type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [featuredImage, setFeaturedImage] = useState('');
  useEffect(() => {
    async function fetchFeaturedImages() {
      try {
        const response = await fetch(
          'https://commons.wikimedia.org/w/api.php?action=query&generator=categorymembers&gcmtitle=Category:Featured_pictures_on_Wikimedia_Commons&gcmtype=file&gcmlimit=10&prop=imageinfo&iiprop=url|thumbnail&iiurlwidth=1366&format=json&origin=*',
        );
        const data = await response.json();
        const pages = data.query.pages;
        const images = Object.keys(pages).map((key) => pages[key].imageinfo[0].thumburl);
        const randomImage = images[Math.floor(Math.random() * images.length)];
        setFeaturedImage(randomImage);
      } catch (error: any) {
        window.alert('Error fetching the featured images:', error);
      }
    }
    fetchFeaturedImages();
  }, []);

  return (
    <>
      <Header />
      <main role="main" className="h-full w-full">
        {children}
        <div className='bg-black opacity-60 -z-10  absolute top-0 left-0 w-full h-full'></div>
        <Image src={featuredImage} alt='background image' className='absolute w-full h-full top-0 left-0 -z-20' />
      </main>
    </>
  );
}
