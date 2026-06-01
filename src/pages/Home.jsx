import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">

  <div className="absolute inset-0 overflow-hidden">
    <img
      src="/images/nile-skyline.jpg"
      alt=""
      className="hero-image h-full w-full object-cover"
    />
  </div>

  <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6 max-w-6xl"
        >
          <h1 className="text-7xl md:text-9xl font-bold leading-tight">
            Experience Cairo
            <span className="block text-amber-400">
              Beyond The Guidebooks
            </span>
          </h1>

          <p className="mt-8 text-xl text-gray-300 max-w-2xl mx-auto">
            Private tours, local expertise,
            unforgettable adventures and
            authentic Egyptian experiences.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/tours"
              className="rounded-full bg-amber-400 px-8 py-4 font-bold text-black hover:scale-105 transition"
            >
              Explore Tours
            </Link>

            <Link
              to="/contact"
              className="rounded-full border border-white/30 px-8 py-4 hover:bg-white/10 transition"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>

<section className="bg-black py-16">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

      <div className="text-center">
        <h3 className="text-5xl font-bold text-amber-400">
          500+
        </h3>

        <p className="mt-2 text-gray-400">
          Happy Travelers
        </p>
      </div>

      <div className="text-center">
        <h3 className="text-5xl font-bold text-amber-400">
          50+
        </h3>

        <p className="mt-2 text-gray-400">
          Experiences
        </p>
      </div>

      <div className="text-center">
        <h3 className="text-5xl font-bold text-amber-400">
          5★
        </h3>

        <p className="mt-2 text-gray-400">
          Average Rating
        </p>
      </div>

      <div className="text-center">
        <h3 className="text-5xl font-bold text-amber-400">
          24/7
        </h3>

        <p className="mt-2 text-gray-400">
          Support
        </p>
      </div>

    </div>
  </div>
</section>
      {/* FEATURED TOURS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-bold text-center mb-16">
          Featured Experiences
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Pyramids & Sphinx",
              image: "/images/hero.jpg",
            },
            {
              title: "Grand Egyptian Museum",
              image: "/images/gem.jpg",
            },
            {
              title: "Nile Cruise Experience",
              image: "/images/felucca.jpg",
            },
          ].map((tour) => (
            <motion.div
              whileHover={{
                y: -10,
              }}
              key={tour.title}
              className="group overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  {tour.title}
                </h3>

                <Link
                  to="/tours"
                  className="inline-block mt-4 text-amber-400"
                >
                  View Tours →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-zinc-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">
            Why Cairo Excursion?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Private Transportation",
              "Licensed Local Guides",
              "Flexible Scheduling",
              "Secure Booking",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
              >
                <div className="text-4xl mb-4">
                  ✓
                </div>

                <h3 className="font-semibold text-lg">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-bold text-center mb-16">
          Explore Egypt
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            "/images/pyramid.jpg",
            "/images/sphinx.jpg",
            "/images/tutankhamun.jpg",
            "/images/museum.jpg",
            "/images/khan.jpg",
            "/images/nile-view.jpg",
          ].map((image) => (
            <div
              key={image}
              className="overflow-hidden rounded-3xl"
            >
              <img
                src={image}
                alt=""
                className="w-full h-80 object-cover hover:scale-110 transition duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-zinc-950 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">
            Guest Experiences
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
  {
    name: "Private Pyramid Tour",
    text: "Outstanding guide and seamless transportation.",
  },
  {
    name: "Grand Egyptian Museum Tour",
    text: "Everything was perfectly organized from start to finish.",
  },
  {
    name: "Nile Cruise Experience",
    text: "Beautiful views, knowledgeable guide and excellent service.",
  },
].map((review) => (
              <div
                key={review.name}
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <div className="text-amber-400 mb-4">
                  ★★★★★
                </div>

                <p className="text-gray-300">
                  "{review.text}"
                </p>

                <p className="mt-6 font-semibold">
                  {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="relative py-40 text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/camel.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 px-6">
          <h2 className="text-5xl md:text-7xl font-bold">
            Your Egyptian Adventure
            Starts Here
          </h2>

          <p className="mt-6 text-xl text-gray-300">
            Discover Cairo with expert
            local guides and unforgettable
            experiences.
          </p>

          <Link
            to="/tours"
            className="inline-block mt-10 rounded-full bg-amber-400 px-10 py-4 font-bold text-black hover:scale-105 transition"
          >
            Book Your Tour
          </Link>
        </div>
      </section>
	<a
  href="https://wa.me/201093302055"
  target="_blank"
  rel="noreferrer"
  className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-3xl shadow-2xl transition hover:scale-110"
>
  <FaWhatsapp />
</a>
    </div>
  );
}
