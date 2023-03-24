import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'

import { supabaseCreateForServer } from "@/lib/supabase-server"
import TextDisplay from '@/components/TextDisplay';

// do not cache this page
export const revalidate = 0;

const messageClassName = (message: any) => {
  switch (message.role) {
    case 'system': return 'msgUserText';
    break
    case 'bot': return 'msgBotText';
    break
    case 'assistant': return 'msgBotText';
    break
    case 'user': return 'msgUserText';
    break
    default: return 'msgBotText';
  }
}

export default async function ConversationPage({
    params,
    searchParams,
  }: {
    params: { id: string };
    searchParams?: { [key: string]: string | string[] | undefined };
  }) {
  const supabase = supabaseCreateForServer();
  const { data } = await supabase.from('messages').select('*').eq('conversation_id', params.id);

  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">Chat GPT Conversation</h1>
      <div className='flex flex-col space-x-2 space-y-8 text-center'>
        {data?.map((message) => (
          <div className={messageClassName(message)} key={message.id}>
            {/* <p>{message.text}</p> */}
            <TextDisplay markdownText={message.text} />
          </div>
        ))}
        {/* <div>
          <pre>{JSON.stringify({ data }, null, 2)}</pre>
        </div> */}
      </div>
    </div>
  )
}
