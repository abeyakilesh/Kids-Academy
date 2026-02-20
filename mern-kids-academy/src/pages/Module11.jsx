import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChefHat, Clock, Database, FileText } from 'lucide-react';
import LessonLayout from '../components/LessonLayout';

const EventLoopVisual = () => {
    const [orders, setOrders] = useState([]); // { id, type, status: 'pending'|'processing'|'done' }
    const [chefStatus, setChefStatus] = useState('idle'); // idle, cooking

    const addOrder = (type) => {
        const id = Date.now();
        setOrders(prev => [...prev, { id, type, status: 'pending' }]);
    };

    useEffect(() => {
        if (chefStatus === 'idle' && orders.some(o => o.status === 'pending')) {
            const nextOrder = orders.find(o => o.status === 'pending');
            processOrder(nextOrder);
        }
    }, [orders, chefStatus]);

    const processOrder = (order) => {
        setChefStatus('cooking');
        setOrders(prev => prev.map(o => o.id === order.id ? { ...o, status: 'processing' } : o));

        if (order.type === 'heavy') {
            // Offload to helper (simulated async)
            setTimeout(() => {
                setOrders(prev => prev.map(o => o.id === order.id ? { ...o, status: 'done' } : o));
                setChefStatus('idle'); // Chef is free immediately after offloading? 
                // Actually, in Node, Chef offloads and is free immediately to take Next pending.
                // But for visual simplicity, let's show Chef busy for a split second to offload.
            }, 2000);
            setTimeout(() => setChefStatus('idle'), 500);
        } else {
            // Instant work
            setTimeout(() => {
                setOrders(prev => prev.map(o => o.id === order.id ? { ...o, status: 'done' } : o));
                setChefStatus('idle');
            }, 1000);
        }
    };

    return (
        <div className="flex flex-col items-center w-full max-w-2xl gap-8">
            <div className="flex justify-around w-full">
                {/* Order Queue */}
                <div className="flex flex-col items-center gap-2 w-1/3">
                    <div className="text-xs font-bold uppercase text-slate-400">Task Queue</div>
                    <div className="w-full bg-slate-100 p-2 rounded-xl h-64 overflow-y-auto space-y-2 border border-slate-200">
                        <AnimatePresence>
                            {orders.filter(o => o.status === 'pending').map(o => (
                                <motion.div key={o.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="bg-white p-2 rounded shadow-sm border border-slate-200 text-xs flex items-center gap-2">
                                    {o.type === 'heavy' ? <Database size={12} className="text-purple-500" /> : <Clock size={12} className="text-blue-500" />}
                                    {o.type === 'heavy' ? 'DB Query (Async)' : 'Simple Log'}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={() => addOrder('light')} className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-lg font-bold hover:bg-blue-200">+ Quick Task</button>
                        <button onClick={() => addOrder('heavy')} className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-lg font-bold hover:bg-purple-200">+ Heavy Task</button>
                    </div>
                </div>

                {/* The Event Loop (Chef) */}
                <div className="flex flex-col items-center justify-center w-1/3">
                    <div className={`w-32 h-32 rounded-full flex items-center justify-center border-4 relative transition-all duration-300
               ${chefStatus === 'cooking' ? 'bg-yellow-100 border-yellow-400' : 'bg-green-100 border-green-500'}
            `}>
                        <ChefHat size={48} className={chefStatus === 'cooking' ? 'text-yellow-600' : 'text-green-600'} />
                        <div className="absolute -bottom-8 font-bold text-slate-700">
                            {chefStatus === 'cooking' ? 'Busy...' : 'Ready!'}
                        </div>
                    </div>
                </div>

                {/* Completed/Async Pool */}
                <div className="flex flex-col items-center gap-2 w-1/3">
                    <div className="text-xs font-bold uppercase text-slate-400">Completed / Background</div>
                    <div className="w-full bg-slate-100 p-2 rounded-xl h-64 overflow-y-auto space-y-2 border border-slate-200">
                        {orders.filter(o => o.status === 'processing').map(o => (
                            <motion.div key={o.id} animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity }} className="bg-purple-100 p-2 rounded shadow-sm border border-purple-200 text-xs flex items-center gap-2 opacity-70">
                                <Database size={12} /> Processing...
                            </motion.div>
                        ))}
                        {orders.filter(o => o.status === 'done').map(o => (
                            <motion.div key={o.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-green-100 p-2 rounded shadow-sm border border-green-200 text-xs flex items-center gap-2">
                                {o.type === 'heavy' ? <Database size={12} /> : <Clock size={12} />} Done!
                            </motion.div>
                        ))}
                    </div>
                    <button onClick={() => setOrders([])} className="text-xs text-slate-400 hover:text-red-500">Clear All</button>
                </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 text-sm text-center text-slate-600 max-w-md">
                Wait! Notice that the Chef (Event Loop) only takes a split second to start a <strong>Heavy Task</strong>, then goes back to being <strong>Ready</strong> while the task finishes in the background. This is why Node is fast!
            </div>
        </div>
    );
};

export default function Module11() {
    return (
        <LessonLayout
            title="Node.js Fundamentals"

            explanation={
                <div className="space-y-4">
                    <p>
                        <strong>Node.js</strong> allows us to run JavaScript outside of the browser (like on a server).
                    </p>
                    <p>
                        The secret to Node's speed is the <strong>Event Loop</strong>.
                    </p>
                    <p>
                        Think of Node as a <strong>Professional Chef</strong> working alone.
                        Unlike a normal line cook who waits for the pizza to bake, the Chef puts the pizza in the oven and <em>immediately</em> starts chopping onions for the next order.
                        This is called <strong>Non-Blocking I/O</strong>.
                    </p>
                </div>
            }

            visual={<EventLoopVisual />}

            initialCode={`const fs = require('fs');

console.log("1. Chef starts cooking");

// This is a "Heavy Task" (Reading a file)
fs.readFile('menu.txt', 'utf8', (err, data) => {
  console.log("3. Helper finished reading: " + data);
});

console.log("2. Chef takes next order");

// Notice the order in the console!
`}

            quiz={
                <div className="space-y-4">
                    <div className="p-4 border rounded-xl hover:bg-slate-50 cursor-pointer transition-colors">
                        <div className="font-bold mb-2">What does "Non-Blocking" mean?</div>
                        <div className="space-y-2">
                            <button className="w-full text-left px-4 py-3 rounded-lg border hover:bg-red-100">The code stops and waits for lines to finish.</button>
                            <button className="w-full text-left px-4 py-3 rounded-lg border hover:bg-green-100">The code continues running while heavy tasks happen in the background.</button>
                        </div>
                    </div>
                </div>
            }

            challenge={
                <div>
                    <h4 className="font-bold text-xl mb-2 text-yellow-400">Mission: The File System</h4>
                    <p>
                        Writing files in Node is just like reading them.<br />
                        1. Use <code>fs.writeFile('note.txt', 'Hello Node', callback)</code>.<br />
                        2. In the callback, log "File saved!".
                    </p>
                </div>
            }
        />
    );
}
