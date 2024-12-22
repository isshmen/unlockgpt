import { motion } from "framer-motion";

interface ChatOptionProps {
  text: string;
  onClick: () => void;
  delay?: number;
}

export const ChatOption = ({ text, onClick, delay = 0 }: ChatOptionProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      onClick={onClick}
      className="w-full px-4 py-3 mb-2 text-sm text-left transition-colors rounded-xl
                 border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
    >
      {text}
    </motion.button>
  );
};