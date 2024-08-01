// ToastComponent.tsx
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const ToastComponent = () => {
  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export const notifyError = (message: string) => toast.error(message);
export const notifySuccess = (message: string) => toast.success(message);

export default ToastComponent;
