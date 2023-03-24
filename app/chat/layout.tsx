import SideBar from "@/components/SideBar"

export const metadata = {
  title: 'Apollo',
  description: 'Desktop and mobile productivity boost',
}

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <div className="flex">
        <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
          <SideBar />
        </div>

        {/* ClientProvider - Notifications */}

        <div className="bg-[#343541] flex-1">{children}</div>
      </div>
    </section>
  )
}
