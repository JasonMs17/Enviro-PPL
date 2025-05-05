import React, { useState, useEffect, useRef } from "react";
import { http } from "../../utils/fetch";
import ReactMarkdown from "react-markdown";
import "./Chatbot.css";

const Chatbot = ({ material, isOpen, setIsOpen }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatBoxRef = useRef(null);
  const [chatHistory, setChatHistory] = useState([]);
  const [usedTemplates, setUsedTemplates] = useState([]);
  const [showTemplates, setShowTemplates] = useState(true); // State baru untuk mengontrol tampilan template pertanyaan

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const getDynamicTemplates = () => {
    const templates = [];

    if (material) {
      if (material.video_subs && material.video_subs.length > 0) {
        templates.unshift({
          label: "Jelaskan tentang video materi",
          text: "Jelaskan tentang video materi",
        });
      }

      templates.unshift({
        label: "Rangkumkan materi ini",
        text: "Rangkumkan materi ini",
      });
    }

    return templates.filter((tpl) => !usedTemplates.includes(tpl.text));
  };

  const handleTemplateClick = (text) => {
    const context =
      (material?.detail || "") +
      "\n\nBerikut ini adalah transkrip dari video pembelajaran:\n" +
      (material?.video_subs || "");

    setUsedTemplates((prev) => [...prev, text]);
    setShowTemplates(false); // Hilangkan template pertanyaan setelah diklik
    sendMessage(text, { context });
  };

  const sendMessage = async (messageText, customData = {}) => {
    const text = messageText || input;
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { text, isUser: true }]);
    setChatHistory((prev) => [...prev, { role: "user", content: text }]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await http("/api/chat", {
        method: "POST",
        body: JSON.stringify({
          pesan: text,
          history: chatHistory,
          context: customData.context || "",
        }),
      });

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
      setMessages((prev) => [...prev, { text: data.balasan, isUser: false }]);
      setChatHistory((prev) => [
        ...prev,
        { role: "assistant", content: data.balasan },
      ]);
    } catch (error) {
      console.error("Gagal mengirim pesan:", error);
      setMessages((prev) => [
        ...prev,
        { text: "Terjadi kesalahan saat menghubungi server.", isUser: false },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div>
      {!isOpen && (
        <button className="chat-button" onClick={() => setIsOpen(true)}>
          Chat
        </button>
      )}

      {isOpen && (
        <div className={`chat-container ${isOpen ? "open" : "closed"}`}>
          <div className="chat-header">
            <span>EnviBot</span>
            <button
              className="close-button-chatbot"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>

          <div className="chat-box" ref={chatBoxRef}>
            <div className="message ai-message">
              Hai! Ada yang bisa saya bantu?
            </div>

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${
                  msg.isUser ? "user-message" : "ai-message"
                }`}
              >
                {msg.isUser ? (
                  msg.text
                ) : (
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="typing-indicator">EnviBot sedang mengetik...</div>
            )}
          </div>

          {showTemplates && ( // Hanya tampilkan template pertanyaan jika showTemplates adalah true
            <div className="template-questions">
              {getDynamicTemplates().map((tpl, idx) => (
                <button key={idx} onClick={() => handleTemplateClick(tpl.text)}>
                  {tpl.label}
                </button>
              ))}
            </div>
          )}

          <div className="input-container">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ketik pertanyaan di sini..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={() => sendMessage()}>Kirim</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
