import { useEffect, useState } from "react";
import { API_URL } from "../config";

import {
  FaWhatsapp,
  FaEnvelope,
  FaTrash,
  FaCheckCircle,
} from "react-icons/fa";

export default function AdminBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/bookings`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);
const handleDelete = async (id) => {
  const confirmed = window.confirm(
    "Are you sure you want to delete this booking?"
  );

  if (!confirmed) {
    return;
  }

  try {
    const response = await fetch(
      `${API_URL}/api/bookings/${id}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(
        data.message || "Failed to delete booking"
      );
    }

    // Remove it immediately from the dashboard
    setBookings((currentBookings) =>
      currentBookings.filter(
        (booking) => booking.id !== id
      )
    );
  } catch (error) {
    console.error("Delete error:", error);

    alert(
      "Could not delete the booking. Please try again."
    );
  }
};

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center text-3xl">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HEADER */}

      <section className="border-b border-white/10 bg-gradient-to-b from-zinc-900 to-black">

        <div className="max-w-7xl mx-auto px-6 py-16">

          <p className="uppercase tracking-[0.4em] text-sm text-amber-400">
            Cairo Excursion
          </p>

          <h1 className="mt-5 text-5xl md:text-7xl font-bold">
            Admin Dashboard
          </h1>

          <p className="mt-5 text-gray-400 text-lg">
            Manage bookings and monitor your business.
          </p>

        </div>

      </section>


      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* STATS */}

        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <div className="rounded-[40px] border border-white/10 bg-white/5 p-8">

            <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
              Total Bookings
            </p>

            <h2 className="mt-5 text-6xl font-bold text-amber-400">
              {bookings.length}
            </h2>

          </div>


          <div className="rounded-[40px] border border-white/10 bg-white/5 p-8">

            <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
              Revenue
            </p>

            <h2 className="mt-5 text-6xl font-bold text-green-400">
              $
              {bookings.reduce(
                (sum, booking) =>
                  sum + Number(booking.total),
                0
              )}
            </h2>

          </div>


          <div className="rounded-[40px] border border-white/10 bg-white/5 p-8">

            <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
              Latest Customer
            </p>

            <h2 className="mt-5 text-3xl font-bold">

              {bookings.length > 0
                ? bookings[0].name
                : "No Customers"}

            </h2>

          </div>

        </div>


        {/* BOOKINGS */}

        {bookings.length === 0 ? (

          <div className="rounded-[40px] border border-white/10 bg-white/5 p-20 text-center">

            <h2 className="text-4xl font-bold">
              No Bookings Yet
            </h2>

            <p className="mt-6 text-gray-400">
              New reservations will appear here.
            </p>

          </div>

        ) : (

          <div className="grid gap-8">

            {bookings.map((booking) => (
            
                          <div
                key={booking.id}
                className="
                rounded-[40px]
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-10
                shadow-2xl
                "
              >

                <div className="grid lg:grid-cols-4 gap-10">

                  {/* CUSTOMER */}

                  <div>

                    <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
                      Customer
                    </p>

                    <h2 className="mt-4 text-3xl font-bold">
                      {booking.name}
                    </h2>

                    <p className="mt-3 text-gray-400">
                      {booking.email}
                    </p>

                    <p className="text-gray-400">
                      {booking.phone}
                    </p>

                  </div>


                  {/* TOUR */}

                  <div>

                    <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
                      Tour
                    </p>

                    <h3 className="mt-4 text-2xl font-bold text-amber-400">
                      {booking.tour}
                    </h3>

                    <p className="mt-3 text-gray-400">

                      {booking.booking_date
                        ? new Date(
                            booking.booking_date
                          ).toLocaleDateString()
                        : "-"}

                    </p>

                  </div>


                  {/* DETAILS */}

                  <div>

                    <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
                      Guests
                    </p>

                    <h3 className="mt-4 text-4xl font-bold">
                      {booking.guests}
                    </h3>

                    <p className="mt-3 text-gray-400">

                      Transportation:

                      <span
                        className={`ml-2 font-semibold ${
                          booking.transportation
                            ? "text-green-400"
                            : "text-gray-500"
                        }`}
                      >

                        {booking.transportation
                          ? "Yes"
                          : "No"}

                      </span>

                    </p>

                  </div>


                  {/* PRICE */}

                  <div>

                    <div
                      className="
                      inline-flex
                      items-center
                      gap-3
                      rounded-full
                      border
                      border-green-500/20
                      bg-green-500/10
                      px-5
                      py-3
                      "
                    >

                      <FaCheckCircle className="text-green-400" />

                      <span className="font-semibold text-green-400">

                        Paid

                      </span>

                    </div>

                    <h3
                      className="
                      mt-8
                      text-5xl
                      font-bold
                      text-green-400
                      "
                    >

                      ${booking.total}

                    </h3>

                  </div>

                </div>


                {/* ACTIONS */}

                <div
                  className="
                  mt-10
                  flex
                  flex-wrap
                  gap-4
                  "
                >

                  <a
                    href={`https://wa.me/${booking.phone}`}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    rounded-full
                    bg-green-500
                    px-6
                    py-3
                    font-bold
                    text-white
                    flex
                    items-center
                    gap-3
                    hover:scale-105
                    duration-300
                    "
                  >

                    <FaWhatsapp />

                    WhatsApp

                  </a>


                  <a
                    href={`mailto:${booking.email}`}
                    className="
                    rounded-full
                    bg-amber-400
                    px-6
                    py-3
                    font-bold
                    text-black
                    flex
                    items-center
                    gap-3
                    hover:scale-105
                    duration-300
                    "
                  >

                    <FaEnvelope />

                    Email

                  </a>


                  <button
                  onClick={() => handleDelete(booking.id)}
                    className="
                    rounded-full
                    border
                    border-red-500/20
                    bg-red-500/10
                    px-6
                    py-3
                    font-bold
                    text-red-400
                    flex
                    items-center
                    gap-3
                    hover:bg-red-500/20
                    duration-300
                    "
                  >

                    <FaTrash />

                    Delete

                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}
            
