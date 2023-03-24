'use client';

import LoadingNotifier from '@/components/LoadingNotifier';
import Link from 'next/link';
import { useAuth, VIEWS } from '@/components/AuthProvider';

export default function ExamplePage() {
  const { initial, user, view, } = useAuth();

  if (initial) {
    return <LoadingNotifier />;
  }

  if (user) {
    return (
      <div className='p-3 prose' >
        <h1 className=''>daisyUI</h1>

        <div className='container'>
          <h2 id="-2">
            <a aria-hidden="true" href="#-2">
              <span className="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>List of all daisyUI color names
            </h2>
          You can use these color names in your theme or in utility classes.
          <div className="overflow-x-auto">
            <div className="whitespace-nowrap">
              <table>
                <thead><tr><th></th> <th>Color name + description</th> <th>Required or optional for themes</th> <th>Example use</th></tr></thead> <tbody><tr><td><span className="badge relative top-4 bg-primary"></span></td> <td><span className="font-mono font-bold">primary</span> <br /> <span className="text-xs opacity-60">Primary color</span></td> <td><span className="badge badge-sm">required</span></td> <td><span className="font-mono text-xs opacity-60">Class name: <code>bg-primary</code></span> <br /> <span className="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--p))</code></span></td></tr> <tr><td><span className="badge relative top-4 bg-primary-focus"></span></td> <td><span className="font-mono font-bold">primary-focus</span> <br /> <span className="text-xs opacity-60">Primary color when focused</span></td> <td><span className="badge badge-sm badge-ghost">optional</span> <br /> <span className="text-xs opacity-60">Will be a darker tone of primary if not specified</span></td> <td><span className="font-mono text-xs opacity-60">Class name: <code>bg-primary-focus</code></span> <br /> <span className="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--pf))</code></span></td></tr> <tr><td><span className="badge relative top-4 bg-primary-content"></span></td> <td><span className="font-mono font-bold">primary-content</span> <br /> <span className="text-xs opacity-60">Foreground content color to use on primary color</span></td> <td><span className="badge badge-sm badge-ghost">optional</span> <br /> <span className="text-xs opacity-60">Will be a readable tone of primary if not specified</span></td> <td><span className="font-mono text-xs opacity-60">Class name: <code>bg-primary-content</code></span> <br /> <span className="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--pc))</code></span></td></tr> <tr><td></td> <td></td> <td></td> <td></td></tr> <tr><td><span className="badge relative top-4 bg-secondary"></span></td> <td><span className="font-mono font-bold">secondary</span> <br /> <span className="text-xs opacity-60">Secondary color</span></td> <td><span className="badge badge-sm">required</span></td> <td><span className="font-mono text-xs opacity-60">Class name: <code>bg-secondary</code></span> <br /> <span className="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--s))</code></span></td></tr> <tr><td><span className="badge relative top-4 bg-secondary-focus"></span></td> <td><span className="font-mono font-bold">secondary-focus</span> <br /> <span className="text-xs opacity-60">Secondary color when focused</span></td> <td><span className="badge badge-sm badge-ghost">optional</span> <br /> <span className="text-xs opacity-60">Will be a darker tone of secondary if not specified</span></td> <td><span className="font-mono text-xs opacity-60">Class name: <code>bg-secondary-focus</code></span> <br /> <span className="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--sf))</code></span></td></tr> <tr><td><span className="badge relative top-4 bg-secondary-content"></span></td> <td><span className="font-mono font-bold">secondary-content</span> <br /> <span className="text-xs opacity-60">Foreground content color to use on secondary color</span></td> <td><span className="badge badge-sm badge-ghost">optional</span> <br /> <span className="text-xs opacity-60">Will be a readable tone of secondary if not specified</span></td> <td><span className="font-mono text-xs opacity-60">Class name: <code>bg-secondary-content</code></span> <br /> <span className="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--sc))</code></span></td></tr> <tr><td></td> <td></td> <td></td> <td></td></tr> <tr><td><span className="badge relative top-4 bg-accent"></span></td> <td><span className="font-mono font-bold">accent</span> <br /> <span className="text-xs opacity-60">Accent color</span></td> <td><span className="badge badge-sm">required</span></td> <td><span className="font-mono text-xs opacity-60">Class name: <code>bg-accent</code></span> <br /> <span className="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--a))</code></span></td></tr> <tr><td><span className="badge relative top-4 bg-accent-focus"></span></td> <td><span className="font-mono font-bold">accent-focus</span> <br /> <span className="text-xs opacity-60">Accent color when focused</span></td> <td><span className="badge badge-sm badge-ghost">optional</span> <br /> <span className="text-xs opacity-60">Will be a darker tone of accent if not specified</span></td> <td><span className="font-mono text-xs opacity-60">Class name: <code>bg-accent-focus</code></span> <br /> <span className="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--af))</code></span></td></tr> <tr><td><span className="badge relative top-4 bg-accent-content"></span></td> <td><span className="font-mono font-bold">accent-content</span> <br /> <span className="text-xs opacity-60">Foreground content color to use on accent color</span></td> <td><span className="badge badge-sm badge-ghost">optional</span> <br /> <span className="text-xs opacity-60">Will be a readable tone of accent if not specified</span></td> <td><span className="font-mono text-xs opacity-60">Class name: <code>bg-accent-content</code></span> <br /> <span className="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--ac))</code></span></td></tr> <tr><td></td> <td></td> <td></td> <td></td></tr> <tr><td><span className="badge relative top-4 bg-neutral"></span></td> <td><span className="font-mono font-bold">neutral</span> <br /> <span className="text-xs opacity-60">Neutral color</span></td> <td><span className="badge badge-sm">required</span></td> <td><span className="font-mono text-xs opacity-60">Class name: <code>bg-neutral</code></span> <br /> <span className="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--n))</code></span></td></tr> <tr><td><span className="badge relative top-4 bg-neutral-focus"></span></td> <td><span className="font-mono font-bold">neutral-focus</span> <br /> <span className="text-xs opacity-60">Neutral color when focused</span></td> <td><span className="badge badge-sm badge-ghost">optional</span> <br /> <span className="text-xs opacity-60">Will be a darker tone of neutral if not specified</span></td> <td><span className="font-mono text-xs opacity-60">Class name: <code>bg-neutral-focus</code></span> <br /> <span className="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--nf))</code></span></td></tr> <tr><td><span className="badge relative top-4 bg-neutral-content"></span></td> <td><span className="font-mono font-bold">neutral-content</span> <br /> <span className="text-xs opacity-60">Foreground content color to use on neutral color</span></td> <td><span className="badge badge-sm badge-ghost">optional</span> <br /> <span className="text-xs opacity-60">Will be a readable tone of neutral if not specified</span></td> <td><span className="font-mono text-xs opacity-60">Class name: <code>bg-neutral-content</code></span> <br /> <span className="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--nc))</code></span></td></tr> <tr><td></td> <td></td> <td></td> <td></td></tr> <tr><td><span className="badge relative top-4 bg-base-100"></span></td> <td><span className="font-mono font-bold">base-100</span> <br /> <span className="text-xs opacity-60">Base color of page, used for blank backgrounds</span></td> <td><span className="badge badge-sm">required</span></td> <td><span className="font-mono text-xs opacity-60">Class name: <code>bg-base-100</code></span> <br /> <span className="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--b1))</code></span></td></tr> <tr><td><span className="badge relative top-4 bg-base-200"></span></td> <td><span className="font-mono font-bold">base-200</span> <br /> <span className="text-xs opacity-60">Base color, a little darker</span></td> <td><span className="badge badge-sm badge-ghost">optional</span> <br /> <span className="text-xs opacity-60">Will be a darker tone of base-100 if not specified</span></td> <td><span className="font-mono text-xs opacity-60">Class name: <code>bg-base-200</code></span> <br /> <span className="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--b2))</code></span></td></tr> <tr><td><span className="badge relative top-4 bg-base-300"></span></td> <td><span className="font-mono font-bold">base-300</span> <br /> <span className="text-xs opacity-60">Base color, even more darker</span></td> <td><span className="badge badge-sm badge-ghost">optional</span> <br /> <span className="text-xs opacity-60">Will be a darker tone of base-200 if not specified</span></td> <td><span className="font-mono text-xs opacity-60">Class name: <code>bg-base-300</code></span> <br /> <span className="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--b3))</code></span></td></tr> <tr><td><span className="badge relative top-4 bg-base-content"></span></td> <td><span className="font-mono font-bold">base-content</span> <br /> <span className="text-xs opacity-60">Foreground content color to use on base color</span></td> <td><span className="badge badge-sm badge-ghost">optional</span> <br /> <span className="text-xs opacity-60">Will be a readable tone of base-100 if not specified</span></td> <td><span className="font-mono text-xs opacity-60">Class name: <code>bg-base-content</code></span> <br /> <span className="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--bc))</code></span></td></tr> <tr><td></td> <td></td> <td></td> <td></td></tr> <tr><td><span className="badge relative top-4 bg-info"></span></td> <td><span className="font-mono font-bold">info</span> <br /> <span className="text-xs opacity-60">Info color</span></td> <td><span className="badge badge-sm badge-ghost">optional</span> <br /> <span className="text-xs opacity-60">Will be a default blue color if not specified</span></td> <td><span className="font-mono text-xs opacity-60">Class name: <code>bg-info</code></span> <br /> <span className="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--in))</code></span></td></tr> <tr><td><span className="badge relative top-4 bg-info-content"></span></td> <td><span className="font-mono font-bold">info-content</span> <br /> <span className="text-xs opacity-60">Foreground content color to use on info color</span></td> <td><span className="badge badge-sm badge-ghost">optional</span> <br /> <span className="text-xs opacity-60">Will be a readable tone of info if not specified</span></td> <td><span className="font-mono text-xs opacity-60">Class name: <code>bg-info-content</code></span> <br /> <span className="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--inc))</code></span></td></tr> <tr><td><span className="badge relative top-4 bg-success"></span></td> <td><span className="font-mono font-bold">success</span> <br /> <span className="text-xs opacity-60">Success color</span></td> <td><span className="badge badge-sm badge-ghost">optional</span> <br /> <span className="text-xs opacity-60">Will be a default green color if not specified</span></td> <td><span className="font-mono text-xs opacity-60">Class name: <code>bg-success</code></span> <br /> <span className="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--su))</code></span></td></tr> <tr><td><span className="badge relative top-4 bg-success-content"></span></td> <td><span className="font-mono font-bold">success-content</span> <br /> <span className="text-xs opacity-60">Foreground content color to use on success color</span></td> <td><span className="badge badge-sm badge-ghost">optional</span> <br /> <span className="text-xs opacity-60">Will be a readable tone of success if not specified</span></td> <td><span className="font-mono text-xs opacity-60">Class name: <code>bg-success-content</code></span> <br /> <span className="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--suc))</code></span></td></tr> <tr><td><span className="badge relative top-4 bg-warning"></span></td> <td><span className="font-mono font-bold">warning</span> <br /> <span className="text-xs opacity-60">Warning color</span></td> <td><span className="badge badge-sm badge-ghost">optional</span> <br /> <span className="text-xs opacity-60">Will be a default orange color if not specified</span></td> <td><span className="font-mono text-xs opacity-60">Class name: <code>bg-warning</code></span> <br /> <span className="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--wa))</code></span></td></tr> <tr><td><span className="badge relative top-4 bg-warning-content"></span></td> <td><span className="font-mono font-bold">warning-content</span> <br /> <span className="text-xs opacity-60">Foreground content color to use on warning color</span></td> <td><span className="badge badge-sm badge-ghost">optional</span> <br /> <span className="text-xs opacity-60">Will be a readable tone of warning if not specified</span></td> <td><span className="font-mono text-xs opacity-60">Class name: <code>bg-warning-content</code></span> <br /> <span className="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--wac))</code></span></td></tr> <tr><td><span className="badge relative top-4 bg-error"></span></td> <td><span className="font-mono font-bold">error</span> <br /> <span className="text-xs opacity-60">Error color</span></td> <td><span className="badge badge-sm badge-ghost">optional</span> <br /> <span className="text-xs opacity-60">Will be a default red color if not specified</span></td> <td><span className="font-mono text-xs opacity-60">Class name: <code>bg-error</code></span> <br /> <span className="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--er))</code></span></td></tr> <tr><td><span className="badge relative top-4 bg-error-content"></span></td> <td><span className="font-mono font-bold">error-content</span> <br /> <span className="text-xs opacity-60">Foreground content color to use on error color</span></td> <td><span className="badge badge-sm badge-ghost">optional</span> <br /> <span className="text-xs opacity-60">Will be a readable tone of error if not specified</span></td> <td><span className="font-mono text-xs opacity-60">Class name: <code>bg-error-content</code></span> <br /> <span className="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--erc))</code></span></td></tr></tbody>
            </table>
            </div>
          </div>
        </div>

        <div>
          <input type="text" placeholder="Type here" className="input w-full max-w-xs" />

          <ul className="steps">
            <li className="step step-primary">Register</li>
            <li className="step step-primary">Choose plan</li>
            <li className="step">Purchase</li>
            <li className="step">Receive Product</li>
          </ul>

          <div className="chat chat-start">
            <div className="chat-bubble">It&apos;s over Anakin, <br />I have the high ground.</div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble">You underestimate my power!</div>
          </div>

          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src="/apple-touch-icon.png" />
              </div>
            </div>
            <div className="chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
          </div>
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src="/apple-touch-icon.png" />
              </div>
            </div>
            <div className="chat-bubble">It was you who would bring balance to the Force</div>
          </div>
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src="/apple-touch-icon.png" />
              </div>
            </div>
            <div className="chat-bubble">Not leave it in Darkness</div>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div >
      <h2>Welcome!</h2>

      <code>Guest, Please Login</code>
    </div>
  );
}
