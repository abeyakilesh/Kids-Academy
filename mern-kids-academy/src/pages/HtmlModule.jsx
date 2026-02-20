import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LessonLayout from '../components/LessonLayout';
import { htmlCourseData } from '../data/htmlCourseData';
import { curriculum } from '../data/curriculum'; // Need curriculum to find lesson structure
import { CheckCircle, Circle, ArrowRight } from 'lucide-react';

export default function HtmlModule() {
    const { moduleId } = useParams(); // Can be "html.1" (Module) or "html.1.1" (Lesson)
    const navigate = useNavigate();

    // 1. Resolve the correct Data and Scope
    let currentLessonId = moduleId;
    let currentModule = null;

    // Helper: Find the module that contains this lesson (or IS this module)
    // We search the 'html' track in curriculum
    const htmlTrack = curriculum.find(c => c.id === 'html');

    if (htmlTrack) {
        // Try to find if 'moduleId' is a Module ID
        const matchModule = htmlTrack.modules.find(m => m.id === moduleId);
        if (matchModule) {
            // It IS a module ID (e.g. html.1), so default to first lesson
            if (matchModule.lessons.length > 0) {
                currentLessonId = matchModule.lessons[0].id;
                currentModule = matchModule;
            }
        } else {
            // It might be a Lesson ID, find which module it belongs to
            currentModule = htmlTrack.modules.find(m => m.lessons.some(l => l.id === moduleId));
        }
    }

    const data = htmlCourseData[currentLessonId];

    // Redirect if it was a module ID link, so URL reflects the lesson
    useEffect(() => {
        if (moduleId !== currentLessonId && data) {
            navigate(`/modules/html/${currentLessonId}`, { replace: true });
        }
    }, [moduleId, currentLessonId, navigate, data]);

    if (!data || !currentModule) {
        return (
            <div className="p-8 text-center">
                <h2 className="text-2xl font-bold text-slate-800">Module Not Found</h2>
                <p className="text-slate-500">Could not find content for ID: {moduleId}</p>
                <button onClick={() => navigate('/modules/0')} className="mt-4 text-blue-600 hover:underline">Back to Foundations</button>
            </div>
        );
    }

    // Convert HTML string in explanation to JSX-like render
    const renderExplanation = () => (
        <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: data.explanation }} />
        </div>
    );

    const renderQuiz = () => (
        <div className="space-y-4">
            <h3 className="font-bold text-lg">{data.quiz.question}</h3>
            <div className="space-y-2">
                {data.quiz.options.map((option, idx) => (
                    <button
                        key={idx}
                        className="block w-full text-left p-4 rounded-xl border-2 border-slate-100 hover:border-blue-500 hover:bg-blue-50 transition-all font-medium text-slate-700"
                        onClick={(e) => {
                            if (idx === data.quiz.answer) {
                                e.currentTarget.classList.add('bg-green-100', 'border-green-500');
                                e.currentTarget.innerText = option + " ✅ Correct!";
                            } else {
                                e.currentTarget.classList.add('bg-red-100', 'border-red-500');
                                e.currentTarget.innerText = option + " ❌ Try again";
                            }
                        }}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );

    // Sidebar Content Logic
    const renderSidebar = () => (
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm mb-8">
            <h3 className="font-bold text-slate-400 uppercase text-xs tracking-wider mb-4 border-b border-slate-100 pb-2">
                {currentModule.title}
            </h3>
            <div className="space-y-1">
                {currentModule.lessons.map(lesson => {
                    const isActive = lesson.id === currentLessonId;
                    return (
                        <button
                            key={lesson.id}
                            onClick={() => navigate(`/modules/html/${lesson.id}`)}
                            className={`w-full flex items-center gap-3 p-2 rounded-lg text-sm font-medium transition-colors ${isActive
                                ? 'bg-blue-50 text-blue-700'
                                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                }`}
                        >
                            {isActive ? <CheckCircle size={16} /> : <Circle size={16} className="text-slate-300" />}
                            {lesson.title}
                        </button>
                    );
                })}
            </div>
        </div>
    );

    return (
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto p-6">
            {/* Sidebar for Desktop */}
            <aside className="lg:w-64 flex-shrink-0">
                {renderSidebar()}
            </aside>

            {/* Main Lesson Content */}
            <div className="flex-1 min-w-0">
                <LessonLayout
                    title={`${data.title}`}
                    // Prefix title could be added e.g. "1.1 What is HTML"
                    explanation={renderExplanation()}
                    visual={
                        <div className="bg-slate-900 p-6 rounded-2xl text-slate-300 font-mono text-sm leading-relaxed shadow-2xl overflow-x-auto">
                            <div className="flex gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <pre>{data.example}</pre>
                        </div>
                    }
                    initialCode={data.example}
                    language="html"
                    quiz={renderQuiz()}
                    challenge={
                        <div className="space-y-6">
                            {/* Beginner */}
                            <div className="bg-green-50 p-6 rounded-2xl border-2 border-green-200">
                                <h3 className="text-lg font-bold text-green-800 mb-2">🟢 Beginner</h3>
                                <p className="text-green-900">{data.exercises.beginner}</p>
                            </div>

                            {/* Intermediate */}
                            <div className="bg-blue-50 p-6 rounded-2xl border-2 border-blue-200">
                                <h3 className="text-lg font-bold text-blue-800 mb-2">🔵 Intermediate</h3>
                                <p className="text-blue-900">{data.exercises.intermediate}</p>
                            </div>

                            {/* Challenge */}
                            <div className="bg-purple-50 p-6 rounded-2xl border-2 border-purple-200">
                                <h3 className="text-lg font-bold text-purple-800 mb-2">🚀 Challenge</h3>
                                <p className="text-purple-900">{data.exercises.challenge}</p>
                            </div>
                        </div>
                    }
                />
            </div>
        </div>
    );
}
