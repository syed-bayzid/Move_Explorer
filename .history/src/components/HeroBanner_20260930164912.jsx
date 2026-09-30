import { Link } from "react-router";

const HeroBanner = () => {
  return (
    <section className="relative min-h-[0vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2000')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl">
        <p className="text-red-500 font-semibold uppercase tracking-widest mb-4">
          Welcome to MovieExplorer
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Discover Your Next Favorite Show
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-8">
          Explore thousands of amazing movies and TV shows.
          Search, discover and learn more about your favorite shows.
        </p>

        <Link
          to="/movies"
          className="inline-block bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition"
        >
          Explore Now →
        </Link>
      </div>
    </section>
  );
};

export default HeroBanner;