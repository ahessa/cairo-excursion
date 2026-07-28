import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-black text-white">

      {/* HERO */}

<section className="relative min-h-screen overflow-hidden">

  {/* Background */}

  <div className="absolute inset-0">

    <img
      src="/images/cairo02.jpg"
      alt=""
      className="
      h-full
      w-full
      object-cover
      scale-110
      animate-[pulse_20s_linear_infinite]
      "
    />

    <div className="absolute inset-0 bg-black/65" />

    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black" />

  </div>

  {/* Golden Glow */}

  <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/20 blur-[180px]" />

  {/* Content */}

  <motion.div
    initial={{
      opacity: 0,
      y: 40
    }}
    animate={{
      opacity: 1,
      y: 0
    }}
    transition={{
      duration: 1
    }}
    className="
    relative
    z-10
    flex
    min-h-screen
    items-center
    justify-center
    px-6
    "
  >

    <div className="max-w-6xl text-center">

      <p className="uppercase tracking-[0.4em] text-amber-400 text-sm">


      </p>

      <h1 className="mt-8 text-5xl md:text-7xl">

        Private Tours in Egypt

        <span className="block text-amber-400">

          Discover Ancient Wonders
		With Local Experts

        </span>

      </h1>

      <p className="mx-auto mt-10 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-2xl">

        Discover ancient wonders, hidden gems and unforgettable
        private experiences designed around you.

      </p>

      <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

        <Link
          to="/tours"
          className="
          rounded-full
          bg-amber-400
          px-10
          py-5
          text-lg
          font-bold
          text-black
          hover:scale-105
          duration-300
          "
        >
          Explore Tours
        </Link>

        <Link
          to="/contact"
          className="
          rounded-full
          border
          border-white/20
          bg-white/5
          px-10
          py-5
          text-lg
          hover:bg-white/10
          duration-300
          "
        >
          Contact Us
        </Link>

      </div>

    </div>

  </motion.div>

</section>

{/* FLOATING STATS */}

