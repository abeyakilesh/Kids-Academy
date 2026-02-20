import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MousePointer, Power } from 'lucide-react';
import LessonLayout from '../components/LessonLayout';

const StateVisual = () => {
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [showSnap, setShowSnap] = useState(false);

    const handleLike = () => {
        setLikes(prev => prev + 1);
        setIsLiked(true);
        setShowSnap(true);
        setTimeout(() => setShowSnap(false), 800);
    };

    return (
        <div className="flex flex-col items-center w-full max-w-2xl gap-12">
            {/* The Component Box */}
            <div className="relative bg-white p-8 rounded-3xl border-2 border-slate-200 shadow-xl w-64 flex flex-col items-center">
                <div className="absolute -top-4 bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Component
                </div>

                <div className="mb-6 text-center">
                    <h4 className="font-bold text-slate-800">Photo Post</h4>
                    <div className="w-full h-32 bg-slate-100 rounded-lg mt-2 mb-4 flex items-center justify-center text-slate-300">
                        Image
                    </div>

                    <div className="flex items-center justify-between w-full px-2">
                        <button
                            onClick={handleLike}
                            className={`p-2 rounded-full transition-all active:scale-95 ${isLiked ? 'bg-red-50 text-red-500' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                        >
                            <Heart size={24} fill={isLiked ? "currentColor" : "none"} />
                        </button>
                        <span className="font-bold text-slate-700">{likes} likes</span>
                    </div>
                </div>

                {/* State Variable Visualization */}
                <div className="w-full pt-4 border-t border-slate-100">
                    <div className="text-xs font-mono text-slate-400 mb-2">Internal Memory (State)</div>
                    <div className="flex justify-between items-center bg-teal-50 p-2 rounded-lg border border-teal-100">
                        <code className="text-teal-700 font-bold">likes</code>
                        <span className="bg-white px-2 py-0.5 rounded text-teal-600 font-mono font-bold shadow-sm">{likes}</span>
                    </div>
                </div>

                {/* Snapshot Animation */}
                <AnimatePresence>
                    {showSnap && (
                        <motion.div
                            initial={{ opacity: 1, scale: 1, y: 0 }}
                            animate={{ opacity: 0, scale: 1.5, y: -50 }}
                            exit={{ opacity: 0 }}
                            className="absolute top-0 right-0 text-teal-500 font-bold text-xl"
                        >
                            +1
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Explainer */}
            <div className="text-center max-w-md">
                <p className="text-slate-600 mb-2">
                    When you call <code className="bg-slate-100 px-1 py-0.5 rounded font-bold text-slate-800">setLikes(likes + 1)</code>, React:
                </p>
                <ol className="text-left text-sm text-slate-500 space-y-1 list-decimal pl-8">
                    <li>Updates the memory variable.</li>
                    <li><strong>Re-renders</strong> the component (draws it again).</li>
                    <li>Shows the new number on screen.</li>
                </ol>
            </div>
        </div>
    );
};

export default function Module32() {
    return (
        <LessonLayout
            title="State & Events"

            explanation={
                <div className="space-y-4">
                    <p>
                        Static components are boring. We want apps that <strong>react</strong> to what we do!
                    </p>
                    <p>
                        To remember things (like if a menu is open or a score), components use <strong>State</strong>.
                    </p>
                    <div className="bg-teal-50 p-4 rounded-xl border border-teal-200">
                        <code className="text-teal-800 font-bold block mb-2">const [count, setCount] = useState(0);</code>
                        <ul className="list-disc pl-6 space-y-1 text-teal-700 text-sm">
                            <li><code>count</code>: The current value.</li>
                            <li><code>setCount</code>: The function to update it.</li>
                            <li><code>0</code>: The starting value.</li>
                        </ul>
                    </div>
                </div>
            }

            visual={<StateVisual />}

            initialCode={`import { useState } from 'react';

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div style={{ padding: 20, background: isOn ? '#333' : '#fff', color: isOn ? '#fff' : '#000' }}>
      <h1>Lights are {isOn ? 'ON' : 'OFF'}</h1>
      <button onClick={() => setIsOn(!isOn)}>
        Flip Switch
      </button>
    </div>
  );
}
`}

            quiz={
                <div className="space-y-4">
                    <div className="p-4 border rounded-xl hover:bg-slate-50 cursor-pointer transition-colors">
                        <div className="font-bold mb-2">What happens when state changes?</div>
                        <div className="grid grid-cols-1 gap-2">
                            <button className="px-4 py-3 text-left rounded-lg border hover:bg-red-100">Nothing, until you refresh the page.</button>
                            <button className="px-4 py-3 text-left rounded-lg border hover:bg-green-100">React automatically re-renders the component.</button>
                            <button className="px-4 py-3 text-left rounded-lg border hover:bg-red-100">The database is updated directly.</button>
                        </div>
                    </div>
                </div>
            }

            challenge={
                <div>
                    <h4 className="font-bold text-xl mb-2 text-yellow-400">Mission: The Color Picker</h4>
                    <p className="mb-4">
                        1. Create state <code>color</code> starting at "white".<br />
                        2. Create 3 buttons: "Red", "Blue", "Green".<br />
                        3. When clicked, update <code>color</code> to that value.<br />
                        4. Use the state to style a box: <code>{`style={{ backgroundColor: color }}`}</code>.
                    </p>
                </div>
            }
        />
    );
}
