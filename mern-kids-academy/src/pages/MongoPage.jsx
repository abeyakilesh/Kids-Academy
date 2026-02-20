import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Archive, Plus, Trash2 } from 'lucide-react';
import GuideBot from '../components/GuideBot';

const SecretBox = ({ data, onDelete }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        layout
        className="bg-emerald-900/50 p-4 rounded-xl border-2 border-emerald-500/30 text-emerald-100 relative group shadow-lg"
    >
        <div className="font-mono text-xs opacity-50 mb-1">ID: {data._id}</div>
        <div className="font-bold text-lg">{data.name}</div>
        <div className="text-sm opacity-80">{data.type} Hero</div>

        <button
            onClick={onDelete}
            className="absolute top-2 right-2 p-2 bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all"
        >
            <Trash2 size={16} />
        </button>
    </motion.div>
);

export default function MongoPage() {
    const [heroes, setHeroes] = useState([
        { _id: "88219", name: "Super Kid", type: "Earth" },
    ]);

    const addHero = () => {
        const newHero = {
            _id: Math.floor(Math.random() * 100000).toString(),
            name: ["Mega Mind", "Captain Code", "Pixel Girl", "Bug Buster"][Math.floor(Math.random() * 4)],
            type: ["Water", "Fire", "Air", "Cyber"][Math.floor(Math.random() * 4)]
        };
        setHeroes([...heroes, newHero]);
    };

    const deleteHero = (id) => {
        setHeroes(heroes.filter(h => h._id !== id));
    };

    return (
        <div className="space-y-12 pb-24">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-extrabold text-emerald-600 flex items-center justify-center gap-3">
                    <Archive size={40} />
                    MongoDB: The Vault
                </h1>
                <p className="text-xl text-slate-600">
                    The Messenger needs a safe place to put the heroes.
                    <br />He puts them in <strong>The Vault</strong>.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Concept */}
                <div className="space-y-8">
                    <section className="bg-white p-8 rounded-3xl border-2 border-slate-100 shadow-sm">
                        <h2 className="text-2xl font-bold mb-4 text-slate-800">Safe & Sound</h2>
                        <p className="text-lg text-slate-600 mb-6">
                            When we turn off the computer, the "Artist" forgets everything (because State is just temporary memory).
                        </p>
                        <p className="text-lg text-slate-600 mb-6">
                            But the <strong>Vault</strong> remembers forever! Even if the power goes out.
                        </p>
                    </section>
                </div>

                {/* Interactive DB */}
                <div className="bg-slate-900 p-8 rounded-3xl relative overflow-hidden flex flex-col min-h-[500px] border-4 border-slate-800 shadow-2xl">
                    <div className="flex justify-between items-center mb-6 z-10">
                        <div className="flex items-center gap-2 text-white">
                            <Archive size={24} className="text-emerald-400" />
                            <span className="font-bold text-xl tracking-tight">The Vault</span>
                        </div>
                        <button
                            onClick={addHero}
                            className="bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg hover:shadow-emerald-500/20 active:scale-95"
                        >
                            <Plus size={20} /> Store Hero
                        </button>
                    </div>

                    <div className="flex-1 bg-black/20 rounded-2xl p-4 overflow-y-auto space-y-3 z-10 border-inner shadow-inner">
                        <AnimatePresence>
                            {heroes.map(hero => (
                                <SecretBox key={hero._id} data={hero} onDelete={() => deleteHero(hero._id)} />
                            ))}
                        </AnimatePresence>
                        {heroes.length === 0 && (
                            <div className="text-center text-slate-600 py-20 italic">The vault is empty...</div>
                        )}
                    </div>
                </div>
            </div>

            <GuideBot message="Click 'Store Hero' to put a new hero into the Vault forever!" />
        </div>
    );
}
