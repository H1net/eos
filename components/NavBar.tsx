'use client';

import { UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react'

import Auth from './Auth';
import { useAuth, VIEWS } from './AuthProvider';

export default function NavBar() {
  const { initial, user, view, signOut } = useAuth();

  if (initial) {
    return <div className="card h-72">Loading...</div>;
  }

  if (view === VIEWS.UPDATE_PASSWORD) {
    return <Auth view={view} />;
  }

  if (user) {
    return (
      <div className='bg-yellow-300'>
        {/* <div className=''>
          <div className=''>{user.email}</div>
        </div> */}

        <ul className="flex">
          <li className="flex-1 mr-2">
            <Link className="text-center block border border-red-500 rounded py-2 px-4 bg-red-500 hover:bg-red-700 text-white" href="/chat">Chat</Link>
          </li>
          {/* <li className="flex-1 mr-5">
            <Link className="text-center block border border-white rounded hover:border-gray-200 text-red-500 hover:bg-red-700 hover:text-white py-2 px-4" href="/example">Example</Link>
          </li> */}
          <li className="text-center flex-1">
            <Link className="block py-2 px-4 text-red-500" href="/profile"><UserIcon className="h-6 w-6" /></Link>
          </li>
          <li className="text-center flex-1">
            <button className="block py-2 px-4 text-red-500" onClick={signOut}>Sign Out</button>
          </li>
        </ul>


      </div>
    );
  }

  return <Auth view={view} />;
}
