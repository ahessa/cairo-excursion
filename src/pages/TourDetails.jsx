import { useState } from "react";
import { useParams } from "react-router-dom";
import tours from "../data/tours";

export default function TourDetails() {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [transportation, setTransportation] =
    useState(false);

  const tour = tours.find(
    (tour) => tour.id === id
  );

  if (!tour) {
    return (
      <div className="min-h-screen bg-black text-white pt-32 px-6">
        <h1 className="text-4xl font-bold">
          Tour not found
        </h1>
      </div>
    );
  }

  const transportPrice = transportation
    ? tour.transportationPrice
    : 0;

  const total =
    tour.price * guests + transportPrice;

  const handleBooking = () => {
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

    console.log("Booking Submitted:");
    console.log(booking);

    alert("Booking submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <img
        src={tour.image}
        alt={tour.title}
        className="h-[500px] w-full object-cover"
      />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold">
          {tour.title}
        </h1>

        <p className="mt-6 text-xl text-gray-400">
          {tour.description}
        </p>

        <div className="mt-8 space-y-2">
          <p className="text-lg">
            Duration: {tour.duration}
          </p>

          <p className="text-3xl font-bold">
            ${tour.price}
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
          <h2 className="text-3xl font-bold mb-8">
            Book This Tour
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block mb-2">
                Full Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                placeholder="John Smith"
                className="w-full rounded-xl bg-black border border-white/20 p-3"
              />
            </div>

            <div>
              <label className="block mb-2">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="john@example.com"
                className="w-full rounded-xl bg-black border border-white/20 p-3"
              />
            </div>

            <div>
              <label className="block mb-2">
                Phone Number
              </label>

              <input
                type="tel"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
                placeholder="+20 123 456 7890"
                className="w-full rounded-xl bg-black border border-white/20 p-3"
              />
            </div>

            <div>
              <label className="block mb-2">
                Select Date
              </label>

              <input
                type="date"
                value={date}
                onChange={(e) =>
                  setDate(e.target.value)
                }
                className="w-full rounded-xl bg-black border border-white/20 p-3"
              />
            </div>

            <div>
              <label className="block mb-2">
                Number of Guests
              </label>

              <input
                type="number"
                min="1"
                value={guests}
                onChange={(e) =>
                  setGuests(Number(e.target.value))
                }
                className="w-full rounded-xl bg-black border border-white/20 p-3"
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={transportation}
                onChange={(e) =>
                  setTransportation(
                    e.target.checked
                  )
                }
              />

              <label>
                Add Transportation (+$
                {tour.transportationPrice})
              </label>
            </div>

            <div className="border-t border-white/10 pt-6 space-y-2">
              <p>
                Tour Price: ${tour.price} × {guests}
              </p>

              <p>
                Transportation: $
                {transportPrice}
              </p>

              <h3 className="text-3xl font-bold">
                Total: ${total}
              </h3>
            </div>

            <button
              onClick={handleBooking}
              className="w-full rounded-full bg-white py-4 text-black font-bold hover:scale-105 transition"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
