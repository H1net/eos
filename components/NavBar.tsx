'use client';

import { UserIcon, ArrowLeftOnRectangleIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react'

import Auth from './Auth';
import { useAuth, VIEWS } from './AuthProvider';
import LoadingNotifier from './LoadingNotifier';

export default function NavBar() {
  const { initial, user, view, signOut } = useAuth();

  if (initial) {
    return <LoadingNotifier />;
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
          <li className="flex-1 mr-2">
            <Link className="text-center block border rounded hover:border-gray-200 text-orange-600 hover:bg-orange-700 hover:text-white py-2 px-4" href="/example"><BuildingOfficeIcon className='h-6 w-6' /></Link>
          </li>
          <li className="text-center flex-1">
            <Link className="block py-2 px-4 text-red-500" href="/profile"><UserIcon className="h-6 w-6" /></Link>
          </li>
          <li className="text-center flex-1">
            <button className="block py-2 px-4 text-red-400" onClick={signOut}><ArrowLeftOnRectangleIcon className='h-6 w-6' /></button>
          </li>
        </ul>


      </div>
    );
  }

  return <Auth view={view} />;
}
