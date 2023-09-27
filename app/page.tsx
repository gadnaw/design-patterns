import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="pb-2 ">Collection of React Patterns from Youtube!</h1>
      <div className="flex flex-col">
        <Link href="/screen-splitscreenpattern" className="bg-red-100 border-2 border-solid border-red-200">1.1 Split Screen Pattern</Link>
        <Link href="/screen-listitempattern" className="bg-red-100 border-2 border-solid border-red-200">1.2 List Item Pattern</Link>
        <Link href="/screen-modal" className="bg-red-100 border-2 border-solid border-red-200">1.2 List Item Pattern</Link>
      </div>
    </main>
  )
}
