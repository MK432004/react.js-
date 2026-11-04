
import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(false);

  const getdata = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=15`
      );

      setData(response.data);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getdata();
  }, [index]);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-5 border-b border-gray-700">
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
          Pixel<span className="text-blue-500">Gallery.</span>
        </h1>

        <span className="text-gray-400 text-sm">
          Explore Beautiful Images
        </span>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-12 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Discover Amazing Photos
        </h1>

        <p className="text-gray-400 max-w-xl mx-auto">
          Explore a beautiful collection of photographs from talented
          photographers around the world.
        </p>
      </section>

      {/* Gallery */}
      <main className="max-w-7xl mx-auto px-5 pb-10">

        <div className="flex justify-between items-center mb-7">
          <h2 className="text-xl md:text-2xl font-semibold">
            Explore Gallery
          </h2>

          <span className="text-gray-400 text-sm">
            Page {index}
          </span>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-60">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

            {data.map((elem) => (
              <a
                href={elem.url}
                target="_blank"
                rel="noreferrer"
                key={elem.id}
                className="group bg-[#1e293b] rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300"
              >

                <div className="overflow-hidden">
                  <img
                    src={elem.download_url}
                    alt={elem.author}
                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-base truncate">
                    {elem.author}
                  </h3>

                  <p className="text-gray-400 text-sm mt-1">
                    Photographer
                  </p>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xs text-gray-500">
                      Photo #{elem.id}
                    </span>

                    <span className="text-blue-400 text-sm group-hover:text-blue-300">
                      View ↗
                    </span>
                  </div>
                </div>

              </a>
            ))}

          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center items-center gap-5 mt-12">

          <button
            disabled={index === 1 || loading}
            onClick={() => setIndex(index - 1)}
            className="px-6 py-3 rounded-lg bg-[#1e293b] border border-gray-700 hover:bg-blue-600 transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ← Previous
          </button>

          <span className="text-lg font-semibold">
            {index}
          </span>

          <button
            disabled={loading}
            onClick={() => setIndex(index + 1)}
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Next →
          </button>

        </div>

      </main>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-800 text-gray-500 text-sm">
        © 2026 PixelGallery. Built with React & Tailwind CSS.
      </footer>

    </div>
  );
};

export default App;


