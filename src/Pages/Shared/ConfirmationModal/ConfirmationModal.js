import React from "react";

const ConfirmationModal = ({
  title,
  message,
  closeModal,
  modalData,
  successAction,
}) => {
  return (
    <div>
      <input type="checkbox" id="confirmation_modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label className="btn" onClick={closeModal}>
              Cancel
            </label>
            <label
              htmlFor="confirmation_modal"
              className="btn"
              onClick={() => successAction(modalData)}
            >
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
