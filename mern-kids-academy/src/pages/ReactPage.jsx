import { useState } from 'react';
import HeroCard from '../components/HeroCard';
import CodeExplainer from '../components/CodeExplainer';
import GuideBot from '../components/GuideBot';
import { Paintbrush, Sticker, Lightbulb } from 'lucide-react';

const Section = ({ title, icon: Icon, children }) => (
    <section className="bg-white rounded-3xl p-8 border-2 border-slate-100 shadow-sm space-y-6 relative overflow-hidden">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4 relative z-10">
            <div className="p-3 bg-teal-100 text-teal-600 rounded-xl">
                <Icon size={28} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
        </div>
        <div className="relative z-10">{children}</div>
    </section>
);

export default function ReactPage() {
    const [heroName, setHeroName] = useState("Super Kid");
    const [power, setPower] = useState("Flying");
    const [level, setLevel] = useState(1);

    return (
        <div className="space-y-12 pb-24">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-extrabold text-teal-600 flex items-center justify-center gap-3">
                    <Paintbrush size={40} />
                    React: The Artist
                </h1>
                <p className="text-xl text-slate-600">
                    React is the artist who paints the website. You tell it <em>what</em> to paint, and it updates the picture instantly!
                </p>
            </div>

            {/* Concept 1: Components */}
            <Section title="1. The Blueprint (Components)" icon={Paintbrush}>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Imagine you have a <strong>Hero Card Stamp</strong>. Instead of drawing the card 100 times, you just use the stamp!
                        </p>
                        <p className="text-slate-500 italic">
                            In code, we call this stamp a <strong>Component</strong>.
                        </p>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-3xl flex justify-center border border-slate-200">
                        <HeroCard name="Hero Stamp" power=" stamping..." type="earth" />
                    </div>
                </div>
            </Section>

            {/* Concept 2: Props */}
            <Section title="2. The Stickers (Props)" icon={Sticker}>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <p className="text-lg text-slate-600">
                            You can put <strong>Stickers</strong> on your stamp to change it.
                            Want a Water Hero? Put a Water Sticker on it!
                        </p>

                        <div className="space-y-4 bg-blue-50 p-6 rounded-2xl border border-blue-100">
                            <div>
                                <label className="block text-sm font-bold text-blue-900 mb-1">Name Sticker</label>
                                <input
                                    type="text"
                                    value={heroName}
                                    onChange={(e) => setHeroName(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:ring-4 focus:ring-blue-100 outline-none text-lg"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-blue-900 mb-1">Power Sticker</label>
                                <select
                                    value={power}
                                    onChange={(e) => setPower(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:ring-4 focus:ring-blue-100 outline-none text-lg bg-white"
                                >
                                    <option>Flying</option>
                                    <option>Invisibility</option>
                                    <option>Super Strength</option>
                                    <option>Laser Eyes</option>
                                </select>
                            </div>
                        </div>

                        <div className="opacity-80 hover:opacity-100 transition-opacity">
                            <p className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">The Secret Code</p>
                            <CodeExplainer code={`<HeroCard \n  name="${heroName}" \n  power="${power}" \n/>`} />
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <HeroCard name={heroName} power={power} type="water" />
                    </div>
                </div>
            </Section>

            {/* Concept 3: State */}
            <Section title="3. The Memory (State)" icon={Lightbulb}>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-lg text-slate-600">
                            Sometimes the Artist needs to <strong>remember</strong> things, like a score.
                            When the memory changes, the Artist repaints the picture!
                        </p>

                        <button
                            onClick={() => setLevel(level + 1)}
                            className="w-full bg-teal-500 hover:bg-teal-600 text-white text-xl font-bold py-4 px-6 rounded-2xl shadow-xl transform transition active:scale-95 flex items-center justify-center gap-2"
                        >
                            <Lightbulb size={24} fill="currentColor" />
                            Level Up!
                        </button>

                        <div className="opacity-80 hover:opacity-100 transition-opacity">
                            <p className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">The Secret Code</p>
                            <CodeExplainer code={`const [level, setLevel] = useState(${level});`} />
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <HeroCard name={heroName} power={power} level={level} type="fire" highlight={true} />
                    </div>
                </div>
            </Section>

            <GuideBot message="Try changing the Name Sticker (Props) or clicking Level Up (State) to see me paint!" />
        </div>
    );
}
