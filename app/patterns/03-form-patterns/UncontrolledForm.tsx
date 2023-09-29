"use client";

import React, { RefObject, ChangeEvent, FormEvent } from "react";

export const UncontrolledForm = () => {
  const nameInput: RefObject<HTMLInputElement> = React.createRef();
  const ageInput: RefObject<HTMLInputElement> = React.createRef();
  const hairColorInput: RefObject<HTMLInputElement> = React.createRef();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(nameInput.current?.value);
    console.log(ageInput.current?.value);
    console.log(hairColorInput.current?.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Name" ref={nameInput} />
      <input name="age" type="number" placeholder="age" ref={ageInput} />
      <input
        name="hairColor"
        type="text"
        placeholder="Hair Color"
        ref={hairColorInput}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
