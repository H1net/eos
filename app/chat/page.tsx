export default function ChatPage() {
  return (
    <main className="flex text-center">
      <div className="fixed flex top-0 bottom-32 left-0 right-0 h-auto w-auto bg-gray-300">
        Output
      </div>
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gray-700">Input</div>
    </main>
  )
}
