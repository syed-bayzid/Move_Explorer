const SearchBar = ({ search, setSearch }) => {
    return (
        <div className="max-w-3xl mx-auto mb-10">
            <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">
                    🔍
                </span>

                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search for a movie..."
                    className="w-full bg-gray-900 border border-gray-700 text-white rounded-xl py-4 pl-12 pr-4 outline-none focus:border-red-500 transition"
                />
            </div>
        </div>
    );
};

export default SearchBar;