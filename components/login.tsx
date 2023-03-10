'use client';

import { useSupabase } from './supabase-provider';


// function LoginFormEmail() {
//   const handleSubmit = async (e: React.SyntheticEvent) => {
//     e.preventDefault();
//     const target = e.target as typeof e.target & {
//       post: { value: string };
//     };
//     const post = target.post.value;

//     // await supabase.from('posts').insert({ content: post });
//     // no need to refresh, as we are subscribed to db changes in `./realtime-posts.tsx`
//   };
//   return (

//   )
// }


// Supabase auth needs to be triggered client-side
export default function Login() {
  const { supabase, session } = useSupabase();

  // const handleEmailLogin = async () => {
  //   const { error } = await supabase.auth.signInWithPassword({
  //     email: 'jon@supabase.com',
  //     password: 'password'
  //   });

  //   if (error) {
  //     console.log({ error });
  //   }
  // };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string }
    };
    const email = target.email.value;
    const password = target.password.value;

    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    });

    if (error) {
      console.log({ error });
    }
    // await supabase.from('posts').insert({ content: post });
    // no need to refresh, as we are subscribed to db changes in `./realtime-posts.tsx`
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log({ error });
    }
  };

  // this `session` is from the root loader - server-side
  // therefore, it can safely be used to conditionally render
  // SSR pages without issues with hydration
  return session ? (
    <button onClick={handleLogout}>Logout</button>
  ) : (
    <>
      {/* <button onClick={handleEmailLogin}>Login</button> */}
      {/* <div> */}
        {/* <form onSubmit={handleSubmit}> */}
          <input type="text" name="email" />
          <input type="password" name="password" />
          <button>Login</button>
        {/* </form> */}
      {/* </div> */}
    </>
  );
}
