import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Tours from "./pages/Tours";
import TourDetails from "./pages/TourDetails";
import Contact from "./pages/Contact";
import AdminBookings from "./pages/AdminBookings";
import Footer from "./components/Footer";
import Culture from "./pages/Culture";
import WhatsAppButton from "./components/WhatsAppButton";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFailed from "./pages/PaymentFailed";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
	
	
	
        <Route
          path="/tours"
          element={<Tours />}
        />
	<Route
	  path="/culture"
	  element={<Culture />}
	/>
        <Route
          path="/tour/:id"
          element={<TourDetails />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
	path="/admin/bookings"
  	element={<AdminBookings />}
	/>
	
	<Route
	  path="/payment-success"
	  element={<PaymentSuccess />}
	/>
	
	<Route
  path="/payment-failed"
  element={<PaymentFailed />}
/>
	
      </Routes>
      <WhatsAppButton />
      <Footer />
      
    </BrowserRouter>
    
  );
}
