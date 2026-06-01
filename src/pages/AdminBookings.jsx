import { useEffect, useState } from "react";
import { API_URL } from "../config";

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

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center text-2xl">
        Loading bookings...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-3">
          Admin Dashboard
        </h1>

        <p className="text-gray-400 mb-10">
          Total Bookings: {bookings.length}
        </p>

        {bookings.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
            <h2 className="text-2xl font-bold">
              No Bookings Yet
            </h2>

            <p className="mt-3 text-gray-400">
              New customer bookings will appear
              here.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-4 text-left">
                    Name
                  </th>

                  <th className="p-4 text-left">
                    Email
                  </th>

                  <th className="p-4 text-left">
                    Phone
                  </th>

                  <th className="p-4 text-left">
                    Tour
                  </th>

                  <th className="p-4 text-left">
                    Date
                  </th>

                  <th className="p-4 text-left">
                    Guests
                  </th>

                  <th className="p-4 text-left">
                    Transport
                  </th>

                  <th className="p-4 text-left">
                    Total
                  </th>
                </tr>
              </thead>

              <tbody>
                {bookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className="border-b border-white/10 hover:bg-white/5 transition"
                  >
                    <td className="p-4">
                      {booking.name}
                    </td>

                    <td className="p-4">
                      {booking.email}
                    </td>

                    <td className="p-4">
                      {booking.phone}
                    </td>

                    <td className="p-4">
                      {booking.tour}
                    </td>

                    <td className="p-4">
                      {booking.booking_date
                        ? new Date(
                            booking.booking_date
                          ).toLocaleDateString()
                        : "-"}
                    </td>

                    <td className="p-4">
                      {booking.guests}
                    </td>

                    <td className="p-4">
                      {booking.transportation
                        ? "Yes"
                        : "No"}
                    </td>

                    <td className="p-4 font-bold">
                      ${booking.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
