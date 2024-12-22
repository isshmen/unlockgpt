import { motion } from "framer-motion";

export const TypingIndicator = () => {
  return (
    <div className="flex items-center space-x-1 px-4 py-3 max-w-[80px] 
                    rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-100 shadow-sm">
      {[0, 1, 2].map((dot) => (
        <motion.div
          key={dot}
          className="w-2 h-2 bg-gray-400 rounded-full"
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: dot * 0.2,
          }}
        />
      ))}
    </div>
  );
};