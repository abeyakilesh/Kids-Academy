import { Shield, Zap, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroCard({ name, power, level = 1, type = 'earth', highlight = false }) {
    const colors = {
        earth: 'bg-emerald-500',
        fire: 'bg-orange-500',
        water: 'bg-blue-500',
        air: 'bg-sky-400'
    };

    return (
        <motion.div
            layout
            whileHover={{ scale: 1.05 }}
            className={`w-64 rounded-2xl overflow-hidden shadow-lg bg-white border-4 ${highlight ? 'border-yellow-400 ring-4 ring-yellow-200' : 'border-slate-100'}`}
        >
            <div className={`h-32 ${colors[type] || colors.earth} flex items-center justify-center relative`}>
                <Shield size={64} className="text-white opacity-50" />
                <div className="absolute top-2 right-2 bg-black bg-opacity-20 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                    <Star size={12} fill="currentColor" />
                    LVL {level}
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-xl font-bold text-slate-800 mb-1">{name || "Unknown Hero"}</h3>
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                    <Zap size={16} />
                    <span>{power || "No power yet"}</span>
                </div>

                <div className="text-xs text-slate-400 font-mono bg-slate-100 p-2 rounded">
                    TYPE: {type.toUpperCase()}
                </div>
            </div>
        </motion.div>
    );
}
