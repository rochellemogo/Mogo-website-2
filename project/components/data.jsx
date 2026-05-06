// Central product catalog — used by Nav, Products, and each sub-page
const MOGO_PRODUCTS = [
  {
    slug: "boda-financing",
    name: "Boda Financing",
    short: "Boda Financing",
    category: "Vehicles",
    tagline: "Own your bike. Ride to work.",
    headline: "Ride home today. Own it in 14 months.",
    desc: "New and pre-owned motorbikes from Boxer, TVS, Honda, Captain and more. Small down payment, weekly M-Pesa installments.",
    tag: "Most popular",
    price: "From KES 20k down",
    term: "12–24 months",
    turnaround: "2 hours",
    theme: "sunset",
    featured: true,
  },
  {
    slug: "boda-logbook-loans",
    name: "Boda Logbook Loans",
    short: "Boda Logbook",
    category: "Logbook",
    tagline: "Your bike. Your cash. Keep riding.",
    headline: "Unlock cash without parking your bike.",
    desc: "Use your existing boda as collateral. Get working capital from KES 40,000 to KES 90,000 — keep riding while you repay.",
    tag: "Existing owners",
    price: "KES 40k – 90k",
    term: "Up to 24 months",
    turnaround: "Same day",
    theme: "green",
  },
  {
    slug: "tuk-tuk-loans",
    name: "Tuk-Tuk Loans",
    short: "Tuk-Tuk Loans",
    category: "Vehicles",
    tagline: "Scale up without slowing down.",
    headline: "Cargo and passenger tuk-tuks, financed.",
    desc: "Bajaj, Piaggio, TVS, Atul and more — new or logbook. Built for cargo, passengers, and the small business owner scaling up.",
    tag: "Cargo & passenger",
    price: "Up to KES 250k",
    term: "Up to 24 months",
    turnaround: "Same day",
    theme: "peach",
  },
  {
    slug: "car-loans",
    name: "Car Loans",
    short: "Car Loans",
    category: "Vehicles",
    tagline: "Any make. Any age. Your car.",
    headline: "Finance up to 80% of your next car.",
    desc: "New or used. Local or imported. From KES 500,000 to KES 3.25M. Honest rates, flexible terms — from saloon to SUV.",
    tag: "Up to 80% financed",
    price: "KES 500k – 3.25M",
    term: "Up to 48 months",
    turnaround: "Same-day approval",
    theme: "cool",
  },
  {
    slug: "check-off-loans",
    name: "Check-Off Loans",
    short: "Check-Off Loans",
    category: "Cash",
    tagline: "Salary-secured cash. Low rates.",
    headline: "Cash for life's big moments — direct from your payslip.",
    desc: "Employer-backed loans repaid straight from your salary. Lower rates. Longer terms. Zero paperwork drama.",
    tag: "For salaried workers",
    price: "Up to KES 2M",
    term: "Up to 60 months",
    turnaround: "48 hours",
    theme: "lilac",
    isNew: true,
  },
  {
    slug: "smartphone-loans",
    name: "Smartphone Loans",
    short: "Smartphone Loans",
    category: "Devices",
    tagline: "The phone you need. Today.",
    headline: "Pay a little every week. Keep your phone forever.",
    desc: "Samsung, Xiaomi, Tecno, Infinix, iPhone. Walk out with your phone today, pay in small daily or weekly installments. Own it in 9 months.",
    tag: "New",
    price: "From KES 50/day",
    term: "6–12 months",
    turnaround: "Same day",
    theme: "warm",
    isNew: true,
  },
  {
    slug: "msme-loans",
    name: "MSME Loans",
    short: "MSME Loans",
    category: "Business",
    tagline: "Working capital for Kenyan hustlers.",
    headline: "The cash your small business needs to grow.",
    desc: "Stock, equipment, expansion or bridge finance. Built for shopkeepers, salons, matatus, farmers and side-hustlers.",
    tag: "For business owners",
    price: "KES 100k – 5M",
    term: "3–36 months",
    turnaround: "72 hours",
    theme: "navy",
    isNew: true,
  },
];

window.MOGO_PRODUCTS = MOGO_PRODUCTS;

(function() {
  var base = window.__MOGO_SUBPAGE ? '../' : '';
  fetch(base + 'content/settings.json')
    .then(function(r) { if (!r.ok) throw new Error(); return r.json(); })
    .then(function(data) {
      window.MOGO_SETTINGS = data;
      window.dispatchEvent(new CustomEvent('mogo-settings-updated'));
    })
    .catch(function() {});
})();
