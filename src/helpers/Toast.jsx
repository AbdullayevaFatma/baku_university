import { toast } from "react-hot-toast";
import { FiCheckCircle, FiXCircle, FiAlertTriangle } from "react-icons/fi";
import React from "react";

const baseStyle = {
  borderRadius: "12px",
  padding: "14px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  color: "white",
  maxWidth: "350px",
  transition: "all 0.3s ease-in-out",
};

const getAnimationStyle = (visible) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? "translateY(0px)" : "translateY(-20px)",
});

export const toastSuccess = (msg) => {
  toast.custom((t) => (
    <div
      style={{
        ...baseStyle,
        background: "linear-gradient(135deg, #E77C22, #E77C29)",
        ...getAnimationStyle(t.visible),
      }}
    >
      <FiCheckCircle size={22} />
      <span>{msg}</span>
    </div>
  ));
};

export const toastError = (msg) => {
  toast.custom((t) => (
    <div
      style={{
        ...baseStyle,
        background: "linear-gradient(135deg, #024C97, #024C97)",
        ...getAnimationStyle(t.visible),
      }}
    >
      <FiXCircle size={22} />
      <span>{msg}</span>
    </div>
  ));
};

export const toastWarn = (msg) => {
  toast.custom((t) => (
    <div
      style={{
        ...baseStyle,
        background: "linear-gradient(135deg, #ffc107, #e0a800)",
        color: "#212529",
        ...getAnimationStyle(t.visible),
      }}
    >
      <FiAlertTriangle size={22} />
      <span>{msg}</span>
    </div>
  ));
};
