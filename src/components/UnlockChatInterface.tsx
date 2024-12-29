import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChatMessage } from "./ChatMessage";
import { TypingIndicator } from "./TypingIndicator";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { carriersByCountry, unlockingMessages } from "@/data/carrierData";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction } from "./ui/alert-dialog";

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
  const [showInstructions, setShowInstructions] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  
  // Add a ref for the messages container
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom whenever messages change
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]); // Scroll when messages or typing indicator changes

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

  const simulateUnlockProcess = async () => {
    setCurrentStep("unlocking");
    for (let i = 0; i < unlockingMessages.length; i++) {
      setCurrentMessageIndex(i);
      let message = unlockingMessages[i]
        .replace("{imei}", imei)
        .replace("{country}", selectedCountry)
        .replace("{carrier}", selectedCarrier);
      await simulateTyping(message);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    setShowInstructions(true);
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
          await simulateTyping(`You've chosen ${selectedCountry} as Country and ${selectedCarrier} as carrier. If it's right, please type "Continue" to move to the next step, or "Back" to get back.`);
          setCurrentStep("final_confirmation");
        }
        break;
      case "final_confirmation":
        if (userInput.toLowerCase() === "continue") {
          await simulateTyping(`Confirmation: You have a ${selectedCarrier} locked phone in ${selectedCountry} with IMEI ${imei}. Would you like to generate the unlock code? please type "Continue" to move to the next step, or "Back" to get back.`);
          setCurrentStep("generate_code");
        } else if (userInput.toLowerCase() === "back") {
          setCurrentStep("country_carrier");
          await simulateTyping("Please select your phone's country and carrier from the dropdowns below:");
        }
        break;
      case "generate_code":
        if (userInput.toLowerCase() === "continue") {
          await simulateUnlockProcess();
        } else if (userInput.toLowerCase() === "back") {
          setCurrentStep("final_confirmation");
          await simulateTyping(`You've chosen ${selectedCountry} as Country and ${selectedCarrier} as carrier. If it's right, please type "Continue" to move to the next step, or "Back" to get back.`);
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
    <>
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
                <Select onValueChange={handleCountryChange} value={selectedCountry}>
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

                <Select 
                  onValueChange={setSelectedCarrier} 
                  value={selectedCarrier}
                  disabled={!selectedCountry}
                >
                  <SelectTrigger className="w-full bg-[#222222] border-[#333333] text-white">
                    <SelectValue placeholder={selectedCountry ? "Select Carrier" : "Select Country First"} />
                  </SelectTrigger>
                  <SelectContent className="bg-[#222222] border-[#333333] text-white">
                    {selectedCountry ? 
                      carriersByCountry[selectedCountry as keyof typeof carriersByCountry].map((carrier) => (
                        <SelectItem key={carrier} value={carrier} className="hover:bg-[#333333]">
                          {carrier}
                        </SelectItem>
                      ))
                      :
                      <SelectItem value="" disabled>Please select a country first</SelectItem>
                    }
                  </SelectContent>
                </Select>
              </div>
            )}
            <div ref={messagesEndRef} />
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

      <AlertDialog open={showInstructions} onOpenChange={setShowInstructions}>
        <AlertDialogContent className="bg-[#222222] text-white border border-[#333333]">
          <AlertDialogHeader>
            <AlertDialogTitle>Unlocking Instructions</AlertDialogTitle>
            <AlertDialogDescription className="text-gray-300">
              <div className="space-y-4">
                <p>To unlock your phone please follow these steps:</p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Insert a new SIM card.</li>
                  <li>Restart the device.</li>
                  <li>Type your generated unlock code and wait to connect to the carrier.</li>
                  <li>Enjoy your unlocked phone.</li>
                </ol>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction className="bg-[#2196f3] hover:bg-[#1976d2] text-white">
              Get Your Unlock Code
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};