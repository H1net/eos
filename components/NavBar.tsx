'use client';

import { UserIcon, ArrowLeftOnRectangleIcon, BuildingOfficeIcon, HomeIcon, ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react'
import Image from 'next/image'
import logoImage from '../public/logo-v01.png'

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
      <div className="navbar bg-primary text-primary-content">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-primary-content rounded-box w-52">
              <li>
                <Link href="/"><HomeIcon className='h-6 w-6' /> Home</Link>
              </li>
              <li>
                <Link href="/chat"><ChatBubbleLeftEllipsisIcon className='h-6 w-6' />Chat</Link>
              </li>
              <li>
                <Link href="/example"><BuildingOfficeIcon className='h-6 w-6' /> Dev Tools</Link>
              </li>
              <li>
                <Link href="/profile"><UserIcon className="h-6 w-6" />Profile</Link>
              </li>
              <li>
                <button onClick={signOut}><ArrowLeftOnRectangleIcon className='h-6 w-6' />Sign Out</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl">
          <Image
            src={logoImage}
            alt="Eos"
            width="30"
            height="30"
          />
            <div className='ml-1'>
              Eos
            </div>
          </a>
        </div>
        <div className="navbar-end">
          {/* <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button> */}
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    );
  }

  return <Auth view={view} />;
}
