import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const explanations = {
    "const": "Creates a permanent box. The label on the box won't change.",
    "useState": "React's memory. It remembers things like score or name.",
    "return": "The finish line. This is what React gives to the browser to show.",
    "div": "A simple box to put things in.",
    "h1": "A big headline!",
    "p": "A paragraph of text.",
    "props": "Messages sent from a parent component to a child.",
    "map": "A loop that transforms a list of items into something new.",
    "import": "Bringing in tools or pieces from another file.",
    "export": "Sharing this code so other files can use it.",
    "default": "The main thing being shared.",
    "function": "A set of instructions. A recipe.",
    "async": "This function will take some time (like waiting for a pizza).",
    "await": "Pause here until the task is done.",
    "fetch": "Go get data from the internet (or an API).",
    "JSON": "A text format that looks like JavaScript objects. Robots love it.",
    "console.log": "Print a message to the developer console (a secret diary).",
};

const Token = ({ text }) => {
    const [hovered, setHovered] = useState(false);
    const cleanText = text.replace(/[^a-zA-Z]/g, ''); // Simple cleanup for matching
    const explanation = explanations[text] || explanations[cleanText];

    if (!explanation) return <span>{text}</span>;

    return (
        <span
            className="relative inline-block cursor-help text-blue-300 font-bold hover:text-blue-200 hover:bg-blue-900 rounded px-0.5"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {text}
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 bg-yellow-100 text-slate-800 text-xs font-sans font-medium p-2 rounded-lg shadow-xl w-48 text-center z-50 mb-2 border border-yellow-300"
                    >
                        {explanation}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-yellow-100"></div>
                    </motion.div>
                )}
            </AnimatePresence>
        </span>
    );
};

export default function CodeExplainer({ code }) {
    // Very naive tokenizer for demo purposes
    // Splits by spaces but keeps common symbols attached or separate if improved
    const tokens = code.split(/(\s+|[(){},.])/g);

    return (
        <div className="bg-slate-900 rounded-xl p-6 shadow-xl relative group">
            <div className="absolute top-2 right-2 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                Hover blue words!
            </div>
            <pre className="font-mono text-sm text-slate-300 overflow-x-auto whitespace-pre-wrap">
                {tokens.map((token, i) => (
                    <Token key={i} text={token} />
                ))}
            </pre>
        </div>
    );
}
