import { supabaseCreateForServer } from "@/lib/supabase-server"
import Link from "next/link"
import TextDisplay from "./TextDisplay"
import { Database } from "@/lib/database.types"
import LoadingNotifier from "./LoadingNotifier"
type Pin = Database['public']['Tables']['pins']['Row']

function PinBoardCard({
  pin
}: {
  pin: Pin
}) {

  return (
  <article className="card bg-primary text-primary-content">
    <div className="card-body">
      {/* <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"> */}
      <Link href={`/pinboard/${pin.id}`}>
        <TextDisplay markdownText={pin.text} />
      </Link>
      {/* </a> */}
    </div>
  </article>
  )
}

export default async function PinBoard() {
  const supabase = supabaseCreateForServer()

  const { data } = await supabase.from('pins').select('*');

  if (!Array.isArray(data)) {
    return <LoadingNotifier />;
  }

  return (
    <section>
      <div className="prose mb-2">
        <h1 className="text-primary">PinBoard</h1>
      </div>
      <Link href="/pinboard/new"><button className="btn btn-block btn-primary">Add Pin</button></Link>
      <div className="container flex flex-wrap space-x-2 space-y-2 mt-4">
        {data.map((pin) => (
          <PinBoardCard pin={pin} key={pin.id} />
        ))}
      </div>
    </section>
  )
}

export { PinBoardCard }