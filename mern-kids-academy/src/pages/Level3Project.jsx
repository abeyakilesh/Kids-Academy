import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, Film, Heart } from 'lucide-react';
import LessonLayout from '../components/LessonLayout';

const MOCK_MOVIES = [
    { id: 1, title: "The React Matrix", rating: 9.5, genre: "Sci-Fi", color: "bg-green-600" },
    { id: 2, title: "Lord of the Hooks", rating: 8.8, genre: "Fantasy", color: "bg-yellow-600" },
    { id: 3, title: "Harry Potter & The Virtual DOM", rating: 9.2, genre: "Magic", color: "bg-purple-600" },
    { id: 4, title: "State Wars", rating: 7.5, genre: "Sci-Fi", color: "bg-blue-600" },
    { id: 5, title: "Jurassic Component", rating: 6.9, genre: "Adventure", color: "bg-red-600" },
];

const CineMaticApp = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        // Simulate API Fetch
        setTimeout(() => {
            setMovies(MOCK_MOVIES);
            setLoading(false);
        }, 1000);
    }, []);

    const filteredDetails = movies.filter(m =>
        m.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const toggleFav = (id) => {
        if (favorites.includes(id)) {
            setFavorites(favorites.filter(f => f !== id));
        } else {
            setFavorites([...favorites, id]);
        }
    };

    return (
        <div className="w-full max-w-md bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-700 text-white min-h-[500px]">
            {/* Header */}
            <div className="bg-slate-950 p-4 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-lg text-purple-400">
                    <Film /> CineMatic
                </div>
                <div className="text-xs bg-purple-900 px-2 py-1 rounded text-purple-200">
                    {favorites.length} Favorites
                </div>
            </div>

            {/* Search Bar */}
            <div className="p-4 bg-slate-900 sticky top-0 z-10">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input
                        type="text"
                        placeholder="Search movies..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-slate-800 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-slate-500"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3 h-[400px] overflow-y-auto">
                {loading && <div className="text-center text-slate-500 py-10 animate-pulse">Loading API...</div>}

                {!loading && filteredDetails.length === 0 && (
                    <div className="text-center text-slate-500 py-10">No movies found.</div>
                )}

                <AnimatePresence>
                    {filteredDetails.map(movie => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            key={movie.id}
                            className="flex items-center gap-4 bg-slate-800 p-3 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors"
                        >
                            <div className={`w-12 h-16 ${movie.color} rounded flex items-center justify-center text-xs font-bold shadow-lg`}>
                                POSTER
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold">{movie.title}</h4>
                                <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                                    <span className="flex items-center gap-1 text-yellow-500"><Star size={12} fill="currentColor" /> {movie.rating}</span>
                                    <span>•</span>
                                    <span>{movie.genre}</span>
                                </div>
                            </div>
                            <button
                                onClick={() => toggleFav(movie.id)}
                                className={`p-2 rounded-full hover:bg-slate-700 transition-colors ${favorites.includes(movie.id) ? 'text-red-500' : 'text-slate-500'}`}
                            >
                                <Heart size={20} fill={favorites.includes(movie.id) ? "currentColor" : "none"} />
                            </button>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default function Level3Project() {
    return (
        <LessonLayout
            title="Capstone: CineMatic"

            explanation={
                <div className="space-y-4">
                    <p>
                        Congratulations! You've mastered React. Now it's time to build a real app.
                    </p>
                    <p>
                        <strong>The Mission:</strong> Build a Movie Search App using everything you learned.
                    </p>
                    <div className="bg-slate-100 p-4 rounded-xl border border-slate-200">
                        <h4 className="font-bold mb-2">Requirements:</h4>
                        <ul className="text-sm space-y-1 list-disc pl-4 text-slate-700">
                            <li>Use <code>useEffect</code> to load initial data.</li>
                            <li>Use <code>useState</code> for Search Text and Favorites.</li>
                            <li>Use <code>.map()</code> to render the list.</li>
                            <li>Use <code>.filter()</code> to implement search.</li>
                        </ul>
                    </div>
                </div>
            }

            visual={<CineMaticApp />}

            initialCode={`import { useState, useEffect } from 'react';

// Mock Data
const ALL_MOVIES = [
  { id: 1, title: "The React Matrix" },
  { id: 2, title: "Lord of the Hooks" },
  { id: 3, title: "State Wars" }
];

function CineMatic() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  // TODO 1: Load data on mount
  useEffect(() => {
    // ... setMovies(ALL_MOVIES) after delay
  }, []);

  // TODO 2: Filter based on 'search' state
  const displayedMovies = movies; 

  return (
    <div style={{ padding: 20 }}>
      <h1>CineMatic 🍿</h1>
      
      {/* TODO 3: Connect Input to State */}
      <input 
         placeholder="Search..." 
         style={{ padding: 10, marginBottom: 20 }}
      />
      
      <ul>
        {displayedMovies.map(m => (
          <li key={m.id}>{m.title}</li>
        ))}
      </ul>
    </div>
  );
}
`}

            quiz={
                <div className="space-y-4">
                    <div className="p-4 border rounded-xl hover:bg-slate-50 cursor-pointer transition-colors">
                        <div className="font-bold mb-2">What happens if you update state inside a loop?</div>
                        <div className="grid grid-cols-1 gap-2">
                            <button className="px-4 py-3 text-left rounded-lg border hover:bg-red-100">It's faster.</button>
                            <button className="px-4 py-3 text-left rounded-lg border hover:bg-green-100">Infinite Re-renders (Crash!).</button>
                            <button className="px-4 py-3 text-left rounded-lg border hover:bg-red-100">React ignores it.</button>
                        </div>
                    </div>
                </div>
            }

            challenge={
                <div>
                    <h4 className="font-bold text-xl mb-2 text-yellow-400">Final Boss: Favorites</h4>
                    <p className="mb-4">
                        1. Add a 'Heart' button to each movie.<br />
                        2. When clicked, add that movie ID to a `favorites` array state.<br />
                        3. Show the count of favorites in the header.
                    </p>
                </div>
            }
        />
    );
}
