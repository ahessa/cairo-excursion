import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import tours from "../data/tours";

export default function Tours() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO */}

<section className="relative min-h-[70vh] overflow-hidden">

  <img
    src="/images/cairo.jpg"
    alt=""
    className="
    absolute
    inset-0
    h-full
    w-full
    object-cover
    scale-110
    "
  />

  <div className="absolute inset-0 bg-black/75" />

  <div className="
  absolute
  left-1/2
  top-1/2
  h-[500px]
  w-[500px]
  -translate-x-1/2
  -translate-y-1/2
  rounded-full
  bg-amber-400/10
  blur-[180px]
  " />

  <div className="
  relative
  z-10
  flex
  min-h-[70vh]
  items-center
  justify-center
  px-6
  text-center
  ">

    <div className="max-w-5xl">

      <p className="uppercase tracking-[0.5em] text-amber-400 text-sm">

        CURATED PRIVATE EXPERIENCES

      </p>

      <h1 className="
      mt-8
      text-5xl
      md:text-7xl
      font-bold
      leading-tight
      ">

        Discover Egypt Through

        <span className="block text-amber-400">

          Extraordinary Journeys

        </span>

      </h1>

      <p className="
      mt-8
      text-lg
      md:text-2xl
      text-gray-300
      max-w-3xl
      mx-auto
      leading-relaxed
      ">

        Explore ancient wonders, world-class museums
        and unforgettable experiences designed exclusively
        for you.

      </p>

    </div>

  </div>

</section>

      {/* TOURS */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-3 gap-8">

          {tours.map((tour, index) => (
            <motion.div
  key={tour.id}
  initial={{
    opacity: 0,
    y: 40
  }}
  whileInView={{
    opacity: 1,
    y: 0
  }}
  viewport={{ once: true }}
  transition={{
    duration: 0.6
  }}
  whileHover={{
    y: -10
  }}
  className={`
  group
  overflow-hidden
  rounded-[40px]
  border border-white/10
  bg-white/5
  backdrop-blur-xl
  shadow-2xl
  ${
    index === 0
      ? "lg:col-span-2"
      : ""
  }
  `}
>
  {/* IMAGE */}

  <div
    className={`
    overflow-hidden
    ${
      index === 0
        ? "h-[500px]"
        : "h-[300px]"
    }
    `}
  >

    <img
      src={tour.heroImage}
      alt={tour.title}
      className="
      h-full
      w-full
      object-cover
      duration-700
      group-hover:scale-110
      "
    />

  </div>

  {/* CONTENT */}

  <div className="p-8">

    {/* BADGES */}

    <div className="flex flex-wrap gap-3 mb-6">

      <span className="
      rounded-full
      bg-amber-400
      px-4
      py-2
      text-xs
      font-bold
      text-black
      ">

        PRIVATE EXPERIENCE

      </span>

      <span className="
      rounded-full
      border border-white/10
      bg-white/5
      px-4
      py-2
      text-xs
      text-gray-300
      ">

        🚐 Transportation Available

      </span>

    </div>

    {/* TITLE */}

    <div className="
    flex
    items-center
    justify-between
    gap-6
    ">

      <h2 className="text-3xl font-bold">

        {tour.title}

      </h2>

      <span className="
      text-3xl
      font-bold
      text-amber-400
      ">

        ${tour.price}

      </span>

    </div>

    {/* DESCRIPTION */}

    <p className="
    mt-6
    leading-relaxed
    text-gray-400
    ">

      {tour.description}

    </p>

    {/* DETAILS */}

    <div className="
    mt-8
    flex
    flex-wrap
    gap-6
    text-sm
    text-gray-400
    ">

      <span>

        👥 Up to 4 Guests

      </span>

      <span>

        ⭐ Top Rated

      </span>

      <span>

        📅 Flexible Dates

      </span>

    </div>

    {/* BUTTON */}

    <Link
      to={`/tour/${tour.id}`}
      className="
      inline-block
      mt-10
      rounded-full
      bg-amber-400
      px-8
      py-4
      font-bold
      text-black
      hover:scale-105
      duration-300
      "
    >
      Explore Experience
    </Link>

  </div>

</motion.div>
          ))}

        </div>

      </section>

      {/* DESIGN YOUR DREAM JOURNEY */}

<section className="relative overflow-hidden py-40">

  {/* Background */}

  <img
    src="/images/nile-skyline.jpg"
    alt=""
    className="
    absolute
    inset-0
    h-full
    w-full
    object-cover
    scale-110
    "
  />

  {/* Overlay */}

  <div className="absolute inset-0 bg-black/80" />

  {/* Glow */}

  <div className="
  absolute
  left-1/2
  top-1/2
  h-[500px]
  w-[500px]
  -translate-x-1/2
  -translate-y-1/2
  rounded-full
  bg-amber-400/20
  blur-[180px]
  " />

  <div className="
  relative
  z-10
  max-w-6xl
  mx-auto
  px-6
  text-center
  ">

    <p className="
    uppercase
    tracking-[0.5em]
    text-amber-400
    text-sm
    ">

      BESPOKE EXPERIENCES

    </p>

    <h2 className="
    mt-8
    text-5xl
    md:text-7xl
    font-bold
    leading-tight
    ">

      Design Your

      <span className="block text-amber-400">

        Dream Journey

      </span>

    </h2>

    <p className="
    mt-10
    max-w-3xl
    mx-auto
    text-lg
    md:text-2xl
    leading-relaxed
    text-gray-300
    ">

      Looking for something beyond our curated experiences?

      We create fully personalized itineraries,
      luxury transportation, private guides and
      unforgettable multi-day journeys across Egypt.

    </p>

    {/* FEATURES */}

    <div className="
    mt-16
    flex
    flex-wrap
    justify-center
    gap-4
    ">

      <div className="
      rounded-full
      border border-white/10
      bg-white/5
      px-6
      py-4
      text-gray-300
      ">
        🚐 Luxury Transportation
      </div>

      <div className="
      rounded-full
      border border-white/10
      bg-white/5
      px-6
      py-4
      text-gray-300
      ">
        🕵🏻‍♂️ Private Guides
      </div>

      <div className="
      rounded-full
      border border-white/10
      bg-white/5
      px-6
      py-4
      text-gray-300
      ">
        🏛 Multi-Day Itineraries
      </div>

      <div className="
      rounded-full
      border border-white/10
      bg-white/5
      px-6
      py-4
      text-gray-300
      ">
        ⭐ VIP Experiences
      </div>

    </div>

    {/* BUTTONS */}

    <div className="
    mt-16
    flex
    flex-col
    sm:flex-row
    justify-center
    gap-5
    ">

      <a
        href="https://wa.me/201093302055"
        target="_blank"
        rel="noreferrer"
        className="
        rounded-full
        bg-green-500
        px-10
        py-5
        font-bold
        text-white
        hover:scale-105
        duration-300
        "
      >
        WhatsApp Us
      </a>

      <Link
        to="/contact"
        className="
        rounded-full
        border border-white/20
        bg-white/5
        px-10
        py-5
        font-bold
        hover:bg-white/10
        duration-300
        "
      >
        Contact Us
      </Link>

    </div>

  </div>

</section>

    </div>
  );
}
