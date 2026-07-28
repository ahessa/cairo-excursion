import { Link } from "react-router-dom";
import { FaTimesCircle, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function PaymentFailed() {

  return (

    <div className="bg-black text-white min-h-screen overflow-hidden">

      {/* BACKGROUND */}

      <div className="absolute inset-0">

        <img
          src="/images/camel.jpg"
          alt=""
          className="
          h-full
          w-full
          object-cover
          scale-110
          opacity-20
          "
        />

      </div>

      <div className="absolute inset-0 bg-black/90" />

      {/* RED GLOW */}

      <div
        className="
        absolute
        left-1/2
        top-1/2
        h-[500px]
        w-[500px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-red-500/20
        blur-[180px]
        "
      />

      {/* CONTENT */}

      <div
        className="
        relative
        z-10
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        "
      >

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
            duration: 0.8
          }}

          className="
          max-w-3xl
          rounded-[40px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          p-12
          text-center
          shadow-2xl
          "
        >

          <FaTimesCircle
            className="
            mx-auto
            text-8xl
            text-red-500
            "
          />

          <p
            className="
            mt-8
            uppercase
            tracking-[0.4em]
            text-sm
            text-red-400
            "
          >
            PAYMENT UNSUCCESSFUL
          </p>

          <h1
            className="
            mt-6
            text-5xl
            md:text-7xl
            font-bold
            "
          >
            Payment
            <span className="block text-red-500">
              Failed
            </span>
          </h1>

          <p
            className="
            mt-8
            text-xl
            text-gray-300
            leading-relaxed
            "
          >

            Unfortunately, your payment
            could not be completed.

            No charges have been made.

          </p>


          {/* INFO BOX */}

          <div
            className="
            mt-12
            rounded-[32px]
            border
            border-red-500/20
            bg-red-500/10
            p-8
            text-left
            "
          >

            <h3 className="text-2xl font-bold">

              What Can You Do?

            </h3>

            <div className="mt-6 space-y-4 text-gray-300">

              <div>
                ✓ Try again in a few moments
              </div>

              <div>
                ✓ Use another card
              </div>

              <div>
                ✓ Contact us for assistance
              </div>

              <div>
                ✓ No charges have been made
              </div>

            </div>

          </div>


          {/* BUTTONS */}

          <div
            className="
            mt-12
            flex
            flex-col
            md:flex-row
            justify-center
            gap-5
            "
          >

            <Link
              to="/tours"
              className="
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
              Try Again
            </Link>

            <a
              href="https://wa.me/201093302055"
              target="_blank"
              rel="noreferrer"
              className="
              rounded-full
              bg-green-500
              px-8
              py-4
              font-bold
              text-white
              hover:scale-105
              duration-300
              flex
              items-center
              justify-center
              gap-3
              "
            >

              <FaWhatsapp />

              WhatsApp Support

            </a>

          </div>

        </motion.div>

      </div>

    </div>

  );

}
