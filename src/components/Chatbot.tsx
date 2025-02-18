import React, { useState } from "react";
import { getBotResponse, predefinedQuestions } from "@/utils/chatbotLogic";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<
    Array<{ text: string; isUser: boolean }>
  >([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (message: string) => {
    setMessages([...messages, { text: message, isUser: true }]);

    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBotResponse(message);
      setMessages((prev) => [...prev, { text: botResponse, isUser: false }]);
      setIsTyping(false);
    }, 2000);
  };


  return (
    <div className="flex flex-col h-[500px] w-[350px] border border-gray-300 rounded-lg overflow-hidden">
      <ChatWindow messages={messages} isTyping={isTyping} />
      <ChatInput
        onSendMessage={handleSendMessage}
        predefinedQuestions={predefinedQuestions}
      />
    </div>
  );
};

export default Chatbot;
