import { Database, Search, Code } from 'lucide-react';
import GuideBot from '../components/GuideBot';
import { Link } from 'react-router-dom';

const modules = [
    { path: "/modules/2.1", title: "2.1: MongoDB CRUD", icon: Search, desc: "Create, Read, Update, Delete data.", color: "bg-emerald-600" },
];

export default function Level2Dashboard() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12 pb-32">
            <div className="text-center space-y-6 mb-12">
                <h1 className="text-4xl font-extrabold text-slate-900">Level 2: The Vault (Database)</h1>
                <p className="text-xl text-slate-600">Learn how to store data permanently.</p>
            </div>

            <div className="grid gap-6">
                {modules.map((m, i) => (
                    <Link key={i} to={m.path} className="group">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-slate-100 hover:border-emerald-400 transition-all hover:shadow-md flex items-center gap-6">
                            <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-white shadow-md ${m.color} group-hover:scale-110 transition-transform`}>
                                <m.icon size={32} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-slate-800 mb-1">{m.title}</h3>
                                <p className="text-slate-500">{m.desc}</p>
                            </div>
                            <div className="bg-slate-50 p-2 rounded-full text-slate-300 group-hover:text-emerald-500 group-hover:bg-emerald-50 transition-colors">
                                <Code size={24} />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <GuideBot message="Data is the most valuable resource in the world. Guard it well!" />
        </div>
    );
}
