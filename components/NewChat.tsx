import { PlusIcon } from '@heroicons/react/24/outline'
import Link from "next/link"

function NewChat() {
  return (
    <Link href="/chat/new" className='border-gray-700 border items-center chatRow'>
      <PlusIcon className="h-4 w-4" />
      <p>New Chat</p>
    </Link>
  )
}

export default NewChat