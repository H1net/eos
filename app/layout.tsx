import NavBar from '@/components/NavBar';
import { AuthProvider } from '../components/AuthProvider';
import createClient from '../lib/supabase-server';

import './globals.css';

// do not cache this layout
export const revalidate = 0;

export const metadata = {
  title: 'Eos',
  description: 'Desktop and mobile productivity boost',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const accessToken = session?.access_token || null;

  return (
    <html lang="en">
      <body>
        <AuthProvider accessToken={accessToken}>{[<NavBar />, children]}</AuthProvider>
      </body>
    </html>
  )
}
