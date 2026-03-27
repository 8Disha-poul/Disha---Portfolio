import '../styles/chatbot.css';
import { useState } from 'react';
function Chatbot()
{
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const handleSend = () => {
  if (input.trim() === "") return;

  const userMessage = {
    text: input,
    sender: "user"
  };

  const botMessage = {
    text: getResponse(input),
    sender: "bot"
  };

  setMessages([...messages, userMessage, botMessage]);
  setInput("");
};
const getResponse = (msg) => {
  const text = msg.toLowerCase();

  if (text.includes("hi") || text.includes("hello")) {
    return "Hello! I'm Disha's assistant 😊";
  }

  if (text.includes("skills")) {
    return "She knows Java, React, MySQL, and more!";
  }

  if (text.includes("projects")) {
    return "Check out the projects section ";
  }

  if (text.includes("contact")) {
    return "You can contact her using the form ";
  }
  
  if (text.includes("certifications")) {
    return "She has completed NPTEL Java certification and More ! Check in certifications sections. ";
  }

  if (text.includes("who") || text.includes("about")) {
    return "Disha is a Computer Science student and AI enthusiast 🚀";
  }

  return "Sorry, I dont know about that yet...";
};
    return(
     <div className="chatbot-container">

  {/* Chat button */}
  <div className="chat-toggle" onClick={() => setOpen(!open)}>
    💬<span>DishaBot</span>
  </div>

  {/* Chat window */}
  {open && (
    <div className="chat-window">
      <div className="chat-header">Chat with DishaBot</div>

      <div className="chat-body">
  {messages.map((msg, index) => (
    <div key={index} className={msg.sender}>
      {msg.text}
    </div>
  ))}
</div>

      <div className="chat-input">
        <input type="text" placeholder="Ask something..." value={input} onChange={(e)=>setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSend()}/>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  )}

</div>

    );
}
export default Chatbot;