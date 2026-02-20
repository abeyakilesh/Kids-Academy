import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Search, Filter, Archive } from 'lucide-react';
import LessonLayout from '../components/LessonLayout';

const DBVisual = () => {
    const [query, setQuery] = useState('{}');
    const [docs, setDocs] = useState([
        { _id: 1, name: "Alice", role: "admin", color: "blue" },
        { _id: 2, name: "Bob", role: "user", color: "green" },
        { _id: 3, name: "Charlie", role: "user", color: "green" },
        { _id: 4, name: "Dave", role: "guest", color: "gray" },
    ]);
    const [highlighted, setHighlighted] = useState([]);

    const runQuery = (q) => {
        setQuery(q);
        try {
            // Simple mock query parser
            if (q === '{}') {
                setHighlighted([1, 2, 3, 4]);
            } else if (q.includes('admin')) {
                setHighlighted([1]);
            } else if (q.includes('user')) {
                setHighlighted([2, 3]);
            } else if (q.includes('guest')) {
                setHighlighted([4]);
            } else {
                setHighlighted([]);
            }
        } catch (e) {
            setHighlighted([]);
        }
    };

    useEffect(() => {
        runQuery('{}');
    }, []);

    return (
        <div className="flex flex-col items-center w-full max-w-2xl gap-8">
            {/* Query Bar */}
            <div className="flex gap-4 w-full bg-slate-800 p-4 rounded-xl items-center">
                <div className="text-green-400 font-mono font-bold">db.users.find(</div>
                <div className="flex-1 flex gap-2">
                    <button onClick={() => runQuery('{}')} className={`text-xs px-2 py-1 rounded border ${query === '{}' ? 'bg-slate-600 border-white text-white' : 'border-slate-600 text-slate-400'}`}>
                        {"{}"}
                    </button>
                    <button onClick={() => runQuery('{ role: "admin" }')} className={`text-xs px-2 py-1 rounded border ${query.includes('admin') ? 'bg-slate-600 border-white text-white' : 'border-slate-600 text-slate-400'}`}>
                        {'{ role: "admin" }'}
                    </button>
                    <button onClick={() => runQuery('{ role: "user" }')} className={`text-xs px-2 py-1 rounded border ${query.includes('user') ? 'bg-slate-600 border-white text-white' : 'border-slate-600 text-slate-400'}`}>
                        {'{ role: "user" }'}
                    </button>
                </div>
                <div className="text-green-400 font-mono font-bold">)</div>
                <button className="bg-green-600 hover:bg-green-500 text-white p-2 rounded-lg">
                    <Search size={16} />
                </button>
            </div>

            {/* Collection View */}
            <div className="grid grid-cols-2 gap-4 w-full">
                <AnimatePresence>
                    {docs.map(doc => {
                        const isMatch = highlighted.includes(doc._id);
                        return (
                            <motion.div
                                key={doc._id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                    opacity: isMatch ? 1 : 0.3,
                                    scale: isMatch ? 1 : 0.9,
                                    borderColor: isMatch ? '#10b981' : '#e2e8f0'
                                }}
                                className={`p-4 rounded-xl border-2 bg-white flex flex-col gap-2 shadow-sm transition-all`}
                            >
                                <div className="flex justify-between items-center text-xs text-slate-400 font-mono">
                                    <span>_id: {doc._id}</span>
                                    <Archive size={14} />
                                </div>
                                <div className="font-bold text-slate-700">{doc.name}</div>
                                <div className={`self-start text-xs text-white px-2 py-1 rounded-full bg-${doc.color}-500 opacity-80`}>
                                    {doc.role}
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            <div className="text-slate-500 text-sm">
                Found {highlighted.length} documents.
            </div>
        </div>
    );
};

export default function Module21() {
    return (
        <LessonLayout
            title="MongoDB CRUD"

            explanation={
                <div className="space-y-4">
                    <p>
                        <strong>MongoDB</strong> stores data in <strong>Documents</strong> (which look like JSON objects).
                    </p>
                    <p>
                        Documents live inside <strong>Collections</strong> (like folders).
                    </p>
                    <p>
                        To get data, we use <strong>Queries</strong>. The most common one is <code>find()</code>.
                    </p>
                </div>
            }

            visual={<DBVisual />}

            initialCode={`// 1. Find all users who are admins
db.users.find({ role: "admin" });

// 2. Find a specific user by name
db.users.findOne({ name: "Alice" });

// 3. Insert a new user
db.users.insertOne({
  name: "Eve",
  role: "guest"
});
`}

            quiz={
                <div className="space-y-4">
                    <div className="p-4 border rounded-xl hover:bg-slate-50 cursor-pointer transition-colors">
                        <div className="font-bold mb-2">What format does MongoDB use to store data?</div>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="px-4 py-2 rounded-lg border hover:bg-green-100">BSON (Binary JSON)</button>
                            <button className="px-4 py-2 rounded-lg border hover:bg-red-100">Tables & Rows</button>
                        </div>
                    </div>
                </div>
            }

            challenge={
                <div>
                    <h4 className="font-bold text-xl mb-2 text-yellow-400">Mission: The Query Master</h4>
                    <p className="mb-4">
                        1. Write a query to find all users with <code>age: 10</code>.<br />
                        2. Write a query to find users with <code>score</code> greater than 50 (hint: use <code>$gt</code>).
                    </p>
                </div>
            }
        />
    );
}
