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
          ? "bg-white/90 backdrop-blur-sm border border-gray-100 shadow-sm self-start"
          : "bg-black text-white self-end"
      )}
    >
      <p className="text-sm leading-relaxed">{message}</p>
    </motion.div>
  );
};