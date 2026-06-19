// ═══════════════════════════════════════════════════
// NEXORA — Product Database
// All products loaded dynamically from this file.
// ═══════════════════════════════════════════════════

const PRODUCTS = [

  // ── Electronics ──────────────────────────────────
  {
    id: 1, category: "Electronics", brand: "Samsung",
    name: "Samsung Galaxy A55 5G 8GB RAM 256GB Storage",
    emoji: "📱", bg: "linear-gradient(135deg,#dbeafe,#eff6ff)",
    price: 99999, salePrice: 28999,
    sold: 4821, soldPct: 82, rating: 4.8, reviews: 4821,
    badge: "sale", timeLeft: null,
    tags: ["flash", "featured"]
  },
  {
    id: 2, category: "Electronics", brand: "Sony",
    name: "Sony WH-1000XM5 Wireless Noise-Cancelling Headphones",
    emoji: "🎧", bg: "linear-gradient(135deg,#dbeafe,#eff6ff)",
    price: 41999, salePrice: 14499,
    sold: 2341, soldPct: 67, rating: 4.7, reviews: 2341,
    badge: "hot", timeLeft: "Ends in 3h",
    tags: ["flash", "daily", "featured"]
  },
  {
    id: 3, category: "Electronics", brand: "Apple",
    name: "Apple iPhone 15 Pro Max 256GB Natural Titanium",
    emoji: "📱", bg: "linear-gradient(135deg,#dbeafe,#eff6ff)",
    price: 179999, salePrice: 139999,
    sold: 9102, soldPct: 44, rating: 4.9, reviews: 9102,
    badge: "new", timeLeft: null,
    tags: ["new", "featured"]
  },
  {
    id: 4, category: "Electronics", brand: "Apple",
    name: "AirPods Pro 3rd Gen Active Noise Cancellation 2024",
    emoji: "🎧", bg: "linear-gradient(135deg,#dbeafe,#eff6ff)",
    price: 39999, salePrice: 24999,
    sold: 12450, soldPct: 71, rating: 4.9, reviews: 12450,
    badge: "new", timeLeft: null,
    tags: ["new", "flash", "featured"]
  },
  {
    id: 5, category: "Electronics", brand: "Xiaomi",
    name: "Xiaomi Pad 6 Pro 11\" Tablet 8GB+256GB WiFi 2024",
    emoji: "💻", bg: "linear-gradient(135deg,#dbeafe,#eff6ff)",
    price: 69999, salePrice: 39999,
    sold: 987, soldPct: 55, rating: 4.8, reviews: 987,
    badge: "sale", timeLeft: null,
    tags: ["flash", "featured"]
  },
  {
    id: 6, category: "Electronics", brand: "JBL",
    name: "JBL Charge 5 Portable Bluetooth Speaker 20H Battery",
    emoji: "🔊", bg: "linear-gradient(135deg,#dbeafe,#eff6ff)",
    price: 18000, salePrice: 9499,
    sold: 7230, soldPct: 88, rating: 4.7, reviews: 7230,
    badge: "hot", timeLeft: null,
    tags: ["flash", "featured"]
  },
  {
    id: 7, category: "Electronics", brand: "Garmin",
    name: "Garmin Forerunner 265 GPS Running Smartwatch AMOLED",
    emoji: "⌚", bg: "linear-gradient(135deg,#dbeafe,#eff6ff)",
    price: 54999, salePrice: 32999,
    sold: 1432, soldPct: 38, rating: 4.7, reviews: 1432,
    badge: "new", timeLeft: null,
    tags: ["new", "featured"]
  },

  // ── Fashion ──────────────────────────────────────
  {
    id: 8, category: "Fashion", brand: "Nike",
    name: "Nike Air Max 270 React Men's Running Shoes",
    emoji: "👟", bg: "linear-gradient(135deg,#fce7f3,#fff0f3)",
    price: 14999, salePrice: 8499,
    sold: 3201, soldPct: 60, rating: 4.5, reviews: 3201,
    badge: "sale", timeLeft: "Ends tonight",
    tags: ["daily", "featured"]
  },
  {
    id: 9, category: "Fashion", brand: "Levi's",
    name: "Levi's 501 Original Fit Men's Jeans Dark Wash",
    emoji: "👖", bg: "linear-gradient(135deg,#fce7f3,#fff0f3)",
    price: 7999, salePrice: 3999,
    sold: 6821, soldPct: 75, rating: 4.4, reviews: 6821,
    badge: "sale", timeLeft: "Ends in 6h",
    tags: ["daily", "featured"]
  },
  {
    id: 10, category: "Fashion", brand: "Adidas",
    name: "Adidas Ultraboost 23 Premium Running Shoes Men's",
    emoji: "👟", bg: "linear-gradient(135deg,#fce7f3,#fff0f3)",
    price: 19999, salePrice: 10999,
    sold: 4512, soldPct: 65, rating: 4.6, reviews: 4512,
    badge: "new", timeLeft: null,
    tags: ["new", "featured"]
  },
  {
    id: 11, category: "Fashion", brand: "Ray-Ban",
    name: "Ray-Ban Aviator Classic Gold Frame Green Lens",
    emoji: "🕶️", bg: "linear-gradient(135deg,#fce7f3,#fff0f3)",
    price: 14999, salePrice: 7499,
    sold: 3410, soldPct: 50, rating: 4.7, reviews: 3410,
    badge: "hot", timeLeft: "Ends in 9h",
    tags: ["daily", "featured"]
  },
  {
    id: 12, category: "Fashion", brand: "Puma",
    name: "Puma Men's Dry Cell Quick-Dry Sports T-Shirt",
    emoji: "👕", bg: "linear-gradient(135deg,#fce7f3,#fff0f3)",
    price: 2999, salePrice: 1299,
    sold: 5230, soldPct: 73, rating: 4.3, reviews: 5230,
    badge: "sale", timeLeft: null,
    tags: ["flash", "featured"]
  },

  // ── Home & Living ─────────────────────────────────
  {
    id: 13, category: "Home", brand: "Instant Pot",
    name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker 8qt",
    emoji: "🍳", bg: "linear-gradient(135deg,#d1fae5,#ecfdf5)",
    price: 13999, salePrice: 7499,
    sold: 12450, soldPct: 78, rating: 4.8, reviews: 12450,
    badge: "hot", timeLeft: "Ends in 2h",
    tags: ["daily", "flash", "featured"]
  },
  {
    id: 14, category: "Home", brand: "Dyson",
    name: "Dyson V15 Detect Absolute Cordless Vacuum Cleaner",
    emoji: "🧹", bg: "linear-gradient(135deg,#d1fae5,#ecfdf5)",
    price: 79000, salePrice: 44999,
    sold: 2103, soldPct: 43, rating: 4.8, reviews: 2103,
    badge: "new", timeLeft: null,
    tags: ["new", "featured"]
  },
  {
    id: 15, category: "Home", brand: "Philips",
    name: "Philips Air Fryer XXL 7.3L Digital 2000W",
    emoji: "🍟", bg: "linear-gradient(135deg,#d1fae5,#ecfdf5)",
    price: 24999, salePrice: 12999,
    sold: 5821, soldPct: 68, rating: 4.6, reviews: 5821,
    badge: "sale", timeLeft: "Ends in 12h",
    tags: ["daily", "featured"]
  },
  {
    id: 16, category: "Home", brand: "Nespresso",
    name: "Nespresso Vertuo Plus Coffee & Espresso Machine",
    emoji: "☕", bg: "linear-gradient(135deg,#d1fae5,#ecfdf5)",
    price: 22000, salePrice: 9999,
    sold: 1455, soldPct: 55, rating: 4.6, reviews: 1455,
    badge: "sale", timeLeft: null,
    tags: ["flash", "featured"]
  },

  // ── Beauty ────────────────────────────────────────
  {
    id: 17, category: "Beauty", brand: "The Ordinary",
    name: "The Ordinary Niacinamide 10% + Zinc 1% 30ml Serum",
    emoji: "🧴", bg: "linear-gradient(135deg,#fdf2f8,#fdf4ff)",
    price: 1899, salePrice: 899,
    sold: 15230, soldPct: 92, rating: 4.7, reviews: 15230,
    badge: "hot", timeLeft: null,
    tags: ["flash", "featured"]
  },
  {
    id: 18, category: "Beauty", brand: "L'Oréal",
    name: "L'Oréal Paris Revitalift 1.5% Hyaluronic Acid Serum",
    emoji: "✨", bg: "linear-gradient(135deg,#fdf2f8,#fdf4ff)",
    price: 5500, salePrice: 2499,
    sold: 6821, soldPct: 71, rating: 4.6, reviews: 6821,
    badge: "sale", timeLeft: null,
    tags: ["featured"]
  },
  {
    id: 19, category: "Beauty", brand: "MAANGE",
    name: "MAANGE 15-Piece Rose Gold Professional Makeup Brush Set",
    emoji: "🌸", bg: "linear-gradient(135deg,#fdf2f8,#fdf4ff)",
    price: 3500, salePrice: 1299,
    sold: 5621, soldPct: 83, rating: 4.7, reviews: 5621,
    badge: "hot", timeLeft: null,
    tags: ["flash", "featured"]
  },
  {
    id: 20, category: "Beauty", brand: "Neutrogena",
    name: "Neutrogena Hydro Boost Water Gel 50ml Normal Skin",
    emoji: "💧", bg: "linear-gradient(135deg,#fdf2f8,#fdf4ff)",
    price: 3999, salePrice: 1799,
    sold: 8910, soldPct: 77, rating: 4.5, reviews: 8910,
    badge: "new", timeLeft: null,
    tags: ["new", "featured"]
  },

  // ── Sports ────────────────────────────────────────
  {
    id: 21, category: "Sports", brand: "Bowflex",
    name: "Bowflex Adjustable Dumbbell Set 5-52.5 lbs SelectTech",
    emoji: "🏋️", bg: "linear-gradient(135deg,#fff7ed,#fffbeb)",
    price: 42000, salePrice: 18499,
    sold: 4321, soldPct: 56, rating: 4.8, reviews: 4321,
    badge: "hot", timeLeft: "Ends in 5h",
    tags: ["daily", "featured"]
  },
  {
    id: 22, category: "Sports", brand: "Liforme",
    name: "Yoga Mat 6mm Premium TPE Non-Slip Alignment System",
    emoji: "🧘", bg: "linear-gradient(135deg,#fff7ed,#fffbeb)",
    price: 4500, salePrice: 1999,
    sold: 3201, soldPct: 60, rating: 4.6, reviews: 3201,
    badge: "sale", timeLeft: null,
    tags: ["flash", "featured"]
  },
  {
    id: 23, category: "Sports", brand: "Fitbit",
    name: "Fitbit Charge 6 Health & Fitness Tracker GPS Google",
    emoji: "⌚", bg: "linear-gradient(135deg,#fff7ed,#fffbeb)",
    price: 26999, salePrice: 14999,
    sold: 5821, soldPct: 44, rating: 4.5, reviews: 5821,
    badge: "new", timeLeft: null,
    tags: ["new", "featured"]
  },

  // ── Grocery ───────────────────────────────────────
  {
    id: 24, category: "Grocery", brand: "Nescafe",
    name: "Nescafe Gold Blend Smooth & Creamy Instant Coffee 200g",
    emoji: "☕", bg: "linear-gradient(135deg,#f0fdf4,#f7fee7)",
    price: 2199, salePrice: 1199,
    sold: 12100, soldPct: 85, rating: 4.7, reviews: 12100,
    badge: "hot", timeLeft: "Ends tonight",
    tags: ["daily", "flash", "featured"]
  },
  {
    id: 25, category: "Grocery", brand: "Twinings",
    name: "Twinings English Breakfast Tea 100 Bags Premium",
    emoji: "🍵", bg: "linear-gradient(135deg,#f0fdf4,#f7fee7)",
    price: 1499, salePrice: 799,
    sold: 8210, soldPct: 72, rating: 4.6, reviews: 8210,
    badge: "sale", timeLeft: null,
    tags: ["flash", "featured"]
  },
  {
    id: 26, category: "Grocery", brand: "Tropicana",
    name: "Tropicana Pure Premium Orange Juice No Pulp 1.8L",
    emoji: "🍊", bg: "linear-gradient(135deg,#f0fdf4,#f7fee7)",
    price: 899, salePrice: 499,
    sold: 6102, soldPct: 60, rating: 4.5, reviews: 6102,
    badge: "sale", timeLeft: null,
    tags: ["featured"]
  },

  // ── Automotive ────────────────────────────────────
  {
    id: 27, category: "Automotive", brand: "Vantrue",
    name: "Vantrue E2 4K Dual Dash Cam Front & Inside Camera",
    emoji: "📸", bg: "linear-gradient(135deg,#ede9fe,#f5f3ff)",
    price: 16999, salePrice: 8999,
    sold: 2103, soldPct: 48, rating: 4.6, reviews: 2103,
    badge: "new", timeLeft: null,
    tags: ["new", "featured"]
  },
  {
    id: 28, category: "Automotive", brand: "Baseus",
    name: "Baseus Car Vacuum Cleaner Wireless 15000PA Wet & Dry",
    emoji: "🚗", bg: "linear-gradient(135deg,#ede9fe,#f5f3ff)",
    price: 4999, salePrice: 2499,
    sold: 3821, soldPct: 66, rating: 4.5, reviews: 3821,
    badge: "sale", timeLeft: "Ends in 8h",
    tags: ["daily", "featured"]
  },

  // ── Kids ─────────────────────────────────────────
  {
    id: 29, category: "Kids", brand: "LEGO",
    name: "LEGO Technic Bugatti Chiron 1000+ Pieces Speed Set",
    emoji: "🧱", bg: "linear-gradient(135deg,#fefce8,#fffde7)",
    price: 24999, salePrice: 12999,
    sold: 5821, soldPct: 79, rating: 4.9, reviews: 5821,
    badge: "hot", timeLeft: "Ends in 4h",
    tags: ["daily", "flash", "featured"]
  },
  {
    id: 30, category: "Kids", brand: "Hot Wheels",
    name: "Hot Wheels 50-Car Gift Pack with Track Launcher Set",
    emoji: "🏎️", bg: "linear-gradient(135deg,#fefce8,#fffde7)",
    price: 4999, salePrice: 2499,
    sold: 8210, soldPct: 82, rating: 4.7, reviews: 8210,
    badge: "sale", timeLeft: null,
    tags: ["flash", "featured"]
  },
  {
    id: 31, category: "Kids", brand: "Barbie",
    name: "Barbie Dreamhouse 2024 with 3 Floors & Slide",
    emoji: "🏠", bg: "linear-gradient(135deg,#fefce8,#fffde7)",
    price: 16999, salePrice: 8999,
    sold: 4102, soldPct: 60, rating: 4.6, reviews: 4102,
    badge: "new", timeLeft: null,
    tags: ["new", "featured"]
  },
];

