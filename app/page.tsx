'use client';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from './page.module.css'

// import Link from "next/link"

// const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  useEffect(() => {
    // redirect('/example');
 }, []);
//  return <p></p>;
  return (
    <main>
      <div className='text-center'>
        <p className='mt-5'>Welcome to <span className='font-bold underline'>Eos</span>, by <span className=' italic'>&copy; FreshDevs</span></p>
        <p className='mt-5'>Please sign in for the menu.</p>
      </div>
    </main>
  )
}
