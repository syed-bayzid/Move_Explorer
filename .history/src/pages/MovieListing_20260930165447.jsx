import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

const MovieListing = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

useEffect(() => {
    const searchMovies = async () => {
        if (!search.trim()) {
            const response = await fetch(
                "https://api.tvmaze.com/shows"
            );

            const data = await response.json();
            setMovies(data);
            return;
        }

        try {
            setLoading(true);
            setError("");

            const response = await fetch(
                `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(search)}`
            );

            if (!response.ok) {
                throw new Error("Search failed");
            }

            const data = await response.json();

            setMovies(data.map((item) => item.show));
        } catch (err) {
            setError("Search failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const timer = setTimeout(searchMovies, 500);

    return () => clearTimeout(timer);
}, [search]);

    // Search
    useEffect(() => {
        const searchMovies = async () => {
            if (!search.trim()) {
                return;
            }

            try {
                setLoading(true);
                setError("");

                const response = await fetch(
                    `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(
                        search
                    )}`
                );

                if (!response.ok) {
                    throw new Error("Search failed");
                }

                const data = await response.json();

                const searchResults = data.map((item) => item.show);

                setMovies(searchResults);
            } catch (err) {
                setError("Search failed. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        const timer = setTimeout(() => {
            searchMovies();
        }, 500);

        return () => clearTimeout(timer);
    }, [search]);

    return (
        <div className="min-h-screen bg-black">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 py-12">
                {/* Heading */}
                <div className="text-center mb-10">
                    <p className="text-red-500 uppercase tracking-widest font-semibold mb-2">
                        Explore
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        Discover Movies & Shows
                    </h1>

                    <p className="text-gray-400 mt-3">
                        Search and explore your favorite shows.
                    </p>
                </div>

                {/* Search */}
                <SearchBar
                    search={search}
                    setSearch={setSearch}
                />

                {/* Loading */}
                {loading && (
                    <div className="text-center py-20 text-white">
                        <p className="text-xl">Loading movies...</p>
                    </div>
                )}

                {/* Error */}
                {!loading && error && (
                    <div className="text-center py-20 text-red-500">
                        {error}
                    </div>
                )}

                {/* Empty */}
                {!loading && !error && movies.length === 0 && (
                    <div className="text-center py-20 text-gray-400">
                        <p className="text-xl">
                            No movies found.
                        </p>
                    </div>
                )}

                {/* Movie Grid */}
                {!loading && !error && movies.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {movies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                onDetails={setSelectedMovie}
                            />
                        ))}
                    </div>
                )}
            </main>

            {/* Modal */}
            <MovieModal
                movie={selectedMovie}
                onClose={() => setSelectedMovie(null)}
            />

            <Footer />
        </div>
    );
};

export default MovieListing;