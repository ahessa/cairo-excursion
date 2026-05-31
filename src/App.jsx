import { motion } from "framer-motion";

const tours = [
  {
    title: "Pyramids & Sphinx",
    image: "/images/hero.jpg",
    price: "$60",
  },
  {
    title: "Nile Dinner Cruise",
    image: "/images/hero.jpg",
    price: "$80",
  },
  {
    title: "Luxor Day Trip",
    image: "/images/hero.jpg",
    price: "$120",
  },
];

export default function App() {
  return (
    <div className="bg-black text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold tracking-wide">
            Cairo Excursion
          </h1>

          <div className="hidden md:flex gap-8 text-sm">
            <a href="#home" className="hover:text-yellow-400 transition">
              Home
            </a>

            <a href="#tours" className="hover:text-yellow-400 transition">
              Tours
            </a>

            <a href="#contact" className="hover:text-yellow-400 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold"
          >
            Explore Egypt Like Never Before
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6 max-w-2xl text-lg md:text-2xl text-gray-300"
          >
            Premium tours, unforgettable adventures,
            and private transportation across Egypt.
          </motion.p>

          <motion.a
            href="#tours"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 rounded-full bg-white px-8 py-4 text-black font-semibold hover:scale-105 transition"
          >
            View Tours
          </motion.a>
        </div>
      </section>

      {/* TOURS */}
      <section
        id="tours"
        className="mx-auto max-w-7xl px-6 py-24"
      >
        <h2 className="text-4xl font-bold mb-12">
          Featured Tours
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {tours.map((tour, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold">
                  {tour.title}
                </h3>

                <p className="mt-3 text-gray-400">
                  Experience one of Egypt’s most
                  unforgettable destinations.
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-2xl font-bold">
                    {tour.price}
                  </span>

                  <button className="rounded-full bg-white px-5 py-2 text-black font-medium hover:scale-105 transition">
                    Book
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-white/10 px-6 py-20 text-center"
      >
        <h2 className="text-4xl font-bold">
          Contact Us
        </h2>

        <p className="mt-6 text-gray-400">
          Ready to explore Egypt?
        </p>

        <button className="mt-8 rounded-full bg-white px-8 py-4 text-black font-semibold hover:scale-105 transition">
          WhatsApp Us
        </button>
      </section>
    </div>
  );
}
