import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Map, Home, User, Settings, ArrowRight } from 'lucide-react';
import LessonLayout from '../components/LessonLayout';

const RouterVisual = () => {
    const [path, setPath] = useState("/");

    const renderPage = () => {
        switch (path) {
            case "/": return <div className="text-4xl">🏠 <span className="text-sm block text-slate-500">Home</span></div>;
            case "/about": return <div className="text-4xl">👋 <span className="text-sm block text-slate-500">About</span></div>;
            case "/settings": return <div className="text-4xl">⚙️ <span className="text-sm block text-slate-500">Settings</span></div>;
            default: return <div>404</div>;
        }
    };

    return (
        <div className="flex flex-col items-center w-full max-w-2xl gap-8">
            {/* Browser Bar */}
            <div className="w-full bg-slate-100 p-2 rounded-t-xl flex items-center gap-2 border border-slate-300">
                <div className="flex gap-1.5 ml-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-slate-600 font-mono flex items-center">
                    <span className="opacity-50">example.com</span>
                    <span className="font-bold text-slate-800">{path}</span>
                </div>
            </div>

            {/* The "Page" Content */}
            <div className="w-full h-48 bg-white border-x border-b border-slate-200 rounded-b-xl shadow-lg flex items-center justify-center relative overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={path}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                    >
                        {renderPage()}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Links */}
            <div className="flex gap-4">
                <button onClick={() => setPath("/")} className={`px-4 py-2 rounded-lg font-bold transition-all ${path === "/" ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-200 hover:bg-blue-50'}`}>
                    Home
                </button>
                <button onClick={() => setPath("/about")} className={`px-4 py-2 rounded-lg font-bold transition-all ${path === "/about" ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-200 hover:bg-blue-50'}`}>
                    About
                </button>
                <button onClick={() => setPath("/settings")} className={`px-4 py-2 rounded-lg font-bold transition-all ${path === "/settings" ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-200 hover:bg-blue-50'}`}>
                    Settings
                </button>
            </div>

            <p className="text-center text-slate-500 text-sm">
                Notice the page <strong>does not reload</strong> (blink white). Only the content inside changes!
            </p>
        </div>
    );
};

export default function Module36() {
    return (
        <LessonLayout
            title="Routing & Navigation"

            explanation={
                <div className="space-y-4">
                    <p>
                        Old websites reloaded the entire page for every click. Modern React apps are <strong>Single Page Apps (SPA)</strong>.
                    </p>
                    <p>
                        We use <strong>React Router</strong> to swap what we see without refreshing the browser.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                        <code className="text-blue-800 font-bold block mb-2">{`<Link to="/about">About</Link>`}</code>
                        <p className="text-blue-700 text-sm">
                            Use <code>Link</code> instead of <code>a href</code> to stop the reload!
                        </p>
                    </div>
                </div>
            }

            visual={<RouterVisual />}

            initialCode={`import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// 1. Define Page Components
const Home = () => <h1>Home Page 🏠</h1>;
const About = () => <h1>About Us 👋</h1>;

function App() {
  return (
    <BrowserRouter>
      {/* 2. Create Navigation */}
      <nav style={{ padding: 10, background: '#eee' }}>
        <Link to="/" style={{ marginRight: 10 }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <div style={{ padding: 20 }}>
        {/* 3. Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
`}

            quiz={
                <div className="space-y-4">
                    <div className="p-4 border rounded-xl hover:bg-slate-50 cursor-pointer transition-colors">
                        <div className="font-bold mb-2">How do you create a link in React Router?</div>
                        <div className="grid grid-cols-1 gap-2">
                            <button className="px-4 py-3 text-left rounded-lg border hover:bg-red-100">{`<a href="/page">`}</button>
                            <button className="px-4 py-3 text-left rounded-lg border hover:bg-green-100">{`<Link to="/page">`}</button>
                            <button className="px-4 py-3 text-left rounded-lg border hover:bg-red-100">{`<Go url="/page">`}</button>
                        </div>
                    </div>
                </div>
            }

            challenge={
                <div>
                    <h4 className="font-bold text-xl mb-2 text-yellow-400">Mission: The Profile Page</h4>
                    <p className="mb-4">
                        1. Add a Link to `/profile`.<br />
                        2. Create a `Profile` component that says "User Profile".<br />
                        3. Add a Route for `/profile` connecting to your component.
                    </p>
                </div>
            }
        />
    );
}
