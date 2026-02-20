import { Link, Outlet, useLocation } from 'react-router-dom';
import { Map, LayoutTemplate, Server, Database, Activity } from 'lucide-react';

const NavItem = ({ to, icon: Icon, label, color }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group
        ${isActive ? 'bg-white shadow-sm ring-1 ring-slate-200 translate-x-1' : 'hover:bg-slate-100 hover:translate-x-1'}
      `}
        >
            <div className={`p-2 rounded-lg ${isActive ? color : 'bg-slate-200 text-slate-500 group-hover:text-slate-700'}`}>
                <Icon size={20} className={isActive ? 'text-white' : ''} />
            </div>
            <span className={`font-medium ${isActive ? 'text-slate-800' : 'text-slate-500'}`}>{label}</span>
        </Link>
    );
};

export default function Layout() {
    return (
        <div className="flex h-screen bg-slate-50 font-sans text-slate-900 overflow-hidden">
            {/* Sidebar Navigation */}
            <aside className="w-64 bg-white border-r border-slate-200 flex flex-col z-20 shadow-sm relative">
                <div className="p-6">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">M</div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                            Kids Academy
                        </span>
                    </div>
                </div>

                <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
                    <div className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Start Here
                    </div>
                    <NavItem to="/" icon={LayoutTemplate} label="Welcome" color="bg-blue-500" />
                    <NavItem to="/roadmap" icon={Map} label="Academy Roadmap" color="bg-purple-600" />

                    <div className="px-4 py-2 mt-6 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Quick Access
                    </div>
                    <NavItem to="/modules/1" icon={Database} label="The Vault (Mongo)" color="bg-emerald-600" />
                    <NavItem to="/modules/2" icon={Server} label="The Server (Node)" color="bg-green-600" />
                    <NavItem to="/modules/4" icon={LayoutTemplate} label="The Artist (React)" color="bg-teal-500" />
                    <NavItem to="/modules/5" icon={Activity} label="The Flow" color="bg-indigo-600" />
                </nav>

                <div className="p-4 border-t border-slate-100">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-500">
                        <p>Ready to become a full stack hero?</p>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto relative scroll-smooth">
                <div className="max-w-5xl mx-auto p-8 pb-32">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
