import { Award, Cloud, Shield, Code } from 'lucide-react';
import GuideBot from '../components/GuideBot';
import { Link } from 'react-router-dom';

const modules = [
    { path: "/modules/5.1", title: "5.1: Deployment Guide", icon: Cloud, desc: "Go Live! Vercel, Render, and Atlas.", color: "bg-purple-600" },
];

export default function Level45Dashboard() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12 pb-32">
            <div className="text-center space-y-6 mb-12">
                <h1 className="text-4xl font-extrabold text-slate-900">Level 4 & 5: Professional</h1>
                <p className="text-xl text-slate-600">Master Integration, Security, and Deployment.</p>
            </div>

            <div className="grid gap-6">
                {modules.map((m, i) => (
                    <Link key={i} to={m.path} className="group">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-slate-100 hover:border-purple-400 transition-all hover:shadow-md flex items-center gap-6">
                            <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-white shadow-md ${m.color} group-hover:scale-110 transition-transform`}>
                                <m.icon size={32} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-slate-800 mb-1">{m.title}</h3>
                                <p className="text-slate-500">{m.desc}</p>
                            </div>
                            <div className="bg-slate-50 p-2 rounded-full text-slate-300 group-hover:text-purple-500 group-hover:bg-purple-50 transition-colors">
                                <Code size={24} />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <GuideBot message="This is the final step to becoming a Hero!" />
        </div>
    );
}
