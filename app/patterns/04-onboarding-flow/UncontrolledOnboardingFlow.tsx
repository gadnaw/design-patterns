"use client";
import React, { ReactNode, useState, cloneElement } from "react";

interface UncontrolledOnboardingFlowProps {
  children: ReactNode;
  onFinish: (updatedData: any) => void;
}

export const UncontrolledOnboardingFlow = ({
  children,
  onFinish,
}: UncontrolledOnboardingFlowProps) => {
  // onboardingData are data collected on each step
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const arrayedChildren = React.Children.toArray(children);

  const gotoNext = (stepData: any) => {
    const nextIndex = currentIndex + 1;
    const updatedData = {
      ...onboardingData,
      ...stepData,
    };

    console.log(updatedData);
    // @ts-ignore
    if (nextIndex < children.length) {
      setCurrentIndex(nextIndex);
    } else {
      onFinish(updatedData);
    }

    setOnboardingData(updatedData);
  };

  const currentChild = React.Children.toArray(children)[currentIndex];
  //   console.log(currentChild);

  //   console.log(React.isValidElement(currentChild));

  if (React.isValidElement(currentChild)) {
    // @ts-ignore
    return React.cloneElement(currentChild, { gotoNext });
  }
  return currentChild;
};
