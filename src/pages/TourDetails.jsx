import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "react-router-dom";
import { API_URL } from "../config";
import tours from "../data/tours";

export default function TourDetails() {
  const { id } = useParams();

  const tour = tours.find(
    (tour) => tour.id === id
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(1);

  const [transportation, setTransportation] =
    useState(false);

  const [bookingSuccess, setBookingSuccess] =
    useState(false);

  const [bookingName, setBookingName] =
    useState("");

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  if (!tour) {
    return (
      <div className="min-h-screen bg-black text-white pt-32 px-6">
        <h1 className="text-4xl font-bold">
          Tour Not Found
        </h1>
      </div>
    );
  }

  const transportPrice = transportation
    ? tour.transportationPrice
    : 0;

  const total =
    tour.price * guests + transportPrice;

  const handleBooking = async () => {
    try {
      setIsSubmitting(true);

      const booking = {
        tour: tour.title,
        date,
        guests,
        transportation,
        total,
        name,
        email,
        phone,
      };

      const response = await fetch(
        `${API_URL}/api/bookings`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(booking),
        }
      );

      const data = await response.json();

      if (data.success) {
        setBookingName(name);

        setBookingSuccess(true);

        setName("");
        setEmail("");
        setPhone("");
        setDate("");
        setGuests(1);
        setTransportation(false);
      } else {
        alert("Booking failed.");
      }
    } catch (error) {
      console.error(error);

      alert(
        "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO */}

      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
          <div>
            <h1 className="text-6xl md:text-8xl font-bold">
              {tour.title}
            </h1>

            <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
              Discover one of Egypt's most
              unforgettable experiences.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-3 gap-12">

          {/* LEFT SIDE */}

          <div className="lg:col-span-2">

            <p className="text-xl text-gray-400 leading-relaxed">
              {tour.description}
            </p>

            <div className="mt-12">
              <h2 className="text-3xl font-bold mb-6">
                Tour Highlights
              </h2>

              <div className="grid md:grid-cols-2 gap-4">

                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  ✓ Professional Guide
                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  ✓ Instant Confirmation
                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  ✓ Flexible Scheduling
                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  ✓ Private Experience
                </div>

              </div>
            </div>

            <div className="mt-16">

              <h2 className="text-3xl font-bold mb-6">
                What's Included
              </h2>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 space-y-4">

                <p>
                  ✓ Expert Local Guide
                </p>

                <p>
                  ✓ Historical Commentary
                </p>

                <p>
                  ✓ Flexible Departure Time
                </p>

                <p>
                  ✓ Customer Support
                </p>

                <p>
                  ✓ Transportation Available
                </p>

              </div>

            </div>

          </div>

          {/* BOOKING CARD */}

          <div>

            <div className="sticky top-32 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8">

              <div className="mb-8">

                <h2 className="text-4xl font-bold">
                  ${tour.price}
                </h2>

                <p className="text-gray-400 mt-2">
                  per guest
                </p>

              </div>

              <div className="space-y-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  className="w-full rounded-xl border border-white/20 bg-black p-3"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  className="w-full rounded-xl border border-white/20 bg-black p-3"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value)
                  }
                  className="w-full rounded-xl border border-white/20 bg-black p-3"
                />

                <input
                  type="date"
                  value={date}
                  onChange={(e) =>
                    setDate(e.target.value)
                  }
                  className="w-full rounded-xl border border-white/20 bg-black p-3"
                />

                <input
                  type="number"
                  min="1"
                  value={guests}
                  onChange={(e) =>
                    setGuests(
                      Number(e.target.value)
                    )
                  }
                  className="w-full rounded-xl border border-white/20 bg-black p-3"
                />

                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={transportation}
                    onChange={(e) =>
                      setTransportation(
                        e.target.checked
                      )
                    }
                  />

                  Transportation (+$
                  {tour.transportationPrice})
                </label>

                <div className="border-t border-white/10 pt-6">

                  <p>
                    Tour Price:
                    {" "}
                    ${tour.price} × {guests}
                  </p>

                  <p className="mt-2">
                    Transportation:
                    {" "}
                    ${transportPrice}
                  </p>

                  <h3 className="mt-4 text-3xl font-bold text-amber-400">
                    Total: ${total}
                  </h3>

                </div>

                <div className="rounded-2xl bg-amber-400/10 border border-amber-400/20 p-4 text-sm text-gray-300">
                  Limited daily availability.
                  Reserve early for preferred dates.
                </div>

                <button
                  onClick={handleBooking}
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-amber-400 py-4 font-bold text-black transition hover:scale-105 disabled:opacity-50"
                >
                  {isSubmitting
                    ? "Processing..."
                    : "Reserve Now"}
                </button>

                <AnimatePresence>
                  {bookingSuccess && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 20,
                      }}
                      className="rounded-2xl border border-green-500/30 bg-green-500/10 p-5"
                    >
                      <h3 className="text-xl font-bold text-green-400">
                        ✓ Reservation Request Received
                      </h3>

                      <p className="mt-3 text-gray-300">
                        Thank you{" "}
                        {bookingName}.
                        We will contact you shortly
                        to confirm your experience.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}
