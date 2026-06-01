import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();

  const linkClasses = (path) =>
    `transition hover:text-amber-400 ${
      location.pathname === path
        ? "text-amber-400"
        : "text-white"
    }`;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl"
    >
      <div className="flex items-center justify-between px-8 py-4">

        <Link
          to="/"
          className="text-xl md:text-2xl font-bold tracking-wider"
        >
          <span className="text-white">
            CAIRO
          </span>{" "}
          <span className="text-amber-400">
            EXCURSION
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">
          <Link
            to="/"
            className={linkClasses("/")}
          >
            Home
          </Link>

          <Link
            to="/tours"
            className={linkClasses("/tours")}
          >
            Tours
          </Link>

          <Link
            to="/contact"
            className={linkClasses("/contact")}
          >
            Contact
          </Link>
        </div>

        <Link
          to="/tours"
          className="rounded-full bg-amber-400 px-5 py-2 font-semibold text-black hover:scale-105 transition"
        >
          Book Now
        </Link>

      </div>
    </motion.nav>
  );
}
