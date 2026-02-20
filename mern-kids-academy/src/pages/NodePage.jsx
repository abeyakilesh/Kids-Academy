import { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, ArrowRight, FileJson } from 'lucide-react';
import GuideBot from '../components/GuideBot';

export default function NodePage() {
    const [method, setMethod] = useState('GET');
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);

    const simulateRequest = () => {
        setLoading(true);
        setResponse(null);

        setTimeout(() => {
            if (method === 'GET') {
                setResponse([
                    { id: 1, name: "Super Kid", power: "Flying" },
                    { id: 2, name: "Mega Mind", power: "Big Brain" }
                ]);
            } else {
                setResponse({ message: "Hero saved!", id: 3 });
            }
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="space-y-12 pb-24">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-extrabold text-green-600 flex items-center justify-center gap-3">
                    <Truck size={40} />
                    Node: The Messenger
                </h1>
                <p className="text-xl text-slate-600">
                    The Artist (React) stays in the browser. It can't walk to the Vault (Database).
                    <br />It needs a <strong>Messenger</strong> to run errands!
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Theory Section */}
                <div className="space-y-8">
                    <section className="bg-white p-8 rounded-3xl border-2 border-slate-100 shadow-sm">
                        <h2 className="text-2xl font-bold mb-4 text-slate-800">The Menu (API)</h2>
                        <p className="text-lg text-slate-600 mb-6">
                            The Messenger has a list of jobs he can do. We call this list an <strong>API</strong>.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-xl border border-blue-100">
                                <span className="font-mono font-bold bg-blue-500 text-white px-3 py-1 rounded-lg">GET</span>
                                <span className="text-slate-700 font-medium">"Go get the list of heroes!"</span>
                            </div>
                            <div className="flex items-center gap-4 bg-green-50 p-4 rounded-xl border border-green-100">
                                <span className="font-mono font-bold bg-green-500 text-white px-3 py-1 rounded-lg">POST</span>
                                <span className="text-slate-700 font-medium">"Take this new hero to the vault!"</span>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Interactive Simulation */}
                <div className="bg-slate-800 p-8 rounded-3xl text-white relative overflow-hidden shadow-xl">
                    <h3 className="text-2xl font-bold mb-6 text-center">Try the Messenger Service</h3>

                    <div className="space-y-8 relative z-10">
                        <div className="flex flex-col gap-4">
                            <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">1. Choose a Job</label>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setMethod('GET')}
                                    className={`flex-1 py-3 rounded-xl font-bold border-2 transition-all ${method === 'GET' ? 'bg-blue-500 border-blue-500 text-white' : 'border-slate-600 text-slate-400 hover:bg-slate-700'}`}
                                >
                                    GET (Fetch)
                                </button>
                                <button
                                    onClick={() => setMethod('POST')}
                                    className={`flex-1 py-3 rounded-xl font-bold border-2 transition-all ${method === 'POST' ? 'bg-green-500 border-green-500 text-white' : 'border-slate-600 text-slate-400 hover:bg-slate-700'}`}
                                >
                                    POST (Send)
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button
                                onClick={simulateRequest}
                                disabled={loading}
                                className={`w-full py-4 rounded-2xl font-bold text-lg shadow-lg transition-all transform active:scale-95
                  ${loading ? 'bg-slate-600 cursor-not-allowed' : 'bg-slate-100 text-slate-900 hover:bg-white'}
                `}
                            >
                                {loading ? 'Running...' : 'Run Job!'}
                            </button>
                        </div>

                        <div className="relative min-h-[120px] bg-slate-900 rounded-xl p-4 border border-slate-700">
                            {loading && (
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center"
                                    animate={{ x: [-20, 20, -20] }}
                                    transition={{ repeat: Infinity, duration: 1 }}
                                >
                                    <Truck size={40} className="text-slate-500" />
                                </motion.div>
                            )}

                            {!loading && response && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                    <div className="text-xs font-bold text-slate-500 uppercase mb-2 flex items-center gap-2">
                                        <FileJson size={14} />
                                        Messenger's Report
                                    </div>
                                    <pre className="text-green-400 font-mono text-sm">{JSON.stringify(response, null, 2)}</pre>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <GuideBot message="Click 'Run Job' to send the Messenger on a trip! He is fast!" />
        </div>
    );
}
