import { useState, useRef, useEffect } from "react";
import { ChatMessage } from "@/components/ChatMessage";
import { QuickActions } from "@/components/QuickActions";
import { MessageInput } from "@/components/MessageInput";
import { TypingIndicator } from "@/components/TypingIndicator";
import { getCampusResponse } from "@/lib/campusData";
import { Card } from "@/components/ui/card";

export type Message = {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
};

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "👋 Hi! I'm CampusBot, your friendly campus assistant! I can help you with schedules, facilities, dining options, library services, and administrative procedures. What would you like to know?",
      isUser: false,
      timestamp: new Date(),
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (content: string) => {
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const botResponse = getCampusResponse(content);
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        content: botResponse,
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickAction = (action: string) => {
    handleSendMessage(action);
  };

  return (
    <div className="min-h-screen bg-gradient-chat">
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-gradient-primary text-white px-8 py-4 rounded-2xl shadow-chat mb-4">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              🎓
            </div>
            <h1 className="text-2xl font-bold">CampusBot</h1>
          </div>
          <p className="text-muted-foreground text-lg">Your AI-powered campus information assistant</p>
        </div>

        {/* Chat Container */}
        <Card className="bg-white/80 backdrop-blur-sm shadow-chat border-0 overflow-hidden">
          {/* Messages Area */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message}
              />
            ))}
            {isTyping && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="border-t border-muted/20 p-4">
            <QuickActions onActionClick={handleQuickAction} />
          </div>

          {/* Input Area */}
          <div className="border-t border-muted/20 p-4">
            <MessageInput 
              onSendMessage={handleSendMessage} 
              disabled={isTyping}
            />
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-muted-foreground">
          Made for hackathon • Ask about dining, library, schedules & more!
        </div>
      </div>
    </div>
  );
};

export default Index;