"use client";
import React, { useState } from "react";
import Modal01 from "../patterns/01.3-modal-patterns/Modal01";
import LargePersonListItem from "../patterns/01.2-list-item-patterns/people/LargePersonListItem";
import ControlledModal from "../patterns/01.3-modal-patterns/ControlledModal";

///////////////////////////////////
// We need to create other component to HOLD the
// ControlledModal Component because of error that 'page' is not a Component.
///////////////////////////////////
const ControlledModalComponent = () => {
  const [shouldShowModal, setShouldShowModal] = useState(false);

  const changeShouldShowModal = () => {
    setShouldShowModal(!shouldShowModal);
  };

  return (
    <>
      <button onClick={changeShouldShowModal}>Show Modal</button>
      <ControlledModal
        shouldShow={shouldShowModal}
        onRequestClose={changeShouldShowModal}
      >
        <h4>Hello from Controlled Modal</h4>
      </ControlledModal>
    </>
  );
};

function page() {
  return (
    <>
      <h1>Modal Patterns</h1>
      <h3>Controlled Modal:</h3>
      <ControlledModalComponent />
      <p>==============================</p>

      <h3>Uncontrolled Modal:</h3>
      <Modal01>
        <h4>Hello from Uncontrolled Modal</h4>
      </Modal01>
    </>
  );
}

export default page;
