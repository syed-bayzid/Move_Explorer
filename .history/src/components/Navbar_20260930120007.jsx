import { Link } from "react-router";

const Navbar = () => {
    return (
        <nav className="bg-gray-950 text-white border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold text-red-500">
                    🎬 MovieExplorer
                </Link>

                <div className="flex items-center gap-6">
                    <Link
                        to="/"
                        className="hover:text-red-500 transition"
                    >
                        Home
                    </Link>

                    <Link
                        to="/movies"
                        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition"
                    >
                        Movies
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;