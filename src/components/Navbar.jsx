import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  const linkClasses = (path) =>
    `transition duration-300 hover:text-amber-400 ${
      location.pathname === path
        ? "text-amber-400"
        : "text-white"
    }`;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="
        fixed
        top-4
        left-1/2
        z-50
        w-[95%]
        max-w-7xl
        -translate-x-1/2
        rounded-3xl
        border border-white/10
        bg-black/30
        backdrop-blur-2xl
        shadow-2xl
        "
      >
        <div className="flex items-center justify-between px-6 md:px-8 py-4">

          {/* Logo */}

          <Link
            to="/"
            className="text-lg md:text-2xl font-bold tracking-[0.25em]"
          >
            <span className="text-white">
              CAIRO
            </span>{" "}
            <span className="text-amber-400">
              EXCURSION
            </span>
          </Link>

          {/* Desktop Menu */}

          <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.25em]">

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
              to="/culture"
              className={linkClasses("/culture")}
            >
              Culture
            </Link>

            <Link
              to="/contact"
              className={linkClasses("/contact")}
            >
              Contact
            </Link>

          </div>

          {/* Desktop Button */}

          <Link
            to="/tours"
            className="
            hidden
            md:block
            rounded-full
            bg-amber-400
            px-6
            py-3
            font-bold
            text-black
            hover:scale-105
            duration-300
            "
          >
            Book Now
          </Link>

          {/* Mobile Hamburger */}

          <button
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            className="md:hidden text-3xl"
          >
            ☰
          </button>

        </div>
      </motion.nav>

      {/* Mobile Menu */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{
              opacity: 0,
              y: -20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: -20
            }}
            className="
            fixed
            top-28
            left-1/2
            z-40
            w-[95%]
            -translate-x-1/2
            rounded-3xl
            border border-white/10
            bg-black/90
            backdrop-blur-xl
            p-8
            md:hidden
            "
          >

            <div className="flex flex-col gap-6 text-center uppercase tracking-[0.25em]">

              <Link
                to="/"
                onClick={() =>
                  setMenuOpen(false)
                }
                className={linkClasses("/")}
              >
                Home
              </Link>

              <Link
                to="/tours"
                onClick={() =>
                  setMenuOpen(false)
                }
                className={linkClasses("/tours")}
              >
                Tours
              </Link>

              <Link
                to="/culture"
                onClick={() =>
                  setMenuOpen(false)
                }
                className={linkClasses("/culture")}
              >
                Culture
              </Link>

              <Link
                to="/contact"
                onClick={() =>
                  setMenuOpen(false)
                }
                className={linkClasses("/contact")}
              >
                Contact
              </Link>

              <Link
                to="/tours"
                onClick={() =>
                  setMenuOpen(false)
                }
                className="
                mt-4
                rounded-full
                bg-amber-400
                py-4
                text-black
                font-bold
                "
              >
                Book Now
              </Link>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </>
  );
}
