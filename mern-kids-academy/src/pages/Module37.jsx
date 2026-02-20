import { useState, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Zap, Layers } from 'lucide-react';
import LessonLayout from '../components/LessonLayout';

const ContextVisual = () => {
    const [theme, setTheme] = useState("light");
    const [useContextMode, setUseContextMode] = useState(false);

    return (
        <div className="flex flex-col items-center w-full max-w-2xl gap-8">
            {/* Controls */}
            <div className="flex gap-4 mb-4">
                <button
                    onClick={() => setUseContextMode(false)}
                    className={`px-4 py-2 rounded-lg font-bold border ${!useContextMode ? 'bg-blue-600 text-white' : 'bg-white text-slate-500'}`}
                >
                    Prop Drilling 😩
                </button>
                <button
                    onClick={() => setUseContextMode(true)}
                    className={`px-4 py-2 rounded-lg font-bold border ${useContextMode ? 'bg-purple-600 text-white' : 'bg-white text-slate-500'}`}
                >
                    Context API ⚡️
                </button>
            </div>

            <div className="flex flex-col items-center gap-2">
                <button
                    onClick={() => setTheme(prev => prev === "light" ? "dark" : "light")}
                    className="px-4 py-2 rounded-lg bg-yellow-400 text-yellow-900 font-bold shadow-lg hover:scale-105 transition-transform"
                >
                    Toggle Theme: {theme.toUpperCase()}
                </button>
            </div>

            {/* The Tree */}
            <div className="relative w-full border-2 border-slate-200 rounded-xl p-8 bg-slate-50 flex flex-col items-center gap-8">
                {/* Level 1: App */}
                <div className="w-48 p-4 bg-white border border-slate-300 rounded shadow text-center relative">
                    <span className="font-bold text-slate-700">App</span>
                    <div className="text-xs text-orange-500 mt-1 font-mono">theme="{theme}"</div>

                    {/* The Prop arrow */}
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-slate-400"
                    >
                        <ArrowDown size={24} />
                    </motion.div>
                </div>

                {/* Level 2: Layout */}
                <div className="w-48 p-4 bg-white border border-slate-300 rounded shadow text-center relative opacity-80">
                    <span className="font-bold text-slate-700">Layout</span>
                    {!useContextMode && <div className="text-xs text-orange-500 mt-1 font-mono">theme="{theme}"</div>}
                    {useContextMode && <div className="text-xs text-slate-300 mt-1 italic">Ignored</div>}

                    {/* The Prop arrow */}
                    {!useContextMode && (
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                            className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-slate-400"
                        >
                            <ArrowDown size={24} />
                        </motion.div>
                    )}

                    {useContextMode && (
                        <div className="absolute top-0 right-0 left-0 bottom-0 border-2 border-dotted border-slate-300 rounded pointer-events-none"></div>
                    )}
                </div>

                {/* Level 3: Button (Consumer) */}
                <div className={`w-48 p-4 rounded shadow text-center transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-800 text-white' : 'bg-white text-slate-800 border border-slate-300'}`}>
                    <span className="font-bold">The Button</span>
                    <div className="text-xs mt-1 font-mono opacity-70">
                        {useContextMode ? 'using useContext()' : `props.theme="${theme}"`}
                    </div>

                    {useContextMode && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute -right-8 top-1/2 -translate-y-1/2 text-purple-500"
                        >
                            <Zap size={32} fill="currentColor" />
                        </motion.div>
                    )}
                </div>

                {/* Context Connection Line */}
                {useContextMode && (
                    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible">
                        <motion.path
                            d="M 280 60 C 500 60, 500 280, 280 280"
                            fill="none"
                            stroke="#9333ea"
                            strokeWidth="3"
                            strokeDasharray="10 5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1 }}
                        />
                    </svg>
                )}

            </div>
        </div>
    );
};

export default function Module37() {
    return (
        <LessonLayout
            title="Global State (Context)"

            explanation={
                <div className="space-y-4">
                    <p>
                        Passing data down through 5 layers of components is called <strong>Prop Drilling</strong>, and it sucks.
                    </p>
                    <p>
                        <strong>React Context</strong> is like a teleportation portal. You define data at the top, and grab it anywhere!
                    </p>
                    <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                        <code className="text-purple-800 font-bold block mb-2">{`const theme = useContext(ThemeContext);`}</code>
                        <p className="text-purple-700 text-sm">
                            No more passing props down manually!
                        </p>
                    </div>
                </div>
            }

            visual={<ContextVisual />}

            initialCode={`import { createContext, useContext, useState } from 'react';

// 1. Create the Context
const ThemeContext = createContext("light");

function App() {
  const [theme, setTheme] = useState("dark");
  
  return (
    // 2. Provide the value to EVERYONE inside
    <ThemeContext.Provider value={theme}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  // Doesn't need props!
  return <ThemedButton />;
}

function ThemedButton() {
  // 3. Consume the value directly!
  const theme = useContext(ThemeContext);
  return <button className={theme}>I am {theme}!</button>;
}
`}

            quiz={
                <div className="space-y-4">
                    <div className="p-4 border rounded-xl hover:bg-slate-50 cursor-pointer transition-colors">
                        <div className="font-bold mb-2">When should you use Context?</div>
                        <div className="grid grid-cols-1 gap-2">
                            <button className="px-4 py-3 text-left rounded-lg border hover:bg-red-100">For every single variable.</button>
                            <button className="px-4 py-3 text-left rounded-lg border hover:bg-green-100">For "Global" data like Themes, Users, or Language.</button>
                            <button className="px-4 py-3 text-left rounded-lg border hover:bg-red-100">To correct spelling mistakes.</button>
                        </div>
                    </div>
                </div>
            }

            challenge={
                <div>
                    <h4 className="font-bold text-xl mb-2 text-yellow-400">Mission: The User Context</h4>
                    <p className="mb-4">
                        1. Create a `UserContext`<br />
                        2. Wrap App with `UserContext.Provider value="Alice"`<br />
                        3. Create a component `Profile` that uses `useContext` to say "Hello Alice".
                    </p>
                </div>
            }
        />
    );
}
