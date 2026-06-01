import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import tours from "../data/tours";

export default function Tours() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden"
      >
        <img
          src="/images/pyramid.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 px-6">
          <h1 className="text-6xl md:text-8xl font-bold">
            Explore Egypt
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
            Discover private tours, ancient wonders,
            luxury experiences and unforgettable
            adventures across Cairo and beyond.
          </p>
        </div>
      </section>

      {/* TOURS */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-3 gap-8">

          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className={`group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md ${
                index === 0
                  ? "md:col-span-2"
                  : ""
              }`}
            >
              <div
                className={`overflow-hidden ${
                  index === 0
                    ? "h-[420px]"
                    : "h-72"
                }`}
              >
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-8">

                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-3xl font-bold">
                    {tour.title}
                  </h2>

                  <span className="text-amber-400 text-2xl font-bold">
                    ${tour.price}
                  </span>
                </div>

                <p className="text-gray-400 leading-relaxed">
                  {tour.description}
                </p>

                <Link
                  to={`/tour/${tour.id}`}
                  className="inline-block mt-8 rounded-full bg-amber-400 px-6 py-3 font-semibold text-black transition hover:scale-105"
                >
                  View Tour
                </Link>

              </div>
            </motion.div>
          ))}

        </div>

      </section>

      {/* CUSTOM TOURS */}
      <section className="bg-zinc-950 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold">
            Need Something Custom?
          </h2>

          <p className="mt-6 text-xl text-gray-400">
            We offer private guides, airport transfers,
            transportation services, multi-day itineraries
            and fully customized Egyptian experiences.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-10 rounded-full bg-amber-400 px-8 py-4 font-bold text-black hover:scale-105 transition"
          >
            Contact Us
          </Link>

        </div>
      </section>

    </div>
  );
}
