import { Server, Activity, Code, Award } from 'lucide-react';
import GuideBot from '../components/GuideBot';
import { Link } from 'react-router-dom';

const modules = [
    { path: "/modules/1.1", title: "1.1: Node Fundamentals", icon: Activity, desc: "The Event Loop & File System.", color: "bg-green-600" },
    { path: "/modules/1.project", title: "Capstone: User API", icon: Award, desc: "Build a real API with Express.", color: "bg-yellow-500" },
];

export default function Level1Dashboard() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12 pb-32">
            <div className="text-center space-y-6 mb-12">
                <h1 className="text-4xl font-extrabold text-slate-900">Level 1: Backend Engineering</h1>
                <p className="text-xl text-slate-600">Learn how servers work and build your first API.</p>
            </div>

            <div className="grid gap-6">
                {modules.map((m, i) => (
                    <Link key={i} to={m.path} className="group">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-slate-100 hover:border-green-400 transition-all hover:shadow-md flex items-center gap-6">
                            <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-white shadow-md ${m.color} group-hover:scale-110 transition-transform`}>
                                <m.icon size={32} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-slate-800 mb-1">{m.title}</h3>
                                <p className="text-slate-500">{m.desc}</p>
                            </div>
                            <div className="bg-slate-50 p-2 rounded-full text-slate-300 group-hover:text-green-500 group-hover:bg-green-50 transition-colors">
                                <Code size={24} />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <GuideBot message="This is where the magic happens behind the scenes!" />
        </div>
    );
}
