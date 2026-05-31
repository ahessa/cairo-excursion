import { useParams } from "react-router-dom";
import tours from "../data/tours";

export default function TourDetails() {
  const { id } = useParams();

  const tour = tours.find(
    (tour) => tour.id === id
  );

  if (!tour) {
    return (
      <div className="min-h-screen bg-black text-white pt-32 px-6">
        Tour not found.
      </div>
    );
  }

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
          <p>Duration: {tour.duration}</p>

          <p className="text-3xl font-bold">
            ${tour.price}
          </p>
        </div>

      </div>

    </div>
  );
}