// ── Coupon data ───────────────────────────────────
const COUPONS = [
  {
    id: 1, theme: "red",
    amount: "৳200", type: "OFF",
    cat: "Electronics", desc: "৳200 off on any Electronics order",
    min: "Min. purchase ৳2,000", exp: "Expires Jun 30"
  },
  {
    id: 2, theme: "purple",
    amount: "20%", type: "OFF",
    cat: "Fashion", desc: "20% off all Fashion & Shoes",
    min: "No minimum purchase", exp: "Expires Jun 25"
  },
  {
    id: 3, theme: "blue",
    amount: "FREE", type: "SHIP",
    cat: "All Categories", desc: "Free delivery on any order",
    min: "Valid one-time only", exp: "Expires Jul 1"
  },
  {
    id: 4, theme: "green",
    amount: "৳500", type: "OFF",
    cat: "Home & Kitchen", desc: "৳500 off Home & Kitchen items",
    min: "Min. purchase ৳5,000", exp: "Expires Jun 28"
  },
  {
    id: 5, theme: "orange",
    amount: "30%", type: "OFF",
    cat: "Beauty & Care", desc: "30% off all Beauty products",
    min: "Min. purchase ৳800", exp: "Expires Jun 22"
  },
  {
    id: 6, theme: "pink",
    amount: "৳100", type: "OFF",
    cat: "Books & Gaming", desc: "৳100 off Books & Games",
    min: "Min. purchase ৳400", exp: "Expires Jul 5"
  },
];

