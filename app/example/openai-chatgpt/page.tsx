// import { OpenAIStream, createPayLoad } from "@/lib/OpenAIStream"

import ChatForm from "@/components/ChatForm";

// import type { ChatGPTMessage } from "@/lib/OpenAIStream"


// async function TestMessage() {
//   const payload = createPayLoad()
//   const stream = await OpenAIStream(payload)
//   console.log(stream)
//   // console.log("test")

//   return new Response(stream);
// }

export default function OpenAiChatGPTExamplePage() {
  // const data = TestMessage();
  return (
    <div>
      <ChatForm />
    </div>
  )
}
