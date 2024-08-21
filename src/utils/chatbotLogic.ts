export const responses: { [key: string]: string } = {
  "What services do you offer?":
    "We offer web development, mobile app development, and UI/UX design services.",
  "How can I contact support?":
    "You can contact our support team at support@example.com or call us at 1-800-123-4567.",
  "What are your business hours?":
    "Our business hours are Monday to Friday, 9 AM to 5 PM EST.",
  "Do you offer free consultations?":
    "Yes, we offer a free 30-minute consultation for new clients.",
};

export const predefinedQuestions: string[] = [
  "What services do you offer?",
  "How can I contact support?",
  "What are your business hours?",
  "Do you offer free consultations?",
];

export function getBotResponse(message: string): string {
  const lowercaseMessage = message.toLowerCase();

  for (const [question, answer] of Object.entries(responses)) {
    if (lowercaseMessage.includes(question.toLowerCase())) {
      return answer;
    }
  }

  return "I'm sorry,😐 I don't have an answer for that. Can you please rephrase your question or ask something else?";
}
