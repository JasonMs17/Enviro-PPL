import React, { useState, useEffect, useRef } from "react";
import { http } from "../../utils/fetch"; // Pakai http dari utils/fetch
import "./Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const chatBoxRef = useRef(null);
  const [chatHistory, setChatHistory] = useState([]); // State untuk riwayat percakapan

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleTemplateClick = (text) => {
    setInput(text);
    sendMessage(text);
  };

  const sendMessage = async (messageText, customData = {}) => {
    const text = messageText || input;
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { text, isUser: true }]);
    setChatHistory((prevHistory) => [...prevHistory, { role: 'user', content: text }]); // Tambahkan pesan pengguna ke riwayat
    setInput("");
    setIsTyping(true);

    try {
      const response = await http("/api/chat", {
        method: "POST",
        body: JSON.stringify({ pesan: text, history: chatHistory, ...customData }), // Kirim riwayat
      });

      console.log("Response received:", response);

      if (!response.ok) {
        const errData = await response.json();
        console.error("Error dari server:", errData);
        setMessages((prev) => [
          ...prev,
          { text: "Terjadi kesalahan.", isUser: false },
        ]);
        return;
      }

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { text: data.balasan, isUser: false },
      ]);
      setChatHistory((prevHistory) => [...prevHistory, { role: 'assistant', content: data.balasan }]); // Tambahkan balasan asisten ke riwayat
    } catch (error) {
      console.error("Gagal mengirim pesan:", error);
      setMessages((prev) => [
        ...prev,
        { text: "Terjadi kesalahan.", isUser: false },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div>
      <button className="chat-button" onClick={() => setIsOpen(!isOpen)}>
        Chat
      </button>

      {isOpen && (
        <div className={`chat-container ${isOpen ? "open" : "closed"}`}>
          <div className="chat-header">
            Chatbot Asisten Akademik
            <button className="close-button" onClick={() => setIsOpen(false)}>
              &#10005;
            </button>
          </div>

          <div className="chat-box" ref={chatBoxRef}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${
                  msg.isUser ? "user-message" : "ai-message"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isTyping && <div className="typing-indicator">Typing...</div>}
          </div>

          <div className="template-questions">
            <button onClick={() => handleTemplateClick("Jadwal saya hari ini")}>
              Jadwal saya hari ini
            </button>
            <button onClick={() => handleTemplateClick("Daftar tugas")}>
              Daftar tugas
            </button>
          </div>

          <div className="input-container">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Masukkan pertanyaan..."
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={() => sendMessage()}>Kirim</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
