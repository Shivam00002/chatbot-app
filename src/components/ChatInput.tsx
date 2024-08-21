import React, { useState } from "react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  predefinedQuestions: string[];
}

const ChatInput: React.FC<ChatInputProps> = ({
  onSendMessage,
  predefinedQuestions,
}) => {
  const [input, setInput] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input);
      setInput("");
      setShowDropdown(false);
    }
  };

  const handleQuestionSelect = (question: string) => {
    onSendMessage(question);
    setInput("");
    setShowDropdown(false);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white">
      <div className="flex flex-col relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShowDropdown(true)}
          className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type a message..."
        />
        {showDropdown && (
          <ul className="absolute bottom-full mb-2 w-full bg-white border border-gray-300 rounded-lg z-10">
            {predefinedQuestions.map((question, index) => (
              <li
                key={index}
                onClick={() => handleQuestionSelect(question)}
                className="p-2 hover:bg-gray-200 cursor-pointer"
              >
                {question}
              </li>
            ))}
          </ul>
        )}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
