import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';

export default function GuideBot({ message, emotion = 'happy' }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-8 right-8 z-50 flex items-end gap-4 max-w-xs md:max-w-md pointer-events-none"
        >
            <div className="bg-white p-4 rounded-2xl rounded-br-none shadow-xl border-2 border-blue-500 text-slate-700 text-sm md:text-base pointer-events-auto relative">
                <p>{message}</p>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white border-r-2 border-b-2 border-blue-500 transform rotate-45"></div>
            </div>

            <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className={`w-16 h-16 rounded-full flex items-center justify-center border-4 shadow-lg bg-blue-500 text-white ${emotion === 'excited' ? 'border-yellow-400' : 'border-blue-600'}`}
            >
                <Bot size={32} />
            </motion.div>
        </motion.div>
    );
}
