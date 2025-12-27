import React, { createContext, useCallback, useContext, useState } from "react";
import Alert from "./Alert";

const ToastContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback(
    ({ type = "success", message = "", duration = 2000 }) => {
      const id = Date.now() + Math.random();
      setToasts((t) => [...t, { id, type, message }]);
      setTimeout(() => {
        setToasts((t) => t.filter((x) => x.id !== id));
      }, duration);
    },
    []
  );

  const removeToast = useCallback((id) => {
    setToasts((t) => t.filter((x) => x.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Toast container */}
      <div className="fixed top-18 right-4 z-50 flex flex-col items-end gap-3">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="transform transition duration-300 ease-out">
            <Alert
              type={t.type}
              message={t.message}
              onClose={() => removeToast(t.id)}
              autoDismiss={0}
            />
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export default ToastContext;
