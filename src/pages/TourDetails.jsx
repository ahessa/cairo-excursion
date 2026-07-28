import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
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
    tour.price + transportPrice;

 const handleBooking = async () => {
  try {
    // Basic validation

    if (!name || !email || !phone || !date) {
      alert("Please complete all required fields.");
      return;
    }

    if (guests < 1) {
      alert("Please select at least one guest.");
      return;
    }

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
          "Content-Type": "application/json",
        },

        body: JSON.stringify(booking),
      }
    );

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(
        data.message || "Booking request failed."
      );
    }

    // Save customer name for success message

    setBookingName(name);

    // Show success message

    setBookingSuccess(true);

    // Clear form

    setName("");
    setEmail("");
    setPhone("");
    setDate("");
    setGuests(1);
    setTransportation(false);

  } catch (error) {
    console.error("Booking error:", error);

    alert(
      "Something went wrong while sending your booking request. Please try again."
    );
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO */}

<section className="relative min-h-[75vh] overflow-hidden">

  {/* Image */}

  <img
src={tour.heroImage}
    alt={tour.title}
    className="
    absolute
    inset-0
    h-full
    w-full
    object-cover
    scale-110
    "
  />

  {/* Overlay */}

  <div className="absolute inset-0 bg-black/75" />

  {/* Golden Glow */}

  <div className="
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
  " />

  {/* Content */}

  <div className="
  relative
  z-10
  flex
  min-h-[75vh]
  items-center
  justify-center
  px-6
  text-center
  ">

    <div className="max-w-5xl">

      <p className="
      uppercase
      tracking-[0.5em]
      text-sm
      text-amber-400
      ">

        PRIVATE EXPERIENCE

      </p>

      <h1 className="
      mt-8
      text-5xl
      md:text-7xl
      font-bold
      leading-tight
      ">

        {tour.title}

      </h1>

      <div className="
      mt-8
      flex
      flex-wrap
      justify-center
      gap-6
      text-gray-300
      ">

        <span>

          ★★★★★ Top Rated

        </span>

        <span>

          👥 Up to 4 Guests

        </span>

        <span>

          📅 Flexible Dates

        </span>

        <span>

          👳 Local Expert

        </span>

      </div>

      <p className="
      mt-10
      max-w-3xl
      mx-auto
      text-lg
      md:text-2xl
      text-gray-300
      leading-relaxed
      ">

        Discover one of Egypt's most unforgettable
        experiences with private guides and
        flexible scheduling.

      </p>

    </div>

  </div>

</section>

{/* EXPERIENCE GALLERY */}

<section className="max-w-7xl mx-auto px-6 -mt-24 relative z-20">

  <div
    className="
    columns-1
    md:columns-2
    lg:columns-3
    gap-6
    space-y-6
    "
  >

    {tour.gallery.map((image, index) => (

      <motion.div
        key={index}
        whileHover={{
          y: -10,
        }}
        className="
        break-inside-avoid
        overflow-hidden
        rounded-[40px]
        mb-6
        "
      >

        <img
          src={image}
          alt={`${tour.title}-${index}`}
          className={`
            w-full
            object-cover
            duration-700
            hover:scale-105
            ${
              index % 3 === 0
                ? "h-[500px]"
                : index % 2 === 0
                ? "h-[350px]"
                : "h-[250px]"
            }
          `}
        />

      </motion.div>

    ))}

  </div>

</section>
{/* CONTENT */}

<section className="max-w-7xl mx-auto px-6 py-20">

  <div className="space-y-24">

    {/* ABOUT */}

    <div>

     <p
  className="
  mt-10
  text-lg
  md:text-xl
  leading-relaxed
  text-gray-400
  "
>
  {tour.description}
</p>

      <h2 className="
      mt-6
      text-4xl
      md:text-5xl
      font-bold
      ">
        Discover The Wonders
        Of Ancient Egypt
      </h2>

      <div className="
      mt-8
      h-[2px]
      w-32
      bg-amber-400
      " />

      

    </div>


   <div
  className="
  mt-14
  grid
  md:grid-cols-2
  gap-6
  "
