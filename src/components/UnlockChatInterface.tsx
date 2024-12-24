import { useState } from "react";
import { motion } from "framer-motion";
import { ChatMessage } from "./ChatMessage";
import { TypingIndicator } from "./TypingIndicator";
import { Input } from "./ui/input";

interface Message {
  text: string;
  isBot: boolean;
}

interface UnlockChatInterfaceProps {
  serviceName: string;
}

export const UnlockChatInterface = ({ serviceName }: UnlockChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState("initial");
  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState("");
  const [imei, setImei] = useState("");

  const addMessage = (text: string, isBot: boolean) => {
    setMessages((prev) => [...prev, { text, isBot }]);
  };

  const simulateTyping = async (message: string) => {
    setIsTyping(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsTyping(false);
    addMessage(message, true);
  };

  const validateIMEI = (imei: string) => {
    return /^\d{15,}$/.test(imei);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userInput = input.trim();
    addMessage(userInput, false);
    setInput("");

    switch (currentStep) {
      case "initial":
        if (!validateIMEI(userInput)) {
          await simulateTyping("Your IMEI is wrong! Please check and try again");
        } else {
          setImei(userInput);
          await simulateTyping(`We've got your IMEI (${userInput} - so please memorize this IMEI as we will need this later), let's continue to the next. Please type "Continue" to move forward or "Back" to the previous page.`);
          setCurrentStep("confirmation");
        }
        break;
      case "confirmation":
        if (userInput.toLowerCase() === "continue") {
          await simulateTyping("Please select your phone's country and carrier:");
          setCurrentStep("country_carrier");
        } else if (userInput.toLowerCase() === "back") {
          setCurrentStep("initial");
          await simulateTyping("Welcome back! Please enter your device's IMEI number:");
        }
        break;
      case "country_carrier":
        // Handle country and carrier input here
        break;
    }
  };

  // Initial message
  useEffect(() => {
    simulateTyping(
      "Welcome to the Carrier Unlock Tool! I am here to help you generating an unique unlock code for your device within next few minutes. No matter which phone's model or which carrier has locked your device, I support any of them.\n\nTo get started, send me your device's IMEI. A quick way to find the IMEI is by typing *#06# in your keypad and paste the IMEI below."
    );
  }, []);

  return (
    <div className="flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 max-h-[600px]">
        <div className="max-w-3xl mx-auto flex flex-col space-y-4">
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              message={message.text}
              isBot={message.isBot}
              animate={index === messages.length - 1}
            />
          ))}
          {isTyping && <TypingIndicator />}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700 bg-gray-800">
        <div className="max-w-3xl mx-auto">
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400"
          />
        </div>
      </form>
    </div>
  );
};