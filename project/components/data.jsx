// Central product catalog — used by Nav, Products, and each sub-page
const MOGO_PRODUCTS = [
  {
    slug: "boda-financing",
    name: "Boda Financing",
    short: "Boda Financing",
    category: "Vehicles",
    tagline: "Finance a new or pre-owned motorbike from KES 20,000 down.",
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
    tagline: "Borrow against your existing boda. Keep riding while you repay.",
    headline: "Unlock cash without parking your bike.",
    desc: "Use your existing boda as collateral. Get working capital from KES 40,000 to KES 90,000 — keep riding while you repay.",
    tag: "Existing owners",
    price: "KES 40k – 90k",
    term: "Up to 24 months",
    turnaround: "Same day",
    theme: "green",
  },
  {
    slug: "smartphone-loans",
    name: "Smartphone Loans",
    short: "Smartphone Loans",
    category: "Devices",
    tagline: "Walk out with your phone today, pay daily from KES 50.",
    headline: "Walk out with your phone today. Pay in weekly installments.",
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
    slug: "msme-loans",
    name: "Business Loans",
    short: "Business Loans",
    category: "Business",
    tagline: "Working capital for small businesses and sole traders.",
    headline: "The cash your small business needs to grow.",
    desc: "Stock, equipment, expansion or bridge finance. For shopkeepers, salons, matatus, farmers and sole traders.",
    tag: "For business owners",
    price: "KES 100k – 5M",
    term: "30-60 days",
    turnaround: "72 hours",
    theme: "navy",
    isNew: true,
  },
  {
    slug: "special-offers",
    name: "Special Offers",
    short: "Special Offers",
    category: "Offers",
    tagline: "Limited-time deals on our most popular products.",
    headline: "Current special offers.",
    desc: "Check our latest special promotions on boda financing, logbook loans and more.",
    tag: "Limited time",
    price: "Varies",
    term: "Limited time",
    turnaround: "Same day",
    theme: "sunset",
  },
  {
    slug: "check-off-loans",
    name: "Check-Off Loans",
    short: "Check-Off Loans",
    category: "Cash",
    tagline: "Salary-deducted loans for GoK and TSC staff.",
    headline: "Loans for GoK and TSC staff, paid straight to your M-Pesa.",
    desc: "For GoK, TSC and County employees. Borrow from KES 5,000 to KES 2,000,000 at the best rates in the market — instant approval, funds within 24 hours, repaid over 3 to 120 months straight from your salary.",
    tag: "GoK · TSC · County",
    price: "KES 5k – 2M",
    term: "3 – 120 months",
    turnaround: "Funds within 24 hrs",
    theme: "lilac",
    isNew: true,
  },
  {
    slug: "car-loans",
    name: "Car Loans",
    short: "Car Loans",
    category: "Vehicles",
    tagline: "Finance any car up to KES 2.5M — any make, any age.",
    headline: "Finance up to 80% of your next car.",
    desc: "Any car, any age, make or model — local or imported. Borrow up to KES 2,500,000 with a down payment from just 20%, approved in 1 hour and repaid over up to 24 months. Best Price Guarantee on every car we finance.",
    tag: "Best Price Guarantee",
    price: "Up to KES 2.5M",
    term: "Up to 24 months",
    turnaround: "Approved in 1 hour",
    theme: "cool",
  },
  {
    slug: "car-logbook-loans",
    name: "Car Logbook Loans",
    short: "Car Logbook",
    category: "Logbook",
    tagline: "Borrow against your car logbook. Keep driving while you repay.",
    headline: "Unlock cash without parking your car.",
    desc: "Use your car logbook as collateral and access up to 80% of its value — KES 70,000 to KES 3,250,000, any age, make or model. Zero upfront costs, same-day approval, and you keep driving while you repay.",
    tag: "Best Price Guarantee",
    price: "KES 70k – 3.25M",
    term: "Up to 24 months",
    turnaround: "Same-day approval",
    theme: "navy",
  },
  {
    slug: "tuk-tuk-loans",
    name: "Tuk-Tuk Logbook Loans",
    short: "Tuk-Tuk Logbook",
    category: "Logbook",
    tagline: "Logbook loans for cargo and passenger tuk-tuks.",
    headline: "Unlock cash against your cargo tuk-tuk.",
    desc: "Use your cargo tuk-tuk logbook as collateral. Loans from KES 50,000 to KES 250,000 — pay from as little as KES 349 a day over 52, 65 or 78 weeks, approved in just 2 hours. Best Price Guarantee on logbook lending.",
    tag: "Best Price Guarantee",
    price: "KES 50k – 250k",
    term: "52 / 65 / 78 weeks",
    turnaround: "Approved in 2 hours",
    theme: "peach",
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

// Load CMS media from content/media.json
(function() {
  var base = window.__MOGO_SUBPAGE ? '../' : '';
  fetch(base + 'content/media.json')
    .then(function(r) { if (!r.ok) throw new Error(); return r.json(); })
    .then(function(data) {
      window.MOGO_MEDIA = data;
      window.dispatchEvent(new CustomEvent('mogo-media-updated'));
    })
    .catch(function() {});
})();

// Load CMS About Us page content from content/about.json
(function() {
  var base = window.__MOGO_SUBPAGE ? '../' : '';
  fetch(base + 'content/about.json')
    .then(function(r) { if (!r.ok) throw new Error(); return r.json(); })
    .then(function(data) {
      window.MOGO_ABOUT = data;
      window.dispatchEvent(new CustomEvent('mogo-about-updated'));
    })
    .catch(function() {});
})();

// Load CMS Impact page content from content/impact.json
(function() {
  var base = window.__MOGO_SUBPAGE ? '../' : '';
  fetch(base + 'content/impact.json')
    .then(function(r) { if (!r.ok) throw new Error(); return r.json(); })
    .then(function(data) {
      window.MOGO_IMPACT = data;
      window.dispatchEvent(new CustomEvent('mogo-impact-updated'));
    })
    .catch(function() {});
})();
