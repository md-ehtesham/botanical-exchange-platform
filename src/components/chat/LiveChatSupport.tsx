
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, User, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
}

const LiveChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! How can I help you today?',
      sender: 'agent',
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  const toggleChat = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsMinimized(false);
    } else {
      setIsMinimized(!isMinimized);
    }
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    
    // Simulate agent response after 1-2 seconds
    setTimeout(() => {
      const responses = [
        "Thank you for your message. One of our representatives will respond shortly.",
        "I understand your question. Let me check that for you.",
        "Thanks for reaching out! Our team is reviewing your query.",
        "That's a great question about our products. Let me find the right information for you."
      ];
      
      const agentMessage: Message = {
        id: Date.now().toString(),
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: 'agent',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, agentMessage]);
      
      // Show notification if chat is minimized
      if (isMinimized) {
        toast({
          title: "New message from support",
          description: "You have a new response in your chat.",
        });
      }
    }, 1000 + Math.random() * 1000);
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-herb-600 hover:bg-herb-700 text-white shadow-lg flex items-center justify-center z-50 transition-transform hover:scale-105"
        aria-label="Live Chat Support"
      >
        <MessageCircle size={24} />
      </button>
      
      {/* Chat window */}
      {isOpen && (
        <div 
          className={`fixed bottom-24 right-6 w-96 bg-white rounded-lg shadow-xl overflow-hidden z-50 transition-all duration-300 border border-gray-200 ${
            isMinimized ? 'h-16' : 'h-[480px]'
          }`}
        >
          {/* Chat header */}
          <div className="bg-herb-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center">
              <MessageCircle size={20} className="mr-2" />
              <h3 className="font-medium">Live Support</h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleChat}
                className="p-1 hover:bg-herb-500 rounded"
                aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
              >
                {isMinimized ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              <button
                onClick={closeChat}
                className="p-1 hover:bg-herb-500 rounded"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>
          
          {!isMinimized && (
            <>
              {/* Chat messages */}
              <div className="p-4 h-[360px] overflow-y-auto bg-gray-50">
                {messages.map(message => (
                  <div 
                    key={message.id} 
                    className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === 'user' 
                          ? 'bg-herb-600 text-white rounded-tr-none' 
                          : 'bg-white border border-gray-200 rounded-tl-none'
                      }`}
                    >
                      <div className="flex items-center mb-1">
                        {message.sender === 'agent' ? (
                          <span className="text-xs text-gray-500 font-medium">Support Agent</span>
                        ) : (
                          <span className="text-xs text-herb-100 font-medium">You</span>
                        )}
                        <span className="text-xs ml-auto text-gray-400">
                          {formatTime(message.timestamp)}
                        </span>
                      </div>
                      <p className={`text-sm ${message.sender === 'user' ? 'text-white' : 'text-gray-800'}`}>
                        {message.text}
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              
              {/* Chat input */}
              <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200 bg-white">
                <div className="flex items-center gap-2">
                  <Input
                    ref={inputRef}
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-grow"
                  />
                  <Button 
                    type="submit" 
                    size="sm" 
                    className="bg-herb-600 hover:bg-herb-700"
                    disabled={!newMessage.trim()}
                  >
                    <Send size={16} />
                  </Button>
                </div>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default LiveChatSupport;
