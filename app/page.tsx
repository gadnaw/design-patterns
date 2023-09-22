import { SplitScreen } from './patterns/01.1-screen-patterns/SplitScreen'


const LeftHandComponent = () =>{
  return <h1 className='bg-red-300 '>Left!</h1>
}

const RightHandComponent = () => {
  return <h3 className='bg-yellow-300 text-lg font-bold border-blue-700 border-solid border-4'>Right!</h3>
}


export default function Home() {
  return (
    <main>
      <SplitScreen
        left={LeftHandComponent}
        right={RightHandComponent}
      />
    </main>
  )
}
