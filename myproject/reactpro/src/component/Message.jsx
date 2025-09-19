import { useState } from "react";

export default function Message() {
  const [msg, setMsg] = useState("");

  function showMessage() {
    setMsg("Hello! This is your message 🚀");
  }

  return (
    <div>
      <button onClick={showMessage}>Click here to get a Message</button>
      <p>{msg}</p>
    </div>
  );
}
