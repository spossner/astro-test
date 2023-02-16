import { useState } from "react";

interface Props {
  messages: string[];
}
export const Greeting = ({ messages }: Props) => {
  const randomMessage = (excluding?: string) => {
    while (true) {
      const newMessage = messages[Math.floor(Math.random() * messages.length)];
      if (!excluding || messages.length < 2 || newMessage !== excluding)
        return newMessage;
    }
  };

  const [greeting, setGreeting] = useState(randomMessage());

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button
        onClick={() => setGreeting(randomMessage(greeting))}
        className="bg-primary px-4 py-2 rounded text-white"
      >
        New Greeting
      </button>
    </div>
  );
};
