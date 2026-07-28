const tours = [
  {
    id: "giza-pyramids",

    title: "Pyramids of Giza & Great Sphinx Tour",

    price: 80,

    transportationPrice: 40,

    duration: "4 Hours",

    heroImage: "/images/hero.jpg",

    gallery: [
      "/images/pyramids-main.jpg",
      "/images/sphinx.jpg",
      "/images/pyramids02.jpg"
    ],

    description:
      "Perfect for visitors who only have a morning or afternoon in Cairo. Explore the world-famous Pyramids of Giza and the Great Sphinx while learning about the beliefs, tombs and extraordinary civilization of Ancient Egypt.",

    highlights: [
      {
        icon: "🏺",
        title: "Great Pyramid of Khufu",
        text:
          "Discover the last surviving wonder of the ancient world."
      },
      {
        icon: "🦁",
        title: "The Great Sphinx",
        text:
          "Stand before Egypt's legendary guardian."
      },
      {
        icon: "📜",
        title: "Ancient Egyptian Beliefs",
        text:
          "Learn how the ancient Egyptians viewed death and the afterlife."
      },
      {
        icon: "🕵🏻‍♂️",
        title: "Private Egyptologist Guide",
        text:
          "Enjoy a personalized experience with an expert guide."
      }
    ],

    included: [
      "Private Egyptologist Guide",
      "Historical Commentary",
      "Flexible Departure Time"
    ],

    notIncluded: [
      "Entrance Tickets",
      "Transportation",
      "Food and Drinks"
    ],

    transportation:
      "Private transportation can be arranged upon request.",

    ticketInfo:
      "Entrance tickets are not included and can be purchased separately.",

    faq: [
      {
        question:
          "How long is the tour?",
        answer:
          "The experience lasts approximately four hours."
      },
      {
        question:
          "Is transportation included?",
        answer:
          "Transportation can be added during booking."
      },
      {
        question:
          "Is this suitable for children?",
        answer:
          "Absolutely. This tour is suitable for all ages."
      }
    ]
  },
  
    {
    id: "gem",

    title: "Grand Egyptian Museum Tour",

    price: 120,

    transportationPrice: 40,

    duration: "4 Hours",

    heroImage: "/images/gem-main.jpg",

    gallery: [
      "/images/gem-main.jpg",
      "/images/gem02.jpg",
      "/images/gem03.jpg"
    ],

    description:
      "Explore the newly opened Grand Egyptian Museum and discover the complete treasures of King Tutankhamun with a private Egyptologist guide.",

    highlights: [
      {
        icon: "👑",
        title: "Tutankhamun Treasures",
        text:
          "See the complete collection of the young pharaoh's treasures."
      },
      {
        icon: "🏛️",
        title: "World's Largest Archaeological Museum",
        text:
          "Explore one of the most ambitious museums ever built."
      },
      {
        icon: "📜",
        title: "Ancient Artifacts",
        text:
          "Discover thousands of priceless treasures."
      },
      {
        icon: "🕵🏻‍♂️",
        title: "Private Egyptologist Guide",
        text:
          "Learn the incredible stories behind every exhibit."
      }
    ],

    included: [
      "Private Egyptologist Guide",
      "Historical Commentary",
      "Flexible Start Time",
      "Local Recommendations"
    ],

    notIncluded: [
      "Museum Entrance Tickets",
      "Transportation",
      "Food and Drinks"
    ],

    transportation:
      "Private transportation can be arranged upon request.",

    ticketInfo:
      "Museum tickets are not included and should be booked online in advance.",

    faq: [
      {
        question:
          "How long is the tour?",
        answer:
          "The experience lasts approximately four hours."
      },
      {
        question:
          "Why do I need a guide?",
        answer:
          "The museum is enormous and contains thousands of artifacts."
      },
      {
        question:
          "Is this tour suitable for children?",
        answer:
          "Absolutely. The museum is suitable for all ages."
      }
    ]
  },
  
    {
    id: "pyramids-gem",

    title:
      "Pyramids of Giza & Grand Egyptian Museum Tour",

    price: 150,

    transportationPrice: 40,

    duration: "8 Hours",

    heroImage:
      "/images/pyramids-main.jpg",

    gallery: [
      "/images/pyramids-main.jpg",
      "/images/sphinx.jpg",
      "/images/gem-main.jpg"
    ],

    description:
      "Discover the timeless wonders of Ancient Egypt on this full-day private experience. Visit the Great Pyramids of Giza and the legendary Sphinx before continuing to the spectacular Grand Egyptian Museum, home to the treasures of King Tutankhamun and thousands of priceless artifacts.",

    highlights: [
      {
        icon: "🏺",
        title: "Great Pyramids of Giza",
        text:
          "Explore the last remaining wonder of the ancient world."
      },
      {
        icon: "🦁",
        title: "The Great Sphinx",
        text:
          "Stand before Egypt's most mysterious monument."
      },
      {
        icon: "👑",
        title: "Tutankhamun Treasures",
        text:
          "Discover the priceless treasures of King Tutankhamun."
      },
      {
        icon: "🕵🏻‍♂️",
        title: "Private Egyptologist Guide",
        text:
          "Experience Ancient Egypt through expert storytelling."
      }
    ],

    included: [
      "Private Egyptologist Guide",
      "Historical Commentary",
      "Flexible Departure Time",
      "Personalized Experience",
      "Local Recommendations",
      "Hotel Pickup Assistance"
    ],

    notIncluded: [
      "Entrance Tickets",
      "Transportation",
      "Food and Drinks",
      "Personal Expenses"
    ],

    transportation:
      "Private transportation with a driver can be arranged upon request. The average cost is approximately €10 per person depending on pickup location and group size.",

    ticketInfo:
      "Entrance tickets for the Pyramids and the Grand Egyptian Museum are not included and should be purchased online in advance.",

    faq: [
      {
        question:
          "How long is the tour?",
        answer:
          "The experience lasts approximately eight hours."
      },
      {
        question:
          "Is transportation included?",
        answer:
          "Transportation can be arranged during booking."
      },
      {
        question:
          "Can I customize the itinerary?",
        answer:
          "Absolutely. We offer personalized experiences tailored to your interests."
      }
    ]
  },
  
  {
  id: "cairo-explorer",

  title: "Cairo Explorer – 2 Day Private Tour",

  price: 250,

  transportationPrice: 80,

  duration: "2 Days",

  heroImage: "/images/cairo-explorer-main.jpg",

  gallery: [
    "/images/saqqara.jpg",
    "/images/dahshur.jpg",
    "/images/pyramids-main.jpg",
    "/images/gem-main.jpg",
    "/images/citadel.jpg",
    "/images/khan.jpg"
  ],

  description:
    "Experience the very best of Cairo over two unforgettable days. Discover the origins of the Egyptian pyramids at Saqqara and Dahshur, stand before the legendary Pyramids of Giza, explore the spectacular Grand Egyptian Museum and immerse yourself in Cairo's Islamic heritage and bustling bazaars.",

  highlights: [
    {
      icon: "🏺",
      title: "Saqqara Necropolis",
      text:
        "Visit the Step Pyramid of Djoser, the first pyramid ever built."
    },
    
    {
      icon: "🦁",
      title: "Pyramids of Giza",
      text:
        "Explore the world's most famous archaeological site."
    },
    {
      icon: "🏛️",
      title: "Grand Egyptian Museum",
      text:
        "See the treasures of Tutankhamun and thousands of priceless artifacts."
    },
    {
      icon: "🕌",
      title: "Citadel of Saladin",
      text:
        "Visit Cairo's most famous medieval fortress."
    },
    {
      icon: "🛍️",
      title: "Khan El Khalili Bazaar",
      text:
        "Experience Cairo's most famous traditional market."
    }
  ],

  included: [
    "Private Egyptologist Guide",
    "Two Full Days of Guiding",
    "Historical Commentary",
    "Flexible Departure Time",
    "Personalized Experience",
    "Hotel Pickup Assistance"
  ],

  notIncluded: [
    "Entrance Tickets",
    "Transportation",
    "Food and Drinks",
    "Personal Expenses"
  ],

  transportation:
    "Private transportation with a driver can be arranged. The average cost is approximately €20 per person per day.",

  ticketInfo:
    "Entrance tickets are not included and can be purchased online or at the sites.",

  faq: [
    {
      question:
        "How many days does the tour last?",
      answer:
        "The experience lasts two full days."
    },
    {
      question:
        "Is transportation included?",
      answer:
        "Transportation can be arranged upon request."
    },
    {
      question:
        "Can the itinerary be customized?",
      answer:
        "Absolutely. The itinerary can be tailored to your interests."
    }
  ]
},
{
  id: "ultimate-cairo",

  title: "Ultimate Cairo Experience – 3 Day Private Tour",

  price: 350,

  transportationPrice: 120,

  duration: "3 Days",

  heroImage: "/images/nile-view.jpg",

  gallery: [
    "/images/saqqara.jpg",
    "/images/memphis.jpg",
    "/images/dahshur.jpg",
    "/images/pyramids-main.jpg",
    "/images/gem-main.jpg",
    "/images/citadel.jpg",
    "/images/coptic.jpg",
    "/images/khan.jpg"
  ],

  description:
    "Experience the ultimate journey through Cairo and Ancient Egypt over three unforgettable days. Explore the origins of the pyramids at Saqqara, Memphis and Dahshur, stand before the Great Pyramids of Giza, discover the treasures of Tutankhamun at the Grand Egyptian Museum and immerse yourself in Cairo's Islamic and Coptic heritage.",

  highlights: [
    {
      icon: "🏺",
      title: "Saqqara & Memphis",
      text:
        "Visit the birthplace of pyramid construction and the ancient capital of Egypt."
    },
    {
      icon: "🔺",
      title: "Dahshur Pyramids",
      text:
        "Discover the Bent Pyramid and the Red Pyramid."
    },
    {
      icon: "🦁",
      title: "Pyramids of Giza",
      text:
        "Explore the last remaining wonder of the ancient world."
    },
    {
      icon: "🏛️",
      title: "Grand Egyptian Museum",
      text:
        "Discover the complete treasures of King Tutankhamun."
    },
    {
      icon: "🕌",
      title: "Citadel of Saladin",
      text:
        "Visit the Citadel of Saladin and the Alabaster Mosque."
    },
    {
      icon: "✝️",
      title: "Coptic Cairo",
      text:
        "Explore one of the oldest Christian communities in the world."
    },
    {
      icon: "🛍️",
      title: "Khan El Khalili Bazaar and Islamic Cairo",
      text:
        "Experience Cairo's famous historic market."
    },
    {
      icon: "🕵🏻‍♂️",
      title: "Private Egyptologist Guide",
      text:
        "Enjoy three days of expert guiding and storytelling."
    }
  ],

  included: [
    "Private Egyptologist Guide",
    "Three Full Days of Guiding",
    "Historical Commentary",
    "Flexible Departure Times",
    "Personalized Experience",
    "Local Recommendations"
  ],

  notIncluded: [
    "Entrance Tickets",
    "Transportation",
    "Food and Drinks",
    "Personal Expenses"
  ],

  transportation:
    "Private transportation with a driver can be arranged. The average cost is approximately €40 per day depending on group size and pickup location.",

  ticketInfo:
    "Entrance tickets are not included and can be purchased online or at the sites.",

  faq: [
    {
      question:
        "How long is the tour?",
      answer:
        "This experience lasts three full days."
    },
    {
      question:
        "Is transportation included?",
      answer:
        "Transportation can be arranged upon request."
    },
    {
      question:
        "Can the itinerary be customized?",
      answer:
        "Absolutely. We can tailor the experience to your interests and schedule."
    },
    {
      question:
        "Is this suitable for families?",
      answer:
        "Yes. The itinerary is suitable for couples, families and private groups."
    }
  ]
}
];

export default tours;
