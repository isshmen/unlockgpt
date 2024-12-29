import { Message } from "@/types/chat";
import { ChatMessage } from "../ChatMessage";
import { TypingIndicator } from "../TypingIndicator";
import { SelectCountryCarrier } from "./SelectCountryCarrier";

interface ChatContainerProps {
  messages: Message[];
  isTyping: boolean;
  currentStep: string;
  selectedCountry: string;
  selectedCarrier: string;
  onCountryChange: (value: string) => void;
  onCarrierChange: (value: string) => void;
  messagesEndRef: React.RefObject<HTMLDivElement>;
}

export const ChatContainer = ({
  messages,
  isTyping,
  currentStep,
  selectedCountry,
  selectedCarrier,
  onCountryChange,
  onCarrierChange,
  messagesEndRef,
}: ChatContainerProps) => {
  return (
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
          <SelectCountryCarrier
            selectedCountry={selectedCountry}
            selectedCarrier={selectedCarrier}
            onCountryChange={onCountryChange}
            onCarrierChange={onCarrierChange}
          />
        )}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};