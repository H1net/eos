import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import { AuthProvider } from '../components/AuthProvider';
import { supabaseCreateForServer } from '../lib/supabase-server';

import './globals.css';

// do not cache this layout
export const revalidate = 0;

export const metadata = {
  title: 'Eos',
  description: 'Desktop and mobile productivity boost',
  icons: {
    // icon: '/icon.png',
    // shortcut: '/shortcut-icon.png',
    // apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = supabaseCreateForServer();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const accessToken = session?.access_token || null;

  return (
    // <html lang="en" className='dark bg-[#343541]' data-theme="bumblebee">
    <html lang="en" className='' data-theme="light">
    <body>
      {/* <body className='mx-2 bg-[#343541] text-white'> */}
        <AuthProvider accessToken={accessToken}>
          <>
            <NavBar />
            <div className='mx-2'>{children}</div>
            <Footer />
          </>
          </AuthProvider>
      </body>
    </html>
  )
}
