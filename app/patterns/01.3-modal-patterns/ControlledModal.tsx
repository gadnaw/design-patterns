"use client";

// interface ControlledModalProps {
//     children:
// }

function ControlledModal({ shouldShow, onRequestClose, children }: any) {
  return shouldShow ? (
    <>
      {shouldShow && (
        <div
          onClick={onRequestClose}
          className="fixed left-0 z-10 right-0 bg-black text-blue-600 w-full h-full overflow-auto bg-opacity-40"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white m-10 p-5 w-70 bg-opacity-100 z-20"
          >
            {/* Normally this is an X button */}
            <button onClick={onRequestClose}>Hide Modal</button>
            {children}
          </div>
        </div>
      )}
    </>
  ) : null;
}

export default ControlledModal;
