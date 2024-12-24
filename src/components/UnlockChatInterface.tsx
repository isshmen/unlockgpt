import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChatMessage } from "./ChatMessage";
import { TypingIndicator } from "./TypingIndicator";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { carriersByCountry } from "@/data/carrierData";

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
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedCarrier, setSelectedCarrier] = useState<string>("");

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
          await simulateTyping("Please select your phone's country and carrier from the dropdowns below:");
          setCurrentStep("country_carrier");
        } else if (userInput.toLowerCase() === "back") {
          setCurrentStep("initial");
          await simulateTyping("Welcome back! Please enter your device's IMEI number:");
        }
        break;
      case "country_carrier":
        if (selectedCountry && selectedCarrier) {
          await simulateTyping(`Thank you for selecting ${selectedCountry} and ${selectedCarrier}. We'll proceed with the unlock process.`);
          // Add next step logic here
        }
        break;
    }
  };

  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
    setSelectedCarrier("");
  };

  useEffect(() => {
    simulateTyping(
      "Welcome to the Carrier Unlock Tool! I am here to help you generating an unique unlock code for your device within next few minutes. No matter which phone's model or which carrier has locked your device, I support any of them.\n\nTo get started, send me your device's IMEI. A quick way to find the IMEI is by typing *#06# in your keypad and paste the IMEI below."
    );
  }, []);

  return (
    <div className="flex flex-col bg-[#1a1a1a] rounded-xl overflow-hidden border border-[#333333]">
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
          
          {currentStep === "country_carrier" && (
            <div className="space-y-4 w-full">
              <Select onValueChange={handleCountryChange}>
                <SelectTrigger className="w-full bg-[#222222] border-[#333333] text-white">
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent className="bg-[#222222] border-[#333333] text-white">
                  {Object.keys(carriersByCountry).map((country) => (
                    <SelectItem key={country} value={country} className="hover:bg-[#333333]">
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {selectedCountry && (
                <Select onValueChange={setSelectedCarrier}>
                  <SelectTrigger className="w-full bg-[#222222] border-[#333333] text-white">
                    <SelectValue placeholder="Select Carrier" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#222222] border-[#333333] text-white">
                    {carriersByCountry[selectedCountry as keyof typeof carriersByCountry].map((carrier) => (
                      <SelectItem key={carrier} value={carrier} className="hover:bg-[#333333]">
                        {carrier}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-[#333333] bg-[#222222]">
        <div className="max-w-3xl mx-auto">
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="w-full bg-[#1a1a1a] border-[#333333] text-white placeholder-gray-400 text-base"
          />
        </div>
      </form>
    </div>
  );
};