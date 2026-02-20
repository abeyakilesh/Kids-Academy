import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Eye, Code, CheckCircle, Award, ArrowRight, ArrowLeft } from 'lucide-react';
import GuideBot from './GuideBot';
import CodeEditor from './CodeEditor';

import { Link } from 'react-router-dom';

const steps = [
    { id: 'explain', title: 'Start', icon: BookOpen },
    { id: 'visualize', title: 'See It', icon: Eye },
    { id: 'code', title: 'Try It', icon: Code },
    { id: 'quiz', title: 'Quiz', icon: CheckCircle },
    { id: 'challenge', title: 'Pro', icon: Award },
];

export default function LessonLayout({ title, explanation, visual, initialCode, language = "javascript", quiz, challenge }) {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
    const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

    const renderContent = () => {
        switch (steps[currentStep].id) {
            case 'explain':
                return (
                    <div className="prose prose-lg max-w-none">
                        <h2 className="text-3xl font-bold text-slate-800 mb-6">{title}</h2>
                        <div className="bg-white p-8 rounded-3xl border-2 border-slate-100 shadow-sm text-slate-600 leading-relaxed">
                            {explanation}
                        </div>
                    </div>
                );
            case 'visualize':
                return (
                    <div className="space-y-6">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold text-slate-800">Visualizing the Concept</h3>
                            <p className="text-slate-600">See how it works under the hood.</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 flex justify-center items-center min-h-[400px]">
                            {visual}
                        </div>
                    </div>
                );
            case 'code':
                return (
                    <div className="space-y-6 h-full flex flex-col">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold text-slate-800">Your Turn to Code</h3>
                            <p className="text-slate-600">Type your code and hit Run!</p>
                        </div>
                        <div className="flex-1 min-h-[500px]">
                            <CodeEditor initialCode={initialCode} language={language} onRun={window.runProjectCode} />
                        </div>
                    </div>
                );
            case 'quiz':
                return (
                    <div className="space-y-6 max-w-2xl mx-auto">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-slate-800">Knowledge Check</h3>
                            <p className="text-slate-600">Prove you understood the mission.</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl border-2 border-slate-100 shadow-sm">
                            {quiz}
                        </div>
                    </div>
                );
            case 'challenge':
                return (
                    <div className="space-y-6 text-center">
                        <div className="inline-block p-4 bg-yellow-100 text-yellow-600 rounded-full mb-4">
                            <Award size={48} />
                        </div>
                        <h3 className="text-4xl font-bold text-slate-800">Level Challenge!</h3>
                        <p className="text-xl text-slate-600 max-w-xl mx-auto">
                            You are ready for the real world. Complete this mini-project to earn your badge.
                        </p>
                        <div className="bg-slate-800 text-white p-8 rounded-3xl text-left font-mono my-8">
                            {challenge}
                        </div>
                    </div>
                );
            default:
                return <div>Unknown Step</div>;
        }
    };

    return (
        <div className="max-w-6xl mx-auto px-6 py-8 pb-32">
            {/* Progress Stepper */}
            <div className="flex justify-between items-center mb-12 relative">
                <div className="absolute left-0 right-0 top-1/2 h-1 bg-slate-200 -z-10 -translate-y-1/2 rounded-full"></div>
                {steps.map((step, idx) => {
                    const isActive = idx === currentStep;
                    const isComplete = idx < currentStep;

                    return (
                        <button
                            key={step.id}
                            onClick={() => setCurrentStep(idx)}
                            className={`flex flex-col items-center gap-2 bg-slate-50 p-2 rounded-xl transition-all outline-none focus:ring-4 ring-blue-100
                   ${isActive ? 'scale-110' : 'hover:scale-105'}
                 `}
                        >
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 z-10 transition-colors
                   ${isActive ? 'bg-blue-600 border-white text-white shadow-lg' :
                                    isComplete ? 'bg-green-500 border-white text-white' : 'bg-white border-slate-200 text-slate-300'}
                 `}>
                                <step.icon size={20} />
                            </div>
                            <span className={`text-xs font-bold uppercase tracking-wider ${isActive ? 'text-blue-600' : 'text-slate-400'}`}>
                                {step.title}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Content Area */}
            <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="min-h-[500px]"
            >
                {renderContent()}
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-between mt-12 pt-8 border-t border-slate-200 items-center">
                <Link to="/roadmap" className="text-slate-400 hover:text-blue-500 font-bold text-sm">
                    &larr; Exit to Roadmap
                </Link>

                <div className="flex gap-4">
                    <button
                        onClick={prevStep}
                        disabled={currentStep === 0}
                        className="px-6 py-3 rounded-full font-bold text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent flex items-center gap-2 transition-all"
                    >
                        <ArrowLeft size={20} /> Back
                    </button>

                    <button
                        onClick={nextStep}
                        disabled={currentStep === steps.length - 1}
                        className="px-8 py-3 rounded-full font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg disabled:opacity-30 disabled:hover:bg-blue-600 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
                    >
                        Next Step <ArrowRight size={20} />
                    </button>
                </div>
            </div>

            <GuideBot message="Take your time! Make sure you understand each step before moving on." />
        </div>
    );
}
