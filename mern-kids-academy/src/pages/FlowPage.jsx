import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Paintbrush, Truck, Archive, ArrowRight, CheckCircle, Send } from 'lucide-react';
import GuideBot from '../components/GuideBot';

const Step = ({ title, role, icon: Icon, isActive, isComplete, color }) => (
    <div className={`flex flex-col items-center relative z-10 transition-all duration-300 ${isActive ? 'scale-110' : 'scale-100'} ${isComplete ? 'opacity-50' : 'opacity-100'}`}>
        <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-4 border-4 overflow-hidden bg-white ${isActive ? color.border : 'border-slate-200'} ${isActive ? 'shadow-xl' : ''}`}>
            <Icon size={40} className={isActive ? color.text : 'text-slate-400'} />
        </div>
        <div className={`font-bold text-center text-lg ${isActive ? 'text-slate-800' : 'text-slate-400'}`}>{title}</div>
        <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-1">{role}</div>
    </div>
);

export default function FlowPage() {
    const [step, setStep] = useState(0);
    // 0: Idle, 1: React -> Node, 2: Process Node, 3: Node -> Mongo, 4: Save Mongo, 5: Return Success
    const [isFlowing, setIsFlowing] = useState(false);

    const startFlow = () => {
        if (isFlowing) return;
        setIsFlowing(true);
        setStep(0);

        // Sequence
        const delays = [1000, 1000, 1000, 1000, 1000];
        let current = 0;

        const interval = setInterval(() => {
            current++;
            setStep(current);
            if (current >= 4) {
                clearInterval(interval);
                setTimeout(() => {
                    setIsFlowing(false);
                    setStep(0); // Reset or show success
                }, 2000);
            }
        }, 1800);
    };

    const getGuideMessage = () => {
        if (!isFlowing) return "Click 'Start Mission' to watch the Dream Team work together!";
        if (step === 1) return "The Artist gives the order to the Messenger!";
        if (step === 2) return "The Messenger runs to the Vault!";
        if (step === 3) return "The Vault opens and keeps the hero safe!";
        return "Mission Accomplished! The Messenger tells the Artist it's done.";
    };

    return (
        <div className="space-y-12 pb-24">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-extrabold text-purple-600">The Grand Flow</h1>
                <p className="text-lg text-slate-600">
                    Watch the data travel from the <span className="text-blue-600 font-bold">Artist</span>,
                    to the <span className="text-green-600 font-bold">Messenger</span>,
                    to the <span className="text-emerald-600 font-bold">Vault</span>!
                </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-12 relative overflow-hidden min-h-[400px]">
                {/* Connection Line */}
                <div className="absolute top-1/2 left-16 right-16 h-4 bg-slate-200 -translate-y-1/2 z-0 rounded-full"></div>

                {/* Active Line Progress */}
                <motion.div
                    className="absolute top-1/2 left-16 h-4 bg-purple-500 -translate-y-1/2 z-0 rounded-full"
                    animate={{ width: `${step * 25}%` }}
                    transition={{ duration: 0.5 }}
                />

                <div className="relative flex justify-between px-4">
                    <Step
                        title="React"
                        role="The Artist"
                        icon={Paintbrush}
                        isActive={step === 0 || step === 5}
                        isComplete={step > 0 && step < 5}
                        color={{ border: 'border-blue-500', text: 'text-blue-500' }}
                    />

                    <Step
                        title="Node"
                        role="The Messenger"
                        icon={Truck}
                        isActive={step === 1 || step === 3}
                        isComplete={step === 2 || step === 4}
                        color={{ border: 'border-green-500', text: 'text-green-500' }}
                    />

                    <Step
                        title="MongoDB"
                        role="The Vault"
                        icon={Archive}
                        isActive={step === 2}
                        isComplete={step > 2}
                        color={{ border: 'border-emerald-500', text: 'text-emerald-500' }}
                    />
                </div>

                {/* Data Packet */}
                {isFlowing && (
                    <motion.div
                        className="absolute top-1/2 -mt-20 z-30"
                        initial={{ left: '10%' }}
                        animate={{ left: step === 1 ? '50%' : step === 2 ? '90%' : step === 3 ? '50%' : step === 4 ? '10%' : '10%' }}
                        transition={{ duration: 1.5, type: "spring" }}
                    >
                        <div className="flex flex-col items-center">
                            <div className="bg-yellow-400 text-slate-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg border-2 border-yellow-500 whitespace-nowrap mb-2 transform -rotate-6">
                                {step < 3 ? 'New Hero Order' : 'Receipt: "Saved!"'}
                            </div>
                            <div className="bg-purple-600 p-2 rounded-full text-white shadow-lg">
                                <Send size={24} className="rotate-90" />
                            </div>
                        </div>
                    </motion.div>
                )}

            </div>

            <div className="flex justify-center">
                <button
                    onClick={startFlow}
                    disabled={isFlowing}
                    className={`px-10 py-5 rounded-full font-bold text-xl shadow-xl transition-all flex items-center gap-3
            ${isFlowing ? 'bg-slate-300 text-slate-500 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-500 text-white hover:scale-105 active:scale-95'}
          `}
                >
                    {isFlowing ? 'Mission in Progress...' : 'Start Mission!'}
                    {!isFlowing && <ArrowRight />}
                </button>
            </div>

            <GuideBot message={getGuideMessage()} emotion={isFlowing ? 'excited' : 'happy'} />
        </div>
    );
}
