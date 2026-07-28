import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-zinc-950 text-white">

      {/* Background Glow */}

      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-400 blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        <div className="grid gap-16 md:grid-cols-4">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-bold">
              <span className="text-white">
                CAIRO
              </span>{" "}
              <span className="text-amber-400">
                EXCURSION
              </span>
            </h2>

            <p className="mt-6 leading-relaxed text-gray-400">
              Discover Egypt through
              private experiences,
              expert guides and unforgettable
              memories designed around you.
            </p>

          </div>

          {/* Explore */}

          <div>

            <h3 className="mb-6 text-lg font-bold">
              Explore
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <Link
                to="/"
                className="hover:text-amber-400 transition"
              >
                Home
              </Link>

              <Link
                to="/tours"
                className="hover:text-amber-400 transition"
              >
                Tours
              </Link>

              <Link
                to="/culture"
                className="hover:text-amber-400 transition"
              >
                Culture
              </Link>

              <Link
                to="/contact"
                className="hover:text-amber-400 transition"
              >
                Contact
              </Link>

            </div>

          </div>

          {/* Services */}

          <div>

            <h3 className="mb-6 text-lg font-bold">
              Services
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <p>
                Private Tours
              </p>

              <p>
                Airport Transfers
              </p>

              <p>
                Transportation
              </p>

              <p>
                Custom Itineraries
              </p>

              <p>
                Multi-Day Experiences
              </p>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-lg font-bold">
              Contact
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <p>
                📍 Cairo, Egypt
              </p>

              <p>
                📧 info@cairoexcursion.com
              </p>

              <p>
                📱 WhatsApp Support
              </p>

              <p>
                Available Daily
              </p>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-20 border-t border-white/10 pt-8 flex flex-col gap-4 md:flex-row md:justify-between">

          <p className="text-gray-500 text-sm">
            © 2026 Cairo Excursion.
            All rights reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Crafted with ❤️ in Egypt
          </p>

        </div>

      </div>

    </footer>
  );
}
