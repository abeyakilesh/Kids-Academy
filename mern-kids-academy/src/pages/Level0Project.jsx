import { useState } from 'react';
import { User, Plus, Trash, GraduationCap } from 'lucide-react';
import LessonLayout from '../components/LessonLayout';
import CodeEditor from '../components/CodeEditor';

export default function Level0Project() {
    const [students, setStudents] = useState([
        { name: "Alice", score: 90 },
        { name: "Bob", score: 85 }
    ]);

    return (
        <LessonLayout
            title="Project: Student Manager"

            explanation={
                <div className="space-y-4">
                    <p>
                        Welcome to your first <strong>Real Project</strong>!
                    </p>
                    <p>
                        You have been hired to build a system to manage students for a school.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                        <h4 className="font-bold text-blue-800 mb-2">Requirements:</h4>
                        <ul className="list-disc pl-6 space-y-1 text-slate-700">
                            <li>Create a variable to hold the list of students.</li>
                            <li>Write a function <code>addStudent(name)</code>.</li>
                            <li>Write a function <code>removeStudent(name)</code>.</li>
                        </ul>
                    </div>
                </div>
            }

            visual={
                <div className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                        <h3 className="font-bold text-xl flex items-center gap-2">
                            <GraduationCap className="text-blue-500" />
                            Classroom Roster
                        </h3>
                        <div className="text-sm text-slate-400 font-mono">
                            Total: {students.length}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {students.map((s, i) => (
                            <div key={i} className="flex flex-col items-center p-4 bg-slate-50 rounded-xl border border-slate-100 relative group">
                                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-2 text-indigo-600">
                                    <User size={24} />
                                </div>
                                <div className="font-bold text-slate-700">{s.name}</div>
                                <div className="text-xs text-slate-500">Score: {s.score}</div>
                            </div>
                        ))}
                        {students.length === 0 && <div className="col-span-3 text-center text-slate-400 py-8">No students yet...</div>}
                    </div>
                </div>
            }

            initialCode={`// 1. Array of students
let students = ["Alice", "Bob"];

// 2. Function to add student
function addStudent(name) {
  students.push(name);
  console.log("Added " + name);
}

// 3. Test your code
addStudent("Charlie");
console.log("Class List:", students);
`}

            quiz={
                <div className="space-y-4">
                    <div className="p-4 border rounded-xl hover:bg-slate-50 cursor-pointer transition-colors">
                        <div className="font-bold mb-2">Which array method adds an item to the end?</div>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="px-4 py-2 rounded-lg border hover:bg-red-100">pop()</button>
                            <button className="px-4 py-2 rounded-lg border hover:bg-green-100">push()</button>
                            <button className="px-4 py-2 rounded-lg border hover:bg-red-100">map()</button>
                            <button className="px-4 py-2 rounded-lg border hover:bg-red-100">filter()</button>
                        </div>
                    </div>
                </div>
            }

            challenge={
                <div>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 border-4 border-white shadow-lg">
                            <CheckCircle size={32} />
                        </div>
                        <div>
                            <h4 className="font-bold text-2xl text-slate-800">Level 0 Complete!</h4>
                            <p className="text-slate-600">You've mastered the Web & JavaScript Foundations.</p>
                        </div>
                    </div>

                    <div className="bg-slate-800 rounded-2xl p-6 text-left">
                        <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Your New Skills</div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-2 text-green-400"><CheckCircle size={16} /> HTTP Requests</div>
                            <div className="flex items-center gap-2 text-green-400"><CheckCircle size={16} /> Client/Server Model</div>
                            <div className="flex items-center gap-2 text-green-400"><CheckCircle size={16} /> Data Types & Variables</div>
                            <div className="flex items-center gap-2 text-green-400"><CheckCircle size={16} /> Function Logic</div>
                            <div className="flex items-center gap-2 text-green-400"><CheckCircle size={16} /> Arrays & Objects</div>
                            <div className="flex items-center gap-2 text-green-400"><CheckCircle size={16} /> DOM Concepts</div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <p className="text-lg text-slate-600 mb-4">You are ready for Level 1.</p>
                        <button className="bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 active:scale-95 transition-all">
                            Start Level 1: Backend Engineering
                        </button>
                    </div>
                </div>
            }
        />
    );
}

// Temporary shim for importing CheckCircle
import { CheckCircle } from 'lucide-react';
