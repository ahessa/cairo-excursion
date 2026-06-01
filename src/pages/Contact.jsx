import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO */}

      <section className="relative h-[50vh] overflow-hidden flex items-center justify-center text-center">

        <img
          src="/images/nile-view.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 px-6">
          <h1 className="text-6xl md:text-8xl font-bold">
            Contact Us
          </h1>

          <p className="mt-6 text-xl text-gray-300">
            Planning your Egyptian adventure?
            Let's make it unforgettable.
          </p>
        </div>

      </section>

      {/* CONTACT CONTENT */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT */}

          <div>

            <h2 className="text-4xl font-bold mb-8">
              Let's Plan Your Journey
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Whether you're looking for a private
              pyramids tour, transportation services,
              airport pickup, a Nile cruise or a fully
              customized Egyptian itinerary, we're
              here to help.
            </p>

            <div className="mt-12 space-y-6">

              <div className="flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 p-5">
                <FaWhatsapp className="text-green-500 text-3xl" />

                <div>
                  <p className="font-semibold">
                    WhatsApp
                  </p>

                  <p className="text-gray-400">
                    +20 100 123 4567
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 p-5">
                <FaEnvelope className="text-amber-400 text-3xl" />

                <div>
                  <p className="font-semibold">
                    Email
                  </p>

                  <p className="text-gray-400">
                    info@cairoexcursion.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 p-5">
                <FaMapMarkerAlt className="text-red-500 text-3xl" />

                <div>
                  <p className="font-semibold">
                    Location
                  </p>

                  <p className="text-gray-400">
                    Cairo, Egypt
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8">

            <h2 className="text-3xl font-bold mb-8">
              Send A Message
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/20 bg-black p-4"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-white/20 bg-black p-4"
              />

              <textarea
                rows="6"
                placeholder="Tell us about your trip..."
                className="w-full rounded-xl border border-white/20 bg-black p-4"
              />

              <button
                type="button"
                className="w-full rounded-full bg-amber-400 py-4 font-bold text-black hover:scale-105 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* CUSTOM TOURS CTA */}

      <section className="bg-zinc-950 py-24">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold">
            Need A Custom Tour?
          </h2>

          <p className="mt-6 text-xl text-gray-400">
            We can create completely personalized
            experiences including transportation,
            private guides, multi-day trips and
            special requests.
          </p>

          <a
            href="https://wa.me/201001234567"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-10 rounded-full bg-green-500 px-8 py-4 font-bold text-white hover:scale-105 transition"
          >
            Message Us On WhatsApp
          </a>

        </div>

      </section>

    </div>
  );
}
