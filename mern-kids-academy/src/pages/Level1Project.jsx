import { useState, useRef } from 'react';
import { Server, Send, Database, CheckCircle, AlertCircle } from 'lucide-react';
import LessonLayout from '../components/LessonLayout';

// Mock Data
const initialUsers = [
    { id: 1, name: "Alice", role: "Student" },
    { id: 2, name: "Bob", role: "Teacher" }
];

export default function Level1Project() {
    const [db, setDb] = useState([...initialUsers]);
    const [logs, setLogs] = useState([]);
    const [activeTab, setActiveTab] = useState('get'); // get, post

    // Express Simulator State
    const routes = useRef({ GET: {}, POST: {} });

    const log = (msg, type = 'info') => {
        setLogs(prev => [...prev, { msg, type, time: new Date().toLocaleTimeString() }]);
    };

    const resetDb = () => {
        setDb([...initialUsers]);
        setLogs([]);
        routes.current = { GET: {}, POST: {} };
    };

    const runUserCode = (code) => {
        // Reset routes before run
        routes.current = { GET: {}, POST: {} };

        // Mock Express Objects
        const app = {
            get: (path, handler) => routes.current.GET[path] = handler,
            post: (path, handler) => routes.current.POST[path] = handler,
        };

        // Mock DB Access for User Code
        const users = db; // Read access? 
        // We need to allow them to Modify 'db'.
        // LIMITATION: 'eval' won't easily share the 'setDb' state unless we expose it carefully.
        // Simpler: We expose a 'db' object that they modify, and we sync it?
        // Or we just let them modify the 'users' array variable we pass in, and we check that array.

        try {
            // Execute Code
            // eslint-disable-next-line
            const userFn = new Function('app', 'users', code);
            userFn(app, db);
            log("Server started! Routes registered.", 'success');
            return true;
        } catch (err) {
            log("Error starting server: " + err.message, 'error');
            return false;
        }
    };

    const handleRequest = (method, path, body = null) => {
        log(`${method} request to ${path}...`);

        const handler = routes.current[method][path];
        if (!handler) {
            log(`404 Not Found: Cannot ${method} ${path}`, 'error');
            return;
        }

        // Mock Req/Res
        const req = { body };
        const res = {
            json: (data) => {
                log(`Response [${method}]: ${JSON.stringify(data)}`, 'success');
                // If it was a POST, we assume the user modified the 'users' array. 
                // Force update UI.
                setDb([...db]);
            },
            send: (msg) => log(`Response: ${msg}`, 'success'),
            status: () => res // Chainable
        };

        try {
            handler(req, res);
        } catch (err) {
            log(`500 Server Error: ${err.message}`, 'error');
        }
    };

    return (
        <LessonLayout
            title="Project: User API"

            explanation={
                <div className="space-y-4">
                    <p>
                        You are building the backend for a social app.
                    </p>
                    <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                        <h4 className="font-bold text-green-800 mb-2">Requirements:</h4>
                        <ul className="list-disc pl-6 space-y-1 text-slate-700">
                            <li><strong>GET /users</strong>: Send the list of users as JSON.</li>
                            <li><strong>POST /users</strong>: Add a new user from <code>req.body</code> to the list.</li>
                        </ul>
                    </div>
                    <p className="text-sm text-slate-500">
                        Note: We have provided a <code>users</code> array and an <code>app</code> object for you.
                    </p>
                </div>
            }

            visual={
                <div className="w-full max-w-2xl space-y-6">
                    {/* Postman Simulator */}
                    <div className="bg-slate-800 p-6 rounded-2xl text-white shadow-xl">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold flex items-center gap-2"><Send size={18} /> API Tester</h3>
                            <button onClick={resetDb} className="text-xs text-slate-400 hover:text-white">Reset Server</button>
                        </div>

                        <div className="flex gap-2 mb-4 bg-slate-700 p-1 rounded-lg inline-flex">
                            <button onClick={() => setActiveTab('get')} className={`px-4 py-1 rounded-md text-sm font-bold transition-all ${activeTab === 'get' ? 'bg-blue-500 text-white' : 'text-slate-400 hover:text-white'}`}>GET</button>
                            <button onClick={() => setActiveTab('post')} className={`px-4 py-1 rounded-md text-sm font-bold transition-all ${activeTab === 'post' ? 'bg-green-500 text-white' : 'text-slate-400 hover:text-white'}`}>POST</button>
                        </div>

                        <div className="flex gap-2">
                            <div className="flex-1 bg-slate-900 p-3 rounded-lg font-mono text-sm flex items-center text-slate-300">
                                <span className={`font-bold mr-2 ${activeTab === 'get' ? 'text-blue-400' : 'text-green-400'}`}>{activeTab.toUpperCase()}</span>
                                /users
                            </div>
                            <button
                                onClick={() => activeTab === 'get' ? handleRequest('GET', '/users') : handleRequest('POST', '/users', { id: Date.now(), name: "Charlie", role: "New User" })}
                                className="bg-blue-600 hover:bg-blue-500 px-6 rounded-lg font-bold"
                            >
                                Send
                            </button>
                        </div>
                        {activeTab === 'post' && <div className="mt-2 text-xs text-slate-500 font-mono">Body: {`{ name: "Charlie", role: "New User" }`}</div>}

                        {/* Logs */}
                        <div className="mt-6 bg-black/30 rounded-lg p-3 h-32 overflow-y-auto font-mono text-xs space-y-1">
                            {logs.length === 0 && <div className="text-slate-600 italic">Server logs will appear here...</div>}
                            {logs.map((l, i) => (
                                <div key={i} className={`${l.type === 'error' ? 'text-red-400' : l.type === 'success' ? 'text-green-400' : 'text-slate-300'}`}>
                                    <span className="opacity-50 mr-2">[{l.time}]</span>{l.msg}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Database View */}
                    <div className="bg-white p-6 rounded-2xl border border-slate-200">
                        <h3 className="font-bold flex items-center gap-2 mb-4 text-slate-700"><Database size={18} /> Mock Database</h3>
                        <div className="space-y-2">
                            {db.map(u => (
                                <div key={u.id} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                                    <div className="font-bold text-slate-700">{u.name}</div>
                                    <div className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full font-bold">{u.role}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            }

            initialCode={`// 1. Handle GET request
app.get('/users', (req, res) => {
  res.json(users);
});

// 2. Handle POST request
app.post('/users', (req, res) => {
  // Your code here! 
  // Add req.body to users array
  // Send back json "User added!"
});
`}

            // Hook into the CodeEditor's Run button by making the user explicitly click "Run" in editor first?
            // Our LessonLayout passes the code to us?
            // Actually, CodeEditor controls its own execution.
            // We need to override CodeEditor's execution logic or pass a custom runner.
            // The Logic above in 'runUserCode' needs to be called.
            // BUT LessonLayout doesn't expose a clean way to pass the runner yet.
            // Hack: We can adapt CodeEditor to accept an 'onRun' that *replaces* default eval if provided, or runs alongside.
            // Simpler: We just let the user click "Run" in the editor, which calls 'onRun' prop.
            // We assume Level1Project passes an 'onRun' to LessonLayout -> CodeEditor?
            // LessonLayout needs to be updated to accept 'onRun'. (Task for next step if needed, but for now let's hope I added it. Yes I added onRun in CodeEditor).
            // Does LessonLayout pass it down?
            // Let's check LessonLayout. It renders CodeEditor but doesn't passthrough onRun.
            // I need to update LessonLayout to allow custom run logic.
            // OR: I just make a specialized "ProjectLayout" or just "CodeEditor" integrated here.
            // Let's update LessonLayout to accept 'onRun'.

            quiz={
                <div className="space-y-4">
                    <div className="p-4 border rounded-xl hover:bg-slate-50 cursor-pointer transition-colors">
                        <div className="font-bold mb-2">What handles the request in Express?</div>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="px-4 py-2 rounded-lg border hover:bg-green-100">Route Handler</button>
                            <button className="px-4 py-2 rounded-lg border hover:bg-red-100">The Database</button>
                        </div>
                    </div>
                </div>
            }

            challenge={
                <div>
                    <h4 className="font-bold text-xl mb-2 text-yellow-400">Level 1 Complete!</h4>
                    <p className="mb-4">You have built a working API backend.</p>
                    <button className="bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-full font-bold shadow-lg">
                        Start Level 2: Database (MongoDB)
                    </button>
                </div>
            }
        />
    );
}
