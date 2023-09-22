import Image from 'next/image'
import SplitTest from './patterns/01.1-screen-patterns/SplitTest'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SplitTest/>
    </main>
  )
}
