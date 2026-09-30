const MovieCard = ({ movie, onDetails }) => {
    const image =
        movie.image?.medium ||
        "https://via.placeholder.com/300x400?text=No+Image";

    const year = movie.premiered
        ? new Date(movie.premiered).getFullYear()
        : "N/A";

    const rating = movie.rating?.average || "N/A";

    return (
        <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-red-500 transition duration-300 group">
            {/* Poster */}
            <div className="h-80 overflow-hidden">
                <img
                    src={image}
                    alt={movie.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
            </div>

            {/* Content */}
            <div className="p-4">
                <h2 className="text-white text-lg font-bold truncate mb-3">
                    {movie.name}
                </h2>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>⭐ {rating}</span>
                    <span>📅 {year}</span>
                </div>

                <button
                    onClick={() => onDetails(movie)}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition"
                >
                    See Details
                </button>
            </div>
        </div>
    );
};

export default MovieCard;