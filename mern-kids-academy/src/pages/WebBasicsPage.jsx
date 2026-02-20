import { Globe, BookOpen, Code, Layers, FileCode, CheckCircle, Lock } from 'lucide-react';
import GuideBot from '../components/GuideBot';
import { Link } from 'react-router-dom';
import { curriculum } from '../data/curriculum';

export default function WebBasicsPage() {
    // We assume Level 0 (id: 0) contains the tracks or we manually build them here for the Hub view.
    // The HTML modules are actually stored in curriculum linked by ID.
    // Ideally, we fetch them or hardcode the track entry points.

    // Let's create a view that shows the 3 Tracks.
    const tracks = [
        {
            id: "html",
            title: "HTML Mastery",
            icon: Globe,
            description: "Zero to Hero: Master the skeleton of the web.",
            color: "bg-orange-500",
            modules: curriculum.find(c => c.id === "html")?.modules || [],
            status: "active"
        },
        {
            id: "css",
            title: "CSS Mastery",
            icon: Layers,
            description: "Style your website with modern professional techniques.",
            color: "bg-blue-500",
            modules: curriculum.find(c => c.id === "css")?.modules || [],
            status: "active"
        },
        {
            id: "js",
            title: "JavaScript Mastery",
            icon: FileCode,
            description: "Make it interactive with the language of the web.",
            color: "bg-yellow-400",
            modules: curriculum.find(c => c.id === 0)?.modules || [], // Legacy JS modules
            status: "active"
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-6 py-12 pb-32">
            <div className="text-center space-y-6 mb-16">
                <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">Web Foundations</h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    Your journey to becoming a Full Stack Developer starts here. Master the three pillars of the web.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {tracks.map((track, i) => (
                    <div key={i} className={`relative flex flex-col bg-white rounded-3xl border-2 ${track.status === 'active' ? 'border-slate-100' : 'border-slate-100 opacity-75'} shadow-xl overflow-hidden`}>
                        {/* Header */}
                        <div className={`p-8 ${track.color} text-white`}>
                            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                                <track.icon size={32} />
                            </div>
                            <h2 className="text-2xl font-bold mb-2">{track.title}</h2>
                            <p className="text-white/80 font-medium">{track.description}</p>
                        </div>

                        {/* Modules List */}
                        <div className="p-6 flex-1 bg-slate-50/50">
                            {track.status === 'active' ? (
                                <div className="space-y-3">
                                    {track.modules.map((m, idx) => {
                                        // Determine link path
                                        // If it's HTML, it uses /modules/html/:id
                                        // If it's legacy 0.1, it uses /modules/:id
                                        // We need a helper or just check the ID format.
                                        let linkPath = `/modules/${m.id}`;
                                        if (m.id.startsWith('html')) linkPath = `/modules/html/${m.id}`;
                                        if (m.id.startsWith('css')) linkPath = `/modules/css/${m.id}`;

                                        return (
                                            <Link key={idx} to={linkPath} className="block group">
                                                <div className="bg-white p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex items-center gap-4">
                                                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                                        <span className="font-bold text-xs">{idx + 1}</span>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-slate-700 group-hover:text-blue-700 transition-colors">{m.title}</h4>
                                                        <span className="text-xs text-slate-400 font-medium">{m.lessons?.length || 0} Lessons</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center text-slate-400 py-12">
                                    <Lock size={48} className="mb-4 text-slate-300" />
                                    <p className="font-bold">Coming Soon</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <GuideBot message="Pick a track above! I recommend starting with HTML to build your skeleton." />
        </div>
    );
}
