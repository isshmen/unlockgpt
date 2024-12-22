import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChatMessage } from "./ChatMessage";
import { ChatOption } from "./ChatOption";
import { TypingIndicator } from "./TypingIndicator";
import { Input } from "./ui/input";

interface Message {
  text: string;
  isBot: boolean;
}

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState("initial");
  const [isTyping, setIsTyping] = useState(false);
  const [selectedPhone, setSelectedPhone] = useState("");
  const [selectedCarrier, setSelectedCarrier] = useState("");
  const [phoneInput, setPhoneInput] = useState("");

  const addMessage = (text: string, isBot: boolean) => {
    setMessages((prev) => [...prev, { text, isBot }]);
  };

  const simulateTyping = async (message: string) => {
    setIsTyping(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsTyping(false);
    addMessage(message, true);
  };

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneInput.trim()) return;
    
    setSelectedPhone(phoneInput);
    addMessage(phoneInput, false);
    setPhoneInput("");
    setCurrentStep("carrier");
    await simulateTyping("Which carrier is your phone currently locked to?");
  };

  const handleOption = async (option: string, nextStep: string) => {
    addMessage(option, false);
    setCurrentStep(nextStep);

    switch (nextStep) {
      case "confirmation":
        await simulateTyping(
          `Great! We can help unlock your ${selectedPhone} from ${selectedCarrier}. The process typically takes 24-48 hours. Would you like to proceed?`
        );
        break;
      case "final":
        await simulateTyping(
          "Perfect! Please visit our website to complete your order. We'll guide you through the entire unlocking process."
        );
        break;
    }
  };

  useEffect(() => {
    simulateTyping("Hello! I can help you unlock your phone. Please type your phone model (e.g. iPhone 14 Pro, Samsung Galaxy S23)");
  }, []);

  const renderOptions = () => {
    switch (currentStep) {
      case "initial":
        return (
          <form onSubmit={handlePhoneSubmit} className="w-full">
            <Input
              type="text"
              placeholder="Enter your phone model..."
              value={phoneInput}
              onChange={(e) => setPhoneInput(e.target.value)}
              className="w-full"
            />
          </form>
        );
      case "carrier":
        return (
          <>
            <ChatOption
              text="AT&T"
              onClick={() => {
                setSelectedCarrier("AT&T");
                handleOption("AT&T", "confirmation");
              }}
              delay={0.1}
            />
            <ChatOption
              text="T-Mobile"
              onClick={() => {
                setSelectedCarrier("T-Mobile");
                handleOption("T-Mobile", "confirmation");
              }}
              delay={0.2}
            />
            <ChatOption
              text="Verizon"
              onClick={() => {
                setSelectedCarrier("Verizon");
                handleOption("Verizon", "confirmation");
              }}
              delay={0.3}
            />
          </>
        );
      case "confirmation":
        return (
          <>
            <ChatOption
              text="Yes, proceed with unlocking"
              onClick={() => handleOption("Yes, I want to proceed", "final")}
              delay={0.1}
            />
            <ChatOption
              text="No, maybe later"
              onClick={() => handleOption("No, I'll think about it", "final")}
              delay={0.2}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="flex items-center justify-center p-4 border-b bg-white/80 backdrop-blur-sm">
        <h1 className="text-xl font-semibold">Phone Unlock Assistant</h1>
      </header>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-2xl mx-auto flex flex-col">
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

      <motion.div
        className="p-4 border-t bg-white/80 backdrop-blur-sm"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-2xl mx-auto">{renderOptions()}</div>
      </motion.div>
    </div>
  );
};