// ── Icon Menu ─────────────────────────────────────
const ICON_MENU = [
  { label: "Electronics", emoji: "📱", grad: "linear-gradient(135deg,#667eea,#764ba2)", link: "category.html?cat=Electronics" },
  { label: "Fashion",     emoji: "👗", grad: "linear-gradient(135deg,#f093fb,#f5576c)", link: "category.html?cat=Fashion" },
  { label: "Home",        emoji: "🏠", grad: "linear-gradient(135deg,#4facfe,#00f2fe)", link: "category.html?cat=Home+%26+Living" },
  { label: "Beauty",      emoji: "💄", grad: "linear-gradient(135deg,#fa709a,#fee140)", link: "category.html?cat=Beauty" },
  { label: "Sports",      emoji: "⚽", grad: "linear-gradient(135deg,#43e97b,#38f9d7)", link: "category.html?cat=Sports" },
  { label: "Grocery",     emoji: "🛒", grad: "linear-gradient(135deg,#84fab0,#8fd3f4)", link: "category.html?cat=Groceries" },
  { label: "Automotive",  emoji: "🚗", grad: "linear-gradient(135deg,#30cfd0,#667eea)", link: "category.html?cat=Automotive" },
  { label: "Kids",        emoji: "🧸", grad: "linear-gradient(135deg,#ffecd2,#fcb69f)", link: "category.html?cat=Toys+%26+Kids" },
  { label: "Books",       emoji: "📚", grad: "linear-gradient(135deg,#a18cd1,#fbc2eb)", link: "category.html?cat=Books" },
  { label: "Gaming",      emoji: "🎮", grad: "linear-gradient(135deg,#2d3436,#636e72)", link: "category.html?cat=Gaming" },
  { label: "Pet Supplies",emoji: "🐾", grad: "linear-gradient(135deg,#00b09b,#96c93d)", link: "category.html?cat=Pet+Supplies" },
  { label: "Flash Sale",  emoji: "⚡", grad: "linear-gradient(135deg,#f7971e,#ffd200)", link: "#flash" },
];
