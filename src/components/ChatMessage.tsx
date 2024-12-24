import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  animate?: boolean;
}

export const ChatMessage = ({ message, isBot, animate = true }: ChatMessageProps) => {
  return (
    <motion.div
      initial={animate ? { opacity: 0, y: 20 } : false}
      animate={animate ? { opacity: 1, y: 0 } : false}
      transition={{ duration: 0.3 }}
      className={cn(
        "max-w-[80%] rounded-2xl px-4 py-3 mb-4",
        isBot
          ? "bg-[#222222] border border-[#333333] text-gray-200 self-start"
          : "bg-[#2196f3] text-white self-end"
      )}
    >
      <p className="text-base leading-relaxed whitespace-pre-line">{message}</p>
    </motion.div>
  );
};