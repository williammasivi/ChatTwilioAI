import { ReactNode, useEffect, useState } from "react";
import Image from 'next/image';
import Header from "@/components/Header";


type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main role="main" className="h-full w-full">
        {children}
      </main>
    </>
  );
}
