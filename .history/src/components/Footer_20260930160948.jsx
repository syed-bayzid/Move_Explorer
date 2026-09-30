const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <h3 className="text-white text-xl font-bold mb-2">
          🎬 MovieExplorer
        </h3>

        <p className="mb-3">
          © 2026 MovieExplorer. All rights reserved.
        </p>

        <p className="text-sm">
          Data provided by{" "}
          <a
            href="https://www.tvmaze.com/"
            target="_blank"
            rel="noreferrer"
            className="text-red-500 hover:underline"
          >
            TVMaze
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;