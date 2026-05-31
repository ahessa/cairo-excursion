import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link
          to="/"
          className="text-2xl font-bold"
        >
          Cairo Excursion
        </Link>

        <div className="flex gap-8">
          <Link to="/">Home</Link>
          <Link to="/tours">Tours</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
