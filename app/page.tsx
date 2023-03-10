'use client';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from './page.module.css'

import Link from "next/link"

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
//   useEffect(() => {
//     redirect('/chat');
//  }, []);
 return <p></p>;
  return (
    <main>
      <div>
        <Link href="/chat">Chat</Link>
      </div>
    </main>
  )
}
