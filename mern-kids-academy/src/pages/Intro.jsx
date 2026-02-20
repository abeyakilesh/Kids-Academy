import { motion } from 'framer-motion';
import { ArrowRight, Paintbrush, Truck, Archive } from 'lucide-react';
import GuideBot from '../components/GuideBot';

const Card = ({ title, icon: Icon, color, role, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className={`bg-white p-6 rounded-2xl shadow-sm border-2 ${color.border} flex flex-col items-center w-64`}
    >
        <div className={`p-4 rounded-full mb-4 bg-opacity-10 bg-current ${color.text}`}>
            <Icon size={40} />
        </div>
        <h3 className={`font-bold text-xl mb-1 ${color.text}`}>{title}</h3>
        <div className="bg-slate-100 px-3 py-1 rounded-full text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
            {role}
        </div>
    </motion.div>
);

export default function Intro() {
    return (
        <div className="space-y-12 relative">
            <div className="text-center space-y-4">
                <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">
                    The <span className="text-blue-600">Dream Team</span>
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    Building a website is like running a restaurant. You need different people to do different jobs!
                </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-8">
                <Card
                    title="React"
                    role="The Artist"
                    icon={Paintbrush}
                    color={{ border: 'border-blue-200', text: 'text-blue-600' }}
                    delay={0.2}
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-slate-300"
                >
                    <ArrowRight size={32} />
                </motion.div>

                <Card
                    title="Node"
                    role="The Messenger"
                    icon={Truck}
                    color={{ border: 'border-green-200', text: 'text-green-600' }}
                    delay={0.4}
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 }}
                    className="text-slate-300"
                >
                    <ArrowRight size={32} />
                </motion.div>

                <Card
                    title="MongoDB"
                    role="The Vault"
                    icon={Archive}
                    color={{ border: 'border-emerald-200', text: 'text-emerald-600' }}
                    delay={0.6}
                />
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-slate-100 shadow-sm max-w-3xl mx-auto">
                <h3 className="font-bold text-slate-800 text-xl mb-4 text-center">How they work together</h3>
                <div className="space-y-4 text-lg text-slate-600">
                    <p>
                        <strong className="text-blue-600">1. The Artist (React)</strong> paints the screen so you can see the Hero Card.
                    </p>
                    <p>
                        <strong className="text-green-600">2. The Messenger (Node)</strong> takes the card from the Artist and runs on a bike to the Vault.
                    </p>
                    <p>
                        <strong className="text-emerald-600">3. The Vault (MongoDB)</strong> opens up and keeps the card safe forever.
                    </p>
                </div>
            </div>

            <GuideBot message="Hi! I'm Robo. I'll help you understand who does what in our Dream Team!" />
        </div>
    );
}
