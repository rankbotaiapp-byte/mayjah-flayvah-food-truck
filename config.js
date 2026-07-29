window.APP_CONFIG = {
  meta: {
    mode: "demo",
    leadId: "mayjah-flayvah",
    demoExpiresAt: "2026-12-31T23:59:59-07:00",
    contactName: "",
    contactEmail: ""
  },
  admin: {
    title: "Mayjah Flayvah",
    subtitle: "Owner Dashboard",
    password: "mayjah2026"
  },

  business: {
    name: "Mayjah Flayvah",
    tagline: "Island Flavor on Wheels — Grants Pass & the Rogue Valley",
    phone: "",
    email: "",
    logo: ""
  },

  branding: {
    primary: "#7B2FF7",
    accent: "#FFD400",
    theme: "galaxy",
    neon: { on: true, color: "#FFD400", width: 3 }
  },

  modules: {
    hero: true,
    axiomIntro: true,
    services: true,
    about: true,
    contact: true,
    bookingForm: true,
    nav: true,
    stats: false,
    hours: true,
    reviews: false,
    gallery: false,
    faq: true,
    bannerStrips: false
  },

  content: {
    hero: {
      banner: "flayvah-banner.jpg.png",
      headline: "Island Flavor on Wheels",
      subtext: "Hawaiian-style plates from the Mayjah Flayvah food truck — teriyaki chicken, wasabi salmon, loco moco, and more. Catch us around the Rogue Valley.",
      buttons: [
        { label: "See the Menu", icon: "utensils", link: "#services" },
        { label: "Find Us / Order", icon: "map-pin", link: "#book" }
      ]
    },

    axiomIntro: {
      heading: "Meet AXIOM — Your 24/7 Truck Assistant",
      subtext: "Customers always asking 'where will you be?' AXIOM answers that 24/7 — your location, your menu, and takes orders and catering requests, even when the window's closed.",
      points: [
        { icon: "map-pin", text: "Tells customers where the truck is, instantly" },
        { icon: "clock", text: "Answers 24/7, even between service days" },
        { icon: "bell", text: "Sends orders & catering leads to your phone" },
        { icon: "trending-up", text: "No more missed 'where are you Friday?' messages" }
      ]
    },

    services: [
      { name: "Teriyaki Chicken", price: "Ask", icon: "drumstick", desc: "Island teriyaki chicken — a fan favorite." },
      { name: "Wasabi Salmon", price: "Ask", icon: "fish", desc: "Salmon with a wasabi kick." },
      { name: "Loco Moco", price: "Ask", icon: "utensils", desc: "Classic Hawaiian comfort plate." },
      { name: "Katsu Chicken", price: "Ask", icon: "drumstick", desc: "Crispy panko-breaded chicken katsu." },
      { name: "Mayjah Chicken", price: "Ask", icon: "drumstick", desc: "Our signature Mayjah Chicken plate." },
      { name: "Mahi-Mahi Taro Burger", price: "Ask", icon: "fish", desc: "Mahi-mahi on a taro bun." },
      { name: "Teriyaki Beef & Shrimp", price: "Ask", icon: "utensils", desc: "Teriyaki beef paired with shrimp." },
      { name: "Teriyaki Beef & Seasoned Fries", price: "Ask", icon: "utensils", desc: "Teriyaki beef over seasoned fries." },
      { name: "Garlic Butter Edamame", price: "Ask", icon: "leaf", desc: "Edamame tossed in garlic butter." }
    ],

    about: {
      heading: "About Mayjah Flayvah",
      body: "Mayjah Flayvah is a Hawaiian-style food truck bringing island plates to the Rogue Valley. Find us at Weekend Beer Co. and other spots around the area — check the app for our current location and menu."
    },

    hours: [
      { day: "Wednesday", time: "12:00 PM – 8:00 PM (Weekend Beer Co.)" },
      { day: "Thursday", time: "12:00 PM – 8:00 PM (Weekend Beer Co.)" },
      { day: "Fri – Tue", time: "Check app for location" }
    ],

    faq: [
      { q: "Where are you located?", a: "We move around! We're regularly at Weekend Beer Co. Wed & Thu, 12–8pm. Check the app for our latest spot." },
      { q: "Where will you be this weekend?", a: "Our schedule changes — tap AXIOM or check here for the current week's locations." },
      { q: "Do you cater?", a: "Reach out through the app and we'll get back to you about catering and events." },
      { q: "What's on the menu?", a: "Island plates like teriyaki chicken, wasabi salmon, loco moco, katsu, Mayjah chicken, and more — menu rotates by day." }
    ],

    nav: [
      { label: "Menu", icon: "utensils", link: "#services" },
      { label: "Find Us", icon: "map-pin", link: "#book" },
      { label: "Contact", icon: "phone", link: "#contact" }
    ]
  },

  forms: {
    endpoint: "https://formspree.io/f/xykrkdky"
  },

  demoLeads: [
    { name: "Teresa G.", phone: "(541) 555-0173", msg: "Will you be open anywhere Friday?", secs: "0.8" },
    { name: "Kai M.", phone: "(541) 555-0264", msg: "Do you cater events?", secs: "1.0" },
    { name: "Jenna L.", phone: "(541) 555-0391", msg: "What's on the menu today?", secs: "0.7" }
  ],

  orb: {
    on: true,
    label: "AXIOM",
    teaser: {
      delay: 2500,
      messages: [
        "🌺 I'm AXIOM — ask me where the truck is today",
        "🍚 Ask about today's menu",
        "📍 Find our next location",
        "📲 Tap to add this app to your phone"
      ]
    }
  },

  reception: {
    greeting: "Aloha! I'm AXIOM, here for Mayjah Flayvah food truck. Want to know where we are, what's on the menu, or ask about catering?",
    quickButtons: [
      { label: "📍 Where are you?", text: "Where is the truck today?" },
      { label: "🍚 See the menu", text: "What's on the menu?" },
      { label: "🎉 Catering", text: "Do you cater events?" },
      { label: "📲 Add to my phone", action: "install" }
    ],
    bookingNotify: "https://formspree.io/f/xykrkdky",
    knowledge: {
      persona: "You are AXIOM, the friendly AI host for Mayjah Flayvah, a Hawaiian-style food truck in the Rogue Valley, Oregon. Warm island hospitality. Regularly at Weekend Beer Co. on Wednesday and Thursday 12pm-8pm; other days the location rotates — invite them to check the app or Facebook for the current spot. Help with the menu (teriyaki chicken, wasabi salmon, loco moco, katsu chicken, Mayjah chicken, mahi-mahi taro burger, teriyaki beef & shrimp, garlic butter edamame), locations, and catering requests. Menu and prices change — never invent prices; if asked an exact price you don't have, invite them to come by or message the truck. Capture name and details for catering or order leads.",
      address: "Rogue Valley, Oregon — regularly at Weekend Beer Co. (Wed/Thu)",
      phone: "",
      ordering: "Walk up at the truck, or ask about catering"
    }
  }
};
