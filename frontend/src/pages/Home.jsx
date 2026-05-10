import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot } from 'lucide-react';

const Home = () => {
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      content: "Hello! I am EduGuide, your expert test prep tutor for competitive exams like JEE, UPSC, SAT, GMAT, and GRE. How can I help you today?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage.content }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'bot', content: data.response }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { role: 'bot', content: "Sorry, I'm having trouble connecting to my brain right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  // Convert simple markdown-like text to formatted HTML
  const formatText = (text) => {
    // Replace **text** with bold
    let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Replace *text* with italics
    formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');
    // Basic newlines to br
    return { __html: formatted.replace(/\n/g, '<br/>') };
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          <Bot size={24} /> EduGuide Chat
        </h2>
      </div>
      
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            {msg.role === 'bot' ? (
              <p dangerouslySetInnerHTML={formatText(msg.content)}></p>
            ) : (
              <p>{msg.content}</p>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="message bot">
            <div className="loading-dots">
              <span></span><span></span><span></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input-container">
        <input
          type="text"
          className="chat-input"
          placeholder="Ask me anything about your exam prep..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={isLoading}
        />
        <button 
          className="chat-send-btn" 
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default Home;
