const MovieModal = ({ movie, onClose }) => {
    if (!movie) return null;

    const image =
        movie.image?.original ||
        movie.image?.medium ||
        "https://via.placeholder.com/800x500?text=No+Image";

    const rating = movie.rating?.average || "N/A";

    const year = movie.premiered
        ? new Date(movie.premiered).getFullYear()
        : "N/A";

    return (
        <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div
                className="bg-gray-900 text-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Image */}
                <div className="relative">
                    <img
                        src={image}
                        alt={movie.name}
                        className="w-full h-64 md:h-96 object-cover"
                    />

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 bg-black/70 hover:bg-red-600 w-10 h-10 rounded-full text-xl"
                    >
                        ✕
                    </button>
                </div>

                {/* Details */}
                <div className="p-6">
                    <h2 className="text-3xl font-bold mb-4">
                        {movie.name}
                    </h2>

                    <div className="flex flex-wrap gap-4 text-gray-300 mb-5">
                        <span>⭐ Rating: {rating}</span>
                        <span>📅 Release: {year}</span>
                    </div>

                    {/* Genres */}
                    {movie.genres?.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-5">
                            {movie.genres.map((genre) => (
                                <span
                                    key={genre}
                                    className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm"
                                >
                                    {genre}
                                </span>
                            ))}
                        </div>
                    )}

                    <h3 className="text-xl font-semibold mb-2">
                        Overview
                    </h3>

                    <div
                        className="text-gray-400 leading-7"
                        dangerouslySetInnerHTML={{
                            __html:
                                movie.summary || "No description available.",
                        }}
                    />

                    <button
                        onClick={onClose}
                        className="mt-6 bg-gray-700 hover:bg-red-600 px-6 py-2 rounded-lg transition"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MovieModal;