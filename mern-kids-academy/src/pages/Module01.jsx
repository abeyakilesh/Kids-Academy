import { useState } from 'react';
import { motion } from 'framer-motion';
import { Laptop, Server as ServerIcon, Pizza, ArrowRight, Check } from 'lucide-react';
import LessonLayout from '../components/LessonLayout';

const ClientServerVisual = () => {
    const [status, setStatus] = useState('idle'); // idle, requesting, processing, responding, done

    const sendRequest = () => {
        if (status !== 'idle') return;
        setStatus('requesting');

        // Sequence
        setTimeout(() => setStatus('processing'), 2000);
        setTimeout(() => setStatus('responding'), 4000);
        setTimeout(() => {
            setStatus('done');
            setTimeout(() => setStatus('idle'), 3000);
        }, 6000);
    };

    return (
        <div className="flex flex-col items-center w-full max-w-3xl">
            <div className="flex justify-between w-full items-center mb-12 px-8">

                {/* Client */}
                <div className="flex flex-col items-center gap-4">
                    <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center border-4 border-blue-500 relative z-10">
                        <Laptop size={40} className="text-blue-600" />
                    </div>
                    <div className="text-center">
                        <div className="font-bold text-slate-800">Client (You)</div>
                        <div className="text-xs text-slate-500 uppercase font-bold">The Customer</div>
                    </div>
                </div>

                {/* Connection Line */}
                <div className="flex-1 h-3 bg-slate-200 mx-8 rounded-full relative">
                    {/* Request Packet */}
                    {(status === 'requesting' || status === 'processing') && (
                        <motion.div
                            className="absolute top-1/2 -mt-6 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                            initial={{ left: 0 }}
                            animate={{ left: '90%' }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        >
                            GET /pizza
                        </motion.div>
                    )}

                    {/* Response Packet */}
                    {(status === 'responding' || status === 'done') && (
                        <motion.div
                            className="absolute top-1/2 -mt-6 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1"
                            initial={{ right: 0 }}
                            animate={{ right: '90%' }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        >
                            <Pizza size={12} /> Here's Pizza!
                        </motion.div>
                    )}
                </div>

                {/* Server */}
                <div className="flex flex-col items-center gap-4">
                    <div className={`w-24 h-24 bg-green-100 rounded-full flex items-center justify-center border-4 border-green-500 relative z-10 transition-transform ${status === 'processing' ? 'scale-110 shadow-xl' : ''}`}>
                        <ServerIcon size={40} className="text-green-600" />
                        {status === 'processing' && (
                            <motion.div
                                className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                Cooking...
                            </motion.div>
                        )}
                    </div>
                    <div className="text-center">
                        <div className="font-bold text-slate-800">Server</div>
                        <div className="text-xs text-slate-500 uppercase font-bold">The Kitchen</div>
                    </div>
                </div>

            </div>

            <div className="bg-slate-800 text-white p-6 rounded-2xl w-full max-w-lg text-center">
                <div className="font-mono text-sm mb-4 text-slate-400">Network Log</div>
                <div className="h-24 flex items-center justify-center">
                    {status === 'idle' && "Ready to order..."}
                    {status === 'requesting' && "Sending request to Server..."}
                    {status === 'processing' && "Server is preparing data..."}
                    {status === 'responding' && "Server is sending data back..."}
                    {status === 'done' && <div className="text-green-400 font-bold flex items-center gap-2"><Check /> Order Received!</div>}
                </div>
                <button
                    onClick={sendRequest}
                    disabled={status !== 'idle'}
                    className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-3 rounded-xl font-bold transition-all mt-4 w-full"
                >
                    {status === 'idle' ? 'Order Pizza (Make Request)' : 'Please Wait...'}
                </button>
            </div>
        </div>
    );
};

export default function Module01() {
    return (
        <LessonLayout
            title="How the Web Works"

            explanation={
                <div className="space-y-4">
                    <p>
                        Imagine the Web is a giant <strong>Restaurant</strong>.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>You (The Client)</strong> are the customer sitting at a table.</li>
                        <li><strong>The Server</strong> is the kitchen that cooks the food.</li>
                        <li><strong>The Request</strong> is you ordering from the menu ("I want Pizza!").</li>
                        <li><strong>The Response</strong> is the waiter bringing you the Pizza.</li>
                    </ul>
                    <p>
                        Every time you click a link or open an app, you are just ordering "data pizza" from a kitchen far away!
                    </p>
                </div>
            }

            visual={<ClientServerVisual />}

            initialCode={`// 1. We ask the server for pizza
console.log("Ordering Pizza...");

// 2. The server replies
setTimeout(() => {
  console.log("Here is your Pizza! 🍕");
}, 2000);
`}

            quiz={
                <div className="space-y-4">
                    <div className="p-4 border rounded-xl hover:bg-slate-50 cursor-pointer transition-colors">
                        <div className="font-bold mb-2">Who cooks the food (data)?</div>
                        <div className="flex gap-4">
                            <button className="px-4 py-2 rounded-lg border hover:bg-blue-100">The Client</button>
                            <button className="px-4 py-2 rounded-lg border hover:bg-green-100">The Server</button>
                        </div>
                    </div>
                </div>
            }

            challenge={
                <div>
                    <h4 className="font-bold text-xl mb-2 text-yellow-400">Mission: The Console Reporter</h4>
                    <p>
                        Open the Code Editor above.<br />
                        1. Log "Hello Server!"<br />
                        2. Use setTimeout to log "Server says Hi!" after 3 seconds.<br />
                        3. Run the code and watch the console!
                    </p>
                </div>
            }
        />
    );
}
