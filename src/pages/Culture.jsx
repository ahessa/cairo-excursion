import { useState } from "react";
import { motion } from "framer-motion";
import culture from "../data/culture";

export default function Culture() {
  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden">

      {/* MAP BACKGROUND */}

      <div className="fixed inset-0 z-0">
        <img
          src="/images/egypt-map.jpg"
          alt=""
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* HERO */}

      <section className="relative z-10 pt-40 pb-20 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h1 className="text-6xl md:text-8xl font-bold">
            Explore Cairo
          </h1>

          <p className="mt-6 text-lg text-gray-400">
            Discover the wonders, culture and history of Egypt through
            ancient monuments, temples, museums and unforgettable places.
          </p>

        </div>

      </section>

      {/* CARDS */}

      <section className="relative z-10 pb-32 px-6">

        <div className="max-w-7xl mx-auto">

	<div className="columns-1 lg:columns-2 gap-12 space-y-12">

            {culture.map((place, index) => (
              <CultureCard
                key={place.id}
                place={place}
                large={index % 5 === 0}
                medium={index % 3 === 0}
              />
            ))}

          </div>

        </div>

      </section>

    </div>
  );
}

function CultureCard({ place, large, medium }) {
  const [currentImage, setCurrentImage] = useState(0);

	let imageHeight = "h-80";

	if (large) imageHeight = "h-[600px]";
	else if (medium) imageHeight = "h-[450px]";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
      }}
      whileHover={{
        y: -8,
      }}
      className="
      break-inside-avoid
      overflow-hidden
      rounded-[40px]
      border border-white/10
      bg-white/5
      backdrop-blur-xl
      shadow-2xl
      mb-8
      duration-300
      "
    >

      {/* IMAGE */}

      <div className="relative">

        <img
          src={place.images[currentImage]}
          alt={place.title}
          className={`w-full object-cover ${imageHeight}`}
        />

        {/* ARROWS */}

        {place.images.length > 1 && (
          <>
            <button
              onClick={() =>
                setCurrentImage(
                  currentImage === 0
                    ? place.images.length - 1
                    : currentImage - 1
                )
              }
              className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              w-10
              h-10
              rounded-full
              bg-black/50
              backdrop-blur-xl
              "
            >
              ←
            </button>

            <button
              onClick={() =>
                setCurrentImage(
                  currentImage === place.images.length - 1
                    ? 0
                    : currentImage + 1
                )
              }
              className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              w-10
              h-10
              rounded-full
              bg-black/50
              backdrop-blur-xl
              "
            >
              →
            </button>
          </>
        )}

        {/* DOTS */}

        {place.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">

            {place.images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  currentImage === index
                    ? "bg-white"
                    : "bg-white/30"
                }`}
              />
            ))}

          </div>
        )}

      </div>

      {/* CONTENT */}

      <div className="p-10">

        <p className="text-amber-400 text-sm mb-3">
          {place.location}
        </p>

        <h2 className="text-3xl font-bold">
          {place.title}
        </h2>

	<p className="mt-6 text-gray-400 leading-9 text-lg">
          {place.description}
        </p>

      </div>

    </motion.div>
  );
}
