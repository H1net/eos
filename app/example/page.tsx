'use client';

import LoadingNotifier from '@/components/LoadingNotifier';
import { useAuth, VIEWS } from '../../components/AuthProvider';

export default function Home() {
  const { initial, user, view,  } = useAuth();

  if (initial) {
    return <LoadingNotifier />;
  }

  if (user) {
    return (
      <div >
        <h2>Welcome!</h2>

        <code>{user.role}</code>
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
