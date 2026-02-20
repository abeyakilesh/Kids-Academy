import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, ArrowDown, Key } from 'lucide-react';
import LessonLayout from '../components/LessonLayout';

const ListVisual = () => {
    const [items, setItems] = useState([
        { id: 1, text: "🍎 Apple" },
        { id: 2, text: "🍌 Banana" },
        { id: 3, text: "🍒 Cherry" }
    ]);

    const shuffle = () => {
        setItems([...items].sort(() => Math.random() - 0.5));
    };

    const addItem = () => {
        const fruits = ["🍇 Grape", "🍉 Melon", "🍊 Orange", "🍍 Pineapple"];
        const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
        setItems([...items, { id: Date.now(), text: randomFruit }]);
    };

    return (
        <div className="flex flex-col items-center w-full max-w-2xl gap-8">
            {/* Data Array */}
            <div className="flex flex-col items-center">
                <div className="text-xs font-bold uppercase text-slate-400 mb-2">The Data (Array)</div>
                <div className="flex gap-2">
                    {items.map(item => (
                        <motion.div layoutId={`data-${item.id}`} key={item.id} className="bg-slate-800 text-white px-3 py-1 rounded font-mono text-sm">
                            {item.id}
                        </motion.div>
                    ))}
                </div>
            </div>

            <ArrowDown size={32} className="text-slate-300" />

            {/* Rendered List */}
            <div className="w-64 bg-white p-4 rounded-xl border-2 border-slate-200 shadow-lg min-h-[200px]">
                <div className="text-xs font-bold uppercase text-slate-400 mb-2 border-b pb-1">The UI</div>
                <ul className="space-y-2">
                    <AnimatePresence>
                        {items.map(item => (
                            <motion.li
                                layout
                                key={item.id} // The Magic Key!
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0 }}
                                className="flex items-center gap-2 bg-indigo-50 p-2 rounded-lg text-indigo-900 border border-indigo-100"
                            >
                                <Key size={12} className="text-indigo-300" />
                                <span className="font-bold">{item.text}</span>
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </ul>
            </div>

            <div className="flex gap-4">
                <button onClick={addItem} className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg font-bold shadow">
                    + Add Item
                </button>
                <button onClick={shuffle} className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-bold shadow">
                    Shuffle
                </button>
            </div>

            <p className="text-slate-500 text-sm max-w-sm text-center">
                Without the <code>key</code> prop, React wouldn't know which item moved where when we shuffle!
            </p>
        </div>
    );
};

export default function Module33() {
    return (
        <LessonLayout
            title="Lists & Keys"

            explanation={
                <div className="space-y-4">
                    <p>
                        In most apps, you need to show a <strong>List</strong> of things (messages, products, friends).
                    </p>
                    <p>
                        In Javascript, we use <code>array.map()</code> to turn data into React components.
                    </p>
                    <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-200">
                        <code className="text-indigo-800 font-bold block mb-2">{`items.map(item => <div key={item.id}>{item.name}</div>)`}</code>
                        <p className="text-indigo-700 text-sm">
                            The <strong>Key</strong> is a unique ID. It helps React track items even if the list changes order.
                        </p>
                    </div>
                </div>
            }

            visual={<ListVisual />}

            initialCode={`function EmojiList() {
  const emojis = ["🚀", "🍕", "🐶", "🎉"];

  return (
    <div>
      <h3>My Emojis</h3>
      <ul>
        {emojis.map((emoji, index) => (
          // Using index as key is okay for static lists, 
          // but bad if the list changes!
          <li key={index} style={{ fontSize: 24 }}>
            {emoji}
          </li>
        ))}
      </ul>
    </div>
  );
}
`}

            quiz={
                <div className="space-y-4">
                    <div className="p-4 border rounded-xl hover:bg-slate-50 cursor-pointer transition-colors">
                        <div className="font-bold mb-2">Why do we need keys?</div>
                        <div className="grid grid-cols-1 gap-2">
                            <button className="px-4 py-3 text-left rounded-lg border hover:bg-red-100">To unlock the database.</button>
                            <button className="px-4 py-3 text-left rounded-lg border hover:bg-green-100">To help React identify which items have changed, added, or removed.</button>
                            <button className="px-4 py-3 text-left rounded-lg border hover:bg-red-100">To style the list items.</button>
                        </div>
                    </div>
                </div>
            }

            challenge={
                <div>
                    <h4 className="font-bold text-xl mb-2 text-yellow-400">Mission: The Todo List</h4>
                    <p className="mb-4">
                        1. Create an array of tasks: `['Code', 'Sleep', 'Repeat']`.<br />
                        2. Use `.map()` to display them inside `&lt;li&gt;` tags.<br />
                        3. Give each `&lt;li&gt;` a unique key.
                    </p>
                </div>
            }
        />
    );
}
