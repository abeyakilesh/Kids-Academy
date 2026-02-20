import { motion } from 'framer-motion';
import { Map, Code, Database, Server, Layout, Shield, Globe, Award, Lock, Play } from 'lucide-react';
import GuideBot from '../components/GuideBot';
import { Link } from 'react-router-dom';

const modules = [
    { id: 0, title: "Web & JS Foundations", icon: Globe, desc: "How the web works, JS Basics, & First App", color: "bg-blue-500", path: "/modules/0" },
    { id: 1, title: "Backend (Node + Express)", icon: Server, desc: "Event Loop, APIs, and Server Logic", color: "bg-green-600", path: "/modules/1" },
    { id: 2, title: "Database (MongoDB)", icon: Database, desc: "The Vault: CRUD & Aggregations", color: "bg-emerald-600", path: "/modules/2" },
    { id: 3, title: "Frontend (React)", icon: Layout, desc: "Components, Hooks, & Interactive UIs", color: "bg-teal-500", path: "/modules/3" },
    { id: 4, title: "Professional Deployment", icon: Award, desc: "Security, CI/CD, and Going Live!", color: "bg-purple-600", path: "/modules/5" },
];

const ModuleCard = ({ module, index }) => {
    const isUnlocked = true; // Unlock all for demo purposes

    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative flex items-center gap-6 mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse text-right'}`}
        >
            {/* Connector Line Point */}
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-300 border-4 border-white z-10"></div>

            {/* Content Card */}
            <div className={`flex-1 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                <Link to={isUnlocked ? module.path : '#'} className={`block group ${!isUnlocked && 'cursor-not-allowed'}`}>
                    <div className={`bg-white p-6 rounded-2xl shadow-lg border-2 transition-all ${isUnlocked ? 'border-slate-100 hover:border-blue-400 hover:shadow-xl hover:-translate-y-1' : 'border-slate-100 opacity-60 grayscale'}`}>
                        <div className={`flex items-center gap-4 ${index % 2 !== 0 && 'flex-row-reverse'}`}>
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-md ${module.color}`}>
                                <module.icon size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                                    {module.title}
                                    {!isUnlocked && <Lock size={16} className="text-slate-400" />}
                                </h3>
                                <p className="text-sm text-slate-500">{module.desc}</p>
                            </div>
                        </div>

                        {isUnlocked && (
                            <div className={`mt-4 flex ${index % 2 !== 0 && 'justify-end'}`}>
                                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 flex items-center gap-1 group-hover:underline">
                                    Start Mission <Play size={12} fill="currentColor" />
                                </span>
                            </div>
                        )}
                    </div>
                </Link>
            </div>

            <div className="flex-1"></div>
        </motion.div>
    );
};

export default function RoadmapPage() {
    return (
        <div className="min-h-screen bg-slate-50 pb-32">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="text-center space-y-6 mb-16">
                    <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-600 rounded-full mb-4">
                        <Map size={32} />
                    </div>
                    <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">Your Path to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Expert</span></h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Complete these 8 stages to master the MERN stack. From simple web pages to professional applications.
                    </p>
                </div>

                <div className="relative">
                    {/* Central Line */}
                    <div className="absolute left-1/2 top-4 bottom-0 w-1 bg-slate-200 -translate-x-1/2 rounded-full"></div>

                    <div className="space-y-4">
                        {modules.map((module, index) => (
                            <ModuleCard key={module.id} module={module} index={index} />
                        ))}
                    </div>

                    {/* End Trophy */}
                    <div className="relative z-10 flex justify-center mt-12">
                        <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-yellow-900 shadow-xl border-4 border-white">
                            <Award size={40} />
                        </div>
                    </div>
                </div>
            </div>

            <GuideBot message="Start at Part 0 to build your foundation! I'll be with you every step of the way." />
        </div>
    );
}
