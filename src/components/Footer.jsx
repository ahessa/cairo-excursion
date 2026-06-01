export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-16 text-white">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        <div>
          <h3 className="text-2xl font-bold">
            Cairo Excursion
          </h3>

          <p className="mt-4 text-gray-400">
            Private tours, transportation
            services and unforgettable
            Egyptian experiences.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4">
            Services
          </h4>

          <ul className="space-y-2 text-gray-400">
            <li>Private Tours</li>
            <li>Transportation</li>
            <li>Custom Itineraries</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">
            Contact
          </h4>

          <ul className="space-y-2 text-gray-400">
            <li>WhatsApp</li>
            <li>Email</li>
            <li>Cairo, Egypt</li>
          </ul>
        </div>

      </div>

      <div className="mt-12 text-center text-gray-500">
        © 2026 Cairo Excursion.
        All Rights Reserved.
      </div>

    </footer>
  );
}