<section className="py-24 bg-black px-6">

  <div className="max-w-7xl mx-auto">

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Card */}

      <motion.div
        whileHover={{
          y: -8,
        }}
        className="
        rounded-[32px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-2xl
        p-8
        text-center
        shadow-2xl
        "
      >

        <h2 className="text-5xl font-bold text-amber-400">

          500+

        </h2>

        <p className="mt-3 text-gray-400">

          Happy Travelers

        </p>

      </motion.div>

      {/* Card */}

      <motion.div
        whileHover={{
          y: -8,
        }}
        className="
        rounded-[32px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-2xl
        p-8
        text-center
        shadow-2xl
        "
      >

        <h2 className="text-5xl font-bold text-amber-400">

          50+

        </h2>

        <p className="mt-3 text-gray-400">

          Experiences

        </p>

      </motion.div>

      {/* Card */}

      <motion.div
        whileHover={{
          y: -8,
        }}
        className="
        rounded-[32px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-2xl
        p-8
        text-center
        shadow-2xl
        "
      >

        <h2 className="text-5xl font-bold text-amber-400">

          5★

        </h2>

        <p className="mt-3 text-gray-400">

          Average Rating

        </p>

      </motion.div>

      {/* Card */}

      <motion.div
        whileHover={{
          y: -8,
        }}
        className="
        rounded-[32px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-2xl
        p-8
        text-center
        shadow-2xl
        "
      >

        <h2 className="text-5xl font-bold text-amber-400">

          24/7

        </h2>

        <p className="mt-3 text-gray-400">

          Support

        </p>

      </motion.div>

    </div>

  </div>

</section>


     {/* FEATURED EXPERIENCES */}

<section className="max-w-7xl mx-auto px-6 py-32">

  <div className="text-center">

    <p className="uppercase tracking-[0.4em] text-amber-400 text-sm">

      CURATED EXPERIENCES

    </p>

    <h2 className="mt-6 text-5xl md:text-7xl font-bold">

      Featured Experiences

    </h2>

    <p className="mt-8 max-w-3xl mx-auto text-xl text-gray-400">

      Discover Egypt through carefully designed private experiences
      and unforgettable journeys.

    </p>

  </div>

  <div className="mt-20 grid lg:grid-cols-3 gap-8">

    {/* Large Card */}

    <motion.div
      whileHover={{
        y: -10,
      }}
      className="
      lg:col-span-2
      overflow-hidden
      rounded-[40px]
      border border-white/10
      bg-white/5
      backdrop-blur-xl
      group
      "
    >

      <div className="overflow-hidden h-[500px]">

        <img
          src="/images/pyramids-main.jpg"
          alt=""
          className="
          h-full
          w-full
          object-cover
          duration-700
          group-hover:scale-110
          "
        />

      </div>

      <div className="p-10">

        <p className="uppercase text-sm tracking-[0.3em] text-amber-400">

          MOST POPULAR

        </p>

        <h3 className="mt-5 text-4xl font-bold">

          Pyramids of Giza & Great Sphinx Tour

        </h3>

        <p className="mt-6 text-gray-400 text-lg leading-relaxed">

          Perfect for visitors who only have a morning or afternoon in Cairo. Explore the world-famous Pyramids of Giza and the Great Sphinx while learning about the beliefs, tombs and extraordinary civilization of Ancient Egypt.

        </p>

        <Link
          to="/tours"
          className="
          inline-block
          mt-8
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
          Explore Tour
        </Link>

      </div>

    </motion.div>

    {/* Right Column */}

    <div className="space-y-8">

      {/* GEM */}

      <motion.div
        whileHover={{
          y: -10,
        }}
        className="
        overflow-hidden
        rounded-[40px]
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        group
        "
      >

        <div className="h-64 overflow-hidden">

          <img
            src="/images/gem-main.jpg"
            alt=""
            className="
            h-full
            w-full
            object-cover
            duration-700
            group-hover:scale-110
            "
          />

        </div>

        <div className="p-8">

          <h3 className="text-2xl font-bold">

            Grand Egyptian Museum Tour

          </h3>

          <Link
            to="/tours"
            className="
            inline-block
            mt-4
            text-amber-400
            "
          >
            Explore →
          </Link>

        </div>

      </motion.div>

      {/* Nile */}

      <motion.div
        whileHover={{
          y: -10,
        }}
        className="
        overflow-hidden
        rounded-[40px]
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        group
        "
      >

        <div className="h-64 overflow-hidden">

          <img
            src="/images/cairo-explorer-main.jpg"
            alt=""
            className="
            h-full
            w-full
            object-cover
            duration-700
            group-hover:scale-110
            "
          />

        </div>

        <div className="p-8">

          <h3 className="text-2xl font-bold">

            Cairo Explorer – 2 Day Private Tour

          </h3>

          <Link
            to="/tours"
            className="
            inline-block
            mt-4
            text-amber-400
            "
          >
            Explore →
          </Link>

        </div>

      </motion.div>

    </div>

  </div>

</section>

      {/* WHY CAIRO EXCURSION */}

<section className="relative overflow-hidden py-32 bg-zinc-950">

  {/* Background Glow */}

  <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/10 blur-[180px]" />

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    <div className="text-center">

      <p className="uppercase tracking-[0.4em] text-amber-400 text-sm">

        WHY CHOOSE US

      </p>

      <h2 className="mt-6 text-5xl md:text-7xl font-bold">

        Why Cairo Excursion?

      </h2>

      <p className="mt-8 max-w-3xl mx-auto text-xl text-gray-400">

        Experience Egypt through personalized journeys,
        private transportation and expert local knowledge.

      </p>

    </div>

    <div className="mt-24 grid md:grid-cols-2 xl:grid-cols-3 gap-8">

      {/* Card */}

      <motion.div
        whileHover={{
          y: -10
        }}
        className="
        rounded-[40px]
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        p-10
        "
      >

        <div className="text-5xl">

          🚐

        </div>

        <h3 className="mt-8 text-3xl font-bold">

          Private Transportation

        </h3>

        <p className="mt-5 text-gray-400 leading-relaxed">

          Comfortable private transportation with
          flexible pickup locations and schedules.

        </p>

      </motion.div>

      {/* Card */}

      <motion.div
        whileHover={{
          y: -10
        }}
        className="
        rounded-[40px]
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        p-10
        "
      >

        <div className="text-5xl">

          🕵🏻‍♂️

        </div>

        <h3 className="mt-8 text-3xl font-bold">

          Expert Local Guides

        </h3>

        <p className="mt-5 text-gray-400 leading-relaxed">

          Discover Egypt through passionate guides
          who know the stories behind every monument.

        </p>

      </motion.div>

      {/* Card */}

      <motion.div
        whileHover={{
          y: -10
        }}
        className="
        rounded-[40px]
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        p-10
        "
      >

        <div className="text-5xl">

          🕒

        </div>

        <h3 className="mt-8 text-3xl font-bold">

          Flexible Scheduling

        </h3>

        <p className="mt-5 text-gray-400 leading-relaxed">

          Start your adventure when it suits you.
          Every experience is built around your plans.

        </p>

      </motion.div>

      {/* Card */}

      <motion.div
        whileHover={{
          y: -10
        }}
        className="
        rounded-[40px]
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        p-10
        "
      >

        <div className="text-6xl">

          🔒

        </div>

        <h3 className="mt-8 text-3xl font-bold">

          Secure Payments

        </h3>

        <p className="mt-5 text-gray-400 leading-relaxed">

          Book confidently with secure payment methods
          and reliable reservation management.

        </p>

      </motion.div>

      {/* Card */}

      <motion.div
        whileHover={{
          y: -10
        }}
        className="
        rounded-[40px]
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        p-10
        "
      >

        <div className="text-6xl">

          ⭐

        </div>

        <h3 className="mt-8 text-3xl font-bold">

          Personalized Experiences

        </h3>

        <p className="mt-5 text-gray-400 leading-relaxed">

          Every traveler is different. We create
          experiences tailored to your interests.

        </p>

      </motion.div>

      {/* Card */}

      <motion.div
        whileHover={{
          y: -10
        }}
        className="
        rounded-[40px]
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        p-10
        "
      >

        <div className="text-6xl">

          🌍

        </div>

        <h3 className="mt-8 text-3xl font-bold">

          Authentic Egypt

        </h3>

        <p className="mt-5 text-gray-400 leading-relaxed">

          Go beyond guidebooks and experience the
          real Egypt with unforgettable moments.

        </p>

      </motion.div>

    </div>

  </div>

</section>

      {/* EXPLORE EGYPT */}

<section className="max-w-7xl mx-auto px-6 py-32">

  <div className="text-center">

    <p className="uppercase tracking-[0.4em] text-amber-400 text-sm">

      DISCOVER EGYPT

    </p>

    <h2 className="mt-6 text-5xl md:text-7xl font-bold">

      Explore Egypt

    </h2>

    <p className="mt-8 max-w-3xl mx-auto text-xl text-gray-400">

      Ancient wonders, hidden gems and unforgettable
      landscapes waiting to be discovered.

    </p>

  </div>

  <div className="mt-24 columns-1 md:columns-2 xl:columns-3 gap-8 space-y-8">

    {/* Image */}

    <motion.div
      whileHover={{ y: -10 }}
      className="
      break-inside-avoid
      overflow-hidden
      rounded-[40px]
      group
      "
    >

      <img
        src="/images/pyramid.jpg"
        alt=""
        className="
        w-full
        h-[700px]
        object-cover
        duration-700
        group-hover:scale-110
        "
      />

    </motion.div>

    {/* Image */}

    <motion.div
      whileHover={{ y: -10 }}
      className="
      break-inside-avoid
      overflow-hidden
      rounded-[40px]
      group
      "
    >

      <img
        src="/images/sphinx.jpg"
        alt=""
        className="
        w-full
        h-[400px]
        object-cover
        duration-700
        group-hover:scale-110
        "
      />

    </motion.div>

    {/* Image */}

    <motion.div
      whileHover={{ y: -10 }}
      className="
      break-inside-avoid
      overflow-hidden
      rounded-[40px]
      group
      "
    >

      <img
        src="/images/felucca.jpg"
        alt=""
        className="
        w-full
        h-[600px]
        object-cover
        duration-700
        group-hover:scale-110
        "
      />

    </motion.div>

    {/* Image */}

    <motion.div
      whileHover={{ y: -10 }}
      className="
      break-inside-avoid
      overflow-hidden
      rounded-[40px]
      group
      "
    >

      <img
        src="/images/souq.jpg"
        alt=""
        className="
        w-full
        h-[700px]
        object-cover
        duration-700
        group-hover:scale-110
        "
      />

    </motion.div>

    {/* Image */}

    <motion.div
      whileHover={{ y: -10 }}
      className="
      break-inside-avoid
      overflow-hidden
      rounded-[40px]
      group
      "
    >

      <img
        src="/images/masjid.jpg"
        alt=""
        className="
        w-full
        h-[450px]
        object-cover
        duration-700
        group-hover:scale-110
        "
      />

    </motion.div>

    {/* Image */}

    <motion.div
      whileHover={{ y: -10 }}
      className="
      break-inside-avoid
      overflow-hidden
      rounded-[40px]
      group
      "
    >

      <img
        src="/images/borj.jpg"
        alt=""
        className="
        w-full
        h-[500px]
        object-cover
        duration-700
        group-hover:scale-110
        "
      />

    </motion.div>

  </div>

</section>

      {/* GUEST EXPERIENCES */}

<section className="relative overflow-hidden bg-zinc-950 py-32">

  {/* Background Glow */}

  <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/10 blur-[180px]" />

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    <div className="text-center">

      <p className="uppercase tracking-[0.4em] text-amber-400 text-sm">

        GUEST EXPERIENCES

      </p>

      <h2 className="mt-6 text-5xl md:text-7xl font-bold">

        Loved By Travelers

      </h2>

      <p className="mt-8 max-w-3xl mx-auto text-xl text-gray-400">

        Thousands of unforgettable memories and
        five-star experiences shared by guests from
        around the world.

      </p>

    </div>

    <div className="mt-24 grid gap-8 md:grid-cols-3">

      {/* Card */}

      <motion.div
        whileHover={{
          y: -10
        }}
        className="
        rounded-[40px]
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        p-10
        "
      >

        <div className="text-amber-400 text-2xl">

          ★★★★★

        </div>

        <p className="mt-8 text-lg leading-relaxed text-gray-300">

          "The highlight of our trip to Egypt.
          Everything was perfectly organized and our guide
          made history come alive."

        </p>

        <div className="mt-10">

          <h3 className="text-xl font-bold">

            Sarah Johnson 🇺🇸

          </h3>

          <p className="mt-2 text-gray-500">

            Private Pyramid Tour

          </p>

        </div>

      </motion.div>

      {/* Card */}

      <motion.div
        whileHover={{
          y: -10
        }}
        className="
        rounded-[40px]
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        p-10
        "
      >

        <div className="text-amber-400 text-2xl">

          ★★★★★

        </div>

        <p className="mt-8 text-lg leading-relaxed text-gray-300">

          "Excellent service from beginning to end.
          Private transportation and a wonderful guide.
          Highly recommended."

        </p>

        <div className="mt-10">

          <h3 className="text-xl font-bold">

            Markus Weber 🇩🇪

          </h3>

          <p className="mt-2 text-gray-500">

            Grand Egyptian Museum Tour

          </p>

        </div>

      </motion.div>

      {/* Card */}

      <motion.div
        whileHover={{
          y: -10
        }}
        className="
        rounded-[40px]
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        p-10
        "
      >

        <div className="text-amber-400 text-2xl">

          ★★★★★

        </div>

        <p className="mt-8 text-lg leading-relaxed text-gray-300">

          "An unforgettable experience.
          Professional, friendly and extremely knowledgeable.
          We would book again without hesitation."

        </p>

        <div className="mt-10">

          <h3 className="text-xl font-bold">

            Emily Thompson 🇬🇧

          </h3>

          <p className="mt-2 text-gray-500">

            Nile Cruise Experience

          </p>

        </div>

      </motion.div>

    </div>

  </div>

</section>

     {/* FINAL CTA */}

<section className="relative overflow-hidden py-48">

  {/* Background */}

  <img
    src="/images/camel.jpg"
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

  <div className="absolute inset-0 bg-black/75" />

  {/* Golden Glow */}

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

  <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

    <p className="uppercase tracking-[0.5em] text-amber-400 text-sm">

      YOUR JOURNEY BEGINS HERE

    </p>

    <h2 className="
    mt-8
    text-5xl
    md:text-7xl
    xl:text-8xl
    font-bold
    leading-tight
    ">

      Your Egyptian Adventure

      <span className="block text-amber-400">

        Starts Here

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

      Explore ancient wonders, discover hidden gems and
      create unforgettable memories with private experiences
      crafted around you.

    </p>

    <div className="
    mt-14
    flex
    flex-col
    sm:flex-row
    justify-center
    gap-5
    ">

      <Link
        to="/tours"
        className="
        rounded-full
        bg-amber-400
        px-14
        py-6
        text-lg
        font-bold
        text-black
        hover:scale-105
        duration-300
        "
      >
        Explore Tours
      </Link>

      <Link
        to="/contact"
        className="
        rounded-full
        border
        border-white/20
        bg-white/5
        px-14
        py-6
        text-lg
        hover:bg-white/10
        duration-300
        "
      >
        Contact Us
      </Link>

    </div>

    {/* Bottom Features */}

    <div className="
    mt-20
    flex
    flex-wrap
    justify-center
    gap-8
    text-gray-400
    text-sm
    uppercase
    tracking-[0.25em]
    ">

      <span>

        Private Tours

      </span>

      <span>

        Secure Payments

      </span>

      <span>

        Flexible Scheduling

      </span>

      <span>

        Local Experts

      </span>

    </div>

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
