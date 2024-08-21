import React from "react";

interface Message {
  text: string;
  isUser: boolean;
}

interface ChatWindowProps {
  messages: Message[];
  isTyping: boolean;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, isTyping }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`mb-2 ${message.isUser ? "text-right" : "text-left"}`}
        >
          <span
            className={`inline-block p-2 rounded-lg ${
              message.isUser
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-800"
            }`}
          >
            {message.text}
          </span>
        </div>
      ))}
      {isTyping && (
        <div className="text-left mb-2">
          <span className="inline-block p-2 bg-white text-gray-800 rounded-lg">
            <div className="animate-pulse flex space-x-1">
              <div className="h-2 w-2 bg-gray-600 rounded-full"></div>
              <div className="h-2 w-2 bg-gray-600 rounded-full"></div>
              <div className="h-2 w-2 bg-gray-600 rounded-full"></div>
            </div>
          </span>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
