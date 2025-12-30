import React, { useEffect } from "react";

const Modal = ({ title = "", message = "", onClose }) => {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose && onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      <div className="relative bg-white rounded-md shadow-lg max-w-md w-full p-6 z-10">
        {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
        <p className="text-gray-700 mb-6">{message}</p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">
            Close
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bgp text-white hover:brightness-95">
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
