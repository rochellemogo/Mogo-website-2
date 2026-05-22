// Central product catalog — used by Nav, Products, and each sub-page
const MOGO_PRODUCTS = [
  {
    slug: "boda-financing",
    name: "Boda Financing",
    short: "Boda Financing",
    category: "Vehicles",
    tagline: "Own your bike. Ride to work.",
    headline: "Ride home today. Own it in 24 months.",
    desc: "New and pre-owned motorbikes from Boxer, TVS, Honda, Captain and more. Small down payment, weekly M-Pesa installments.",
    tag: "Most popular",
    price: "From KES 20k down",
    term: "12–24 months",
    turnaround: "2 hours",
    theme: "sunset",
    featured: true,
    catalogue: {
      title: 'Available bikes',
      subtitle: 'Pick your bike. We finance it. Down payment + daily figures are indicative — final terms confirmed at the branch.',
      cols: ['Brand & model', 'Engine', 'Down payment', 'Daily payment', 'Term'],
      items: [
        { brand:'Boxer 100',     spec:'100cc commuter',     down:'KES 20,000', daily:'KES 350', term:'14 months', tag:'Most popular' },
        { brand:'Boxer 150 X',   spec:'150cc workhorse',    down:'KES 25,000', daily:'KES 420', term:'14 months' },
        { brand:'TVS HLX 125',   spec:'125cc commuter',     down:'KES 20,000', daily:'KES 380', term:'14 months' },
        { brand:'TVS HLX 150 X', spec:'150cc dual-purpose', down:'KES 25,000', daily:'KES 440', term:'14 months' },
        { brand:'Honda CB 125 F',spec:'125cc fuel-saver',   down:'KES 25,000', daily:'KES 460', term:'18 months' },
        { brand:'Honda Ace 110', spec:'110cc starter',      down:'KES 20,000', daily:'KES 390', term:'14 months' },
        { brand:'Captain 150',   spec:'150cc workhorse',    down:'KES 22,000', daily:'KES 410', term:'14 months' },
        { brand:'Skygo 125',     spec:'125cc commuter',     down:'KES 20,000', daily:'KES 360', term:'14 months' },
      ],
    },
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
    catalogue: {
      title: 'Available smartphones',
      subtitle: 'Walk out with the phone today. Down payment + daily figures are indicative — final terms confirmed at the branch.',
      cols: ['Phone', 'Spec', 'Down payment', 'Daily payment', 'Term'],
      items: [
        { brand:'Samsung Galaxy A05',   spec:'4GB / 64GB',  down:'KES 2,500', daily:'KES 50',  term:'9 months',  tag:'Cheapest' },
        { brand:'Samsung Galaxy A15',   spec:'4GB / 128GB', down:'KES 3,500', daily:'KES 75',  term:'9 months' },
        { brand:'Samsung Galaxy A25 5G',spec:'6GB / 128GB', down:'KES 5,000', daily:'KES 110', term:'9 months' },
        { brand:'Xiaomi Redmi 13C',     spec:'4GB / 128GB', down:'KES 3,000', daily:'KES 70',  term:'9 months',  tag:'Most popular' },
        { brand:'Xiaomi Redmi Note 13', spec:'8GB / 256GB', down:'KES 6,000', daily:'KES 140', term:'12 months' },
        { brand:'Tecno Spark 20',       spec:'8GB / 128GB', down:'KES 3,500', daily:'KES 80',  term:'9 months' },
        { brand:'Tecno Camon 20',       spec:'8GB / 256GB', down:'KES 5,500', daily:'KES 120', term:'12 months' },
        { brand:'Infinix Hot 40',       spec:'8GB / 256GB', down:'KES 4,000', daily:'KES 95',  term:'9 months' },
        { brand:'Infinix Note 40',      spec:'8GB / 256GB', down:'KES 5,500', daily:'KES 125', term:'12 months' },
        { brand:'iPhone 13',            spec:'128GB',       down:'KES 12,000',daily:'KES 250', term:'12 months', tag:'Premium' },
      ],
    },
  },
  {
    slug: "car-logbook-loans",
    name: "Car Logbook Loans",
    short: "Car Logbook",
    category: "Logbook",
    tagline: "Your car. Your cash. Keep driving.",
    headline: "Unlock cash without parking your car.",
    desc: "Use your existing car as collateral. Get working capital from KES 100,000 to KES 3M — keep driving while you repay.",
    tag: "Existing car owners",
    price: "KES 100k – 3M",
    term: "Up to 36 months",
    turnaround: "24 hours",
    theme: "navy",
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
    term: "30-60 days",
    turnaround: "72 hours",
    theme: "navy",
    isNew: true,
  },
];

window.MOGO_PRODUCTS = MOGO_PRODUCTS;

// Load CMS settings from content/settings.json
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

// Load CMS products from content/products.json — overrides the defaults above.
// Components listen for 'mogo-products-updated' to re-render with new data.
(function() {
  var base = window.__MOGO_SUBPAGE ? '../' : '';
  fetch(base + 'content/products.json')
    .then(function(r) { if (!r.ok) throw new Error(); return r.json(); })
    .then(function(data) {
      var prods = Array.isArray(data) ? data : (data.products || []);
      if (prods.length) {
        window.MOGO_PRODUCTS = prods;
        window.dispatchEvent(new CustomEvent('mogo-products-updated'));
      }
    })
    .catch(function() {});
})();
