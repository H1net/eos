'use client';

import Link from 'next/link';

import Auth from '../../components/Auth';
import { useAuth, VIEWS } from '../../components/AuthProvider';

export default function Home() {
  const { initial, user, view, signOut } = useAuth();

  if (initial) {
    return <div className="card h-72">Loading...</div>;
  }

  if (view === VIEWS.UPDATE_PASSWORD) {
    return <Auth view={view} />;
  }

  if (user) {
    return (
      <div >
        <h2>Welcome!</h2>

        <code>{user.role}</code>

        <Link href="/profile">Go to Profile</Link>

        <button onClick={signOut}>Sign Out</button>

        <h1>Links</h1>
        <Link href="/chat">Chat</Link>
        <Link href="/example">Example</Link>
      </div>
    );
  }

  return <Auth view={view} />;
}
