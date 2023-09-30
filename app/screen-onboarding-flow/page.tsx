"use client";

import React from "react";
import { UncontrolledOnboardingFlow } from "../patterns/04-onboarding-flow/UncontrolledOnboardingFlow";

const StepOne = ({ gotoNext }: any) => (
  <>
    {/* {console.log(gotoNext)} */}
    <h1>Step 1</h1>
    <button onClick={() => gotoNext({ name: "John Doe" })}>Next</button>
  </>
);

const StepTwo = ({ gotoNext }: any) => (
  <>
    <h1>Step 2</h1>
    <button onClick={() => gotoNext({ age: 22 })}>Next</button>
  </>
);
const StepThree = ({ gotoNext }: any) => (
  <>
    <h1>Step 3</h1>
    <button onClick={() => gotoNext({ hairColor: "black" })}>Next</button>
  </>
);
const StepFour = ({ gotoNext }: any) => (
  <>
    <h1>Step 4</h1>
    <button onClick={() => gotoNext({ skinColor: "white" })}>Next</button>
  </>
);

function page() {
  return (
    <UncontrolledOnboardingFlow onFinish={(data) => console.log(data)}>
      <StepOne />
      <StepTwo />
      <StepThree />
      <StepFour />
    </UncontrolledOnboardingFlow>
  );
}

export default page;
