import NewChat from "./NewChat"
// import { Database } from "@/lib/database.types"
import Link from "next/link"
import { supabase } from "@/lib/supabase"
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline"
// type Profiles = Database['public']['Tables']['profiles']['Row']
// type Conversations = Database['public']['Tables']['conversations']['Row']

const ConversationRows = async() => {
  // const supabase = createServerClient();
  const { data } = await supabase.from('conversations').select('*');

  return (
    <div className="space-y-4 mt-8">
      {data?.map((convo) => (
        <Link href={`/chat/${convo.id}`} className='border-gray-700/90 border items-center convoRow' key={convo.id}>
          <ChatBubbleLeftIcon className="h-4 w-4" />
          <p className="truncate">{convo.title}</p>
        </Link>
      ))}
    </div>
  )
  // return <pre>{JSON.stringify({ data }, null, 2)}</pre>;
}

export default function SideBar() {

  return (
    <div className="flex flex-col h-screen p-2">
      <div className="flex-1">
        <div>
          <NewChat />

          <div>
            {/* ModelSelection */}
            <p className='border-gray-700 border bg-yellow-700 items-center chatRow'>Model: ChatGPT</p>
          </div>

          {/* Map through the ChatRows */}
          <ConversationRows />
        </div>
      </div>
    </div>
  )
}
