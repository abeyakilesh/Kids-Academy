import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, Play, Trash2, Activity } from 'lucide-react';
import LessonLayout from '../components/LessonLayout';

const EffectVisual = () => {
    const [count, setCount] = useState(0);
    const [dependency, setDependency] = useState('[]'); // '[]' or '[count]'
    const [effects, setEffects] = useState([]);

    useEffect(() => {
        // This effect runs on mount, and then depending on dep array
        triggerEffect('Mount / Update');
    }, [count, dependency]);

    const triggerEffect = (reason) => {
        const id = Date.now();
        setEffects(prev => [...prev, { id, reason }]);
        setTimeout(() => {
            setEffects(prev => prev.filter(e => e.id !== id));
        }, 2000);
    };

    return (
        <div className="flex flex-col items-center w-full max-w-2xl gap-8">
            <div className="flex gap-8 items-start w-full">

                {/* Controls */}
                <div className="flex-1 bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h4 className="font-bold text-slate-700 mb-4">Component State</h4>
                    <div className="flex items-center justify-between mb-4">
                        <span>Count: <span className="font-bold text-blue-600">{count}</span></span>
                        <button onClick={() => setCount(c => c + 1)} className="bg-blue-100 text-blue-600 px-3 py-1 rounded hover:bg-blue-200 font-bold">+1</button>
                    </div>

                    <h4 className="font-bold text-slate-700 mb-2 mt-6">Dependency Array</h4>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setDependency('[]')}
                            className={`px-3 py-1 rounded border font-mono text-sm ${dependency === '[]' ? 'bg-slate-800 text-white' : 'bg-white text-slate-500'}`}
                        >
                            []
                        </button>
                        <button
                            onClick={() => setDependency('[count]')}
                            className={`px-3 py-1 rounded border font-mono text-sm ${dependency === '[count]' ? 'bg-slate-800 text-white' : 'bg-white text-slate-500'}`}
                        >
                            [count]
                        </button>
                    </div>

                    <div className="mt-4 text-xs text-slate-500 px-2 py-1 bg-yellow-50 border border-yellow-100 rounded">
                        {dependency === '[]' ? "Runs ONLY on Mount (Start)." : "Runs on Mount + whenever 'count' changes."}
                    </div>
                </div>

                {/* Visualizer */}
                <div className="flex-1 min-h-[250px] relative flex justify-center items-center bg-white border-2 border-slate-100 rounded-xl shadow-inner">
                    <div className="absolute top-2 left-2 text-xs font-bold uppercase text-slate-300">Effect Log</div>
                    <AnimatePresence>
                        {effects.map((e, i) => (
                            <motion.div
                                key={e.id}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 2, opacity: 0 }}
                                className="absolute bg-green-500 text-white p-4 rounded-full font-bold shadow-xl flex flex-col items-center"
                                style={{ marginTop: i * 10 }}
                            >
                                <Activity size={24} />
                                <span className="text-xs whitespace-nowrap">Effect Ran!</span>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                    {effects.length === 0 && <span className="text-slate-300 italic">Idle...</span>}
                </div>
            </div>
        </div>
    );
};

export default function Module34() {
    return (
        <LessonLayout
            title="Effects & Lifecycle"

            explanation={
                <div className="space-y-4">
                    <p>
                        Components have a <strong>Lifecycle</strong>: They are Born (Mount), they Update, and they Die (Unmount).
                    </p>
                    <p>
                        <strong>useEffect</strong> lets you run code at specific times in this life.
                    </p>
                    <div className="bg-purple-50 p-4 rounded-xl border border-purple-200 space-y-2">
                        <code className="text-purple-800 font-bold block">useEffect(callback, dependencies)</code>
                        <p className="text-purple-700 text-sm">
                            The <strong>Dependency Array</strong> <code>[]</code> tells React <em>when</em> to run the effect.
                        </p>
                    </div>
                </div>
            }

            visual={<EffectVisual />}

            initialCode={`import { useState, useEffect } from 'react';

function UserLoader() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // 1. Fetch data when component runs
    console.log("Fetching...");
    
    // Simulate API call
    setTimeout(() => {
      setUser({ name: "Alice" });
    }, 1000);
    
  }, []); // <--- Empty array means "Run Once"

  if (!user) return <div>Loading...</div>;
  return <h1>Hello, {user.name}!</h1>;
}
`}

            quiz={
                <div className="space-y-4">
                    <div className="p-4 border rounded-xl hover:bg-slate-50 cursor-pointer transition-colors">
                        <div className="font-bold mb-2">What happens if you forget the dependency array?</div>
                        <div className="grid grid-cols-1 gap-2">
                            <button className="px-4 py-3 text-left rounded-lg border hover:bg-red-100">It never runs.</button>
                            <button className="px-4 py-3 text-left rounded-lg border hover:bg-green-100">It runs on EVERY render (Infinite Loops possible!).</button>
                            <button className="px-4 py-3 text-left rounded-lg border hover:bg-red-100">It runs only once.</button>
                        </div>
                    </div>
                </div>
            }

            challenge={
                <div>
                    <h4 className="font-bold text-xl mb-2 text-yellow-400">Mission: The Timer</h4>
                    <p className="mb-4">
                        1. Create state `seconds` starting at 0.<br />
                        2. In `useEffect`, set up a `setInterval` that adds 1 to seconds every 1000ms.<br />
                        3. <strong>Bonus:</strong> Return a cleanup function `clearInterval` to stop it when component unmounts.
                    </p>
                </div>
            }
        />
    );
}
