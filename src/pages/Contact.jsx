import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import { API_URL } from "../config";


export default function Contact() {

const [name, setName] = useState("");

const [email, setEmail] = useState("");

const [phone, setPhone] = useState("");

const [message, setMessage] = useState("");

const [isSubmitting, setIsSubmitting] =
  useState(false);

const [success, setSuccess] =
  useState(false);
  
const handleSubmit = async () => {

  try {

    setIsSubmitting(true);

    const response = await fetch(
      `${API_URL}/api/contact`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({
          name,
          email,
          phone,
          message
        })
      }
    );

    const data = await response.json();

    if (data.success) {

      setSuccess(true);

      setName("");

      setEmail("");

      setPhone("");

      setMessage("");

    }

    else {

      alert(
        "Something went wrong."
      );

    }

  }

  catch (error) {

    console.error(error);

    alert(
      "Something went wrong."
    );

  }

  finally {

    setIsSubmitting(false);

  }

};
  return (
    <div className="bg-black text-white min-h-screen">

     {/* HERO */}

<section className="relative min-h-[70vh] overflow-hidden">

  <img
    src="/images/con.jpg"
    alt=""
    className="
    absolute
    inset-0
    h-full
    w-full
    object-cover
    scale-110
    "
  />

  <div className="absolute inset-0 bg-black/75" />

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
    bg-amber-400/20
    blur-[180px]
    "
  />

  <div
    className="
    relative
    z-10
    flex
    min-h-[70vh]
    items-center
    justify-center
    text-center
    px-6
    "
  >

    <div className="max-w-5xl">

      <p
        className="
        uppercase
        tracking-[0.5em]
        text-sm
        text-amber-400
        "
      >
        PRIVATE JOURNEYS
      </p>

      <h1
        className="
        mt-8
        text-5xl
        md:text-7xl
        font-bold
        leading-tight
        "
      >
        Let's Create

        <span className="block text-amber-400">
          Your Dream Egyptian Experience
        </span>

      </h1>

      <p
        className="
        mt-8
        text-lg
        md:text-2xl
        text-gray-300
        leading-relaxed
        max-w-3xl
        mx-auto
        "
      >
        Whether you're planning a private
        pyramids tour, a Nile cruise or a
        completely customized adventure,
        we're here to make it unforgettable.
      </p>

    </div>

  </div>

</section>

      {/* CONTACT CONTENT */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT */}

<div>

  <p
    className="
    uppercase
    tracking-[0.4em]
    text-sm
    text-amber-400
    "
  >
    GET IN TOUCH
  </p>

  <h2
    className="
    mt-6
    text-4xl
    md:text-5xl
    font-bold
    "
  >
    Let's Plan Your Journey
  </h2>

  <p
    className="
    mt-8
    text-lg
    text-gray-400
    leading-relaxed
    "
  >
    We specialize in private tours,
    transportation services and
    tailor-made Egyptian experiences.
  </p>


  <div className="mt-14 space-y-6">

    {/* WhatsApp */}

    <a
      href="https://wa.me/201093302055"
      target="_blank"
      rel="noreferrer"
      className="
      flex
      items-center
      gap-6
      rounded-[32px]
      border
      border-white/10
      bg-white/5
      p-8
      hover:border-green-500
      duration-300
      "
    >

      <FaWhatsapp
        className="
        text-5xl
        text-green-500
        "
      />

      <div>

        <h3 className="text-2xl font-bold">
          WhatsApp
        </h3>

        <p className="mt-2 text-gray-400">
          Fastest way to reach us.
        </p>

        <p className="mt-1 text-gray-500">
          Available daily
        </p>

      </div>

    </a>


    {/* Email */}

    <div
      className="
      flex
      items-center
      gap-6
      rounded-[32px]
      border
      border-white/10
      bg-white/5
      p-8
      "
    >

      <FaEnvelope
        className="
        text-5xl
        text-amber-400
        "
      />

      <div>

        <h3 className="text-2xl font-bold">
          Email
        </h3>

        <p className="mt-2 text-gray-400">
          info@cairoexcursion.com
        </p>

        <p className="mt-1 text-gray-500">
          Perfect for detailed requests
        </p>

      </div>

    </div>


    {/* Location */}

    <div
      className="
      flex
      items-center
      gap-6
      rounded-[32px]
      border
      border-white/10
      bg-white/5
      p-8
      "
    >

      <FaMapMarkerAlt
        className="
        text-5xl
        text-red-500
        "
      />

      <div>

        <h3 className="text-2xl font-bold">
          Cairo, Egypt
        </h3>

        <p className="mt-2 text-gray-400">
          Local expertise and private experiences.
        </p>

        <p className="mt-1 text-gray-500">
          Available Daily
        </p>

      </div>

    </div>

  </div>

</div>

          {/* RIGHT */}

<div
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

  <p
    className="
    uppercase
    tracking-[0.4em]
    text-sm
    text-amber-400
    "
  >
    START PLANNING
  </p>

  <h2
    className="
    mt-6
    text-4xl
    font-bold
    "
  >
    Tell Us About
    Your Dream Trip
  </h2>

  <p
    className="
    mt-6
    text-gray-400
    leading-relaxed
    "
  >
    Share your plans and we'll help create
    the perfect Egyptian experience for you.
  </p>


  <form className="mt-12 space-y-6">

    {/* NAME */}

    <input
  type="text"
  placeholder="👤 Your Name"
  value={name}
  onChange={(e) =>
    setName(e.target.value)
  }
  className="
  w-full
  rounded-2xl
  border
  border-white/10
  bg-black/40
  p-5
  outline-none
  duration-300
  focus:border-amber-400
  "
/>


    {/* EMAIL */}

    <input
      type="email"
      placeholder="✉ Email Address"
      value={email}

onChange={(e) =>
  setEmail(e.target.value)
}
      className="
      w-full
      rounded-2xl
      border
      border-white/10
      bg-black/40
      p-5
      outline-none
      duration-300
      focus:border-amber-400
      "
    />


    {/* PHONE */}

    <input
      type="tel"
      placeholder="📞 WhatsApp Number"
      value={phone}

onChange={(e) =>
  setPhone(e.target.value)
}
      className="
      w-full
      rounded-2xl
      border
      border-white/10
      bg-black/40
      p-5
      outline-none
      duration-300
      focus:border-amber-400
      "
    />


    {/* MESSAGE */}

    <textarea
      rows="8"
      placeholder="✈ Tell us about your dream trip..."
      value={message}

onChange={(e) =>
  setMessage(e.target.value)
}
      className="
      w-full
      rounded-2xl
      border
      border-white/10
      bg-black/40
      p-5
      outline-none
      duration-300
      focus:border-amber-400
      "
    />


    {/* INFO BOX */}

    <div
      className="
      rounded-[32px]
      border
      border-amber-400/20
      bg-amber-400/10
      p-6
      "
    >

      <div className="space-y-3 text-gray-300">

        <div>
          ✓ Private Tours
        </div>

        <div>
          ✓ Airport Transfers
        </div>

        <div>
          ✓ Luxury Transportation
        </div>

        <div>
          ✓ Custom Itineraries
        </div>

      </div>

    </div>


    {/* BUTTON */}


    <button
  type="button"
  onClick={handleSubmit}
  disabled={isSubmitting}
  className="
  w-full
  rounded-full
  bg-amber-400
  py-5
  text-lg
  font-bold
  text-black
  transition
  duration-300
  hover:scale-105
  disabled:opacity-50
  "
>

  {isSubmitting
    ? "Sending..."
    : "Start Planning →"}

</button>
{success && (

  <div
    className="
    rounded-[32px]
    border
    border-green-500/20
    bg-green-500/10
    p-6
    "
  >

    <h3
      className="
      text-xl
      font-bold
      text-green-400
      "
    >
      ✓ Message Received
    </h3>

    <p
      className="
      mt-3
      text-gray-300
      "
    >

      Thank you for reaching out.

      We'll get back to you shortly.

    </p>

  </div>

)}

    <p
      className="
      text-center
      text-sm
      text-gray-500
      "
    >
      We typically reply within a few hours.
    </p>

  </form>

</div>
        </div>

      </section>

      {/* FINAL CTA */}

<section
  className="
  relative
  overflow-hidden
  py-40
  "
>

  <img
    src="/images/camel.jpg"
    alt=""
    className="
    absolute
    inset-0
    h-full
    w-full
    object-cover
    scale-110
    "
  />

  <div className="absolute inset-0 bg-black/80" />

  {/* Glow */}

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
    bg-amber-400/20
    blur-[180px]
    "
  />

  <div
    className="
    relative
    z-10
    max-w-5xl
    mx-auto
    px-6
    text-center
    "
  >

    <p
      className="
      uppercase
      tracking-[0.5em]
      text-sm
      text-amber-400
      "
    >
      BESPOKE EXPERIENCES
    </p>

    <h2
      className="
      mt-8
      text-5xl
      md:text-7xl
      font-bold
      leading-tight
      "
    >

      Need Something

      <span className="block text-amber-400">

        Truly Unique?

      </span>

    </h2>

    <p
      className="
      mt-10
      text-xl
      text-gray-300
      leading-relaxed
      max-w-3xl
      mx-auto
      "
    >

      From multi-day adventures and luxury
      transportation to completely customized
      itineraries, we'll design an unforgettable
      Egyptian experience tailored exclusively
      for you.

    </p>


    {/* FEATURES */}

    <div
      className="
      mt-16
      grid
      md:grid-cols-3
      gap-8
      "
    >

      <div
        className="
        rounded-[32px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-8
        "
      >

        <div className="text-5xl">

          ✈️

        </div>

        <h3 className="mt-6 text-2xl font-bold">

          Multi-Day Trips

        </h3>

      </div>


      <div
        className="
        rounded-[32px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-8
        "
      >

        <div className="text-5xl">

          🚐

        </div>

        <h3 className="mt-6 text-2xl font-bold">

          Luxury Transport

        </h3>

      </div>


      <div
        className="
        rounded-[32px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-8
        "
      >

        <div className="text-5xl">

          ⭐

        </div>

        <h3 className="mt-6 text-2xl font-bold">

          Tailor-Made Experiences

        </h3>

      </div>

    </div>


    {/* BUTTON */}

    <a
      href="https://wa.me/201093302055"
      target="_blank"
      rel="noreferrer"
      className="
      inline-block
      mt-20
      rounded-full
      bg-green-500
      px-12
      py-5
      text-xl
      font-bold
      text-white
      shadow-2xl
      transition
      duration-300
      hover:scale-105
      "
    >

      Start Planning On WhatsApp →

    </a>


    <p
      className="
      mt-8
      text-gray-400
      "
    >

      We usually respond within a few hours.

    </p>

  </div>

</section>

    </div>
  );
}
