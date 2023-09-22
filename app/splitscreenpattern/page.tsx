import LeftHandComponent from "../components/LeftHandComponent";
import LeftHandComponent2 from "../components/LeftHandComponent2";
import RightHandComponent from "../components/RightHandComponent";
import RightHandComponent2 from "../components/RightHandComponent2";

import { SplitScreen } from "../patterns/01.1-screen-patterns/SplitScreen";
import { SplitScreenVersion2 } from "../patterns/01.1-screen-patterns/SplitScreenVersion2";


export default function Page() {
    return <>
    <h2 className="font-bold">Base Split Screen</h2>
    <SplitScreen
        left={LeftHandComponent}
        right={RightHandComponent}
        leftWeight={80}
        rightWeight={1}
      />
      <h2 className="font-bold">Version 2 of Split Screen</h2>
      <p>A more developer friendly when you are used to it</p>
      <SplitScreenVersion2 
        leftWeight={80}
        rightWeight={1}>
        <LeftHandComponent2 name = "Peter Wandag"/>
        <RightHandComponent2 message = "Be the Best Programmer Out there"/>
      </SplitScreenVersion2>
    </>
      }