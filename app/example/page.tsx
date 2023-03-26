'use client';

import LoadingNotifier from '@/components/LoadingNotifier';
import Link from 'next/link';
import { useAuth, VIEWS } from '../../components/AuthProvider';

export default function ExamplePage() {
  const { initial, user, view,  } = useAuth();

  if (initial) {
    return <LoadingNotifier />;
  }

  if (user) {
    return (
      <div >
        <h2>Welcome!</h2>

        {/* <code>{user.role}</code> */}
        <ul>
          <li><Link href="/example/test">Test</Link></li>
          <li><Link href="/example/openai-chatgpt">OpenAI ChatGPT</Link></li>
          <li><Link href="/example/daisyui">daisyUI</Link></li>
          <li><Link href="/example/db/server">DB - Server Side</Link></li>
          <li><Link href="/example/db/client">DB - Client Side</Link></li>
        </ul>
      </div>
    );
  }

  return (
    <div >
      <h2>Welcome!</h2>

      <code>Guest</code>
    </div>
  );
}
