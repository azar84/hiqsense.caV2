import React from "react";

const ChatWidget = () => {
  return (
    <iframe
      id="chatIframe"
      src="https://saski-ui.replit.app"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "100%",
        height: "100%",
        border: "none",
        borderRadius: "10px",
        
        zIndex: 1000,
      }}
      title="Chat Widget"
    ></iframe>
  );
};

export default ChatWidget;
