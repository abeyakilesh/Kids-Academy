import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Box, GitBranch } from 'lucide-react';
import LessonLayout from '../components/LessonLayout';

// Recursive visualized component
const TreeNode = ({ name, color, depth = 0, childrenNodes = [] }) => {
    return (
        <div className="flex flex-col items-center">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className={`px-4 py-2 rounded-lg border-2 border-white shadow-lg text-white font-bold text-sm bg-${color}-500 mb-4 z-10 relative`}
            >
                {name}
            </motion.div>

            {childrenNodes.length > 0 && (
                <div className="flex gap-4 relative">
                    {/* Connector Lines */}
                    <div className="absolute top-0 left-1/2 -ml-0.5 w-0.5 h-4 bg-slate-300 -translate-y-full"></div>

                    {childrenNodes.map((child, i) => (
                        <div key={i} className="flex flex-col items-center relative">
                            <div className="w-0.5 h-4 bg-slate-300 mb-0"></div>
                            {/* Horizontal line connector logic is complex for simple CSS, simplifying visual */}
                            <TreeNode {...child} depth={depth + 1} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const ComponentVisual = () => {
    const [tree, setTree] = useState({
        name: 'App', color: 'blue', childrenNodes: []
    });

    const addComponent = () => {
        if (tree.childrenNodes.length < 3) {
            setTree({
                ...tree,
                childrenNodes: [...tree.childrenNodes, {
                    name: ['Header', 'Sidebar', 'Content'][tree.childrenNodes.length],
                    color: ['green', 'purple', 'orange'][tree.childrenNodes.length],
                    childrenNodes: []
                }]
            });
        }
    };

    return (
        <div className="flex flex-col items-center w-full max-w-2xl gap-8">
            <div className="flex justify-center items-start min-h-[300px] w-full bg-slate-50 p-6 rounded-2xl border border-slate-200 overflow-hidden">
                <TreeNode {...tree} />
            </div>

            <div className="flex gap-4">
                <button
                    onClick={addComponent}
                    disabled={tree.childrenNodes.length >= 3}
                    className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white px-6 py-3 rounded-xl font-bold shadow-lg"
                >
                    + Add Child Component
                </button>
                <button
                    onClick={() => setTree({ name: 'App', color: 'blue', childrenNodes: [] })}
                    className="border-2 border-slate-200 text-slate-500 px-6 py-3 rounded-xl font-bold hover:bg-slate-100"
                >
                    Reset Tree
                </button>
            </div>

            <p className="text-slate-500 text-sm">Build the Component Tree by adding children to the App.</p>
        </div>
    );
};

export default function Module31() {
    return (
        <LessonLayout
            title="React Components"

            explanation={
                <div className="space-y-4">
                    <p>
                        <strong>React</strong> lets us build websites using <strong>Components</strong>.
                    </p>
                    <p>
                        Think of Components like <strong>Lego Blocks</strong>.
                        You build small blocks (Button, Header) and put them together to make a big castle (Website).
                    </p>
                    <p>
                        Data flows <strong>DOWN</strong> the tree, like a waterfall. We call this data <strong>Props</strong>.
                    </p>
                </div>
            }

            visual={<ComponentVisual />}

            initialCode={`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Score: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Level Up!
      </button>
    </div>
  );
}
`}

            quiz={
                <div className="space-y-4">
                    <div className="p-4 border rounded-xl hover:bg-slate-50 cursor-pointer transition-colors">
                        <div className="font-bold mb-2">What handles "Memory" in a component?</div>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="px-4 py-2 rounded-lg border hover:bg-green-100">State (useState)</button>
                            <button className="px-4 py-2 rounded-lg border hover:bg-red-100">Props</button>
                        </div>
                    </div>
                </div>
            }

            challenge={
                <div>
                    <h4 className="font-bold text-xl mb-2 text-yellow-400">Mission: The Toggler</h4>
                    <p className="mb-4">
                        1. Create a state called <code>isVisible</code> set to <code>true</code>.<br />
                        2. Create a button that toggles `isVisible` between true/false.<br />
                        3. Use <code>{'{ isVisible && <div>Peekaboo!</div> }'}</code> to show/hide text.
                    </p>
                </div>
            }
        />
    );
}
