import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FormInput, ArrowLeftRight, Check, X, ShieldAlert } from 'lucide-react';
import LessonLayout from '../components/LessonLayout';

const FormVisual = () => {
    const [text, setText] = useState("");

    return (
        <div className="flex flex-col items-center w-full max-w-2xl gap-8">
            <div className="flex items-center gap-8 w-full justify-center">

                {/* The Input (UI) */}
                <div className="flex flex-col items-center gap-2">
                    <div className="text-xs font-bold uppercase text-slate-400">The Input (UI)</div>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Type here..."
                        className="border-2 border-slate-300 rounded-lg p-3 text-xl w-48 text-center focus:border-purple-500 focus:outline-none"
                    />
                </div>

                {/* The Sync Arrows */}
                <div className="flex flex-col items-center text-purple-500">
                    <motion.div animate={{ opacity: text ? 1 : 0.5 }}>
                        <ArrowLeftRight size={32} />
                    </motion.div>
                    <span className="text-xs font-bold">In Sync</span>
                </div>

                {/* The State (Memory) */}
                <div className="flex flex-col items-center gap-2">
                    <div className="text-xs font-bold uppercase text-slate-400">React State</div>
                    <div className="bg-slate-800 text-purple-400 font-mono text-xl p-3 rounded-lg w-48 text-center min-h-[56px] flex items-center justify-center border-2 border-slate-700 shadow-xl">
                        "{text}"
                    </div>
                </div>
            </div>

            {/* Real-time Validation Visual */}
            <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 w-full max-w-md">
                <h4 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <ShieldAlert size={18} className="text-purple-600" /> Real-time Validation
                </h4>

                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">At least 3 characters</span>
                        {text.length >= 3 ? <Check size={20} className="text-green-500" /> : <X size={20} className="text-red-400" />}
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">No spaces</span>
                        {!text.includes(" ") && text.length > 0 ? <Check size={20} className="text-green-500" /> : <X size={20} className="text-slate-300" />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Module35() {
    return (
        <LessonLayout
            title="Forms & Inputs"

            explanation={
                <div className="space-y-4">
                    <p>
                        In vanilla HTML, the DOM remembers what you typed. In React, <strong>React State</strong> should remember.
                    </p>
                    <p>
                        We call this a <strong>Controlled Component</strong>.
                    </p>
                    <div className="bg-slate-100 p-4 rounded-xl border border-slate-200">
                        <ul className="text-sm space-y-2">
                            <li>1. <strong>Value comes from State</strong>: <code>value={'{name}'}</code></li>
                            <li>2. <strong>Change updates State</strong>: <code>onChange={'{e => setName(e.target.value)}'}</code></li>
                        </ul>
                    </div>
                </div>
            }

            visual={<FormVisual />}

            initialCode={`import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault(); // Stop page reload!
    alert(\`Login: \${email}\`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 20 }}>
      <h3>Login</h3>
      
      <div>
        <label>Email: </label>
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>

      <div style={{ marginTop: 10 }}>
        <label>Password: </label>
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>

      <button type="submit" style={{ marginTop: 20 }}>
        Sign In
      </button>
    </form>
  );
}
`}

            quiz={
                <div className="space-y-4">
                    <div className="p-4 border rounded-xl hover:bg-slate-50 cursor-pointer transition-colors">
                        <div className="font-bold mb-2">Why do we use 'Controlled Components'?</div>
                        <div className="grid grid-cols-1 gap-2">
                            <button className="px-4 py-3 text-left rounded-lg border hover:bg-green-100">So we can validate and modify input as the user types.</button>
                            <button className="px-4 py-3 text-left rounded-lg border hover:bg-red-100">Because HTML forms are broken.</button>
                            <button className="px-4 py-3 text-left rounded-lg border hover:bg-red-100">To make the typing slower.</button>
                        </div>
                    </div>
                </div>
            }

            challenge={
                <div>
                    <h4 className="font-bold text-xl mb-2 text-yellow-400">Mission: The Shout Box</h4>
                    <p className="mb-4">
                        1. Create an input controlled by state `message`.<br />
                        2. As the user types, force the input to be <strong>UPPERCASE</strong>.<br />
                        3. Hint: Use `.toUpperCase()` inside the `onChange`.
                    </p>
                </div>
            }
        />
    );
}
