import { Layout, GitBranch, Code, MousePointer, List, Activity, FormInput, Map, Zap, Film } from 'lucide-react';
import GuideBot from '../components/GuideBot';
import { Link } from 'react-router-dom';

const modules = [
    { path: "/modules/3.1", title: "3.1: Components & Tree", icon: GitBranch, desc: "Building UI with Lego Blocks.", color: "bg-teal-500" },
    { path: "/modules/3.2", title: "3.2: State & Events", icon: MousePointer, desc: "Making things interactive.", color: "bg-teal-600" },
    { path: "/modules/3.3", title: "3.3: Lists & Keys", icon: List, desc: "Rendering arrays of data.", color: "bg-teal-700" },
    { path: "/modules/3.4", title: "3.4: Effects & Lifecycle", icon: Activity, desc: "Fetching data & side effects.", color: "bg-cyan-600" },
    { path: "/modules/3.5", title: "3.5: Forms & Inputs", icon: FormInput, desc: "Handling user input.", color: "bg-cyan-700" },
    { path: "/modules/3.6", title: "3.6: Routing", icon: Map, desc: "Multi-page navigation.", color: "bg-sky-600" },
    { path: "/modules/3.7", title: "3.7: Context (Global State)", icon: Zap, desc: "Solving Prop Drilling.", color: "bg-blue-600" },
    { path: "/modules/3.project", title: "Capstone: CineMatic", icon: Film, desc: "Build a Movie Search App.", color: "bg-purple-600" },
];

export default function Level3Dashboard() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12 pb-32">
            <div className="text-center space-y-6 mb-12">
                <h1 className="text-4xl font-extrabold text-slate-900">Level 3: Frontend Mastery</h1>
                <p className="text-xl text-slate-600">Master the Essential 40% of React used by professionals.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {modules.map((m, i) => (
                    <Link key={i} to={m.path} className="group">
                        <div className="bg-white p-6 h-full rounded-2xl shadow-sm border-2 border-slate-100 hover:border-teal-400 transition-all hover:shadow-md flex items-center gap-6">
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-md ${m.color} group-hover:scale-110 transition-transform`}>
                                <m.icon size={28} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-slate-800 mb-1">{m.title}</h3>
                                <p className="text-sm text-slate-500">{m.desc}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <GuideBot message="Complete these components to become a React Pro!" />
        </div>
    );
}
