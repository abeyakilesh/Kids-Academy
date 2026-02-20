import Editor from '@monaco-editor/react';
import { Play, RotateCcw, Eye } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function CodeEditor({ initialCode, language = "javascript", onRun, readOnly = false, htmlContext = "" }) {
    const [code, setCode] = useState(initialCode);
    const [output, setOutput] = useState(null);
    const [error, setError] = useState(null);
    const [htmlPreview, setHtmlPreview] = useState(null);

    // Reset code when initialCode changes (e.g. switching lessons)
    useEffect(() => {
        setCode(initialCode);
        setHtmlPreview(null);
        setOutput(null);
        setError(null);
    }, [initialCode]);

    const handleRun = () => {
        setError(null);
        setOutput(null);

        if (language === 'html') {
            // HTML Mode: Render to iframe
            setHtmlPreview(code);
            return;
        }

        if (language === 'css') {
            // CSS Mode: Inject CSS into HTML Context
            // Use provided context or a default structure if none is provided
            const context = htmlContext || `
                <div style="padding: 20px; font-family: sans-serif; text-align: center;">
                    <h1>CSS Preview</h1>
                    <p>This is a paragraph.</p>
                    <button style="padding: 8px 16px; margin-top: 10px;">A Button</button>
                    <div class="box" style="border: 1px solid #ccc; margin-top: 20px; padding: 10px;">A Div Box</div>
                </div>
            `;
            const combined = `
                ${context}
                <style>
                    ${code}
                </style>
            `;
            setHtmlPreview(combined);
            return;
        }

        try {
            // Basic JS execution (sandbox for demo)
            let logs = [];
            const originalConsoleLog = console.log;
            console.log = (...args) => logs.push(args.join(' '));

            // eslint-disable-next-line no-eval
            const result = eval(code);

            console.log = originalConsoleLog;

            if (logs.length > 0) {
                setOutput(logs.join('\n'));
            } else if (result !== undefined) {
                setOutput(String(result));
            } else {
                setOutput("Code ran successfully (no output)");
            }

            if (onRun) onRun(code, logs.join('\n') || String(result));

        } catch (err) {
            setError(err.toString());
        }
    };

    // Helper for title/color config
    const getModeConfig = () => {
        switch (language) {
            case 'html': return { title: 'HTML Playground', color: 'bg-orange-500', icon: <Eye size={14} /> };
            case 'css': return { title: 'CSS Designer', color: 'bg-blue-500', icon: <Eye size={14} /> };
            default: return { title: 'JS Playground', color: 'bg-yellow-500', icon: <Play size={14} fill="currentColor" /> };
        }
    };

    const config = getModeConfig();
    const isWebMode = language === 'html' || language === 'css';

    return (
        <div className="flex flex-col h-full border-2 border-slate-200 rounded-xl overflow-hidden bg-[#1e1e1e] shadow-2xl">
            {/* Toolbar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-[#333]">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${config.color}`}></div>
                    {config.title}
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => {
                            setCode(initialCode);
                            setHtmlPreview(null);
                            setOutput(null);
                        }}
                        className="p-2 hover:bg-[#333] rounded text-slate-400 transition-colors"
                        title="Reset Code"
                    >
                        <RotateCcw size={16} />
                    </button>
                    <button
                        onClick={handleRun}
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-xs font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-green-900/20"
                    >
                        {config.icon}
                        {isWebMode ? 'Render Preview' : 'Run Code'}
                    </button>
                </div>
            </div>

            {/* Editor Area */}
            <div className={`flex ${isWebMode ? 'flex-col md:flex-row' : 'flex-col'} flex-1 min-h-[400px]`}>
                {/* Code Input */}
                <div className={`flex-1 ${isWebMode ? 'border-r border-[#333]' : ''}`}>
                    <Editor
                        height="100%"
                        defaultLanguage={language}
                        language={language}
                        value={code}
                        onChange={(value) => setCode(value)}
                        theme="vs-dark"
                        options={{
                            minimap: { enabled: false },
                            fontSize: 14,
                            padding: { top: 16 },
                            scrollBeyondLastLine: false,
                            readOnly: readOnly,
                            wordWrap: 'on'
                        }}
                    />
                </div>

                {/* Output Area (Console for JS, Iframe for HTML/CSS) */}
                {isWebMode ? (
                    <div className="flex-1 bg-white relative">
                        {htmlPreview ? (
                            <iframe
                                title="preview"
                                srcDoc={htmlPreview}
                                className="w-full h-full border-none"
                                sandbox="allow-scripts"
                            />
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full text-slate-400 gap-2">
                                <Eye size={32} />
                                <span className="text-sm font-medium">Click "Render Preview" to see your styles</span>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="h-[150px] bg-[#1e1e1e] border-t border-[#333] p-4 overflow-y-auto font-mono text-sm">
                        <div className="text-xs font-bold text-slate-500 uppercase mb-2">Console Output</div>
                        {error ? (
                            <div className="text-red-400">{error}</div>
                        ) : (
                            <div className="text-slate-300 whitespace-pre-wrap">{output || <span className="text-slate-600 italic">Ready to run...</span>}</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
