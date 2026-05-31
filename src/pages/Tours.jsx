import { Link } from "react-router-dom";
import tours from "../data/tours";

export default function Tours() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-12">
          Our Tours
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="overflow-hidden rounded-3xl bg-white/5 border border-white/10"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold">
                  {tour.title}
                </h2>

                <p className="text-gray-400 mt-3">
                  {tour.description}
                </p>

                <div className="mt-6 flex justify-between items-center">
                  <span className="text-2xl font-bold">
                    ${tour.price}
                  </span>

                  <Link
                    to={`/tour/${tour.id}`}
                    className="bg-white text-black px-4 py-2 rounded-full"
                  >
                    View Tour
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
