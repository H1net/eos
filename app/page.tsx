import PinBoard from '@/components/PinBoard';

export default function HomePage() {
  return (
    <main>
      <section>
        <article className='card'>
          <div className='card-body'>
            <p>Welcome to <span className='font-bold underline'>Apollo</span>, by <span className=' italic'>&copy; AstraNormical</span></p>
            <p>Please sign in for the menu.</p>
          </div>
        </article>
      </section>
      {/* @ts-expect-error */}
      <PinBoard />
    </main>
  )
}