>
    {/* highlights */}
  {tour.highlights.map((item, index) => (

    <motion.div
      key={index}
      whileHover={{ y: -10 }}
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
        {item.icon}
      </div>

      <h3 className="mt-6 text-2xl font-bold">
        {item.title}
      </h3>

      <p className="mt-4 text-gray-400 leading-relaxed">
        {item.text}
      </p>

    </motion.div>

  ))}

</div>


    {/* WHAT'S INCLUDED */}

    
<div>

  <h2 className="text-4xl font-bold">
    What's Included
  </h2>

  <div
    className="
    mt-10
    rounded-[40px]
    border
    border-white/10
    bg-white/5
    backdrop-blur-xl
    p-10
    "
  >

    <div
      className="
      grid
      md:grid-cols-2
      gap-8
      "
    >

      {tour.included.map((item, index) => (

        <div
          key={index}
          className="
          flex
          gap-4
          items-start
          "
        >

          <span className="text-2xl">
            ✓
          </span>

          <p className="text-gray-300">
            {item}
          </p>

        </div>

      ))}

    </div>

  </div>

</div>

    {/* NOT INCLUDED */}

    <div>

      <h2 className="text-4xl font-bold">
        Not Included
      </h2>

      <div className="
      mt-10
      rounded-[40px]
      border border-white/10
      bg-white/5
      backdrop-blur-xl
      p-10
      space-y-6
      ">

       {tour.notIncluded.map((item, index) => (

  <p key={index}>
    ✗ {item}
  </p>

))}

      </div>

    </div>


    {/* TRANSPORTATION */}

    <div>

      <h2 className="text-4xl font-bold">
        Transportation
      </h2>

      <div className="
      mt-10
      rounded-[40px]
      border border-white/10
      bg-white/5
      backdrop-blur-xl
      p-10
      ">

        <p className="text-gray-400 leading-8">

          {tour.transportation}

        </p>

      </div>

    </div>


    {/* TICKETS */}

    <div>

      <h2 className="text-4xl font-bold">
        Ticket Information
      </h2>

      <div className="
      mt-10
      rounded-[40px]
      border border-white/10
      bg-white/5
      backdrop-blur-xl
      p-10
      ">

        <p className="text-gray-400 leading-8">

          {tour.ticketInfo}

        </p>

      </div>

    </div>



{/* FREQUENTLY ASKED QUESTIONS */}

