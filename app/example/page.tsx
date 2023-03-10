import Image from 'next/image';
// import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      <main>
        <h1>
          Welcome to <a href="https://app.supabase.com">Supabase</a> on{' '}
          <a href="https://nextjs.org">Next.js 13!</a>
        </h1>

        <div>
          <a href="/optional-session">
            <h2>Optional Session &rarr;</h2>
            <p>Visit this page with or without a session.</p>
          </a>

          <a href="/required-session">
            <h2>Required Session &rarr;</h2>
            <p>Get redirected if you don't have a session.</p>
          </a>

          <a href="/realtime">
            <h2>Realtime &rarr;</h2>
            <p>Merge server and client state with realtime.</p>
          </a>
        </div>
      </main>

    </div>
  );
}
