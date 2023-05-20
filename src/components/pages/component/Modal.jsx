import React from "react";
import { FaXbox } from "react-icons/fa";

const Modal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <button
            className="text-gray-500 hover:text-gray-700 text-3xl"
            onClick={onClose}
          >
            <FaXbox></FaXbox>
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
