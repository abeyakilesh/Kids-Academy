import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, ArrowRight, Play } from 'lucide-react';
import LessonLayout from '../components/LessonLayout';

const VariableVisual = () => {
    const [boxes, setBoxes] = useState([
        { name: 'score', value: 0, color: 'bg-blue-500' }
    ]);

    const updateBox = (name, val) => {
        setBoxes(boxes.map(b => b.name === name ? { ...b, value: val } : b));
    };

    const addBox = () => {
        const newBox = { name: 'hero', value: '"Batman"', color: 'bg-indigo-500' };
        if (!boxes.find(b => b.name === 'hero')) setBoxes([...boxes, newBox]);
    };

    return (
        <div className="flex flex-col items-center w-full max-w-2xl gap-8">
            <div className="flex gap-4 min-h-[150px]">
                <AnimatePresence>
                    {boxes.map((box) => (
                        <motion.div
                            key={box.name}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="flex flex-col items-center"
                        >
                            <div className={`w-32 h-32 ${box.color} rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-xl border-4 border-white relative`}>
                                {box.value}
                                <div className="absolute -top-3 bg-slate-800 text-white text-xs px-2 py-1 rounded-md font-mono">
                                    let {box.name}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <div className="space-x-4">
                <button
                    onClick={() => updateBox('score', boxes.find(b => b.name === 'score').value + 10)}
                    className="px-6 py-3 bg-blue-100 text-blue-700 font-bold rounded-xl hover:bg-blue-200 transition-colors"
                >
                    score = score + 10
                </button>
                <button
                    onClick={addBox}
                    disabled={boxes.find(b => b.name === 'hero')}
                    className="px-6 py-3 bg-indigo-100 text-indigo-700 font-bold rounded-xl hover:bg-indigo-200 transition-colors disabled:opacity-50"
                >
                    let hero = "Batman"
                </button>
            </div>

            <p className="text-slate-500 text-sm">Click the buttons to change the "Memory Boxes"!</p>
        </div>
    );
};

export default function Module02() {
    return (
        <LessonLayout
            title="JavaScript Basics"

            explanation={
                <div className="space-y-4">
                    <p>
                        <strong>JavaScript (JS)</strong> is the language that makes websites <em>do things</em>.
                    </p>
                    <p>
                        Think of <strong>Variables</strong> like <strong className="text-blue-600">Boxes</strong>.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>You write a name on the box (e.g., <code>score</code>).</li>
                        <li>You put something inside (e.g., <code>100</code>).</li>
                        <li>You can take it out or change it later!</li>
                    </ul>
                </div>
            }

            visual={<VariableVisual />}

            initialCode={`let hero = "Spiderman";
let power = 100;

function attack() {
  power = power - 10;
  console.log(hero + " attacked! Power is now " + power);
}

attack();
attack();
`}

            quiz={
                <div className="space-y-4">
                    <div className="p-4 border rounded-xl hover:bg-slate-50 cursor-pointer transition-colors">
                        <div className="font-bold mb-2">How do you create a variable that CANNOT change?</div>
                        <div className="flex gap-4">
                            <button className="px-4 py-2 rounded-lg border hover:bg-red-100">let variable</button>
                            <button className="px-4 py-2 rounded-lg border hover:bg-green-100">const variable</button>
                        </div>
                    </div>
                </div>
            }

            challenge={
                <div>
                    <h4 className="font-bold text-xl mb-2 text-yellow-400">Mission: The Calculator</h4>
                    <p>
                        1. Create a variable called <code>total</code> and set it to 0.<br />
                        2. Create a function called <code>addToTotal(amount)</code>.<br />
                        3. Inside the function, add <code>amount</code> to <code>total</code> and log it.<br />
                        4. Call your function twice!
                    </p>
                </div>
            }
        />
    );
}