<div>

  <p
    className="
    uppercase
    tracking-[0.4em]
    text-sm
    text-amber-400
    "
  >
    FAQ
  </p>

  <h2
    className="
    mt-6
    text-4xl
    md:text-5xl
    font-bold
    "
  >
    Frequently Asked Questions
  </h2>

  <div
    className="
    mt-14
    space-y-6
    "
  >

    {tour.faq.map((item, index) => (

      <div
        key={index}
        className="
        rounded-[32px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-8
        "
      >

        <h3 className="text-2xl font-bold">
          {item.question}
        </h3>

        <p
          className="
          mt-4
          text-gray-400
          leading-relaxed
          "
        >
          {item.answer}
        </p>

      </div>

    ))}

  </div>

</div>

</div>

</section>



{/* BOOK YOUR EXPERIENCE */}

<section className="mt-32">

  <div className="max-w-4xl mx-auto px-6">

    <div className="text-center">

      <p className="
      uppercase
      tracking-[0.4em]
      text-sm
      text-amber-400
      ">

        RESERVE YOUR EXPERIENCE

      </p>

      <h2 className="
      mt-6
      text-5xl
      md:text-6xl
      font-bold
      ">

        Book Your Adventure

      </h2>

      <p className="
      mt-6
      text-gray-400
      text-lg
      max-w-2xl
      mx-auto
      ">

        Secure your private experience with
        instant confirmation and secure payment.

      </p>

    </div>

    <div className="mt-16">

     {/* BOOKING CARD */}



<div>



  <div

    className="

    sticky

    top-32

    rounded-[40px]

    border

    border-white/10

    bg-white/5

    backdrop-blur-xl

    p-8

    shadow-2xl

    "

  >



    {/* PRICE */}



    <div className="mb-10">



      <p className="uppercase tracking-[0.3em] text-sm text-amber-400">

        PRIVATE EXPERIENCE

      </p>



      <h2 className="mt-4 text-6xl font-bold text-amber-400">

        ${tour.price}

      </h2>



      <p className="mt-3 text-gray-400">

        Fixed price • Up to 4 guests

      </p>



    </div>



    {/* INFO BOX */}



    <div

      className="

      rounded-[32px]

      border border-amber-400/20

      bg-amber-400/10

      p-6

      mb-8

      "

    >



      <div className="space-y-4 text-gray-300">



        <div>✓ Up to 4 Guests</div>



        <div>✓ Flexible Scheduling</div>



        <div>✓ Secure Payments</div>



        <div>✓ Instant Confirmation</div>



      </div>



    </div>



    {/* FORM */}



    <div className="space-y-5">



      <input

        type="text"

        placeholder="Full Name"

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

        p-4

        outline-none

        focus:border-amber-400

        duration-300

        "

      />



      <input

        type="email"

        placeholder="Email Address"

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

        p-4

        outline-none

        focus:border-amber-400

        duration-300

        "

      />



      <input

        type="tel"

        placeholder="Phone Number"

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

        p-4

        outline-none

        focus:border-amber-400

        duration-300

        "

      />



      <input

        type="date"

        value={date}

        onChange={(e) =>

          setDate(e.target.value)

        }

        className="

        w-full

        rounded-2xl

        border

        border-white/10

        bg-black/40

        p-4

        outline-none

        focus:border-amber-400

        duration-300

        "

      />



      <input

        type="number"

        min="1"

        max="10"

        value={guests}

        onChange={(e) =>

          setGuests(Number(e.target.value))

        }

        className="

        w-full

        rounded-2xl

        border

        border-white/10

        bg-black/40

        p-4

        outline-none

        focus:border-amber-400

        duration-300

        "

      />



      {/* LARGE GROUP */}



      {guests > 4 && (



        <div

          className="

          rounded-[32px]

          border

          border-green-500/20

          bg-green-500/10

          p-6

          "

        >



          <h3 className="font-bold text-green-400">

            Need a larger group?

          </h3>



          <p className="mt-4 text-gray-300 leading-relaxed">

            For groups larger than four guests,

            please contact us via WhatsApp and

            we'll design a custom experience.

          </p>



          <a

            href="https://wa.me/201093302055"

            target="_blank"

            rel="noreferrer"

            className="

            inline-block

            mt-5

            rounded-full

            bg-green-500

            px-6

            py-3

            font-bold

            "

          >

            WhatsApp Us

          </a>



        </div>



      )}



      {/* TRANSPORTATION */}



      <div

        className="

        rounded-[32px]

        border

        border-white/10

        bg-white/5

        p-6

        "

      >



        <label className="flex items-center justify-between">



          <div>



            <h3 className="font-bold">

              Private Transportation

            </h3>



            <p className="mt-2 text-sm text-gray-400">

              Add comfortable door-to-door transportation.

            </p>



          </div>



          <input

            type="checkbox"

            checked={transportation}

            onChange={(e) =>

              setTransportation(

                e.target.checked

              )

            }

            className="h-5 w-5"

          />



        </label>



      </div>



     {/* TOTAL */}

<div className="border-t border-white/10 pt-8">

  <div className="flex items-end justify-between">

    <div>

      <p className="text-gray-500 uppercase tracking-[0.3em] text-sm">
        Total Price
      </p>

      <h3 className="mt-3 text-6xl font-bold text-amber-400">
        ${total}
      </h3>

      <p className="mt-2 text-gray-500">
        USD
      </p>

    </div>

    <div>

      <div className="
      rounded-full
      border
      border-green-500/20
      bg-green-500/10
      px-4
      py-2
      ">

        <span className="text-green-400 font-semibold">

          Secure Payment

        </span>

      </div>

    </div>

  </div>

</div>


{/* PAYMENT NOTICE */}

<div
  className="
  mt-10
  rounded-[32px]
  border
  border-amber-400/20
  bg-amber-400/10
  p-7
  "
>

  <p className="
  uppercase
  tracking-[0.4em]
  text-sm
  text-amber-400
  ">

    PAYMENT INFORMATION

  </p>

  <h3 className="
  mt-5
  text-3xl
  font-bold
  ">

    ${total} USD

  </h3>

  {/* <p className="
  mt-5
  text-gray-300
  leading-relaxed
  ">

    Payments are securely processed through
    Paymob.

    Your card will be charged in

    <span className="text-amber-400 font-semibold">

      {" "}Egyptian Pounds (EGP)

    </span>

    using the current exchange rate.

  </p> */}

</div>

{/* BUTTON */}

<button

  onClick={handleBooking}

  disabled={isSubmitting}

  className="

  mt-10

  w-full

  rounded-full

  bg-amber-400

  py-5

  text-lg

  font-bold

  text-black

  hover:scale-105

  duration-300

  disabled:opacity-50

  "

>

{isSubmitting
  ? "Sending Request..."
  : "Request Booking"}

</button>


<p
  className="
  mt-5
  text-center
  text-sm
  text-gray-500
  "
>
No online payment required. Submit your request and we'll contact you to confirm availability and payment options.
</p>


      {/* SUCCESS MESSAGE */}



      <AnimatePresence>



        {bookingSuccess && (



          <motion.div

            initial={{

              opacity: 0,

              y: 20

            }}

            animate={{

              opacity: 1,

              y: 0

            }}

            exit={{

              opacity: 0,

              y: 20

            }}

            className="

            rounded-[32px]

            border

            border-green-500/20

            bg-green-500/10

            p-6

            "

          >



            <h3 className="text-xl font-bold text-green-400">

              ✓ Booking Confirmed

            </h3>



            <p className="mt-4 text-gray-300">



              Thank you {bookingName}.



              Your reservation has been received and

              we will contact you shortly.



            </p>



          </motion.div>



        )}



      </AnimatePresence>



    </div>



  </div>



</div>

    </div>

  </div>

</section>

      
      {/* SIMILAR EXPERIENCES */}

<section className="mt-40 pb-40 bg-black">

  <div className="max-w-7xl mx-auto px-6">

    <p className="
    uppercase
    tracking-[0.4em]
    text-sm
    text-amber-400
    ">
      DISCOVER MORE
    </p>

    <h2 className="
    mt-6
    text-4xl
    md:text-5xl
    font-bold
    ">
      Similar Experiences
    </h2>

    <div className="
    mt-16
mb-32
grid
md:grid-cols-3
gap-8
    ">

      {tours
        .filter((t) => t.id !== tour.id)
        .slice(0, 3)
        .map((item) => (

          <motion.div
            key={item.id}
            whileHover={{
              y: -10
            }}
            className="
            group
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            shadow-2xl
            "
          >

            {/* IMAGE */}

            <div className="overflow-hidden h-72">

              <img
                src={item.heroImage}
                alt={item.title}
                className="
                h-full
                w-full
                object-cover
                duration-700
                group-hover:scale-110
                "
              />

            </div>

            {/* CONTENT */}

            <div className="p-8">

              <div className="
              flex
              items-center
              justify-between
              gap-4
              ">

                <h3 className="
                text-2xl
                font-bold
                ">
                  {item.title}
                </h3>

                <span className="
                text-amber-400
                font-bold
                text-2xl
                ">
                  ${item.price}
                </span>

              </div>

              <p className="
              mt-5
              text-gray-400
              leading-relaxed
              ">
                {item.description.slice(0, 120)}...
              </p>

              <Link
                to={`/tour/${item.id}`}
                className="
                inline-block
                mt-8
                rounded-full
                bg-amber-400
                px-6
                py-3
                font-bold
                text-black
                hover:scale-105
                duration-300
                "
              >
                Explore Experience
              </Link>

            </div>

          </motion.div>

        ))}

    </div>

  </div>

</section>

    </div>
  );
}
