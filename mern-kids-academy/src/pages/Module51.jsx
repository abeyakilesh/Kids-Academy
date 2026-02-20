import { Cloud, CheckSquare, Globe, ArrowRight } from 'lucide-react';
import LessonLayout from '../components/LessonLayout';
import GuideBot from '../components/GuideBot';

const DeploymentChecklist = () => {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-xl mb-4 flex items-center gap-2"><CheckSquare className="text-green-500" /> Pre-Flight Checklist</h3>
            <ul className="space-y-3">
                <li className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 accent-green-500" />
                    <span className="text-slate-700">Removed <code>console.log</code> debugging</span>
                </li>
                <li className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 accent-green-500" />
                    <span className="text-slate-700">Environment Variables Configured (<code>.env</code>)</span>
                </li>
                <li className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 accent-green-500" />
                    <span className="text-slate-700">Database IP Whitelist (Atlas)</span>
                </li>
                <li className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 accent-green-500" />
                    <span className="text-slate-700">Build Command <code>npm run build</code> works locally</span>
                </li>
            </ul>
        </div>
    )
}

export default function Module51() {
    return (
        <LessonLayout
            title="Deployment Guide"

            explanation={
                <div className="space-y-6">
                    <p>
                        You've built your app. Now let's share it with the world!
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-black text-white p-6 rounded-xl flex flex-col items-center text-center">
                            <div className="font-bold text-xl mb-2">Frontend</div>
                            <div className="text-3xl font-extrabold mb-4">Vercel</div>
                            <p className="text-sm opacity-70">Best for React/Next.js. Just connect your GitHub!</p>
                        </div>
                        <div className="bg-white border-2 border-black text-black p-6 rounded-xl flex flex-col items-center text-center">
                            <div className="font-bold text-xl mb-2">Backend</div>
                            <div className="text-3xl font-extrabold mb-4">Render</div>
                            <p className="text-sm opacity-70">Best for Node.js Express servers.</p>
                        </div>
                        <div className="bg-green-100 text-green-800 p-6 rounded-xl flex flex-col items-center text-center">
                            <div className="font-bold text-xl mb-2">Database</div>
                            <div className="text-3xl font-extrabold mb-4">Atlas</div>
                            <p className="text-sm opacity-70">MongoDB in the cloud. Free tier is great.</p>
                        </div>
                    </div>
                </div>
            }

            visual={<DeploymentChecklist />}

            initialCode={`// ecosystem.config.js (PM2 Example)
module.exports = {
  apps : [{
    name   : "mern-api",
    script : "./server.js",
    env: {
      NODE_ENV: "production",
      PORT: 3000
    }
  }]
}`}

            quiz={
                <div className="space-y-4">
                    <div className="p-4 border rounded-xl hover:bg-slate-50 cursor-pointer transition-colors">
                        <div className="font-bold mb-2">Where does the React code (Frontend) live?</div>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="px-4 py-2 rounded-lg border hover:bg-green-100">User's Browser</button>
                            <button className="px-4 py-2 rounded-lg border hover:bg-red-100">The Server Only</button>
                        </div>
                    </div>
                </div>
            }

            challenge={
                <div className="text-center">
                    <Cloud size={64} className="text-blue-500 mx-auto mb-4" />
                    <h4 className="font-bold text-2xl mb-2 text-slate-800">You are a Pro Developer!</h4>
                    <p className="text-slate-600 mb-6">
                        You have completed the MERN Kids Academy concepts track.
                    </p>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-xl shadow-xl hover:scale-105 transition-transform">
                        Claim Certificate
                    </button>
                </div>
            }
        />
    );
}
