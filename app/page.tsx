import { SplitScreen } from './patterns/01.1-screen-patterns/SplitScreen'


const LeftHandComponent = () =>{
  // style your component here, the style in split-screen pattern is for layout

  return <h1 className='bg-red-300 text-xl'>Left!</h1>
}

const RightHandComponent = () => {
  // style your component here, the style in split-screen pattern is for layout

  return <h3 className='bg-yellow-300'>Right!</h3>
}


export default function Home() {
  return (
    <main>
      <SplitScreen
        left={LeftHandComponent}
        right={RightHandComponent}
        leftWeight={80}
        rightWeight={1}
      />
    </main>
  )
}
