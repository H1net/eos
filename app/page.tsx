// 'use client'

import PinBoard from '@/components/PinBoard'
// import Auth from '@/components/Auth'
// import { useAuth, VIEWS } from '@/components/AuthProvider'
import LoadingNotifier from '@/components/LoadingNotifier'
import { supabaseCreateForServer } from '@/lib/supabase-server'

export default async function HomePage() {
  // const { initial, user, view, signOut } = useAuth()
  const supabase = supabaseCreateForServer()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // console.log(user)

  // if (initial) {
  //   return <LoadingNotifier />
  // }

  if (session?.user) {
    return (
      <main>
        <section>
          <article className="card">
            <div className="card-body">
              <p>
                Welcome to <span className="font-bold underline">Eos</span>
              </p>
            </div>
          </article>
        </section>
        {/* @ts-expect-error */}
        <PinBoard />
      </main>
    )
  }

  return (
    <main>
      <section>
        <article className="card">
          <div className="card-body">
            <p>
              Welcome to <span className="font-bold underline">Eos</span>
            </p>
            <p>Please sign in for the menu.</p>
          </div>
        </article>
      </section>
    </main>
  )
}
