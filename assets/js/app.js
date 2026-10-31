/**
 * ==========================================================================
 * ELWAN RESTAURANT & CAFE & DESSERTS (علوان - للمذاق عنوان)
 * High-Performance Digital Menu & WhatsApp Ordering Platform
 * Designed & Developed by Mohamed Emad (+201020766525)
 * ==========================================================================
 */

// Deployment URL for QR Code & Sharing
const GITHUB_PAGES_URL = "https://mohamedemad7299.github.io/elwan-menu/";

// Primary Hotlines & Ordering WhatsApp Numbers
const RESTAURANT_HOTLINES = ["01212663434", "01100089498"];
const PRIMARY_WHATSAPP = "01212663434";
const COMPLAINTS_HOTLINE = "01033034090";

// Developer Portfolio & Contact Info
const DEVELOPER_INFO = {
  name: "Mohamed Emad",
  phone: "+201020766525",
  whatsapp: "201020766525",
  facebook: "https://www.facebook.com/mohamedemad199912",
  instagram: "https://www.instagram.com/ma7amed_3emad/",
  linkedin: "https://www.linkedin.com/feed/foryou/",
  github: "https://github.com/MohamedEmad7299"
};

// Bilingual Translations Dictionary
const I18N = {
  ar: {
    brandName: "علوان",
    brandSubtitle: "للمذاق عنوان",
    brandTagline: "مطعم • كافيه • حلويات شرقية وغربية",
    navMenu: "المنيو",
    navBranches: "الفروع والطلب",
    navQR: "رمز QR",
    navCall: "اتصل بنا",
    navCart: "طلبك",
    heroBadge: "أشهى المشاوي، البيتزا، الكريب، الوافل، والمشروبات في البلينا وسوهاج",
    heroTitle: "مطعم وكافيه علوان",
    heroSubtitle: "للمذاق عنوان... نقدم لكم أجود أنواع اللحوم الطازجة المشوية على الفحم، البيتزا الإيطالية، الكريب المقرمش، البرجر الفاخر، الوافل الطازج والحلويات الشرقية والغربية مع أروع تشكيلة عصائر طبيعية وكافيه عالمي.",
    hotlineLabel: "خدمة التوصيل والطلب السريع:",
    complaintsLabel: "للشكاوى والمقترحات:",
    ctaMenu: "تصفح المنيو",
    ctaBranches: "الفروع والتوصيل",
    ctaFlyer: "عرض المنيو الأصلي",
    branchBalyanaTitle: "فرع البلينا الرئيسي (صالة ومطعم وتوصيل)",
    branchBalyanaDesc: "البلينا - بجوار بنك مصر الجديد - سوهاج",
    btnOpenMap: "عرض على الخريطة",
    btnCallBranch: "اتصال بالفرع",
    searchPlaceholder: "ابحث في المشاوي، البيتزا، الكريب، البرجر، الوافل، العصائر...",
    tabAll: "الكل",
    tabGrills: "المشاوي والطرب",
    tabTagines: "الطواجن والفتات",
    tabMahashi: "المحاشي والممبار",
    tabSandwiches: "البرجر والساندوتشات",
    tabSaj: "الصاج السوري والتورتيلا",
    tabMeals: "الوجبات وفتة الشاورما",
    tabPizza: "البيتزا الإيطالية",
    tabCrepes: "الكريب الحادق",
    tabPasta: "الباستا والمكرونات",
    tabDesserts: "الوافل والحلويات",
    tabCoffee: "بار القهوة والإسبريسو",
    tabHotDrinks: "المشروبات الساخنة",
    tabJuices: "العصائر الطبيعية 100%",
    tabSmoothies: "السموزي والميلك شيك",
    tabIceCream: "الآيس كريم والموهيتو",
    tabSides: "السلطات والصوصات",
    single: "سنجل",
    double: "دبل",
    quarter: "ربع ك",
    third: "تلت ك",
    half: "نصف ك",
    kilo: "كيلو",
    eighth: "تمن ك",
    small: "صغير",
    medium: "وسط",
    large: "كبير",
    egp: "ج.م",
    addToOrder: "أضف للطلب",
    tagSpicy: "سبايسي 🌶️",
    tagPopular: "الأكثر طلباً ⭐",
    tagSpecial: "مميز علوان 👑",
    tagCharcoal: "مشوي فحم 🔥",
    tagNew: "جديد ⚡",
    tagNatural: "طبيعي 100% 🌿",
    branchesSectionTitle: "فروعنا وخدمة التوصيل السريع",
    branchesSectionSubtitle: "نصلك أينما كنت في البلينا وقرى المركز ساخناً وطازجاً بأعلى معايير الجودة",
    orderModalTitle: "سلة الطلب السريع عبر واتساب",
    emptyCartTitle: "سلتك فارغة حتى الآن",
    emptyCartDesc: "تصفح القائمة واختر أشهى المأكولات والمشروبات!",
    orderTypeLabel: "طريقة الاستلام:",
    orderTypeDelivery: "توصيل للمنزل / دليفري 🛵",
    orderTypePickup: "استلام من المطعم (تيك أواي) 🛍️",
    orderTypeDineIn: "تناول داخل الصالة (ترابيزة) 🍽️",
    customerName: "الاسم الكريم:",
    customerPhone: "رقم الموبايل للتواصل:",
    customerBranch: "اختر الفرع أو منطقة التوصيل:",
    customerAddressOrTable: "العنوان بالتفصيل أو رقم الطاولة:",
    customerNotes: "ملاحظات إضافية (عادي / سبايسي / صوص إضافي / بدون خضار...):",
    placeholderName: "مثال: أحمد محمد",
    placeholderPhone: "مثال: 01212663434",
    placeholderAddress: "مثال: البلينا - شارع الجمهورية - عمارة 4 - شقة 2",
    placeholderTable: "مثال: طاولة رقم 5 - الصالة العائلية",
    placeholderNotes: "مثال: المشاوي تسوية زيادة / بدون بصل / صوص تومية زيادة",
    totalPrice: "الإجمالي:",
    sendWhatsAppBtn: "إرسال الطلب عبر واتساب 💬",
    floatOrderCta: "عرض الطلب وإتمام الشراء 💬",
    qrModalTitle: "امسح رمز QR لفتح المنيو",
    qrModalDesc: "وجّه كاميرا هاتفك المحمول إلى الرمز لفتح المنيو الإلكتروني في أي وقت ومشاركته مع عائلتك وأصدقائك!",
    tableNumLabel: "حدد رقم الطاولة (اختياري لخدمة الصالة):",
    tableNone: "المنيو العام بدون طاولة",
    tableNumPrefix: "طاولة رقم",
    downloadQR: "تحميل صورة QR",
    copyLink: "نسخ رابط المنيو",
    copiedAlert: "تم نسخ الرابط بنجاح!",
    flyerModalTitle: "المنيو والبروشور الأصلي المطبوع",
    flyerTabAll: "جميع صفحات المنيو (14 صفحة)",
    flyerTabGrills: "المشاوي والطواجن والمحاشي",
    flyerTabFastFood: "البيتزا والكريب والساندوتشات",
    flyerTabCafe: "الكافيه والمشروبات والوافل",
    footerAbout: "مطعم وكافيه علوان - للمذاق عنوان! الوجهة الأولى للمشاوي على الفحم، البيتزا الإيطالية، الكريب، البرجر الفاخر، الوافل الطازج والحلويات الشرقية والغربية وألذ المشروبات في البلينا وسوهاج.",
    footerBrandTitle: "علوان <span>للمذاق عنوان</span> 👑",
    footerBranchBalyana: "البلينا - بجوار بنك مصر الجديد - محافظة سوهاج",
    footerCopyright: "&copy; 2026 مطعم وكافيه علوان - جميع الحقوق محفوظة",
    devCreditBy: "تصميم وتطوير:",
    flyerBannerDesc: "يمكنك تصفح صور المنشور الأصلي بجميع أصنافه وأسعاره كاملة بدقة فائقة وبشكل فوري",
    selectBranchTitle: "اختر الفرع أو خط التوصيل",
    searchBranchPlaceholder: "ابحث بالفرع أو العنوان...",
    noBranchesFound: "لا توجد خيارات تطابق بحثك",
    featuredBranchBadge: "الفرع الرئيسي",
    itemsCountSuffix: "أصناف",
    clearCart: "تفريغ السلة",
    sweetNotice: "⭐ يتوفر يومياً حلويات شرقية وغربية طازجة وتورت وجاتوهات مخصصة للمناسبات."
  },
  en: {
    brandName: "Elwan",
    brandSubtitle: "For Taste, An Address",
    brandTagline: "Restaurant • Cafe • Oriental & Western Sweets",
    navMenu: "Menu",
    navBranches: "Branches & Order",
    navQR: "QR Code",
    navCall: "Call Us",
    navCart: "Order",
    heroBadge: "The Finest Grills, Pizza, Crepes, Waffles & Drinks in El Balyana & Sohag",
    heroTitle: "Elwan Restaurant & Cafe",
    heroSubtitle: "For Taste, An Address... Serving premium fresh charcoal grills, authentic Italian pizzas, crispy crepes, smashed burgers, fresh waffles, oriental & western sweets, and a complete world-class cafe.",
    hotlineLabel: "Express Delivery & Ordering Hotlines:",
    complaintsLabel: "Complaints & Suggestions:",
    ctaMenu: "Explore Menu",
    ctaBranches: "Branches & Delivery",
    ctaFlyer: "View Original Flyer",
    branchBalyanaTitle: "El Balyana Main Branch (Dine-in & Delivery)",
    branchBalyanaDesc: "El Balyana - Next to New Banque Misr - Sohag",
    btnOpenMap: "Open in Maps",
    btnCallBranch: "Call Branch",
    searchPlaceholder: "Search grills, pizza, crepes, burgers, waffles, drinks...",
    tabAll: "All",
    tabGrills: "Grills & BBQ",
    tabTagines: "Tagines & Fattah",
    tabMahashi: "Mahashi & Starters",
    tabSandwiches: "Burgers & Sandwiches",
    tabSaj: "Syrian Saj & Tortilla",
    tabMeals: "Meals & Shawarma",
    tabPizza: "Italian Pizza",
    tabCrepes: "Savory Crepes",
    tabPasta: "Pasta & Baked Dishes",
    tabDesserts: "Waffles & Desserts",
    tabCoffee: "Coffee & Espresso Bar",
    tabHotDrinks: "Hot Drinks & Teas",
    tabJuices: "100% Natural Juices",
    tabSmoothies: "Smoothies & Shakes",
    tabIceCream: "Ice Cream & Mojitos",
    tabSides: "Salads, Sides & Sauces",
    single: "Single",
    double: "Double",
    quarter: "1/4 Kg",
    third: "1/3 Kg",
    half: "1/2 Kg",
    kilo: "1 Kg",
    eighth: "1/8 Kg",
    small: "Small",
    medium: "Medium",
    large: "Large",
    egp: "EGP",
    addToOrder: "Add to Order",
    tagSpicy: "Spicy 🌶️",
    tagPopular: "Popular ⭐",
    tagSpecial: "Elwan Special 👑",
    tagCharcoal: "Charcoal Grilled 🔥",
    tagNew: "NEW ⚡",
    tagNatural: "100% Fresh 🌿",
    branchesSectionTitle: "Branches & Fast Delivery",
    branchesSectionSubtitle: "Delivered fresh, sizzling and crispy anywhere in El Balyana & surrounding villages",
    orderModalTitle: "Fast WhatsApp Checkout",
    emptyCartTitle: "Your cart is empty",
    emptyCartDesc: "Explore our rich menu and pick your favorite food and drinks!",
    orderTypeLabel: "Order Type:",
    orderTypeDelivery: "Home Delivery 🛵",
    orderTypePickup: "Takeaway / Store Pickup 🛍️",
    orderTypeDineIn: "Dine-in Table Service 🍽️",
    customerName: "Your Full Name:",
    customerPhone: "Contact Phone Number:",
    customerBranch: "Select Branch or Delivery Line:",
    customerAddressOrTable: "Detailed Address or Table Number:",
    customerNotes: "Order Notes (Spicy, extra sauce, no onions...):",
    placeholderName: "e.g., Ahmed Mohamed",
    placeholderPhone: "e.g., 01212663434",
    placeholderAddress: "e.g., El Balyana - Gomhouria St - Bldg 4, Apt 2",
    placeholderTable: "e.g., Table 5 - Family Hall",
    placeholderNotes: "e.g., Extra garlic sauce, well done grill",
    totalPrice: "Total:",
    sendWhatsAppBtn: "Send Order via WhatsApp 💬",
    floatOrderCta: "View Order & Checkout 💬",
    qrModalTitle: "Scan QR Code for Digital Menu",
    qrModalDesc: "Point your phone camera to open our live digital menu anytime and share with your friends!",
    tableNumLabel: "Select Table Number (for Dine-in):",
    tableNone: "General Menu (No Table)",
    tableNumPrefix: "Table",
    downloadQR: "Download QR Image",
    copyLink: "Copy Menu Link",
    copiedAlert: "Link copied to clipboard!",
    flyerModalTitle: "Original Printed Menu Scans",
    flyerTabAll: "All Pages (14 Scans)",
    flyerTabGrills: "Grills, Tagines & Mahashi",
    flyerTabFastFood: "Pizza, Crepes & Sandwiches",
    flyerTabCafe: "Cafe, Waffles & Drinks",
    footerAbout: "Elwan Restaurant & Cafe - For Taste, An Address! Your ultimate culinary destination for charcoal grills, authentic Italian pizza, gourmet crepes, burgers, fresh waffles, and handmade oriental & western sweets in El Balyana & Sohag.",
    footerBrandTitle: "Elwan <span>For Taste, An Address</span> 👑",
    footerBranchBalyana: "El Balyana - Next to New Banque Misr - Sohag Governorate",
    footerCopyright: "&copy; 2026 Elwan Restaurant & Cafe - All rights reserved",
    devCreditBy: "Designed & Developed by:",
    flyerBannerDesc: "Browse the authentic printed flyer pages with full items and verified prices in high resolution",
    selectBranchTitle: "Select Branch or Delivery Route",
    searchBranchPlaceholder: "Search branch or address...",
    noBranchesFound: "No matching branches found",
    featuredBranchBadge: "Main Branch",
    itemsCountSuffix: "items",
    clearCart: "Clear Cart",
    sweetNotice: "⭐ Handcrafted Oriental & Western pastries, gateaux and custom cakes freshly baked daily."
  }
};

// Available Branches & Delivery Routing Configuration
const BRANCHES_DATA = [
  {
    id: "balyana_main",
    nameAr: "فرع البلينا الرئيسي (صالة ومطعم وتوصيل)",
    nameEn: "El Balyana Main Branch (Dine-in & Delivery)",
    addressAr: "البلينا - بجوار بنك مصر الجديد - سوهاج",
    addressEn: "El Balyana - Next to New Banque Misr - Sohag",
    phone: "01212663434",
    whatsapp: "01212663434",
    hotline: "01100089498",
    complaints: "01033034090",
    isMain: true,
    mapsUrl: "https://maps.google.com/?q=El+Balyana+Sohag"
  },
  {
    id: "balyana_delivery",
    nameAr: "خدمة التوصيل السريع لمدينة البلينا والقرى المجاورة",
    nameEn: "Express Delivery: El Balyana City & Villages",
    addressAr: "توصيل لكافة أحياء البلينا وقرى المركز بالكامل",
    addressEn: "Fast delivery to all El Balyana neighborhoods and surrounding villages",
    phone: "01212663434",
    whatsapp: "01212663434",
    hotline: "01100089498",
    complaints: "01033034090",
    isMain: false,
    mapsUrl: "https://maps.google.com/?q=El+Balyana+Sohag"
  },
  {
    id: "balyana_takeaway",
    nameAr: "تجهيز طلبات الاستلام السريع (تيك أواي)",
    nameEn: "Quick Takeaway & In-Store Pickup",
    addressAr: "الاستلام المباشر ساخناً من شباك تيك أواي الفرع",
    addressEn: "Direct pickup hot & fresh from our takeaway counter",
    phone: "01212663434",
    whatsapp: "01212663434",
    hotline: "01100089498",
    complaints: "01033034090",
    isMain: false,
    mapsUrl: "https://maps.google.com/?q=El+Balyana+Sohag"
  }
];

// Original Menu Flyer Images (1.jpg to 14.jpg)
const FLYER_PAGES = [
  { id: 1, titleAr: "الهوية والعنوان والخط الساخن", titleEn: "Brand & Contact", src: "./assets/images/1.jpg", cat: "info" },
  { id: 2, titleAr: "غلاف المنيو الأصلي", titleEn: "Menu Cover", src: "./assets/images/2.jpg", cat: "info" },
  { id: 3, titleAr: "قائمة المشاوي الفاخرة على الفحم", titleEn: "Charcoal Grills Menu", src: "./assets/images/3.jpg", cat: "grills" },
  { id: 4, titleAr: "الساندوتشات والصاج والوجبات والباستا", titleEn: "Burgers, Saj, Meals & Pasta", src: "./assets/images/4.jpg", cat: "fastfood" },
  { id: 5, titleAr: "قائمة البيتزا والكريب الحادق", titleEn: "Pizza & Crepes Menu", src: "./assets/images/5.jpg", cat: "fastfood" },
  { id: 6, titleAr: "المحاشي والطواجن والفتات والسلطات", titleEn: "Mahashi, Tagines & Fattah", src: "./assets/images/6.jpg", cat: "grills" },
  { id: 7, titleAr: "بار القهوة والإسبريسو الساخن", titleEn: "Coffee & Espresso Bar", src: "./assets/images/7.jpg", cat: "cafe" },
  { id: 8, titleAr: "ركن الوافل والعصائر الطبيعية 100%", titleEn: "Waffles & 100% Fresh Juices", src: "./assets/images/8.jpg", cat: "cafe" },
  { id: 9, titleAr: "المشروبات الساخنة والأعشاب والسحلب", titleEn: "Hot Teas & Sahlab", src: "./assets/images/9.jpg", cat: "cafe" },
  { id: 10, titleAr: "قائمة السموزي والمشروبات الغازية", titleEn: "Smoothies & Soft Drinks", src: "./assets/images/10.jpg", cat: "cafe" },
  { id: 11, titleAr: "ركن الآيس كريم والجيلاتو", titleEn: "Ice Cream & Gelato", src: "./assets/images/11.jpg", cat: "cafe" },
  { id: 12, titleAr: "ميكس فريش والموهيتو وميكس صودا", titleEn: "Fresh Mixes, Mojitos & Soda", src: "./assets/images/12.jpg", cat: "cafe" },
  { id: 13, titleAr: "ميلك شيك، فرابتشينو، وآيس كافيه", titleEn: "Milkshakes, Frappe & Iced Coffee", src: "./assets/images/13.jpg", cat: "cafe" },
  { id: 14, titleAr: "شعار علوان وللمذاق عنوان", titleEn: "Elwan Emblem & Back Cover", src: "./assets/images/14.jpg", cat: "info" }
];

// App State
let currentLanguage = localStorage.getItem("elwan_lang") || "ar";
let currentCategory = "all";
let searchQuery = "";
let selectedBranch = BRANCHES_DATA[0];
let cartItems = JSON.parse(localStorage.getItem("elwan_cart") || "[]");
let qrCodeInstance = null;
let currentFlyerIndex = 0;
let tableNumberParam = null;


// Full Menu Database
const MENU_ITEMS = [
  {
    "id": "grill_chicken",
    "category": "grills",
    "nameAr": "فراخ مشوية على الفحم",
    "nameEn": "Charcoal Grilled Chicken",
    "descAr": "فراخ طازجة بتتبيلة علوان الخاصة مشوية على الفحم، تقدم مع أرز وطحينة وعيش",
    "descEn": "Fresh chicken marinated in Elwan's secret recipe, charcoal grilled to perfection.",
    "badge": "charcoal",
    "options": [
      {
        "key": "quarter_thigh",
        "labelAr": "ربع ورك",
        "labelEn": "1/4 Thigh",
        "price": 110
      },
      {
        "key": "quarter_breast",
        "labelAr": "ربع صدر",
        "labelEn": "1/4 Breast",
        "price": 125
      },
      {
        "key": "half",
        "labelAr": "نصف فرخة",
        "labelEn": "1/2 Chicken",
        "price": 220
      },
      {
        "key": "whole",
        "labelAr": "فرخة كاملة",
        "labelEn": "Whole Chicken",
        "price": 440
      },
      {
        "key": "tray_quarter",
        "labelAr": "ربع صينيه",
        "labelEn": "1/4 Tray",
        "price": 140
      },
      {
        "key": "tray_half",
        "labelAr": "نصف صينيه",
        "labelEn": "1/2 Tray",
        "price": 280
      },
      {
        "key": "tray_whole",
        "labelAr": "فرخة صينيه",
        "labelEn": "Whole Tray",
        "price": 560
      }
    ],
    "selectedOption": 0
  },
  {
    "id": "grill_shish_tawook",
    "category": "grills",
    "nameAr": "شيش طاووق على الفحم",
    "nameEn": "Charcoal Shish Tawook",
    "descAr": "شيش طاووق متبل بخلطة البهارات والمشوي على الفحم مع خضار مشوي وطحينة وعيش",
    "descEn": "Tender marinated chicken cubes skewered and grilled over charcoal.",
    "badge": "popular",
    "options": [
      {
        "key": "quarter_kg",
        "labelAr": "ربع كيلو",
        "labelEn": "1/4 Kg",
        "price": 120
      },
      {
        "key": "half_kg",
        "labelAr": "نصف كيلو",
        "labelEn": "1/2 Kg",
        "price": 220
      },
      {
        "key": "one_kg",
        "labelAr": "كيلو كامل",
        "labelEn": "1 Kg",
        "price": 450
      }
    ],
    "selectedOption": 0
  },
  {
    "id": "grill_lamb_chops",
    "category": "grills",
    "nameAr": "ريش ضاني ملوكي",
    "nameEn": "Royal Lamb Chops",
    "descAr": "ريش ضاني بلدي طازجة مشوية على الفحم بأعلى جودة وطعم أصيل",
    "descEn": "Premium fresh Egyptian lamb chops charcoal-grilled to juicy perfection.",
    "badge": "special",
    "options": [
      {
        "key": "quarter_kg",
        "labelAr": "ربع كيلو",
        "labelEn": "1/4 Kg",
        "price": 250
      },
      {
        "key": "third_kg",
        "labelAr": "تلت كيلو",
        "labelEn": "1/3 Kg",
        "price": 350
      },
      {
        "key": "half_kg",
        "labelAr": "نصف كيلو",
        "labelEn": "1/2 Kg",
        "price": 500
      },
      {
        "key": "one_kg",
        "labelAr": "كيلو كامل",
        "labelEn": "1 Kg",
        "price": 1000
      }
    ],
    "selectedOption": 0
  },
  {
    "id": "grill_liver_kidneys",
    "category": "grills",
    "nameAr": "كبدة وكلاوي مشوية",
    "nameEn": "Grilled Liver & Kidneys",
    "descAr": "كبدة وكلاوي طازجة مشوية على الفحم بتتبيلة علوان الخاصة المميزة",
    "descEn": "Fresh seasoned liver and kidneys grilled over charcoal.",
    "badge": "charcoal",
    "options": [
      {
        "key": "quarter_kg",
        "labelAr": "ربع كيلو",
        "labelEn": "1/4 Kg",
        "price": 250
      },
      {
        "key": "half_kg",
        "labelAr": "نصف كيلو",
        "labelEn": "1/2 Kg",
        "price": 500
      },
      {
        "key": "one_kg",
        "labelAr": "كيلو كامل",
        "labelEn": "1 Kg",
        "price": 1000
      }
    ],
    "selectedOption": 0
  },
  {
    "id": "grill_pigeon",
    "category": "grills",
    "nameAr": "حمام فاخر (فريك / أرز / مشوي)",
    "nameEn": "Deluxe Egyptian Pigeon",
    "descAr": "حمام بلدي محشو فريك صعيدي فاخر أو أرز بالخلطة أو مشوي على الفحم",
    "descEn": "Egyptian stuffed pigeon with authentic Freekeh, rice or charcoal grilled.",
    "badge": "special",
    "options": [
      {
        "key": "freekeh",
        "labelAr": "حمام فريك",
        "labelEn": "Stuffed Freekeh",
        "price": 175
      },
      {
        "key": "rice",
        "labelAr": "حمام رز",
        "labelEn": "Stuffed Rice",
        "price": 160
      },
      {
        "key": "grilled",
        "labelAr": "حمام مشوي",
        "labelEn": "Charcoal Grilled",
        "price": 150
      }
    ],
    "selectedOption": 0
  },
  {
    "id": "grill_tarb",
    "category": "grills",
    "nameAr": "طرب ضاني على الفحم",
    "nameEn": "Lamb Tarb (Kofta in Caul Fat)",
    "descAr": "طرب ضاني بلدي مشوي على الفحم يذوب في الفم بنكهة لا تقاوم",
    "descEn": "Minced lamb kofta wrapped in delicate caul fat and flame grilled.",
    "badge": "popular",
    "options": [
      {
        "key": "quarter_kg",
        "labelAr": "ربع كيلو",
        "labelEn": "1/4 Kg",
        "price": 225
      },
      {
        "key": "half_kg",
        "labelAr": "نصف كيلو",
        "labelEn": "1/2 Kg",
        "price": 425
      },
      {
        "key": "one_kg",
        "labelAr": "كيلو كامل",
        "labelEn": "1 Kg",
        "price": 800
      }
    ],
    "selectedOption": 0
  },
  {
    "id": "grill_chicken_kofta",
    "category": "grills",
    "nameAr": "كفتة فراخ مشوية",
    "nameEn": "Charcoal Chicken Kofta",
    "descAr": "كفتة فراخ متبلة بالبهارات الخاصة مشوية على الفحم شهية وخفيفة",
    "descEn": "Tender chicken kofta skewers seasoned with herbs and flame-grilled.",
    "badge": "charcoal",
    "options": [
      {
        "key": "eighth_kg",
        "labelAr": "تمن كيلو",
        "labelEn": "1/8 Kg",
        "price": 120
      },
      {
        "key": "quarter_kg",
        "labelAr": "ربع كيلو",
        "labelEn": "1/4 Kg",
        "price": 200
      },
      {
        "key": "third_kg",
        "labelAr": "تلت كيلو",
        "labelEn": "1/3 Kg",
        "price": 250
      },
      {
        "key": "half_kg",
        "labelAr": "نصف كيلو",
        "labelEn": "1/2 Kg",
        "price": 350
      },
      {
        "key": "one_kg",
        "labelAr": "كيلو كامل",
        "labelEn": "1 Kg",
        "price": 700
      }
    ],
    "selectedOption": 1
  },
  {
    "id": "grill_lamb_kofta",
    "category": "grills",
    "nameAr": "كفتة ضاني مشوية",
    "nameEn": "Charcoal Lamb Kofta",
    "descAr": "كفتة لحم ضاني مفروم طازج ومتبل بخلطة علوان ومطهو على الفحم",
    "descEn": "Signature seasoned minced lamb skewers grilled over charcoal.",
    "badge": "popular",
    "options": [
      {
        "key": "eighth_kg",
        "labelAr": "تمن كيلو",
        "labelEn": "1/8 Kg",
        "price": 120
      },
      {
        "key": "quarter_kg",
        "labelAr": "ربع كيلو",
        "labelEn": "1/4 Kg",
        "price": 200
      },
      {
        "key": "third_kg",
        "labelAr": "تلت كيلو",
        "labelEn": "1/3 Kg",
        "price": 300
      },
      {
        "key": "half_kg",
        "labelAr": "نصف كيلو",
        "labelEn": "1/2 Kg",
        "price": 400
      },
      {
        "key": "one_kg",
        "labelAr": "كيلو كامل",
        "labelEn": "1 Kg",
        "price": 800
      }
    ],
    "selectedOption": 1
  },
  {
    "id": "grill_kebab",
    "category": "grills",
    "nameAr": "كباب لحم ضاني بلدي",
    "nameEn": "Charcoal Lamb Kebab",
    "descAr": "قطع لحم بلدي طري ومتبل مشوي على الفحم الساخن",
    "descEn": "Tender prime lamb cuts marinated in special spices and grilled.",
    "badge": "special",
    "options": [
      {
        "key": "eighth_kg",
        "labelAr": "تمن كيلو",
        "labelEn": "1/8 Kg",
        "price": 130
      },
      {
        "key": "quarter_kg",
        "labelAr": "ربع كيلو",
        "labelEn": "1/4 Kg",
        "price": 250
      },
      {
        "key": "third_kg",
        "labelAr": "تلت كيلو",
        "labelEn": "1/3 Kg",
        "price": 350
      },
      {
        "key": "half_kg",
        "labelAr": "نصف كيلو",
        "labelEn": "1/2 Kg",
        "price": 500
      },
      {
        "key": "one_kg",
        "labelAr": "كيلو كامل",
        "labelEn": "1 Kg",
        "price": 1000
      }
    ],
    "selectedOption": 1
  },
  {
    "id": "grill_mixed",
    "category": "grills",
    "nameAr": "مشكل مشاوي علوان",
    "nameEn": "Elwan Mixed Grill",
    "descAr": "تشكيلة فاخرة من الكباب والكفتة والشيش والطرب على الفحم",
    "descEn": "Deluxe combo of lamb kebab, kofta, tarb and chicken shish over charcoal.",
    "badge": "special",
    "options": [
      {
        "key": "quarter_kg",
        "labelAr": "ربع كيلو",
        "labelEn": "1/4 Kg",
        "price": 250
      },
      {
        "key": "third_kg",
        "labelAr": "تلت كيلو",
        "labelEn": "1/3 Kg",
        "price": 300
      },
      {
        "key": "half_kg",
        "labelAr": "نصف كيلو",
        "labelEn": "1/2 Kg",
        "price": 450
      },
      {
        "key": "one_kg",
        "labelAr": "كيلو كامل",
        "labelEn": "1 Kg",
        "price": 900
      }
    ],
    "selectedOption": 0
  },
  {
    "id": "grill_neefa",
    "category": "grills",
    "nameAr": "نيفة ضاني على الفحم",
    "nameEn": "Lamb Neefa (Slow Roasted)",
    "descAr": "لحم نيفة ضاني بلدي طازج ومطهو على الفحم الهادئ بطراوة فائقة",
    "descEn": "Slow charcoal roasted tender lamb meat with distinct savory flavors.",
    "badge": "special",
    "options": [
      {
        "key": "quarter_kg",
        "labelAr": "ربع كيلو",
        "labelEn": "1/4 Kg",
        "price": 250
      },
      {
        "key": "third_kg",
        "labelAr": "تلت كيلو",
        "labelEn": "1/3 Kg",
        "price": 350
      },
      {
        "key": "half_kg",
        "labelAr": "نصف كيلو",
        "labelEn": "1/2 Kg",
        "price": 500
      },
      {
        "key": "one_kg",
        "labelAr": "كيلو كامل",
        "labelEn": "1 Kg",
        "price": 1000
      }
    ],
    "selectedOption": 0
  },
  {
    "id": "grill_hawawshi",
    "category": "grills",
    "nameAr": "حواوشي علوان على الفحم",
    "nameEn": "Elwan Charcoal Hawawshi",
    "descAr": "عيش بلدي طازج محشو باللحمة المتبلة مع اختيارات الديناميت وميكس الجبن",
    "descEn": "Egyptian crispy baladi bread stuffed with spiced meat, cheese and herbs.",
    "badge": "popular",
    "options": [
      {
        "key": "small",
        "labelAr": "حواوشي صغير",
        "labelEn": "Small",
        "price": 70
      },
      {
        "key": "dynamite",
        "labelAr": "ديناميت علوان",
        "labelEn": "Elwan Dynamite",
        "price": 100
      },
      {
        "key": "large",
        "labelAr": "حواوشي كبير",
        "labelEn": "Large",
        "price": 140
      },
      {
        "key": "king_cheese",
        "labelAr": "كينج ميكس جبن",
        "labelEn": "King Cheese Mix",
        "price": 170
      }
    ],
    "selectedOption": 1
  },
  {
    "id": "tagine_pigeon_freekeh",
    "category": "tagines",
    "nameAr": "طاجن حمام بالفريك",
    "nameEn": "Pigeon with Freekeh Tagine",
    "descAr": "حمام بلدي مطهو في الطاجن الفخاري مع الفريك الصعيدي البلدي والسمنة البلدي",
    "descEn": "Tender whole pigeon slow cooked in a clay pot with savory freekeh.",
    "price": 200,
    "badge": "special"
  },
  {
    "id": "tagine_veg_meat",
    "category": "tagines",
    "nameAr": "طاجن خضار باللحمة",
    "nameEn": "Meat & Vegetables Tagine",
    "descAr": "قطع لحم بلدي طازجة مع تشكيلة خضار طازجة في الفرن البلدي",
    "descEn": "Tender beef chunks slow-baked with fresh seasonal vegetables in rich tomato sauce.",
    "price": 250,
    "badge": "popular"
  },
  {
    "id": "tagine_meat_grape_leaves",
    "category": "tagines",
    "nameAr": "طاجن خضار باللحمة وورق العنب",
    "nameEn": "Meat, Veg & Stuffed Vine Leaves Tagine",
    "descAr": "مزيج ملكي من اللحم البلدي والخضار مع أصابع ورق العنب المتبلة بدبس الرمان",
    "descEn": "Oven baked meat and vegetables crowned with seasoned stuffed grape leaves.",
    "price": 270,
    "badge": "special"
  },
  {
    "id": "tagine_freekeh_meat",
    "category": "tagines",
    "nameAr": "طاجن فريك باللحمة",
    "nameEn": "Freekeh with Meat Tagine",
    "descAr": "فريك صعيدي بلدي مطهو مع قطع اللحم الفاخرة والمكسرات المحمصة",
    "descEn": "Traditional Egyptian roasted green wheat slow-cooked with tender meat chunks.",
    "price": 300,
    "badge": "special"
  },
  {
    "id": "fattah_meat",
    "category": "tagines",
    "nameAr": "فتة لحمة بلدي مصرية",
    "nameEn": "Egyptian Meat Fattah",
    "descAr": "فتة مصرية أصيلة بالعيش المقرمش والأرز المصري وصوص الثوم والخل والصلصة مع لحم بلدي",
    "descEn": "Layered crispy bread, spiced Egyptian rice, garlic vinegar sauce and tender meat.",
    "price": 270,
    "badge": "popular"
  },
  {
    "id": "fattah_lamb_shank",
    "category": "tagines",
    "nameAr": "موزة ضاني مع الفتة",
    "nameEn": "Lamb Shank with Fattah",
    "descAr": "موزة ضاني بلدي كبيرة متبلة ومطهوة في الفرن حتى الذوبان، تقدم مع أرز الفتة وصوص الثوم والخل",
    "descEn": "Braised fall-off-the-bone lamb shank served atop Egyptian fattah.",
    "price": 370,
    "badge": "special"
  },
  {
    "id": "meal_mix_grill",
    "category": "tagines",
    "nameAr": "وجبة ميكس جريل",
    "nameEn": "Mix Grill Platter Meal",
    "descAr": "تشكيلة من كباب، كفتة، شيش طاووق، مع أرز بسمتي، سلطات، عيش وطحينة",
    "descEn": "Generous combo of kebab, kofta, and chicken shish with basmati rice & salads.",
    "price": 355,
    "badge": "popular"
  },
  {
    "id": "mahashi_platter",
    "category": "mahashi",
    "nameAr": "طبق محاشي مشكل",
    "nameEn": "Mixed Stuffed Vegetables Platter",
    "descAr": "تشكيلة محاشي مشكلة (كوسة، باذنجان، فلفل، ورق عنب) بخلطة الأرز المصرية بالخضرة والبهارات",
    "descEn": "Egyptian stuffed zucchini, eggplant, peppers, and vine leaves with spiced herbed rice.",
    "badge": "popular",
    "options": [
      {
        "key": "small",
        "labelAr": "طبق صغير",
        "labelEn": "Small Platter",
        "price": 60
      },
      {
        "key": "medium",
        "labelAr": "طبق وسط",
        "labelEn": "Medium Platter",
        "price": 120
      },
      {
        "key": "large",
        "labelAr": "طبق كبير",
        "labelEn": "Large Platter",
        "price": 180
      }
    ],
    "selectedOption": 1
  },
  {
    "id": "mombar_platter",
    "category": "mahashi",
    "nameAr": "طبق ممبار بلدي مقرمش",
    "nameEn": "Crispy Egyptian Mombar",
    "descAr": "ممبار بلدي محشو بالأرز المتبل ومحمر بالسمنة البلدي حتى القرمشة الذهبية",
    "descEn": "Golden crispy fried stuffed beef sausage filled with seasoned fragrant rice.",
    "badge": "special",
    "options": [
      {
        "key": "small",
        "labelAr": "طبق صغير",
        "labelEn": "Small Platter",
        "price": 60
      },
      {
        "key": "medium",
        "labelAr": "طبق وسط",
        "labelEn": "Medium Platter",
        "price": 120
      },
      {
        "key": "large",
        "labelAr": "طبق كبير",
        "labelEn": "Large Platter",
        "price": 180
      }
    ],
    "selectedOption": 1
  },
  {
    "id": "grape_leaves_platter",
    "category": "mahashi",
    "nameAr": "طبق ورق عنب متبل",
    "nameEn": "Seasoned Vine Leaves Platter",
    "descAr": "أصابع ورق عنب ناعمة محشوة بالأرز بالخلطة والليمون ودبس الرمان",
    "descEn": "Tender stuffed vine leaves rolled with herb-infused rice and a squeeze of fresh lemon.",
    "badge": "popular",
    "options": [
      {
        "key": "small",
        "labelAr": "طبق صغير",
        "labelEn": "Small Platter",
        "price": 60
      },
      {
        "key": "medium",
        "labelAr": "طبق وسط",
        "labelEn": "Medium Platter",
        "price": 120
      },
      {
        "key": "large",
        "labelAr": "طبق كبير",
        "labelEn": "Large Platter",
        "price": 180
      }
    ],
    "selectedOption": 1
  },
  {
    "id": "sambousek_meat",
    "category": "mahashi",
    "nameAr": "سمبوسك لحمة بلدي (5 قطع)",
    "nameEn": "Meat Sambousek (5 Pcs)",
    "descAr": "مثلثات سمبوسك مقرمشة محشوة باللحم المفروم المتبل والصنوبر (5 قطع)",
    "descEn": "Golden crispy pastry triangles stuffed with seasoned minced meat and spices (5 pcs).",
    "price": 70,
    "badge": "popular"
  },
  {
    "id": "sambousek_cheese",
    "category": "mahashi",
    "nameAr": "سمبوسك جبنة (5 قطع)",
    "nameEn": "Cheese Sambousek (5 Pcs)",
    "descAr": "مثلثات سمبوسك مقرمشة محشوة بميكس أجبان وحبة البركة والنعناع (5 قطع)",
    "descEn": "Crispy pastry triangles stuffed with melted cheese blend, mint and nigella seeds (5 pcs).",
    "price": 50,
    "badge": "popular"
  },
  {
    "id": "sandwich_smash_burger",
    "category": "sandwiches",
    "nameAr": "ساندوتش سماش برجر",
    "nameEn": "Smash Burger Sandwich",
    "descAr": "لحم بقري بلدي مسماش مع صوص برجر خاص، بصل، مخلل، وجبنة شيدر في خبز بريوش طازج",
    "descEn": "Juicy smashed baladi beef patty, burger mix sauce, onions, pickles & cheddar in brioche.",
    "badge": "popular",
    "options": [
      {
        "key": "single",
        "labelAr": "سنجل",
        "labelEn": "Single",
        "price": 80
      },
      {
        "key": "double",
        "labelAr": "دبل",
        "labelEn": "Double",
        "price": 100
      }
    ],
    "selectedOption": 0
  },
  {
    "id": "sandwich_cheese_burger",
    "category": "sandwiches",
    "nameAr": "ساندوتش تشيز برجر",
    "nameEn": "Cheese Burger Sandwich",
    "descAr": "برجر بقري مشوي مع طبقات جبنة شيدر ذائبة، خس مقرمش، طماطم وصوص علوان الأصلي",
    "descEn": "Flame-grilled beef burger layered with melted cheddar slices, lettuce, tomato & sauce.",
    "badge": "popular",
    "options": [
      {
        "key": "single",
        "labelAr": "سنجل",
        "labelEn": "Single",
        "price": 90
      },
      {
        "key": "double",
        "labelAr": "دبل",
        "labelEn": "Double",
        "price": 135
      }
    ],
    "selectedOption": 0
  },
  {
    "id": "sandwich_chicken_crispy",
    "category": "sandwiches",
    "nameAr": "ساندوتش تشكن كريسبي",
    "nameEn": "Crispy Chicken Sandwich",
    "descAr": "قطعة دجاج كريسبي مقرمشة بالخلطة السرية مع خس ومايونيز وصوص شيدر",
    "descEn": "Ultra-crispy fried chicken breast fillet with lettuce, mayo, and warm cheddar sauce.",
    "badge": "popular",
    "options": [
      {
        "key": "single",
        "labelAr": "سنجل",
        "labelEn": "Single",
        "price": 80
      },
      {
        "key": "double",
        "labelAr": "دبل",
        "labelEn": "Double",
        "price": 110
      }
    ],
    "selectedOption": 0
  },
  {
    "id": "sandwich_chicken_fire",
    "category": "sandwiches",
    "nameAr": "ساندوتش تشكن فاير (سبايسي)",
    "nameEn": "Fire Chicken Sandwich (Spicy)",
    "descAr": "دجاج كريسبي حار مع صوص هالبينو وصوص كوكتيل حار لعشاق الإثارة",
    "descEn": "Spicy fire chicken fillet with pickled jalapeños, fiery cocktail sauce & melted cheese.",
    "badge": "spicy",
    "options": [
      {
        "key": "single",
        "labelAr": "سنجل",
        "labelEn": "Single",
        "price": 80
      },
      {
        "key": "double",
        "labelAr": "دبل",
        "labelEn": "Double",
        "price": 120
      }
    ],
    "selectedOption": 0
  },
  {
    "id": "sandwich_chicken_crunchy",
    "category": "sandwiches",
    "nameAr": "ساندوتش تشكن كرانشي",
    "nameEn": "Crunchy Chicken Sandwich",
    "descAr": "دجاج كرانشي متبل بمقرمشات ذهبية مع رومي مدخن وصوص رانش فاخر",
    "descEn": "Extra crunchy golden chicken fillet topped with smoked turkey and ranch dressing.",
    "badge": "popular",
    "options": [
      {
        "key": "single",
        "labelAr": "سنجل",
        "labelEn": "Single",
        "price": 80
      },
      {
        "key": "double",
        "labelAr": "دبل",
        "labelEn": "Double",
        "price": 130
      }
    ],
    "selectedOption": 0
  },
  {
    "id": "sandwich_chicken_strips",
    "category": "sandwiches",
    "nameAr": "ساندوتش تشكن استربس",
    "nameEn": "Chicken Strips Sandwich",
    "descAr": "أصابع استربس مقرمشة مع صوص الجبنة الشيدر وخس طازج في خبز طري",
    "descEn": "Golden crispy chicken strips with cheddar sauce and crisp lettuce.",
    "badge": "popular",
    "options": [
      {
        "key": "single",
        "labelAr": "سنجل",
        "labelEn": "Single",
        "price": 70
      },
      {
        "key": "double",
        "labelAr": "دبل",
        "labelEn": "Double",
        "price": 100
      }
    ],
    "selectedOption": 0
  },
  {
    "id": "sandwich_big_elwan",
    "category": "sandwiches",
    "nameAr": "ساندوتش بيج علوان العملاق",
    "nameEn": "Big Elwan Monster Sandwich",
    "descAr": "ساندوتش علوان الأسطوري: طبقات لحم، كريسبي، بيكون، ميكس جبن، وحلقات بصل مع صوص علوان",
    "descEn": "The signature beast: stacked beef patty, crispy chicken, turkey, mixed cheeses & sauce.",
    "badge": "special",
    "options": [
      {
        "key": "single",
        "labelAr": "سنجل",
        "labelEn": "Single",
        "price": 130
      },
      {
        "key": "double",
        "labelAr": "دبل",
        "labelEn": "Double",
        "price": 170
      }
    ],
    "selectedOption": 0
  },
  {
    "id": "saj_fries",
    "category": "saj",
    "nameAr": "ساندوتش بطاطس سوري",
    "nameEn": "Syrian Fries Saj Sandwich",
    "descAr": "بطاطس محمرة مقرمشة في الخبز السوري مع تومية ومخلل",
    "descEn": "Golden crispy french fries wrapped in warm Syrian saj with creamy toum & pickles.",
    "price": 40,
    "badge": "popular"
  },
  {
    "id": "saj_sausage",
    "category": "saj",
    "nameAr": "ساندوتش سجق سوري",
    "nameEn": "Syrian Sausage Saj Sandwich",
    "descAr": "سجق شرقي بلدي بالخلطة الإسكندراني في خبز الصاج السوري",
    "descEn": "Spiced oriental sausage sautéed with peppers and tomatoes in Syrian bread.",
    "price": 55,
    "badge": "popular"
  },
  {
    "id": "saj_burger",
    "category": "saj",
    "nameAr": "ساندوتش برجر صاج",
    "nameEn": "Burger Saj Sandwich",
    "descAr": "برجر لحم مشوي مع صوص شيدر وخضار في خبز الصاج المقرمش",
    "descEn": "Grilled beef patty with melted cheese and fresh greens in toasted saj wrap.",
    "price": 70,
    "badge": "popular"
  },
  {
    "id": "saj_strips",
    "category": "saj",
    "nameAr": "ساندوتش استربس صاج",
    "nameEn": "Chicken Strips Saj Sandwich",
    "descAr": "قطع استربس دجاج مقرمشة مع صوص رانش وجبنة في خبز الصاج",
    "descEn": "Crispy chicken strips, ranch sauce and mozzarella toasted on Syrian saj.",
    "price": 70,
    "badge": "popular"
  },
  {
    "id": "saj_shawarma",
    "category": "saj",
    "nameAr": "ساندوتش شاورما فراخ صاج",
    "nameEn": "Chicken Shawarma Saj Sandwich",
    "descAr": "شاورما دجاج متبلة على السيخ مع تومية وخيار مخلل في خبز الصاج السوري الأصيل",
    "descEn": "Authentic shaved chicken shawarma with garlic cream and pickles in pressed saj.",
    "price": 80,
    "badge": "popular"
  },
  {
    "id": "saj_pane",
    "category": "saj",
    "nameAr": "ساندوتش بانيه بلدي صاج",
    "nameEn": "Baladi Chicken Pane Saj",
    "descAr": "صدور دجاج بانيه متبلة بلدي ومقلية ذهبية في الخبز السوري",
    "descEn": "Egyptian style breaded chicken breast fillet wrapped in warm saj bread.",
    "price": 80,
    "badge": "popular"
  },
  {
    "id": "saj_shish",
    "category": "saj",
    "nameAr": "ساندوتش شيش طاووق صاج",
    "nameEn": "Shish Tawook Saj Sandwich",
    "descAr": "شيش طاووق مشوي على الفحم مع تومية وخضار مشوي في خبز الصاج",
    "descEn": "Charcoal-grilled shish tawook skewers wrapped in saj bread with garlic sauce.",
    "price": 90,
    "badge": "charcoal"
  },
  {
    "id": "saj_beef_burger",
    "category": "saj",
    "nameAr": "ساندوتش بيف برجر صاج",
    "nameEn": "Beef Burger Saj Deluxe",
    "descAr": "لحم بيف صافي متبل ومشوي مع ميكس جبن وصوص خاص في الصاج",
    "descEn": "Premium pure beef patty with melted cheese mix wrapped in toasted saj.",
    "price": 90,
    "badge": "popular"
  },
  {
    "id": "tortilla_chicken",
    "category": "saj",
    "nameAr": "ساندوتش تشكن تورتيلا",
    "nameEn": "Chicken Tortilla Wrap",
    "descAr": "دجاج متبل مع صوص رانش وجبنة في خبز التورتيلا المكسيكي المحمص",
    "descEn": "Seasoned chicken breast with creamy ranch and melted cheese in toasted tortilla.",
    "price": 70,
    "badge": "popular"
  },
  {
    "id": "tortilla_shawarma",
    "category": "saj",
    "nameAr": "ساندوتش شاورما تورتيلا",
    "nameEn": "Shawarma Tortilla Wrap",
    "descAr": "شاورما فراخ مع تومية ومخلل وجبنة موتزاريلا في خبز تورتيلا",
    "descEn": "Succulent chicken shawarma, garlic dip and melted cheese wrapped in tortilla.",
    "price": 80,
    "badge": "popular"
  },
  {
    "id": "tortilla_sausage",
    "category": "saj",
    "nameAr": "ساندوتش سجق تورتيلا",
    "nameEn": "Sausage Tortilla Wrap",
    "descAr": "سجق شرقي بخلطة الفلفل الملون وصوص الباربيكيو في تورتيلا",
    "descEn": "Oriental sausage with sweet peppers and BBQ glaze wrapped in tortilla.",
    "price": 70,
    "badge": "popular"
  },
  {
    "id": "tortilla_fries",
    "category": "saj",
    "nameAr": "ساندوتش فرايز تورتيلا",
    "nameEn": "Fries Tortilla Wrap",
    "descAr": "بطاطس محمرة مع صوص شيدر وتومية في خبز تورتيلا محمص",
    "descEn": "Crispy fries loaded with warm cheddar and garlic sauce in toasted tortilla.",
    "price": 40,
    "badge": "popular"
  },
  {
    "id": "meal_shawarma_arabi_6",
    "category": "meals",
    "nameAr": "وجبة شاورما عربي 6 قطع",
    "nameEn": "Arabic Shawarma Meal (6 Pcs)",
    "descAr": "رول شاورما صاج مقطع 6 قطع، يقدم مع بطاطس محمرة، تومية، مخلل وصوص",
    "descEn": "6 pcs sliced chicken shawarma saj served with fries, garlic dip and pickles.",
    "price": 90,
    "badge": "popular"
  },
  {
    "id": "meal_shawarma_arabi_12",
    "category": "meals",
    "nameAr": "وجبة شاورما عربي عائلي 12 قطعة",
    "nameEn": "Arabic Shawarma Family Meal (12 Pcs)",
    "descAr": "وجبة شاورما صاج عائلية 12 قطعة مع بطاطس كبيرة، تومية ومخللات وصوصات",
    "descEn": "12 pcs sliced chicken shawarma saj platter with large fries, garlic dips & pickles.",
    "price": 170,
    "badge": "special"
  },
  {
    "id": "meal_pane_2pc",
    "category": "meals",
    "nameAr": "وجبة بانيه بلدي 2 قطعة",
    "nameEn": "Baladi Chicken Pane Meal (2 Pcs)",
    "descAr": "2 قطعة بانيه دجاج بلدي مقرمش، أرز أو بطاطس، سلطة كلوسلو وعيش",
    "descEn": "2 pcs golden baladi breaded chicken fillets, rice or fries, coleslaw & bread.",
    "price": 90,
    "badge": "popular"
  },
  {
    "id": "meal_strips_3pc",
    "category": "meals",
    "nameAr": "وجبة استربس 3 قطع",
    "nameEn": "Crispy Strips Meal (3 Pcs)",
    "descAr": "3 قطع صدور استربس كريسبي مع بطاطس، صوص شيدر، سلطة وعيش",
    "descEn": "3 pcs crispy tender chicken strips with french fries, cheddar dip, salad & bun.",
    "price": 100,
    "badge": "popular"
  },
  {
    "id": "meal_rizo",
    "category": "meals",
    "nameAr": "ريزو علوان بالدجاج الكريسبي",
    "nameEn": "Elwan Crispy Chicken Rizo",
    "descAr": "أرز ريزو أصفر مبهر ومتبل بصوص الباربيكيو الغني ومغطى بقطع دجاج كريسبي مقرمشة",
    "descEn": "Fragrant seasoned yellow rice topped with crispy chicken bites and rich BBQ sauce.",
    "price": 110,
    "badge": "popular"
  },
  {
    "id": "meal_chicken_fries",
    "category": "meals",
    "nameAr": "علوان تشكن فرايز",
    "nameEn": "Elwan Loaded Chicken Fries",
    "descAr": "طبق بطاطس مقلية محملة بقطع استربس الدجاج وصوص الشيدر والرانش والهالبينو",
    "descEn": "Crispy french fries topped with fried chicken chunks, melted cheddar & ranch.",
    "price": 65,
    "badge": "special"
  },
  {
    "id": "meal_shawarma_fries",
    "category": "meals",
    "nameAr": "شاورما فرايز",
    "nameEn": "Loaded Shawarma Fries",
    "descAr": "بطاطس مقلية ذهبية مغطاة بشرائح شاورما الدجاج وتومية كريمية وصوص شيدر",
    "descEn": "Golden french fries layered with chicken shawarma strips, garlic dip and cheese.",
    "price": 80,
    "badge": "popular"
  },
  {
    "id": "meal_sausage_fries",
    "category": "meals",
    "nameAr": "سجق فرايز",
    "nameEn": "Loaded Sausage Fries",
    "descAr": "بطاطس مقلية مع سجق شرقي إسكندراني وصوص باربيكيو وجبنة ذائبة",
    "descEn": "Crispy fries topped with seasoned oriental sausage and melted cheese.",
    "price": 65,
    "badge": "popular"
  },
  {
    "id": "meal_grilled_chicken",
    "category": "meals",
    "nameAr": "وجبة دجاج جريل صحية",
    "nameEn": "Healthy Grilled Chicken Meal",
    "descAr": "صدور دجاج مشوية على الجريل بتتبيلة الأعشاب مع أرز بسمتي وخضار سوتيه",
    "descEn": "Herb-marinated grilled chicken breast served with basmati rice & sautéed veggies.",
    "price": 110,
    "badge": "special"
  },
  {
    "id": "meal_happiness_mix",
    "category": "meals",
    "nameAr": "وجبة ميكس السعادة",
    "nameEn": "Happiness Mega Mix Meal",
    "descAr": "وجبة الملوك: استربس + بانيه + شاورما + بطاطس + صوصات + أرز مبهر",
    "descEn": "Ultimate feast combo: crispy strips, chicken pane, shawarma, loaded fries & sauces.",
    "price": 180,
    "badge": "special"
  },
  {
    "id": "meal_shawarma_fattah",
    "category": "meals",
    "nameAr": "فتة شاورما فراخ",
    "nameEn": "Chicken Shawarma Fattah",
    "descAr": "أرز بسمتي مبهر مع عيش مقرمش محمص، شاورما دجاج متبلة، وتومية علوان الخاصة",
    "descEn": "Spiced basmati rice layered with toasted crunchy bread, chicken shawarma & garlic sauce.",
    "price": 110,
    "badge": "popular"
  },
  {
    "id": "pizza_margherita",
    "category": "pizza",
    "nameAr": "بيتزا مارجريتا",
    "nameEn": "Margherita Pizza",
    "descAr": "صوص بيتزا إيطالي أصلي، جبنة موتزاريلا وفيرة وريحان طازج",
    "descEn": "Classic Italian tomato sauce, generous melted mozzarella and fresh basil.",
    "price": 110,
    "badge": "popular"
  },
  {
    "id": "pizza_vegetables",
    "category": "pizza",
    "nameAr": "بيتزا خضار مشكل",
    "nameEn": "Vegetarian Fresh Pizza",
    "descAr": "فلفل ألوان، طماطم، زيتون أسود، مشروم، بصل وجبنة موتزاريلا",
    "descEn": "Bell peppers, ripe tomatoes, black olives, mushrooms, onions and mozzarella.",
    "price": 110,
    "badge": "popular"
  },
  {
    "id": "pizza_strips",
    "category": "pizza",
    "nameAr": "بيتزا تشكن استربس",
    "nameEn": "Chicken Strips Pizza",
    "descAr": "قطع دجاج استربس مقرمش مع صوص بيتزا، جبنة موتزاريلا وزيتون",
    "descEn": "Crispy chicken strips, Italian pizza sauce, mozzarella and olives.",
    "price": 120,
    "badge": "popular"
  },
  {
    "id": "pizza_mushroom",
    "category": "pizza",
    "nameAr": "بيتزا مشروم فريش",
    "nameEn": "Fresh Mushroom Pizza",
    "descAr": "شرائح مشروم طازجة مع جبنة موتزاريلا وصلصة البيتزا الإيطالية",
    "descEn": "Fresh sliced sautéed mushrooms, Italian herbs and melted mozzarella.",
    "price": 120,
    "badge": "popular"
  },
  {
    "id": "pizza_sausage",
    "category": "pizza",
    "nameAr": "بيتزا سجق شرقي",
    "nameEn": "Oriental Sausage Pizza",
    "descAr": "سجق بلدي متبل مع فلفل رومي، طماطم، زيتون وموتزاريلا",
    "descEn": "Spiced oriental sausage, green peppers, tomatoes, black olives and mozzarella.",
    "price": 120,
    "badge": "popular"
  },
  {
    "id": "pizza_saucisse",
    "category": "pizza",
    "nameAr": "بيتزا سوسيس",
    "nameEn": "Hot Dog / Saucisse Pizza",
    "descAr": "قطع هوت دوج / سوسيس مع جبنة موتزاريلا، فلفل وزيتون",
    "descEn": "Savory hot dog slices, mozzarella cheese, sweet peppers and olives.",
    "price": 120,
    "badge": "popular"
  },
  {
    "id": "pizza_cheese_mix",
    "category": "pizza",
    "nameAr": "بيتزا ميكس جبن رباعية",
    "nameEn": "Four Cheeses Mix Pizza",
    "descAr": "مزيج غني من الموتزاريلا، الرومي، الشيدر، والكيري اللذيذة",
    "descEn": "Rich blend of mozzarella, aged gouda/roumi, cheddar and creamy cheese.",
    "price": 130,
    "badge": "popular"
  },
  {
    "id": "pizza_smoked_turkey",
    "category": "pizza",
    "nameAr": "بيتزا رومي مدخن",
    "nameEn": "Smoked Turkey Pizza",
    "descAr": "شرائح رومي مدخن فاخر مع فلفل ألوان وجبنة موتزاريلا سايحة",
    "descEn": "Premium smoked turkey breast slices, sweet bell peppers and mozzarella.",
    "price": 130,
    "badge": "popular"
  },
  {
    "id": "pizza_chicken_shawarma",
    "category": "pizza",
    "nameAr": "بيتزا شاورمة فراخ",
    "nameEn": "Chicken Shawarma Pizza",
    "descAr": "شاورما فراخ متبلة على السيخ مع فلفل، زيتون، وجبنة موتزاريلا وتومية",
    "descEn": "Tender chicken shawarma cuts, mozzarella, olives and garlic sauce swirl.",
    "price": 130,
    "badge": "popular"
  },
  {
    "id": "pizza_shish_tawook",
    "category": "pizza",
    "nameAr": "بيتزا شيش طاووق",
    "nameEn": "Shish Tawook Pizza",
    "descAr": "قطع شيش طاووق مشوية مع خضار مشوي، موتزاريلا وصلصة البيتزا",
    "descEn": "Grilled marinated shish tawook cubes with roasted peppers and mozzarella.",
    "price": 130,
    "badge": "charcoal"
  },
  {
    "id": "pizza_super_crunchy",
    "category": "pizza",
    "nameAr": "بيتزا سوبر كرانشي",
    "nameEn": "Super Crunchy Chicken Pizza",
    "descAr": "دجاج كرانشي مقرمش مع أصابع هالبينو، صوص شيدر وموتزاريلا غنية",
    "descEn": "Super crunchy chicken bites, cheddar drizzle, jalapeños and extra mozzarella.",
    "price": 140,
    "badge": "popular"
  },
  {
    "id": "pizza_chicken_bbq",
    "category": "pizza",
    "nameAr": "بيتزا تشيكن باربيكيو",
    "nameEn": "Chicken BBQ Pizza",
    "descAr": "دجاج متبل مع صوص الباربيكيو المدخن، بصل مقرمش وجبنة موتزاريلا",
    "descEn": "Grilled chicken, smoky BBQ sauce swirl, red onions and melted mozzarella.",
    "price": 130,
    "badge": "popular"
  },
  {
    "id": "pizza_chicken_ranch",
    "category": "pizza",
    "nameAr": "بيتزا تشكن رانش",
    "nameEn": "Chicken Ranch Pizza",
    "descAr": "دجاج مشوي مع صوص الرانش الغني، فلفل ألوان، مشروم وجبنة موتزاريلا",
    "descEn": "Seasoned grilled chicken, creamy ranch sauce, bell peppers and mozzarella.",
    "price": 140,
    "badge": "special"
  },
  {
    "id": "pizza_chicken_mix",
    "category": "pizza",
    "nameAr": "بيتزا ميكس فراخ",
    "nameEn": "Chicken Trio Mix Pizza",
    "descAr": "مزيج من الشاورما + البانيه + الاستربس مع فلفل وموتزاريلا",
    "descEn": "Ultimate chicken lover mix: shawarma, crispy pane & strips with mozzarella.",
    "price": 150,
    "badge": "special"
  },
  {
    "id": "pizza_tuna",
    "category": "pizza",
    "nameAr": "بيتزا تونة فاخرة",
    "nameEn": "Tuna Deluxe Pizza",
    "descAr": "قطع تونة مفتتة فاخرة مع فلفل رومي، بصل، ليمون، زيتون وموتزاريلا",
    "descEn": "Flaked light tuna, bell peppers, onions, olives, lemon zest and mozzarella.",
    "price": 150,
    "badge": "popular"
  },
  {
    "id": "pizza_fresh_baladi_meat",
    "category": "pizza",
    "nameAr": "بيتزا لحمة بلدي فريش",
    "nameEn": "Fresh Baladi Meat Pizza",
    "descAr": "لحم بقري مفروم بلدي طازج ومتبل بخلطة علوان الخاصة مع موتزاريلا",
    "descEn": "Fresh minced baladi beef seasoned with signature spices and melted mozzarella.",
    "price": 150,
    "badge": "special"
  },
  {
    "id": "pizza_meat_mix",
    "category": "pizza",
    "nameAr": "بيتزا ميكس لحوم",
    "nameEn": "Meat Lover Mix Pizza",
    "descAr": "تشكيلة من اللحم البلدي + السجق + السوسيس + البسطرمة مع موتزاريلا",
    "descEn": "Minced beef, oriental sausage, hot dog and pastrami with rich mozzarella.",
    "price": 160,
    "badge": "special"
  },
  {
    "id": "pizza_four_seasons",
    "category": "pizza",
    "nameAr": "بيتزا فور سيزون (4 فصول)",
    "nameEn": "Four Seasons Pizza",
    "descAr": "4 أرباع مختلفة (لحمة، فراخ، مشروم، ميكس جبن) في بيتزا واحدة",
    "descEn": "4 quarters: seasoned beef, chicken strips, mushrooms, and cheese blend.",
    "price": 160,
    "badge": "popular"
  },
  {
    "id": "pizza_elwan_special",
    "category": "pizza",
    "nameAr": "بيتزا علوان الخصوصية",
    "nameEn": "Elwan Signature Pizza",
    "descAr": "بيتزا ملوكية محشية الأطراف بجبنة موتزاريلا ومحملة بأفخر اللحوم والدجاج والمكسرات",
    "descEn": "Elwan's crowned masterpiece: stuffed crust, prime meats, chicken & extra cheese.",
    "price": 190,
    "badge": "special"
  },
  {
    "id": "pizza_pepperoni_new",
    "category": "pizza",
    "nameAr": "بيتزا ببيروني (جديد)",
    "nameEn": "Pepperoni Pizza (NEW)",
    "descAr": "شرائح ببيروني إيطالي بقري مقرمشة مع صلصة طماطم وجبنة موتزاريلا وفيرة",
    "descEn": "Crisp beef pepperoni slices over Italian tomato sauce and melted mozzarella.",
    "price": 150,
    "badge": "new"
  },
  {
    "id": "pizza_chicken_lover_new",
    "category": "pizza",
    "nameAr": "بيتزا تشيكن لافر (جديد)",
    "nameEn": "Chicken Lover Pizza (NEW)",
    "descAr": "عشاق الدجاج: دجاج مقرمش مع صوص الباربيكيو والرانش وميكس أجبان",
    "descEn": "Loaded crispy chicken, sweet BBQ swirl, ranch drizzle and melted cheese.",
    "price": 150,
    "badge": "new"
  },
  {
    "id": "pizza_pastrami_new",
    "category": "pizza",
    "nameAr": "بيتزا بسطرمة بلدي (جديد)",
    "nameEn": "Baladi Pastrami Pizza (NEW)",
    "descAr": "بسطرمة بلدي ناعمة غير حادقة مع فلفل رومي، زيتون وجبنة موتزاريلا",
    "descEn": "Thin-sliced Egyptian baladi pastrami with green peppers, olives and mozzarella.",
    "price": 180,
    "badge": "new"
  },
  {
    "id": "pizza_general_new",
    "category": "pizza",
    "nameAr": "بيتزا جينيرال (جديد)",
    "nameEn": "General Pizza (NEW)",
    "descAr": "ميكس استربس + سجق + مشروم + صوص شيدر وهالبينو بالجبنة الموتزاريلا",
    "descEn": "General's combo: strips, sausage, mushrooms, cheddar sauce & jalapeños.",
    "price": 170,
    "badge": "new"
  },
  {
    "id": "crepe_fries",
    "category": "crepes",
    "nameAr": "كريب بطاطس محمرة",
    "nameEn": "Fries Crepe",
    "descAr": "كريب فرنسي مقرمش محشو بطاطس بوم فريت مع صوص تومية وكاتشب",
    "descEn": "Golden french fries folded in a crispy savory crepe with garlic sauce & ketchup.",
    "price": 60,
    "badge": "popular"
  },
  {
    "id": "crepe_mushroom",
    "category": "crepes",
    "nameAr": "كريب مشروم فريش",
    "nameEn": "Mushroom Crepe",
    "descAr": "مشروم سوتيه مع فلفل رومي، زيتون وجبنة موتزاريلا ذائبة",
    "descEn": "Sautéed fresh mushrooms, bell peppers, olives and melted mozzarella.",
    "price": 65,
    "badge": "popular"
  },
  {
    "id": "crepe_fries_mushroom",
    "category": "crepes",
    "nameAr": "كريب بطاطس ومشروم",
    "nameEn": "Fries & Mushroom Crepe",
    "descAr": "مكس بطاطس مقلية ومشروم سوتيه مع موتزاريلا وصوصات شهية",
    "descEn": "Crispy french fries and sautéed mushrooms with melted cheese in a crunchy crepe.",
    "price": 80,
    "badge": "popular"
  },
  {
    "id": "crepe_sausage",
    "category": "crepes",
    "nameAr": "كريب سجق شرقي",
    "nameEn": "Oriental Sausage Crepe",
    "descAr": "سجق بلدي متبل مع خضار، كاتشب، مايونيز وموتزاريلا",
    "descEn": "Seasoned oriental sausage with bell peppers, mozzarella and signature sauces.",
    "price": 80,
    "badge": "popular"
  },
  {
    "id": "crepe_saucisse",
    "category": "crepes",
    "nameAr": "كريب سوسيس",
    "nameEn": "Saucisse Crepe",
    "descAr": "قطع سوسيس متبلة مع موتزاريلا وزيتون وصوصات",
    "descEn": "Sliced saucisse hot dog, mozzarella cheese, olives and dressings.",
    "price": 80,
    "badge": "popular"
  },
  {
    "id": "crepe_hotdog",
    "category": "crepes",
    "nameAr": "كريب هوت دوج",
    "nameEn": "Hot Dog Crepe",
    "descAr": "هوت دوج مشوي مع صوص الشيدر، كاتشب ومستردة وموتزاريلا",
    "descEn": "Grilled hot dog slices with warm cheddar sauce, ketchup and melted cheese.",
    "price": 80,
    "badge": "popular"
  },
  {
    "id": "crepe_strips",
    "category": "crepes",
    "nameAr": "كريب تشكن استربس",
    "nameEn": "Chicken Strips Crepe",
    "descAr": "قطع دجاج استربس مقرمش مع موتزاريلا وصوص الشيدر والمايونيز",
    "descEn": "Crispy chicken strips, melted mozzarella cheese and cheddar sauce in folded crepe.",
    "price": 85,
    "badge": "popular"
  },
  {
    "id": "crepe_cheese_mix",
    "category": "crepes",
    "nameAr": "كريب ميكس جبن",
    "nameEn": "Four Cheeses Crepe",
    "descAr": "توليفة موتزاريلا + رومي + شيدر + كيري ذائبة وشهية",
    "descEn": "Melted four-cheese blend: mozzarella, roumi, cheddar, and kiri in crispy crepe.",
    "price": 90,
    "badge": "popular"
  },
  {
    "id": "crepe_burger",
    "category": "crepes",
    "nameAr": "كريب بيف برجر",
    "nameEn": "Beef Burger Crepe",
    "descAr": "لحم برجر مفروم ومتبل مع بصل، طماطم، صوص برجر وموتزاريلا",
    "descEn": "Flame-grilled beef burger patty chopped with onions, tomato and cheese.",
    "price": 90,
    "badge": "popular"
  },
  {
    "id": "crepe_chicken_shawarma",
    "category": "crepes",
    "nameAr": "كريب شاورمة فراخ",
    "nameEn": "Chicken Shawarma Crepe",
    "descAr": "شاورما فراخ على السيخ مع تومية، مخلل، وموتزاريلا",
    "descEn": "Sliced chicken shawarma with garlic cream, pickles, and melted mozzarella.",
    "price": 90,
    "badge": "popular"
  },
  {
    "id": "crepe_baladi_meat",
    "category": "crepes",
    "nameAr": "كريب لحمة بلدي",
    "nameEn": "Baladi Minced Meat Crepe",
    "descAr": "لحم مفروم بلدي طازج ومعصج مع بهارات وفلفل وموتزاريلا",
    "descEn": "Fresh spiced Egyptian minced beef sautéed with onions, peppers and cheese.",
    "price": 90,
    "badge": "special"
  },
  {
    "id": "crepe_chicken_fajita",
    "category": "crepes",
    "nameAr": "كريب فاهيتا فراخ",
    "nameEn": "Chicken Fajita Crepe",
    "descAr": "شرائح دجاج فاهيتا مع فلفل ألوان، بصل، وموتزاريلا وصوص رانش",
    "descEn": "Fajita seasoned chicken breast, bell peppers, onions and mozzarella.",
    "price": 90,
    "badge": "popular"
  },
  {
    "id": "crepe_chicken_ranch",
    "category": "crepes",
    "nameAr": "كريب تشكن رانش",
    "nameEn": "Chicken Ranch Crepe",
    "descAr": "قطع دجاج كرسبي مع صوص الرانش الغني والجبنة الموتزاريلا",
    "descEn": "Crispy chicken breast bites drizzled with rich ranch sauce and cheese.",
    "price": 95,
    "badge": "popular"
  },
  {
    "id": "crepe_super_crunchy",
    "category": "crepes",
    "nameAr": "كريب سوبر كرانشي",
    "nameEn": "Super Crunchy Crepe",
    "descAr": "دجاج كرانشي فائق القرمشة مع صوص شيدر، هالبينو وموتزاريلا",
    "descEn": "Ultra-crunchy fried chicken, cheddar dip, jalapeños and melted cheese.",
    "price": 100,
    "badge": "popular"
  },
  {
    "id": "crepe_baladi_pane",
    "category": "crepes",
    "nameAr": "كريب بانية بلدي",
    "nameEn": "Baladi Pane Crepe",
    "descAr": "قطع بانيه دجاج مقلي ذهبي ومقرمش مع خضار وموتزاريلا",
    "descEn": "Golden breaded baladi chicken fillet strips with veggies and mozzarella.",
    "price": 110,
    "badge": "popular"
  },
  {
    "id": "crepe_smoked_meat",
    "category": "crepes",
    "nameAr": "كريب سموكت لحوم",
    "nameEn": "Smoked Meat Crepe",
    "descAr": "لحوم مدخنة، رومي مدخن وبيكون مع صوص باربيكيو وموتزاريلا",
    "descEn": "Smoked meats, smoked turkey, BBQ drizzle and melted mozzarella.",
    "price": 110,
    "badge": "special"
  },
  {
    "id": "crepe_shish_tawook",
    "category": "crepes",
    "nameAr": "كريب شيش طاووق",
    "nameEn": "Shish Tawook Crepe",
    "descAr": "شيش طاووق مشوي على الفحم مع فلفل، تومية وموتزاريلا",
    "descEn": "Charcoal-grilled shish tawook chicken cubes with garlic dip and cheese.",
    "price": 110,
    "badge": "charcoal"
  },
  {
    "id": "crepe_elwan_signature",
    "category": "crepes",
    "nameAr": "كريب علوان الفاخر",
    "nameEn": "Elwan Signature Mega Crepe",
    "descAr": "كريب الملوك: استربس + شاورما + برجر + مشروم + ميكس جبن وصوصات خاصة",
    "descEn": "Elwan's king crepe: chicken strips, shawarma, beef burger, mushrooms & 4 cheeses.",
    "price": 145,
    "badge": "special"
  },
  {
    "id": "crepe_chicken_pastrami_new",
    "category": "crepes",
    "nameAr": "كريب تشيكن بسطرمة (جديد)",
    "nameEn": "Chicken & Pastrami Crepe (NEW)",
    "descAr": "دجاج كريسبي مع شرائح بسطرمة بلدي وموتزاريلا وصوص شيدر",
    "descEn": "Crispy chicken paired with Egyptian pastrami, mozzarella and cheese dip.",
    "price": 120,
    "badge": "new"
  },
  {
    "id": "crepe_phoenix_new",
    "category": "crepes",
    "nameAr": "كريب فينيكس (جديد)",
    "nameEn": "Phoenix Spicy Crepe (NEW)",
    "descAr": "دجاج سبايسي مع صوص سويت شيلي، هالبينو وجبنة موتزاريلا سايحة",
    "descEn": "Spicy chicken, sweet chili sauce, pickled jalapeños and melted cheese.",
    "price": 110,
    "badge": "new"
  },
  {
    "id": "crepe_doner_kebab_new",
    "category": "crepes",
    "nameAr": "كريب دونر كباب (جديد)",
    "nameEn": "Doner Kebab Crepe (NEW)",
    "descAr": "شرائح لحم دونر كباب متبلة بالبهارات التركية مع تومية وموتزاريلا",
    "descEn": "Turkish spiced doner kebab beef slices with garlic dip and melted cheese.",
    "price": 110,
    "badge": "new"
  },
  {
    "id": "crepe_smoked_ranch_new",
    "category": "crepes",
    "nameAr": "كريب سموكد رانش (جديد)",
    "nameEn": "Smoked Ranch Crepe (NEW)",
    "descAr": "دجاج مدخن مع صوص رانش فاخر وموتزاريلا ومخلل",
    "descEn": "Smoked chicken breast with creamy ranch dressing and mozzarella.",
    "price": 110,
    "badge": "new"
  },
  {
    "id": "crepe_mix_pop_new",
    "category": "crepes",
    "nameAr": "كريب مكس بوب (جديد)",
    "nameEn": "Mix Pop Popcorn Chicken Crepe (NEW)",
    "descAr": "كرات بوب كورن دجاج مقرمشة مع صوص هوني موستارد وشيدر وموتزاريلا",
    "descEn": "Popcorn chicken bites, honey mustard, cheddar drizzle and mozzarella.",
    "price": 130,
    "badge": "new"
  },
  {
    "id": "crepe_buffalo_new",
    "category": "crepes",
    "nameAr": "كريب بافلو (جديد)",
    "nameEn": "Buffalo Chicken Crepe (NEW)",
    "descAr": "دجاج مغطى بصوص البافلو الحار المائل للحموضة مع صوص بلو تشيز وموتزاريلا",
    "descEn": "Tangy spicy buffalo chicken tenders with blue cheese & mozzarella.",
    "price": 110,
    "badge": "new"
  },
  {
    "id": "crepe_zinger_supreme_new",
    "category": "crepes",
    "nameAr": "كريب زنجر سوبر سوبريم (جديد)",
    "nameEn": "Zinger Super Supreme Crepe (NEW)",
    "descAr": "دجاج زنجر حار مقرمش مع شرائح تركي مدخن وصوص شيدر وموتزاريلا",
    "descEn": "Spicy zinger chicken fillet, smoked turkey, cheddar sauce and mozzarella.",
    "price": 115,
    "badge": "new"
  },
  {
    "id": "pasta_cheese_mix",
    "category": "pasta",
    "nameAr": "مكرونة ميكس جبن",
    "nameEn": "Four Cheeses Pasta",
    "descAr": "مكرونة بيني غارقة في صوص الجبنة الكريمي مع موتزاريلا، رومي وشيدر في الفرن",
    "descEn": "Penne pasta baked in creamy four cheese sauce with a golden mozzarella crust.",
    "price": 75,
    "badge": "popular"
  },
  {
    "id": "pasta_sauce",
    "category": "pasta",
    "nameAr": "مكرونة بالصوص الأحمر أو الأبيض",
    "nameEn": "Pasta with Sauce (Red / White)",
    "descAr": "مكرونة إيطالية مع صلصة الطماطم الغنية بالأعشاب أو الصوص الأبيض الكريمي",
    "descEn": "Al dente penne in rich herb tomato marinara or silky white sauce.",
    "price": 50,
    "badge": "popular"
  },
  {
    "id": "pasta_strips",
    "category": "pasta",
    "nameAr": "مكرونة تشكن استربس",
    "nameEn": "Crispy Strips Pasta",
    "descAr": "مكرونة بالوايت صوص مع قطع دجاج استربس مقرمش وموتزاريلا فرن",
    "descEn": "Creamy white sauce pasta topped with crispy chicken strips and melted cheese.",
    "price": 85,
    "badge": "popular"
  },
  {
    "id": "pasta_sausage",
    "category": "pasta",
    "nameAr": "مكرونة سجق شرقي",
    "nameEn": "Oriental Sausage Pasta",
    "descAr": "مكرونة بالصوص الأحمر الغني مع سجق بلدي متبل وفلفل ألوان",
    "descEn": "Penne pasta tossed in spiced tomato sauce with sautéed oriental sausage.",
    "price": 85,
    "badge": "popular"
  },
  {
    "id": "pasta_negresco",
    "category": "pasta",
    "nameAr": "مكرونة نجرسكو بالفراخ",
    "nameEn": "Chicken Negresco Baked Pasta",
    "descAr": "مكرونة نجرسكو كلاسيكية مع قطع صدور الدجاج والمشروم وصوص البشاميل والموتزاريلا",
    "descEn": "Classic oven-baked pasta with tender chicken, mushrooms, béchamel & mozzarella.",
    "price": 90,
    "badge": "popular"
  },
  {
    "id": "pasta_meat_oven",
    "category": "pasta",
    "nameAr": "مكرونة فرن باللحمة البلدي",
    "nameEn": "Oven-Baked Meat Pasta",
    "descAr": "طاجن مكرونة فرن مصري باللحم المفروم البلدي المعصج وصلصة الطماطم والموتزاريلا",
    "descEn": "Egyptian oven-baked pasta casserole with seasoned minced beef and mozzarella.",
    "price": 100,
    "badge": "special"
  },
  {
    "id": "pasta_chicken_mix",
    "category": "pasta",
    "nameAr": "مكرونة ميكس فراخ",
    "nameEn": "Chicken Trio Pasta",
    "descAr": "مكرونة بالوايت صوص مع شاورما + استربس + شيش طاووق وجبنة موتزاريلا",
    "descEn": "Penne pasta with trio of chicken (shawarma, strips, shish) in creamy cheese sauce.",
    "price": 100,
    "badge": "special"
  },
  {
    "id": "pasta_meat_mix",
    "category": "pasta",
    "nameAr": "مكرونة ميكس لحوم",
    "nameEn": "Meat Lover Mix Pasta",
    "descAr": "مكرونة بالصوص الخاص مع لحمة بلدي + سجق + سوسيس وموتزاريلا محمرة",
    "descEn": "Baked pasta loaded with minced beef, sausage, hot dog and melted mozzarella.",
    "price": 110,
    "badge": "special"
  },
  {
    "id": "waffle_nutella",
    "category": "desserts",
    "nameAr": "وافل نوتيلا (توتيلا)",
    "nameEn": "Nutella Chocolate Waffle",
    "descAr": "وافل بلجيكي مقرمش وساخن مغطى بشوكولاتة النوتيلا الغنية",
    "descEn": "Golden Belgian waffle drizzled with warm, rich Nutella chocolate spread.",
    "price": 70,
    "badge": "popular"
  },
  {
    "id": "waffle_white",
    "category": "desserts",
    "nameAr": "وافل وايت شوكليت",
    "nameEn": "White Chocolate Waffle",
    "descAr": "وافل مقرمش مغطى بصوص الشوكولاتة البيضاء البلجيكية الناعمة",
    "descEn": "Crispy waffle smothered in premium Belgian white chocolate drizzle.",
    "price": 80,
    "badge": "popular"
  },
  {
    "id": "waffle_lotus",
    "category": "desserts",
    "nameAr": "وافل لوتس بسكوف",
    "nameEn": "Lotus Biscoff Waffle",
    "descAr": "وافل مغطى بزبدة لوتس الأصلية وقطع بسكويت لوتس المقرمشة",
    "descEn": "Belgian waffle topped with Lotus Biscoff spread and crushed speculoos biscuits.",
    "price": 85,
    "badge": "special"
  },
  {
    "id": "waffle_caramel",
    "category": "desserts",
    "nameAr": "وافل كراميل",
    "nameEn": "Salted Caramel Waffle",
    "descAr": "وافل مقرمش مع صوص الكراميل الساخن اللذيذ",
    "descEn": "Crisp golden waffle drizzled with warm caramel sauce.",
    "price": 50,
    "badge": "popular"
  },
  {
    "id": "waffle_dark_chocolate",
    "category": "desserts",
    "nameAr": "وافل دارك شوكليت",
    "nameEn": "Dark Chocolate Waffle",
    "descAr": "وافل لعشاق الشوكولاتة الداكنة الغنية والمركزة",
    "descEn": "Crispy waffle coated in premium dark Belgian chocolate sauce.",
    "price": 60,
    "badge": "popular"
  },
  {
    "id": "waffle_oreo",
    "category": "desserts",
    "nameAr": "وافل أوريو كرانشي",
    "nameEn": "Oreo Crunchy Waffle",
    "descAr": "وافل نوتيلا مع قطع بسكويت أوريو المطحونة وصوص شوكولاتة",
    "descEn": "Warm waffle topped with crushed Oreo cookies, chocolate sauce and cream.",
    "price": 75,
    "badge": "popular"
  },
  {
    "id": "waffle_elwan_signature",
    "category": "desserts",
    "nameAr": "وافل علوان المميز (سوبر)",
    "nameEn": "Elwan Signature Master Waffle",
    "descAr": "وافل ملوكي بأربعة صوصات: نوتيلا + لوتس + وايت + مكسرات وفواكه وبولة آيس كريم",
    "descEn": "Elwan's king waffle: Nutella, Lotus, white chocolate, mixed nuts & ice cream scoop.",
    "price": 95,
    "badge": "special"
  },
  {
    "id": "waffle_strawberry",
    "category": "desserts",
    "nameAr": "وافل استروبري",
    "nameEn": "Strawberry Waffle",
    "descAr": "وافل مقرمش مع قطع فراولة طازجة وصوص الفراولة اللذيذ",
    "descEn": "Belgian waffle loaded with fresh sliced strawberries and sweet berry drizzle.",
    "price": 60,
    "badge": "popular"
  },
  {
    "id": "waffle_havana",
    "category": "desserts",
    "nameAr": "وافل هافان",
    "nameEn": "Havana Tropical Waffle",
    "descAr": "وافل مميز بصوص الكراميل والشوكولاتة البيضاء والموز",
    "descEn": "Warm waffle drizzled with Havana caramel, white chocolate and banana slices.",
    "price": 75,
    "badge": "popular"
  },
  {
    "id": "waffle_fruit",
    "category": "desserts",
    "nameAr": "وافل فواكه طازجة",
    "nameEn": "Fresh Fruits Waffle",
    "descAr": "وافل مشكل فواكه طازجة (فراولة، موز، كيوي) مع صوص عسل أو نوتيلا",
    "descEn": "Crisp waffle piled high with fresh seasonal fruits and chocolate drizzle.",
    "price": 80,
    "badge": "popular"
  },
  {
    "id": "waffle_mix_chocolate",
    "category": "desserts",
    "nameAr": "وافل ميكس شوكليت",
    "nameEn": "Mix Chocolate Trio Waffle",
    "descAr": "وافل بثلاث نكهات شوكولاتة: دارك + نوتيلا + وايت شوكليت",
    "descEn": "Triple chocolate indulgence: dark, milk Nutella, and white Belgian chocolate.",
    "price": 90,
    "badge": "popular"
  },
  {
    "id": "waffle_fruit_season",
    "category": "desserts",
    "nameAr": "وافل فروت سيزون",
    "nameEn": "Fruit Season Special Waffle",
    "descAr": "وافل مشكل بفواكه الموسم المنعشة مع صوص فراولة ووايت شوكليت",
    "descEn": "Seasonal fresh fruits over crisp waffle with strawberry & white chocolate sauce.",
    "price": 80,
    "badge": "popular"
  },
  {
    "id": "waffle_cinnabon",
    "category": "desserts",
    "nameAr": "وافل سينابون",
    "nameEn": "Cinnabon Caramel Waffle",
    "descAr": "وافل بنكهة القرفة والكراميل وصوص الجبنة الكريمة اللذيذة",
    "descEn": "Cinnamon infused waffle glazed with cream cheese frosting and caramel.",
    "price": 65,
    "badge": "popular"
  },
  {
    "id": "waffle_pistachio",
    "category": "desserts",
    "nameAr": "وافل بيستاشيو (فستق)",
    "nameEn": "Pistachio Cream Waffle",
    "descAr": "وافل بصوص زبدة الفستق الإيطالية الفاخرة مع فستق حلبي محمص",
    "descEn": "Belgian waffle covered in rich pistachio cream and roasted crunchy pistachios.",
    "price": 100,
    "badge": "special"
  },
  {
    "id": "dessert_om_ali",
    "category": "desserts",
    "nameAr": "طاجن أم علي بالمكسرات والقشطة البلدي",
    "nameEn": "Om Ali with Nuts & Baladi Cream",
    "descAr": "طاجن أم علي مصري ساخن من الفرن بالرقائق المحمصة، الحليب، المكسرات والقشطة",
    "descEn": "Traditional Egyptian bread pudding baked with milk, nuts, raisins & fresh cream.",
    "price": 65,
    "badge": "special"
  },
  {
    "id": "dessert_om_ali_nutella",
    "category": "desserts",
    "nameAr": "طاجن أم علي بالنوتيلا",
    "nameEn": "Nutella Om Ali Tagine",
    "descAr": "أم علي ساخنة بالفرن ومغطاة بطبقة غنية من شوكولاتة النوتيلا والمكسرات",
    "descEn": "Warm Egyptian Om Ali pudding crowned with melted Nutella and toasted nuts.",
    "price": 75,
    "badge": "popular"
  },
  {
    "id": "dessert_nutella_happiness_tagine",
    "category": "desserts",
    "nameAr": "طاجن نوتيلا وسعادة علوان",
    "nameEn": "Elwan Nutella Happiness Tagine",
    "descAr": "كيك شوكولاتة غارق في النوتيلا والشوكولاتة البيضاء مع قطع أوريو ومارشميلو",
    "descEn": "Warm chocolate cake pot drowned in Nutella, white chocolate, Oreo & marshmallows.",
    "price": 85,
    "badge": "special"
  },
  {
    "id": "dessert_molten_cake",
    "category": "desserts",
    "nameAr": "مولتن كيك مع بولة آيس كريم",
    "nameEn": "Molten Lava Cake with Ice Cream",
    "descAr": "كيكة شوكولاتة ساخنة محشوة بالشوكولاتة الذائبة وتقدم مع آيس كريم فانيليا",
    "descEn": "Warm chocolate lava cake with molten center served with vanilla ice cream scoop.",
    "price": 80,
    "badge": "popular"
  },
  {
    "id": "dessert_rice_pudding_nuts",
    "category": "desserts",
    "nameAr": "أرز باللبن بالمكسرات والآيس كريم",
    "nameEn": "Rice Pudding with Nuts & Ice Cream",
    "descAr": "أرز باللبن بلدي كريمي مع مكسرات محمصة وبولة آيس كريم فانيليا",
    "descEn": "Creamy Egyptian rice pudding topped with mixed nuts and vanilla ice cream.",
    "price": 45,
    "badge": "popular"
  },
  {
    "id": "dessert_oriental_sweets_plate",
    "category": "desserts",
    "nameAr": "طبق مشكل حلويات شرقية فاخرة",
    "nameEn": "Mixed Oriental Sweets Platter",
    "descAr": "تشكيلة من الكنافة والبسبوسة بالمكسرات والجلاش بالسمنة البلدي (حلواني علوان)",
    "descEn": "Assorted Egyptian sweets: kunafa, basbousa with almonds, and crisp baklava.",
    "price": 95,
    "badge": "special"
  },
  {
    "id": "coffee_turkish",
    "category": "coffee",
    "nameAr": "قهوة تركي (سادة / مظبوط / زيادة)",
    "nameEn": "Turkish Coffee",
    "descAr": "بن حبشي مميز محوج ومطهو على الرمال الساخنة بوش كريمي غني",
    "descEn": "Authentic spiced Turkish coffee brewed with thick foam.",
    "price": 30,
    "badge": "popular"
  },
  {
    "id": "coffee_french",
    "category": "coffee",
    "nameAr": "قهوة فرنساوي بالحليب",
    "nameEn": "French Coffee with Milk",
    "descAr": "قهوة بالبندق مطهوة مع حليب ساخن بوش رغوي ناعم",
    "descEn": "Hazelnut infused coffee gently brewed with steamed whole milk.",
    "price": 40,
    "badge": "popular"
  },
  {
    "id": "hot_chocolate_dark",
    "category": "coffee",
    "nameAr": "هوت شوكولات دارك",
    "nameEn": "Dark Hot Chocolate",
    "descAr": "شوكولاتة داكنة ذائبة مع حليب ساخن غني ولذيذ",
    "descEn": "Rich melted dark Belgian chocolate stirred in steaming whole milk.",
    "price": 50,
    "badge": "popular"
  },
  {
    "id": "hot_chocolate_white",
    "category": "coffee",
    "nameAr": "هوت شوكولات وايت",
    "nameEn": "White Hot Chocolate",
    "descAr": "شوكولاتة بيضاء كريمية ساخنة مع رغوة حليب ناعمة",
    "descEn": "Sweet creamy white chocolate blended with frothy steamed milk.",
    "price": 60,
    "badge": "popular"
  },
  {
    "id": "hot_chocolate_lotus",
    "category": "coffee",
    "nameAr": "هوت شوكولات لوتس",
    "nameEn": "Lotus Hot Chocolate",
    "descAr": "شوكولاتة ساخنة بزبدة اللوتس وبسكويت لوتس مطحون",
    "descEn": "Steaming hot chocolate infused with Lotus Biscoff speculoos spread.",
    "price": 60,
    "badge": "special"
  },
  {
    "id": "coffee_cappuccino",
    "category": "coffee",
    "nameAr": "كابتشينو كلاسيك",
    "nameEn": "Classic Cappuccino",
    "descAr": "إسبريسو غني مع حليب مبخر ورغوة حليب كثيفة ورشة كاكاو",
    "descEn": "Rich espresso topped with steamed milk and velvety dense foam.",
    "price": 55,
    "badge": "popular"
  },
  {
    "id": "coffee_nescafe",
    "category": "coffee",
    "nameAr": "نسكافيه بحليب",
    "nameEn": "Nescafe with Milk",
    "descAr": "نسكافيه جولد مع حليب ساخن ورغوة ذهبية",
    "descEn": "Smooth Nescafe Gold coffee with warm milk and golden froth.",
    "price": 50,
    "badge": "popular"
  },
  {
    "id": "coffee_nescafe_black",
    "category": "coffee",
    "nameAr": "نسكافيه بلاك",
    "nameEn": "Black Nescafe",
    "descAr": "نسكافيه كلاسيك ساخن وسريع",
    "descEn": "Classic bold black Nescafe coffee.",
    "price": 35,
    "badge": "popular"
  },
  {
    "id": "coffee_break",
    "category": "coffee",
    "nameAr": "كوفي بريك",
    "nameEn": "Coffee Break Special",
    "descAr": "مزيج قهوة سريع وخفيف للاستراحة",
    "descEn": "Light, energizing coffee break blend.",
    "price": 35,
    "badge": "popular"
  },
  {
    "id": "espresso_single_double",
    "category": "coffee",
    "nameAr": "إسبريسو إيطالي (سنجل / دبل)",
    "nameEn": "Italian Espresso (Single / Double)",
    "descAr": "جرعة إسبريسو إيطالي مركزة ومستخلصة بضغط عالي مع كريما ذهبية",
    "descEn": "Bold aromatic Italian espresso shot extracted with dense golden crema.",
    "badge": "popular",
    "options": [
      {
        "key": "single",
        "labelAr": "سنجل (S)",
        "labelEn": "Single (S)",
        "price": 40
      },
      {
        "key": "double",
        "labelAr": "دبل (D)",
        "labelEn": "Double (D)",
        "price": 50
      }
    ],
    "selectedOption": 0
  },
  {
    "id": "espresso_avocado",
    "category": "coffee",
    "nameAr": "إسبريسو أفوكادو",
    "nameEn": "Espresso Avocado Special",
    "descAr": "إسبريسو مبتكر مع سموزي الأفوكادو الطبيعي الكريمي",
    "descEn": "Creamy fresh avocado blend layered with a rich shot of espresso.",
    "price": 60,
    "badge": "special"
  },
  {
    "id": "espresso_macchiato",
    "category": "coffee",
    "nameAr": "إسبريسو ميكاتو",
    "nameEn": "Espresso Macchiato",
    "descAr": "شوت إسبريسو غني مع نقطة رغوة حليب كريمية",
    "descEn": "Bold espresso stained with a dollop of velvety steamed milk foam.",
    "price": 45,
    "badge": "popular"
  },
  {
    "id": "coffee_latte",
    "category": "coffee",
    "nameAr": "كافيه لاتيه",
    "nameEn": "Caffè Latte",
    "descAr": "إسبريسو مع حليب مبخر ناعم وطبقة رغوة خفيفة",
    "descEn": "Espresso combined with steamed milk and a light silky microfoam.",
    "price": 50,
    "badge": "popular"
  },
  {
    "id": "coffee_cortado",
    "category": "coffee",
    "nameAr": "كورتانا / كورتادو",
    "nameEn": "Cortado / Cortona",
    "descAr": "تساوي متقن بين الإسبريسو المركز والحليب المبخر الساخن",
    "descEn": "Equal parts bold espresso and warm silky milk to cut the acidity.",
    "price": 55,
    "badge": "popular"
  },
  {
    "id": "coffee_flat_white",
    "category": "coffee",
    "nameAr": "فلات وايت",
    "nameEn": "Flat White",
    "descAr": "دبل شوت إسبريسو مع حليب مخملي سلس وميكروفوم ناعم",
    "descEn": "Double ristretto espresso shots topped with smooth velvety microfoam.",
    "price": 60,
    "badge": "popular"
  },
  {
    "id": "coffee_spanish_latte",
    "category": "coffee",
    "nameAr": "سبانيش لاتيه ساخن",
    "nameEn": "Hot Spanish Latte",
    "descAr": "إسبريسو مع الحليب المكثف المحلى والحليب المبخر اللذيذ",
    "descEn": "Rich espresso combined with sweet condensed milk and steamed milk.",
    "price": 70,
    "badge": "special"
  },
  {
    "id": "coffee_americano",
    "category": "coffee",
    "nameAr": "أمريكانو كلاسيك",
    "nameEn": "Classic Americano",
    "descAr": "إسبريسو مخفف بالماء الساخن بنكهة عميقة ومتوازنة",
    "descEn": "Hot water topped with espresso shots for a rich, aromatic black coffee.",
    "price": 50,
    "badge": "popular"
  },
  {
    "id": "coffee_mocha_white",
    "category": "coffee",
    "nameAr": "موكا وايت شوكليت",
    "nameEn": "White Chocolate Mocha",
    "descAr": "إسبريسو مع صوص الشوكولاتة البيضاء وحليب مبخر وكريمة",
    "descEn": "Espresso, creamy white chocolate sauce, steamed milk and whipped cream.",
    "price": 70,
    "badge": "popular"
  },
  {
    "id": "coffee_mocha_dark",
    "category": "coffee",
    "nameAr": "موكا دارك شوكليت",
    "nameEn": "Dark Chocolate Mocha",
    "descAr": "إسبريسو مع صوص الشوكولاتة الداكنة والحليب الساخن",
    "descEn": "Bold espresso mixed with dark chocolate sauce and steamed milk.",
    "price": 65,
    "badge": "popular"
  },
  {
    "id": "tea_red",
    "category": "hot_drinks",
    "nameAr": "شاي أحمر فاخر",
    "nameEn": "Traditional Egyptian Red Tea",
    "descAr": "شاي مصري أحمر مميز ومظبوط",
    "descEn": "Classic Egyptian brewed black tea, served piping hot.",
    "price": 25,
    "badge": "popular"
  },
  {
    "id": "tea_green",
    "category": "hot_drinks",
    "nameAr": "شاي أخضر طبيعي",
    "nameEn": "Fresh Green Tea",
    "descAr": "أوراق شاي أخضر طبيعية ومضادة للأكسدة",
    "descEn": "Refreshing pure whole leaf green tea.",
    "price": 30,
    "badge": "natural"
  },
  {
    "id": "herbal_anise",
    "category": "hot_drinks",
    "nameAr": "يانسون دافئ",
    "nameEn": "Warm Herbal Anise",
    "descAr": "مشروب يانسون بلدي مهدئ ومريح",
    "descEn": "Soothing natural anise seed infusion.",
    "price": 20,
    "badge": "natural"
  },
  {
    "id": "herbal_hibiscus",
    "category": "hot_drinks",
    "nameAr": "كركديه ساخن",
    "nameEn": "Hot Egyptian Hibiscus",
    "descAr": "كركديه أسواني بلدي نقي ودافئ",
    "descEn": "Pure Aswan hibiscus flower tea with its distinct crimson hue.",
    "price": 20,
    "badge": "natural"
  },
  {
    "id": "herbal_mint",
    "category": "hot_drinks",
    "nameAr": "نعناع بلدي فريش",
    "nameEn": "Fresh Baladi Mint Tea",
    "descAr": "أوراق نعناع طازجة مغلية ومهدئة",
    "descEn": "Steaming aromatic fresh green mint leaves.",
    "price": 20,
    "badge": "natural"
  },
  {
    "id": "herbal_cinnamon",
    "category": "hot_drinks",
    "nameAr": "قرفة سادة دافئة",
    "nameEn": "Warm Pure Cinnamon",
    "descAr": "عيدان قرفة طبيعية مغلية ومدفئة للجسم",
    "descEn": "Spiced aromatic natural cinnamon brew.",
    "price": 20,
    "badge": "natural"
  },
  {
    "id": "herbal_ginger",
    "category": "hot_drinks",
    "nameAr": "زنجبيل دافئ",
    "nameEn": "Warm Fresh Ginger",
    "descAr": "زنجبيل طبيعي منشط ومفيد",
    "descEn": "Invigorating hot ginger infusion.",
    "price": 20,
    "badge": "natural"
  },
  {
    "id": "herbal_cinnamon_milk",
    "category": "hot_drinks",
    "nameAr": "قرفة بالحليب المغلي",
    "nameEn": "Cinnamon with Warm Milk",
    "descAr": "قرفة مطحونة طبيعية مغلية مع الحليب الساخن ورشة مكسرات",
    "descEn": "Comforting spiced cinnamon gently brewed in whole steamed milk.",
    "price": 35,
    "badge": "popular"
  },
  {
    "id": "sahlab_plain",
    "category": "hot_drinks",
    "nameAr": "سحلب سادة دافئ",
    "nameEn": "Plain Creamy Sahlab",
    "descAr": "سحلب مصري كريمي أصيل بالحليب والسمسم ونكهة المستكة",
    "descEn": "Traditional creamy hot sahlab orchid beverage with sesame & mastic notes.",
    "price": 35,
    "badge": "popular"
  },
  {
    "id": "sahlab_fruits",
    "category": "hot_drinks",
    "nameAr": "سحلب فواكه طازجة",
    "nameEn": "Sahlab with Fresh Fruits",
    "descAr": "سحلب كريمي ساخن مزين بقطع الموز، الفراولة والكيوي الطازجة",
    "descEn": "Thick sahlab topped with fresh slices of banana, strawberry and kiwi.",
    "price": 60,
    "badge": "special"
  },
  {
    "id": "sahlab_nuts",
    "category": "hot_drinks",
    "nameAr": "سحلب مكسرات غنية",
    "nameEn": "Sahlab with Roasted Nuts",
    "descAr": "سحلب ساخن غني بالبندق واللوز والفستق وعين الجمل والزبيب وجوز الهند",
    "descEn": "Rich velvety sahlab loaded with crunchy roasted hazelnuts, almonds & pistachios.",
    "price": 65,
    "badge": "popular"
  },
  {
    "id": "sahlab_elwan_royal",
    "category": "hot_drinks",
    "nameAr": "سحلب علوان الملوكي",
    "nameEn": "Elwan Royal Mega Sahlab",
    "descAr": "سحلب علوان الخاص: فواكه مشكلة + مكسرات محمصة + شوكولاتة نوتيلا وعسل",
    "descEn": "Elwan's signature sahlab with fresh fruits, premium nuts and warm Nutella.",
    "price": 70,
    "badge": "special"
  },
  {
    "id": "sahlab_chocolate",
    "category": "hot_drinks",
    "nameAr": "سحلب شوكولاتة",
    "nameEn": "Chocolate Sahlab",
    "descAr": "سحلب كريمي ممتزج بصوص الشوكولاتة الغنية",
    "descEn": "Thick creamy sahlab infused with decadent chocolate sauce.",
    "price": 60,
    "badge": "popular"
  },
  {
    "id": "sahlab_caramel",
    "category": "hot_drinks",
    "nameAr": "سحلب كراميل",
    "nameEn": "Caramel Sahlab",
    "descAr": "سحلب دافئ بصوص الكراميل المحمص والمكسرات",
    "descEn": "Silky sahlab drizzled with warm caramel and chopped roasted nuts.",
    "price": 55,
    "badge": "popular"
  },
  {
    "id": "drink_chai_latte",
    "category": "hot_drinks",
    "nameAr": "شاي لاتيه بالبهارات",
    "nameEn": "Spiced Chai Latte",
    "descAr": "شاي متبل بالهيل والقرفة مع حليب مبخر كريمي",
    "descEn": "Aromatic black tea spiced with cardamom and cinnamon in steamed milk.",
    "price": 35,
    "badge": "popular"
  },
  {
    "id": "drink_hot_cider",
    "category": "hot_drinks",
    "nameAr": "هوت سيدر (عصير تفاح ساخن بالقرفة)",
    "nameEn": "Hot Spiced Apple Cider",
    "descAr": "عصير تفاح طبيعي ساخن مطهو مع عيدان القرفة والقرنفل",
    "descEn": "Warm pure apple juice infused with natural cinnamon sticks and cloves.",
    "price": 35,
    "badge": "special"
  },
  {
    "id": "juice_mango",
    "category": "juices",
    "nameAr": "عصير مانجو فريش طبيعي",
    "nameEn": "100% Fresh Mango Juice",
    "descAr": "عصير مانجو فريش ثقيل وطبيعي بدون إضافات",
    "descEn": "Pure, thick and natural fresh ripe mango juice.",
    "price": 60,
    "badge": "natural"
  },
  {
    "id": "juice_strawberry",
    "category": "juices",
    "nameAr": "عصير فراولة طبيعي",
    "nameEn": "Fresh Strawberry Juice",
    "descAr": "فراولة طازجة منعشة 100%",
    "descEn": "Fresh sweet strawberries blended to perfection.",
    "price": 55,
    "badge": "natural"
  },
  {
    "id": "juice_banana",
    "category": "juices",
    "nameAr": "عصير موز بالحليب",
    "nameEn": "Fresh Banana with Milk",
    "descAr": "موز طازج مخفوق مع الحليب والعسل",
    "descEn": "Fresh bananas smoothly blended with whole milk and natural honey.",
    "price": 50,
    "badge": "natural"
  },
  {
    "id": "juice_guava",
    "category": "juices",
    "nameAr": "عصير جوافة فريش",
    "nameEn": "Fresh Guava Juice",
    "descAr": "جوافة بلدي طازجة معصورة بدون شوائب",
    "descEn": "Natural Egyptian fresh fragrant guava juice.",
    "price": 50,
    "badge": "natural"
  },
  {
    "id": "juice_guava_milk",
    "category": "juices",
    "nameAr": "عصير جوافة بالحليب",
    "nameEn": "Guava with Milk",
    "descAr": "جوافة طازجة مخفوقة بالحليب الكريمي",
    "descEn": "Fresh guava blended with creamy whole milk.",
    "price": 60,
    "badge": "natural"
  },
  {
    "id": "juice_kiwi",
    "category": "juices",
    "nameAr": "عصير كيوي طبيعي",
    "nameEn": "Fresh Kiwi Juice",
    "descAr": "كيوي أخضر طبيعي غني بفيتامين C ومضادات الأكسدة",
    "descEn": "Vibrant zesty fresh kiwi juice packed with natural vitamins.",
    "price": 70,
    "badge": "natural"
  },
  {
    "id": "juice_cantaloupe",
    "category": "juices",
    "nameAr": "عصير كانتالوب منعش",
    "nameEn": "Fresh Cantaloupe Juice",
    "descAr": "كانتالوب طازج ومثلج ينعش يومك",
    "descEn": "Sweet iced fresh melon cantaloupe juice.",
    "price": 50,
    "badge": "natural"
  },
  {
    "id": "juice_cantaloupe_milk",
    "category": "juices",
    "nameAr": "كانتالوب بالحليب",
    "nameEn": "Cantaloupe with Milk",
    "descAr": "كانتالوب مثلج مخفوق مع الحليب",
    "descEn": "Fresh cantaloupe blended with cold whole milk.",
    "price": 60,
    "badge": "natural"
  },
  {
    "id": "juice_avocado_plain",
    "category": "juices",
    "nameAr": "عصير أفوكادو طبيعي",
    "nameEn": "Pure Fresh Avocado Juice",
    "descAr": "أفوكادو كريمي طازج ومغذي",
    "descEn": "Rich, creamy fresh avocado smoothie.",
    "price": 80,
    "badge": "natural"
  },
  {
    "id": "juice_avocado_banana_nuts",
    "category": "juices",
    "nameAr": "أفوكادو بالموز والمكسرات والعسل",
    "nameEn": "Avocado with Banana, Nuts & Honey",
    "descAr": "مشروب الطاقة: أفوكادو فريش + موز + عسل نحل طبيعي + مكسرات محمصة",
    "descEn": "Power bomb: fresh avocado, banana, pure blossom honey and roasted nuts.",
    "price": 100,
    "badge": "special"
  },
  {
    "id": "juice_lemon",
    "category": "juices",
    "nameAr": "عصير ليمون فريش",
    "nameEn": "Fresh Lemonade",
    "descAr": "عصير ليمون طبيعي مثلج ومنعش",
    "descEn": "Crisp, chilled fresh squeezed lemonade.",
    "price": 35,
    "badge": "natural"
  },
  {
    "id": "juice_lemon_mint",
    "category": "juices",
    "nameAr": "ليمون بالنعناع المنعش",
    "nameEn": "Lemon Mint Juice (Limonana)",
    "descAr": "عصير ليمون طازج مخفوق مع أوراق النعناع الخضراء والثلج المجروش",
    "descEn": "Refreshing fresh lemon blended with green mint leaves and crushed ice.",
    "price": 40,
    "badge": "popular"
  },
  {
    "id": "juice_peach",
    "category": "juices",
    "nameAr": "عصير خوخ فريش",
    "nameEn": "Fresh Peach Juice",
    "descAr": "خوخ طبيعي ناعم ومثلج",
    "descEn": "Sweet juicy chilled fresh peach nectar.",
    "price": 45,
    "badge": "natural"
  },
  {
    "id": "juice_watermelon",
    "category": "juices",
    "nameAr": "عصير بطيخ مثلج",
    "nameEn": "Fresh Iced Watermelon Juice",
    "descAr": "بطيخ أحمر طبيعي 100% مثلج ومرطب",
    "descEn": "Pure refreshing sweet red watermelon juice over crushed ice.",
    "price": 50,
    "badge": "natural"
  },
  {
    "id": "juice_orange",
    "category": "juices",
    "nameAr": "عصير برتقال فريش",
    "nameEn": "Fresh Squeezed Orange Juice",
    "descAr": "برتقال طبيعي معصور طازج بدون سكر مضاف",
    "descEn": "100% pure freshly squeezed orange juice.",
    "price": 45,
    "badge": "natural"
  },
  {
    "id": "juice_dates_milk",
    "category": "juices",
    "nameAr": "عصير بلح بالحليب والعسل",
    "nameEn": "Dates with Milk & Honey",
    "descAr": "بلح أسواني مفروم ومخفوق بالحليب الساخن أو المثلج",
    "descEn": "Wholesome natural dates blended with rich milk and honey.",
    "price": 40,
    "badge": "natural"
  },
  {
    "id": "mix_scratch",
    "category": "juices",
    "nameAr": "كوكتيل اسكرتش (كيري + موز + لبن)",
    "nameEn": "Scratch Mix (Kiri + Banana + Milk)",
    "descAr": "كوكتيل كريمي مبتكر يجمع جبنة كيري الناعمة مع الموز والحليب والعسل",
    "descEn": "Decadent creamy blend of Kiri cream cheese, fresh bananas, and cold milk.",
    "price": 70,
    "badge": "special"
  },
  {
    "id": "mix_havana",
    "category": "juices",
    "nameAr": "كوكتيل هافانا (كنتلوب + موز + فراولة + حليب)",
    "nameEn": "Havana Cocktail",
    "descAr": "توليفة استوائية منعشة من الكنتلوب، الموز، الفراولة، والحليب",
    "descEn": "Tropical blend of cantaloupe melon, fresh bananas, strawberries and milk.",
    "price": 60,
    "badge": "popular"
  },
  {
    "id": "mix_paradise",
    "category": "juices",
    "nameAr": "كوكتيل براديس (أفوكادو + مانجو + هانداي)",
    "nameEn": "Paradise Cocktail",
    "descAr": "أفوكادو طبيعي مع مانجو استوائية ونكهة الهانداي الفاخرة",
    "descEn": "Exotic paradise mix of rich avocado, sweet mango and tropical essence.",
    "price": 80,
    "badge": "special"
  },
  {
    "id": "mix_florida",
    "category": "juices",
    "nameAr": "كوكتيل فلوريدا (مانجو + فراولة + جوافة)",
    "nameEn": "Florida Mix (Mango + Strawberry + Guava)",
    "descAr": "طبقات ملونة من المانجو، الفراولة والجوافة الطبيعية",
    "descEn": "Classic layered tri-color fresh juice: ripe mango, strawberry & guava.",
    "price": 70,
    "badge": "popular"
  },
  {
    "id": "mix_mango_berry",
    "category": "juices",
    "nameAr": "كوكتيل مانجو بيري (مانجو + بلوبيري)",
    "nameEn": "Mango Berry (Mango + Blueberry)",
    "descAr": "مزيج ساحر من المانجو الاستوائية مع التوت الأزرق المركز",
    "descEn": "Delicious fusion of golden mango and antioxidant-rich blueberries.",
    "price": 60,
    "badge": "popular"
  },
  {
    "id": "mix_tropicana",
    "category": "juices",
    "nameAr": "كوكتيل تروبيكانا الرباعي",
    "nameEn": "Tropicana Four-Fruit Cocktail",
    "descAr": "مانجو + موز + جوافة + فراولة في كوكتيل متناسق وغني بالفيتامينات",
    "descEn": "Vibrant four-fruit fusion: mango, banana, guava, and fresh strawberries.",
    "price": 80,
    "badge": "special"
  },
  {
    "id": "smoothie_mango",
    "category": "smoothies",
    "nameAr": "سموزي مانجو مثلج",
    "nameEn": "Iced Mango Smoothie",
    "descAr": "مانجو طبيعية مثلجة مع الثلج المجروش ونكهة منعشة",
    "descEn": "Blended frozen mango puree with crushed ice for peak summer refreshment.",
    "price": 60,
    "badge": "popular"
  },
  {
    "id": "smoothie_cantaloupe",
    "category": "smoothies",
    "nameAr": "سموزي كانتلوب",
    "nameEn": "Cantaloupe Smoothie",
    "descAr": "كانتالوب طبيعي مثلج ومنعش",
    "descEn": "Sweet cantaloupe melon blended with ice.",
    "price": 60,
    "badge": "popular"
  },
  {
    "id": "smoothie_watermelon",
    "category": "smoothies",
    "nameAr": "سموزي بطيخ مثلج",
    "nameEn": "Frozen Watermelon Smoothie",
    "descAr": "بطيخ أحمر مثلج مع نعناع ولمسة ليمون",
    "descEn": "Icy red watermelon smoothie with a touch of mint.",
    "price": 60,
    "badge": "popular"
  },
  {
    "id": "smoothie_kiwi",
    "category": "smoothies",
    "nameAr": "سموزي كيوي مثلج",
    "nameEn": "Iced Kiwi Smoothie",
    "descAr": "كيوي طبيعي مثلج ومنعش ومليء بالحيوية",
    "descEn": "Zesty green kiwi blended with crushed ice.",
    "price": 70,
    "badge": "popular"
  },
  {
    "id": "smoothie_peach",
    "category": "smoothies",
    "nameAr": "سموزي خوخ",
    "nameEn": "Peach Smoothie",
    "descAr": "خوخ مثلج ناعم ولذيذ",
    "descEn": "Sweet frosty peach puree smoothie.",
    "price": 55,
    "badge": "popular"
  },
  {
    "id": "smoothie_strawberry",
    "category": "smoothies",
    "nameAr": "سموزي فراولة",
    "nameEn": "Strawberry Smoothie",
    "descAr": "فراولة حمراء مثلجة مع صوص الفراولة",
    "descEn": "Frosty fresh strawberry smoothie.",
    "price": 60,
    "badge": "popular"
  },
  {
    "id": "smoothie_blueberry",
    "category": "smoothies",
    "nameAr": "سموزي بلوبيري (توت أزرق)",
    "nameEn": "Blueberry Smoothie",
    "descAr": "توت أزرق طبيعي مثلج غني بالنكهة واللون الرائع",
    "descEn": "Vibrant wild blueberry smoothie blended to icy perfection.",
    "price": 70,
    "badge": "special"
  },
  {
    "id": "smoothie_lemon_mint",
    "category": "smoothies",
    "nameAr": "سموزي ليمون نعناع",
    "nameEn": "Lemon Mint Frozen Smoothie",
    "descAr": "ليمون ونعناع مثلج فائق الانتعاش",
    "descEn": "Frosty lemon and garden mint blended with finely crushed ice.",
    "price": 55,
    "badge": "popular"
  },
  {
    "id": "smoothie_lemon",
    "category": "smoothies",
    "nameAr": "سموزي ليمون صافي",
    "nameEn": "Pure Lemon Frozen Smoothie",
    "descAr": "ليمون طبيعي مثلج وحامض منعش",
    "descEn": "Crisp frozen lemonade smoothie.",
    "price": 55,
    "badge": "popular"
  },
  {
    "id": "smoothie_green_apple",
    "category": "smoothies",
    "nameAr": "سموزي جرين أبل (تفاح أخضر)",
    "nameEn": "Green Apple Smoothie",
    "descAr": "تفاح أخضر حامض وحلو مثلج",
    "descEn": "Tart and sweet crisp green apple icy smoothie.",
    "price": 60,
    "badge": "popular"
  },
  {
    "id": "smoothie_melon",
    "category": "smoothies",
    "nameAr": "ميلون (بطيخ + كانتلوب)",
    "nameEn": "Melon Duo (Watermelon + Cantaloupe)",
    "descAr": "مزيج منعش من البطيخ الأحمر والكانتالوب المثلج",
    "descEn": "Refreshing duo of red watermelon and sweet cantaloupe smoothie.",
    "price": 65,
    "badge": "popular"
  },
  {
    "id": "smoothie_power",
    "category": "smoothies",
    "nameAr": "سموزي باور (كيوي + مانجو + أناناس)",
    "nameEn": "Power Smoothie (Kiwi + Mango + Pineapple)",
    "descAr": "سموزي الطاقة الثلاثي: كيوي منعش، مانجو حلوة، وأناناس استوائي",
    "descEn": "Triple energy blast: zesty kiwi, sweet mango and tropical pineapple.",
    "price": 70,
    "badge": "special"
  },
  {
    "id": "smoothie_elwan_signature",
    "category": "smoothies",
    "nameAr": "سموزي علوان الفاخر (كيوي + أفوكادو + أناناس)",
    "nameEn": "Elwan Signature Smoothie",
    "descAr": "سموزي علوان الحصري: كيوي + أفوكادو كريمي + أناناس استوائي مثلج",
    "descEn": "Elwan's crowned blend: fresh kiwi, rich creamy avocado and pineapple.",
    "price": 90,
    "badge": "special"
  },
  {
    "id": "shake_vanilla",
    "category": "smoothies",
    "nameAr": "ميلك تشيك فانيليا",
    "nameEn": "Classic Vanilla Milkshake",
    "descAr": "آيس كريم فانيليا إيطالي مخفوق مع حليب كامل الدسم وكريمة مخفوقة",
    "descEn": "Creamy vanilla gelato blended with cold milk, topped with whipped cream.",
    "price": 60,
    "badge": "popular"
  },
  {
    "id": "shake_chocolate",
    "category": "smoothies",
    "nameAr": "ميلك تشيك شوكولاتة",
    "nameEn": "Chocolate Milkshake",
    "descAr": "آيس كريم شوكولاتة مع صوص الشوكولاتة والحليب الكثيف",
    "descEn": "Rich chocolate gelato blended with fudge sauce and milk.",
    "price": 60,
    "badge": "popular"
  },
  {
    "id": "shake_mango",
    "category": "smoothies",
    "nameAr": "ميلك تشيك مانجو",
    "nameEn": "Mango Milkshake",
    "descAr": "آيس كريم مانجو مع قطع مانجو فريش وحليب",
    "descEn": "Creamy mango ice cream shaken with fresh mango chunks and cold milk.",
    "price": 65,
    "badge": "popular"
  },
  {
    "id": "shake_strawberry",
    "category": "smoothies",
    "nameAr": "ميلك تشيك فراولة",
    "nameEn": "Strawberry Milkshake",
    "descAr": "آيس كريم فراولة مع صوص الفراولة الطبيعي والحليب",
    "descEn": "Sweet strawberry gelato shaken with strawberry compote and cold milk.",
    "price": 65,
    "badge": "popular"
  },
  {
    "id": "shake_blueberry",
    "category": "smoothies",
    "nameAr": "ميلك تشيك بلوبيري",
    "nameEn": "Blueberry Milkshake",
    "descAr": "آيس كريم مع صوص التوت الأزرق المركز",
    "descEn": "Smooth ice cream blended with concentrated wild blueberry sauce.",
    "price": 70,
    "badge": "special"
  },
  {
    "id": "shake_peach",
    "category": "smoothies",
    "nameAr": "ميلك تشيك خوخ",
    "nameEn": "Peach Milkshake",
    "descAr": "آيس كريم خوخ مع قطع خوخ فريش وحليب",
    "descEn": "Peach gelato blended with fresh peach puree.",
    "price": 65,
    "badge": "popular"
  },
  {
    "id": "shake_oreo",
    "category": "smoothies",
    "nameAr": "ميلك تشيك أوريو",
    "nameEn": "Oreo Cookies Milkshake",
    "descAr": "بسكويت أوريو مكسر مخفوق مع آيس كريم فانيليا وصوص شوكولاتة",
    "descEn": "Crushed Oreo cookies blended with rich vanilla ice cream and fudge.",
    "price": 70,
    "badge": "popular"
  },
  {
    "id": "shake_caramel",
    "category": "smoothies",
    "nameAr": "ميلك تشيك كراميل",
    "nameEn": "Caramel Milkshake",
    "descAr": "آيس كريم فانيليا مع صوص الكراميل المحمص",
    "descEn": "Creamy vanilla milkshake swirled with golden caramel syrup.",
    "price": 65,
    "badge": "popular"
  },
  {
    "id": "shake_hohos",
    "category": "smoothies",
    "nameAr": "ميلك تشيك هوهوز",
    "nameEn": "Hohos Cake Shake",
    "descAr": "كيك هوهوز الشوكولاتة مخفوق مع آيس كريم وحليب",
    "descEn": "Decadent Hohos chocolate Swiss rolls blended into creamy shake.",
    "price": 70,
    "badge": "popular"
  },
  {
    "id": "shake_coffee_chocolate",
    "category": "smoothies",
    "nameAr": "ميلك كوفي شوكولاتة",
    "nameEn": "Mocha Coffee Shake",
    "descAr": "إسبريسو بارد مع شوكولاتة وحليب وآيس كريم",
    "descEn": "Chilled espresso, dark chocolate sauce and vanilla ice cream shake.",
    "price": 75,
    "badge": "popular"
  },
  {
    "id": "shake_coffee_vanilla",
    "category": "smoothies",
    "nameAr": "ميلك كوفي فانيليا",
    "nameEn": "Vanilla Latte Shake",
    "descAr": "إسبريسو مثلج مخفوق مع آيس كريم فانيليا وحليب",
    "descEn": "Cold espresso shot blended with rich vanilla ice cream.",
    "price": 75,
    "badge": "popular"
  },
  {
    "id": "shake_pistachio",
    "category": "smoothies",
    "nameAr": "ميلك تشيك بوستاشيو (فستق)",
    "nameEn": "Pistachio Dream Milkshake",
    "descAr": "زبدة الفستق الإيطالية مع آيس كريم فستق وحليب وفستق حلبي",
    "descEn": "Luxurious Italian pistachio cream shaken with gelato and crushed pistachios.",
    "price": 90,
    "badge": "special"
  },
  {
    "id": "shake_nutella",
    "category": "smoothies",
    "nameAr": "ميلك تشيك نوتيلا",
    "nameEn": "Nutella Thick Shake",
    "descAr": "شوكولاتة نوتيلا الأصلية مخفوقة مع آيس كريم وحليب",
    "descEn": "Heaping spoonfuls of Nutella hazelnut spread blended with vanilla gelato.",
    "price": 80,
    "badge": "popular"
  },
  {
    "id": "shake_lotus",
    "category": "smoothies",
    "nameAr": "ميلك تشيك لوتس",
    "nameEn": "Lotus Biscoff Milkshake",
    "descAr": "زبدة لوتس وبسكويت مطحون مع آيس كريم كريمي",
    "descEn": "Creamy shake infused with Lotus Biscoff spread and biscuit crumbs.",
    "price": 80,
    "badge": "special"
  },
  {
    "id": "frappe_classic",
    "category": "smoothies",
    "nameAr": "فرابتشينو كلاسيك",
    "nameEn": "Classic Coffee Frappuccino",
    "descAr": "قهوة إسبريسو مثلجة مخفوقة مع ثلج وحليب وكريمة",
    "descEn": "Blended iced coffee with milk, ice, and whipped cream topping.",
    "price": 70,
    "badge": "popular"
  },
  {
    "id": "frappe_chocolate",
    "category": "smoothies",
    "nameAr": "فرابتشينو شوكولاتة",
    "nameEn": "Mocha Frappuccino",
    "descAr": "إسبريسو مثلج مع شوكولاتة غنية وكريمة مخفوقة",
    "descEn": "Espresso, rich chocolate syrup, blended ice and whipped cream.",
    "price": 75,
    "badge": "popular"
  },
  {
    "id": "frappe_vanilla",
    "category": "smoothies",
    "nameAr": "فرابتشينو فانيليا",
    "nameEn": "Vanilla Frappuccino",
    "descAr": "فرابتشينو فانيليا مثلج ناعم وكريمي",
    "descEn": "Smooth vanilla bean blended beverage with ice and whipped cream.",
    "price": 75,
    "badge": "popular"
  },
  {
    "id": "iced_latte",
    "category": "smoothies",
    "nameAr": "آيس لاتيه مثلج",
    "nameEn": "Iced Caffè Latte",
    "descAr": "إسبريسو طازج يسكب فوق الحليب البارد ومكعبات الثلج",
    "descEn": "Fresh espresso poured over cold whole milk and clear ice cubes.",
    "price": 60,
    "badge": "popular"
  },
  {
    "id": "iced_cappuccino",
    "category": "smoothies",
    "nameAr": "آيس كابتشينو",
    "nameEn": "Iced Cappuccino",
    "descAr": "إسبريسو بارد مع حليب مثلج ورغوة حليب باردة كثيفة",
    "descEn": "Cold espresso over ice with cold milk and thick frothed milk foam.",
    "price": 70,
    "badge": "popular"
  },
  {
    "id": "iced_caramel_macchiato",
    "category": "smoothies",
    "nameAr": "آيس كراميل ميكاتو",
    "nameEn": "Iced Caramel Macchiato",
    "descAr": "حليب مثلج مع فانيليا وإسبريسو وصوص كراميل ذهبي",
    "descEn": "Cold milk layered with vanilla, espresso shots, and buttery caramel drizzle.",
    "price": 70,
    "badge": "popular"
  },
  {
    "id": "iced_white_mocha",
    "category": "smoothies",
    "nameAr": "آيس موكا وايت",
    "nameEn": "Iced White Chocolate Mocha",
    "descAr": "إسبريسو مثلج مع صوص الشوكولاتة البيضاء والحليب والثلج",
    "descEn": "Espresso, sweet white chocolate sauce and cold milk over ice.",
    "price": 70,
    "badge": "popular"
  },
  {
    "id": "iced_spanish_latte",
    "category": "smoothies",
    "nameAr": "آيس سبانيش لاتيه",
    "nameEn": "Iced Spanish Latte",
    "descAr": "حليب مكثف محلى مع إسبريسو وحليب بارد ومكعبات ثلج",
    "descEn": "Sweet condensed milk, rich espresso shots and chilled milk over ice.",
    "price": 75,
    "badge": "special"
  },
  {
    "id": "iced_americano",
    "category": "smoothies",
    "nameAr": "آيس أمريكانو",
    "nameEn": "Iced Americano",
    "descAr": "إسبريسو دبل شوت مع ماء مثلج ومنعش بدون سكر",
    "descEn": "Double espresso shots poured over cold water and ice for a crisp kick.",
    "price": 60,
    "badge": "popular"
  },
  {
    "id": "ice_cream_plain",
    "category": "ice_cream",
    "nameAr": "آيس كريم سادة فانيليا",
    "nameEn": "Plain Vanilla Gelato",
    "descAr": "بولة آيس كريم فانيليا إيطالية ناعمة وغنية",
    "descEn": "Scoop of velvety classic vanilla gelato.",
    "price": 50,
    "badge": "popular"
  },
  {
    "id": "ice_cream_caramel",
    "category": "ice_cream",
    "nameAr": "آيس كريم كراميل",
    "nameEn": "Caramel Swirl Ice Cream",
    "descAr": "آيس كريم مع صوص الكراميل اللذيذ",
    "descEn": "Creamy gelato swirled with rich golden caramel.",
    "price": 55,
    "badge": "popular"
  },
  {
    "id": "ice_cream_oreo",
    "category": "ice_cream",
    "nameAr": "آيس كريم أوريو كرانشي",
    "nameEn": "Oreo Cookies Ice Cream",
    "descAr": "آيس كريم ممتزج بقطع بسكويت أوريو المقرمش",
    "descEn": "Creamy gelato mixed with generous crunchy Oreo chunks.",
    "price": 60,
    "badge": "popular"
  },
  {
    "id": "ice_cream_lotus",
    "category": "ice_cream",
    "nameAr": "آيس كريم لوتس بسكوف",
    "nameEn": "Lotus Biscoff Ice Cream",
    "descAr": "آيس كريم بزبدة اللوتس وبسكويت لوتس مطحون",
    "descEn": "Decadent gelato swirled with speculoos Lotus spread and biscuit crumbs.",
    "price": 70,
    "badge": "special"
  },
  {
    "id": "ice_cream_dark",
    "category": "ice_cream",
    "nameAr": "آيس كريم دارك شوكليت",
    "nameEn": "Dark Chocolate Gelato",
    "descAr": "آيس كريم شوكولاتة بلجيكية داكنة غنية",
    "descEn": "Rich dark Belgian chocolate gelato for true cocoa lovers.",
    "price": 55,
    "badge": "popular"
  },
  {
    "id": "ice_cream_strawberry",
    "category": "ice_cream",
    "nameAr": "آيس كريم استوبيري (فراولة)",
    "nameEn": "Strawberry Gelato",
    "descAr": "آيس كريم فراولة طبيعي مع قطع الفراولة",
    "descEn": "Fresh natural strawberry gelato with real fruit pieces.",
    "price": 70,
    "badge": "popular"
  },
  {
    "id": "ice_cream_king_blueberry",
    "category": "ice_cream",
    "nameAr": "آيس كريم كينج بلوبيري",
    "nameEn": "King Blueberry Gelato",
    "descAr": "آيس كريم فاخر بقطع التوت الأزرق الطبيعي",
    "descEn": "Royal blueberry gelato loaded with whole wild berries.",
    "price": 70,
    "badge": "special"
  },
  {
    "id": "ice_cream_mango",
    "category": "ice_cream",
    "nameAr": "آيس كريم مانجو استوائي",
    "nameEn": "Tropical Mango Gelato",
    "descAr": "آيس كريم مانجو طبيعي مثلج ونقي",
    "descEn": "Vibrant ripe mango gelato bursting with sunny fruit flavors.",
    "price": 55,
    "badge": "popular"
  },
  {
    "id": "ice_cream_peach",
    "category": "ice_cream",
    "nameAr": "آيس كريم خوخ",
    "nameEn": "Sweet Peach Ice Cream",
    "descAr": "آيس كريم خوخ صيفي ناعم ومنعش",
    "descEn": "Delicate peach flavored cream with fruit swirl.",
    "price": 60,
    "badge": "popular"
  },
  {
    "id": "ice_cream_nuts",
    "category": "ice_cream",
    "nameAr": "آيس كريم مكسرات فاخرة",
    "nameEn": "Deluxe Roasted Nuts Ice Cream",
    "descAr": "آيس كريم مستكة وفانيليا مغطى بالفستق والبندق واللوز وعين الجمل",
    "descEn": "Premium gelato crowned with generous roasted pistachios, almonds & hazelnuts.",
    "price": 80,
    "badge": "special"
  },
  {
    "id": "mojito_classic",
    "category": "ice_cream",
    "nameAr": "موهيتو كلاسيك ليمون ونعناع",
    "nameEn": "Classic Mint & Lime Mojito",
    "descAr": "ليمون طازج مهروس مع النعناع الأخضر، صودا مثلجة وشراب السكر",
    "descEn": "Crushed fresh limes, fragrant mint leaves, pure cane sugar and sparkling soda.",
    "price": 60,
    "badge": "popular"
  },
  {
    "id": "mojito_peach",
    "category": "ice_cream",
    "nameAr": "موهيتو خوخ",
    "nameEn": "Peach Mojito",
    "descAr": "موهيتو بنكهة الخوخ الطبيعي المنعش والصودا والنعناع",
    "descEn": "Sweet peach infusion with fresh mint, lime and effervescent soda.",
    "price": 60,
    "badge": "popular"
  },
  {
    "id": "mojito_passion_fruit",
    "category": "ice_cream",
    "nameAr": "موهيتو باشن فروت",
    "nameEn": "Passion Fruit Mojito",
    "descAr": "فاكهة العاطفة الاستوائية مع النعناع والليمون والصودا المثلجة",
    "descEn": "Exotic passion fruit pulp, mint, lime wedges and sparkling soda.",
    "price": 70,
    "badge": "special"
  },
  {
    "id": "mojito_strawberry",
    "category": "ice_cream",
    "nameAr": "موهيتو فراولة",
    "nameEn": "Strawberry Mojito",
    "descAr": "فراولة طازجة مهروسة مع النعناع والليمون والصودا",
    "descEn": "Muddled sweet strawberries, fresh mint sprigs, lime and soda.",
    "price": 60,
    "badge": "popular"
  },
  {
    "id": "mojito_mango",
    "category": "ice_cream",
    "nameAr": "موهيتو مانجا",
    "nameEn": "Mango Mojito",
    "descAr": "مانجو طبيعية مع النعناع والليمون والصودا المنعشة",
    "descEn": "Ripe mango puree with mint, lime and bubbly sparkling water.",
    "price": 65,
    "badge": "popular"
  },
  {
    "id": "mojito_pomegranate",
    "category": "ice_cream",
    "nameAr": "موهيتو رمان",
    "nameEn": "Pomegranate Mojito",
    "descAr": "حبات وعصير الرمان الطبيعي مع النعناع والليمون والصودا",
    "descEn": "Tart pomegranate juice, fresh mint, lime slices and soda.",
    "price": 65,
    "badge": "popular"
  },
  {
    "id": "mojito_blueberry",
    "category": "ice_cream",
    "nameAr": "موهيتو بلوبيري (توت أزرق)",
    "nameEn": "Blueberry Mojito",
    "descAr": "توت أزرق مركز مع صودا مثلجة ونعناع وليمون",
    "descEn": "Muddled blueberries with refreshing mint, fresh lime and fizzy soda.",
    "price": 70,
    "badge": "special"
  },
  {
    "id": "mojito_pineapple",
    "category": "ice_cream",
    "nameAr": "موهيتو أناناس",
    "nameEn": "Pineapple Mojito",
    "descAr": "أناناس استوائي مثلج مع النعناع والليمون والصودا",
    "descEn": "Tropical pineapple juice, fresh lime, crushed mint and club soda.",
    "price": 70,
    "badge": "popular"
  },
  {
    "id": "soda_sunshine",
    "category": "ice_cream",
    "nameAr": "ميكس صودا صن شاين",
    "nameEn": "Sunshine Soda Mix",
    "descAr": "برتقال، باشن فروت وصودا مثلجة بألوان شروق الشمس",
    "descEn": "Citrus orange, passion fruit and sparkling soda with sunshine hue.",
    "price": 70,
    "badge": "popular"
  },
  {
    "id": "soda_sunrise",
    "category": "ice_cream",
    "nameAr": "ميكس صودا صن رايز",
    "nameEn": "Sunrise Soda Mix",
    "descAr": "رمان، أناناس وصودا فوارة مثلجة",
    "descEn": "Pomegranate syrup, pineapple and sparkling soda gradient.",
    "price": 65,
    "badge": "popular"
  },
  {
    "id": "soda_scratch_mint",
    "category": "ice_cream",
    "nameAr": "صودا سكرتش منت",
    "nameEn": "Scratch Mint Sparkling Soda",
    "descAr": "صودا ليمون ونعناع مع لمسة نكهة سكرتش الخاصة",
    "descEn": "Crisp mint and lemon fizzy sparkling soda.",
    "price": 60,
    "badge": "popular"
  },
  {
    "id": "soda_cherry_cola",
    "category": "ice_cream",
    "nameAr": "شيري كولا",
    "nameEn": "Cherry Cola Fizz",
    "descAr": "كولا مثلجة مع نكهة الكرز الأحمر وحبات الكرز",
    "descEn": "Ice-cold cola infused with rich wild cherry syrup.",
    "price": 60,
    "badge": "popular"
  },
  {
    "id": "soda_passion",
    "category": "ice_cream",
    "nameAr": "صودا باشن",
    "nameEn": "Passion Sparkling Soda",
    "descAr": "صودا فوارة بنكهة الباشن فروت الاستوائية",
    "descEn": "Tropical sparkling passion fruit fizz.",
    "price": 60,
    "badge": "popular"
  },
  {
    "id": "soda_blue_passion",
    "category": "ice_cream",
    "nameAr": "بلو باشن صودا",
    "nameEn": "Blue Passion Soda",
    "descAr": "باشن فروت مع بلو كوراساو وصودا مثلجة زرقاء خلابة",
    "descEn": "Electric blue curacao and passion fruit over iced sparkling soda.",
    "price": 70,
    "badge": "special"
  },
  {
    "id": "soda_blue_orange",
    "category": "ice_cream",
    "nameAr": "بلو أورنج صودا",
    "nameEn": "Blue Orange Soda",
    "descAr": "برتقال منعش مع بلو كوراساو وصودا",
    "descEn": "Zesty orange and blue curacao sparkling refresher.",
    "price": 65,
    "badge": "popular"
  },
  {
    "id": "soda_blue_soda",
    "category": "ice_cream",
    "nameAr": "بلو صودا الكلاسيكية",
    "nameEn": "Classic Blue Lagoon Soda",
    "descAr": "صودا زرقاء بحرية مع ليمون ونعناع وثلج مجروش",
    "descEn": "Ocean blue lagoon sparkling soda with lemon and mint.",
    "price": 70,
    "badge": "popular"
  },
  {
    "id": "soda_blue_berry",
    "category": "ice_cream",
    "nameAr": "بلو بيري صودا",
    "nameEn": "Blueberry Sparkling Soda",
    "descAr": "صودا فوارة بنكهة التوت الأزرق اللذيذة",
    "descEn": "Wild blueberry sparkling soda with crushed ice.",
    "price": 70,
    "badge": "popular"
  },
  {
    "id": "soda_lemon_strawberry",
    "category": "ice_cream",
    "nameAr": "صودا ليمون فراولة",
    "nameEn": "Lemon Strawberry Soda",
    "descAr": "مزيج منعش من الليمون الحامض وصوص الفراولة الحلوة والصودا",
    "descEn": "Tart lemonade combined with sweet strawberry syrup and bubbles.",
    "price": 65,
    "badge": "popular"
  },
  {
    "id": "soda_lemon_cola",
    "category": "ice_cream",
    "nameAr": "صودا ليمون كولا",
    "nameEn": "Lemon Cola Fizz",
    "descAr": "كولا مثلجة مع شرائح ليمون فريش ونكهة ليمون مركزة",
    "descEn": "Classic cola elevated with fresh lemon wheels and tart zest.",
    "price": 65,
    "badge": "popular"
  },
  {
    "id": "beverage_cola_can",
    "category": "ice_cream",
    "nameAr": "كولا (كانز)",
    "nameEn": "Coca-Cola Can",
    "descAr": "كانز كولا مثلجة 330 مل",
    "descEn": "Chilled Coca-Cola can 330ml.",
    "price": 25,
    "badge": "popular"
  },
  {
    "id": "beverage_water_small",
    "category": "ice_cream",
    "nameAr": "مياه معدنية صغيرة",
    "nameEn": "Small Mineral Water",
    "descAr": "زجاجة مياه معدنية طبيعية نقية 500 مل",
    "descEn": "Pure natural bottled mineral water 500ml.",
    "price": 15,
    "badge": "natural"
  },
  {
    "id": "beverage_water_large",
    "category": "ice_cream",
    "nameAr": "مياه معدنية كبيرة",
    "nameEn": "Large Mineral Water",
    "descAr": "زجاجة مياه معدنية طبيعية نقية 1.5 لتر",
    "descEn": "Pure natural bottled mineral water 1.5L.",
    "price": 20,
    "badge": "natural"
  },
  {
    "id": "beverage_schweppes_pineapple",
    "category": "ice_cream",
    "nameAr": "شويبس أناناس",
    "nameEn": "Schweppes Pineapple Can",
    "descAr": "كانز شويبس أناناس فوار مثلج",
    "descEn": "Schweppes sparkling pineapple beverage can.",
    "price": 25,
    "badge": "popular"
  },
  {
    "id": "beverage_sting",
    "category": "ice_cream",
    "nameAr": "ستينج مشروب طاقة",
    "nameEn": "Sting Energy Drink",
    "descAr": "مشروب طاقة منعش مثلج",
    "descEn": "Sting energy drink can.",
    "price": 25,
    "badge": "popular"
  },
  {
    "id": "beverage_schweppes_pomegranate",
    "category": "ice_cream",
    "nameAr": "شويبس رمان",
    "nameEn": "Schweppes Pomegranate Can",
    "descAr": "كانز شويبس رمان فوار مثلج",
    "descEn": "Schweppes sparkling pomegranate beverage can.",
    "price": 25,
    "badge": "popular"
  },
  {
    "id": "beverage_mirinda_orange",
    "category": "ice_cream",
    "nameAr": "ميرندا برتقال",
    "nameEn": "Mirinda Orange Can",
    "descAr": "كانز ميرندا برتقال مثلج",
    "descEn": "Mirinda orange sparkling soda can.",
    "price": 25,
    "badge": "popular"
  },
  {
    "id": "beverage_mirinda_apple",
    "category": "ice_cream",
    "nameAr": "ميرندا تفاح",
    "nameEn": "Mirinda Apple Can",
    "descAr": "كانز ميرندا تفاح أخضر مثلج",
    "descEn": "Mirinda green apple sparkling soda can.",
    "price": 25,
    "badge": "popular"
  },
  {
    "id": "side_tahina",
    "category": "sides",
    "nameAr": "سلطة طحينة سمسم بلدي",
    "nameEn": "Pure Sesame Tahina Salad",
    "descAr": "طحينة بيضاء بلدي متبلة بالخل والليمون والكمون والشطة وزيت الزيتون",
    "descEn": "Creamy white sesame tahina with lemon, garlic, cumin & olive oil.",
    "price": 20,
    "badge": "popular"
  },
  {
    "id": "side_green_salad",
    "category": "sides",
    "nameAr": "سلطة خضراء بلدي",
    "nameEn": "Fresh Egyptian Green Salad",
    "descAr": "طماطم، خيار، جرجير، بقدونس، بصل، وليمون بتتبيلة شرقية",
    "descEn": "Crisp tomatoes, cucumbers, arugula, parsley, onion and lemon herb dressing.",
    "price": 15,
    "badge": "natural"
  },
  {
    "id": "side_pickled_eggplant",
    "category": "sides",
    "nameAr": "باذنجان مخلل بالدقة",
    "nameEn": "Egyptian Pickled Eggplant",
    "descAr": "باذنجان مخلل محشو بدقة الثوم والفلفل الأحمر والكمون والخل والليمون",
    "descEn": "Tender baby eggplant stuffed with fiery garlic, red pepper & vinegar daqqa.",
    "price": 15,
    "badge": "popular"
  },
  {
    "id": "side_pickled_cucumbers",
    "category": "sides",
    "nameAr": "خيار مخلل مقرمش",
    "nameEn": "Crisp Pickled Cucumbers",
    "descAr": "خيار بلدي مخلل ومتبل بالثوم والنعناع الجاف",
    "descEn": "Crunchy homemade pickled cucumbers with garlic and dry mint.",
    "price": 15,
    "badge": "popular"
  },
  {
    "id": "side_baba_ghanoush",
    "category": "sides",
    "nameAr": "بابا غنوج مدخن",
    "nameEn": "Smoky Baba Ghanoush",
    "descAr": "باذنجان رومي مشوي على الفحم ومهروس مع الطحينة والثوم وزيت الزيتون",
    "descEn": "Charcoal-roasted eggplant dip blended with tahina, garlic & olive oil.",
    "price": 20,
    "badge": "popular"
  },
  {
    "id": "side_pickled_lemon",
    "category": "sides",
    "nameAr": "ليمون مخلل معصفر",
    "nameEn": "Pickled Preserved Lemon",
    "descAr": "ليمون بلدي مخلل بالعصفر وحبة البركة على الطريقة المصرية الأصيلة",
    "descEn": "Egyptian preserved lemons stuffed with saffron safflower & black nigella seeds.",
    "price": 15,
    "badge": "popular"
  },
  {
    "id": "side_cooked_vegetables",
    "category": "sides",
    "nameAr": "علبة خضار مشكل مطبوخ",
    "nameEn": "Cooked Seasonal Vegetables Cup",
    "descAr": "خضار مشكل سوتيه في صلصة الطماطم الغنية بالبهارات",
    "descEn": "Slow cooked seasonal vegetables in rich herb tomato sauce.",
    "price": 35,
    "badge": "popular"
  },
  {
    "id": "side_molokhia",
    "category": "sides",
    "nameAr": "علبة ملوخية خضراء مصرية",
    "nameEn": "Egyptian Green Molokhia Cup",
    "descAr": "ملوخية خضراء طازجة بطشة الثوم والكزبرة والسمنة البلدي",
    "descEn": "Traditional Egyptian green jute soup with sizzling garlic & coriander ta'sha.",
    "price": 30,
    "badge": "special"
  },
  {
    "id": "side_orzo_soup",
    "category": "sides",
    "nameAr": "علبة شوربة لسان عصفور",
    "nameEn": "Orzo Soup (Lesan Asfour)",
    "descAr": "شوربة مرقة لحم بلدي ساخنة مع مكرونة لسان العصفور الذهبية",
    "descEn": "Golden orzo pasta in rich piping hot savory meat broth.",
    "price": 15,
    "badge": "popular"
  },
  {
    "id": "side_vermicelli_rice",
    "category": "sides",
    "nameAr": "علبة أرز بالشعرية",
    "nameEn": "Vermicelli Rice Cup",
    "descAr": "أرز مصري مفلفل بالشعرية المحمرة والسمنة البلدي",
    "descEn": "Fluffy Egyptian rice tossed with toasted golden vermicelli noodles.",
    "price": 15,
    "badge": "popular"
  },
  {
    "id": "side_basmati_rice",
    "category": "sides",
    "nameAr": "علبة أرز بسمتي فاخر",
    "nameEn": "Deluxe Basmati Rice Cup",
    "descAr": "أرز بسمتي هندي حبة طويلة مبهر بالزعفران والخلطة",
    "descEn": "Long grain aromatic Indian basmati rice spiced with saffron & herbs.",
    "price": 25,
    "badge": "popular"
  },
  {
    "id": "side_pasta_red_sauce",
    "category": "sides",
    "nameAr": "علبة مكرونة بالصلصة",
    "nameEn": "Pasta with Red Sauce Side",
    "descAr": "مكرونة بصلصة الطماطم المتبلة الساخنة",
    "descEn": "Side portion of pasta in seasoned tomato marinara.",
    "price": 50,
    "badge": "popular"
  },
  {
    "id": "side_sheikh_rice",
    "category": "sides",
    "nameAr": "علبة أرز الشيخ الخاص",
    "nameEn": "Sheikh Special Rice Cup",
    "descAr": "أرز مبهر بالبهارات الخاصة والمكسرات والزبيب على طريقة الشيخ",
    "descEn": "Fragrant spiced specialty rice topped with toasted nuts and raisins.",
    "price": 30,
    "badge": "special"
  },
  {
    "id": "sauce_cheddar",
    "category": "sides",
    "nameAr": "صوص شيدر غني وساخن",
    "nameEn": "Warm Cheddar Cheese Dip",
    "descAr": "صوص جبنة شيدر كريمية ذائبة",
    "descEn": "Warm melted golden cheddar cheese sauce.",
    "price": 25,
    "badge": "popular"
  },
  {
    "id": "sauce_original",
    "category": "sides",
    "nameAr": "صوص أوريجنال علوان",
    "nameEn": "Elwan Original Sauce",
    "descAr": "صوص علوان السري للبرجر والساندوتشات",
    "descEn": "Elwan's secret house sauce blend.",
    "price": 20,
    "badge": "popular"
  },
  {
    "id": "sauce_bbq",
    "category": "sides",
    "nameAr": "صوص باربيكيو مدخن",
    "nameEn": "Smoky BBQ Sauce",
    "descAr": "صوص شواء مدخن وحلو",
    "descEn": "Rich sweet smoky barbecue sauce.",
    "price": 25,
    "badge": "popular"
  },
  {
    "id": "sauce_ranch",
    "category": "sides",
    "nameAr": "صوص رانش كريمي",
    "nameEn": "Creamy Ranch Dressing",
    "descAr": "صوص رانش بالأعشاب واللبن الرائب",
    "descEn": "Herb buttermilk ranch dressing.",
    "price": 25,
    "badge": "popular"
  },
  {
    "id": "sauce_burger_mix",
    "category": "sides",
    "nameAr": "صوص ميكس برجر",
    "nameEn": "Burger Mix Specialty Sauce",
    "descAr": "صوص برجر متبل ومبتكر",
    "descEn": "Savory spiced burger sauce.",
    "price": 35,
    "badge": "special"
  },
  {
    "id": "sauce_cocktail_spicy",
    "category": "sides",
    "nameAr": "صوص كوكتيل حار",
    "nameEn": "Spicy Cocktail Sauce",
    "descAr": "صوص كوكتيل مع فلفل حار وهالبينو",
    "descEn": "Fiery spicy cocktail sauce.",
    "price": 20,
    "badge": "spicy"
  },
  {
    "id": "sauce_toum",
    "category": "sides",
    "nameAr": "صوص تومية سورية أصلية",
    "nameEn": "Authentic Syrian Toum (Garlic Dip)",
    "descAr": "تومية بيضاء كريمية بنكهة الثوم الطبيعي والليمون",
    "descEn": "Fluffy authentic garlic whip with lemon and oil.",
    "price": 25,
    "badge": "popular"
  },
  {
    "id": "sauce_mayo",
    "category": "sides",
    "nameAr": "صوص مايونيز",
    "nameEn": "Classic Mayonnaise",
    "descAr": "مايونيز كريمي ناعم",
    "descEn": "Creamy mayonnaise dip.",
    "price": 20,
    "badge": "popular"
  },
  {
    "id": "sauce_ketchup",
    "category": "sides",
    "nameAr": "صوص كاتشب",
    "nameEn": "Tomato Ketchup",
    "descAr": "كاتشب طماطم فاخر",
    "descEn": "Classic tomato ketchup dip.",
    "price": 15,
    "badge": "popular"
  },
  {
    "id": "side_french_fries_packet",
    "category": "sides",
    "nameAr": "باكيت بطاطس بوم فريت مقرمشة",
    "nameEn": "Crispy French Fries Packet",
    "descAr": "بطاطس فارم فريتس مقلية ذهبية مقرمشة بالبهارات",
    "descEn": "Crispy golden salted french fries.",
    "price": 30,
    "badge": "popular"
  },
  {
    "id": "extra_stuffed_crust",
    "category": "sides",
    "nameAr": "إضافة حشو أطراف البيتزا (جبنة)",
    "nameEn": "Extra Pizza Stuffed Crust",
    "descAr": "حشو أطراف أي بيتزا بالجبنة الموتزاريلا الذائبة",
    "descEn": "Upgrade any pizza with melted cheese stuffed crust.",
    "price": 40,
    "badge": "special"
  },
  {
    "id": "extra_strips_piece",
    "category": "sides",
    "nameAr": "إضافة قطعة استربس مقرمش",
    "nameEn": "Extra Crispy Strips Piece",
    "descAr": "قطعة استربس إضافية لأي ساندوتش أو وجبة",
    "descEn": "Extra crispy chicken tender strip piece.",
    "price": 25,
    "badge": "popular"
  },
  {
    "id": "extra_sausage",
    "category": "sides",
    "nameAr": "إضافة سجق شرقي",
    "nameEn": "Extra Oriental Sausage",
    "descAr": "كمية إضافية من السجق الشرقي لأي طبق",
    "descEn": "Extra portion of spiced oriental sausage.",
    "price": 20,
    "badge": "popular"
  },
  {
    "id": "extra_shawarma",
    "category": "sides",
    "nameAr": "إضافة شاورما فراخ",
    "nameEn": "Extra Chicken Shawarma",
    "descAr": "كمية إضافية من شاورما الفراخ المتبلة",
    "descEn": "Extra portion of marinated chicken shawarma.",
    "price": 30,
    "badge": "popular"
  },
  {
    "id": "extra_crispy_cone",
    "category": "sides",
    "nameAr": "إضافة كونو كريسبي",
    "nameEn": "Extra Crispy Cone",
    "descAr": "كونو كريسبي مقرمش ولذيذ",
    "descEn": "Crunchy crispy cone addition.",
    "price": 25,
    "badge": "popular"
  }
];

// ==========================================================================
// INITIALIZATION & EVENT LISTENERS
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Check URL params for table number (e.g. ?table=5)
  const urlParams = new URLSearchParams(window.location.search);
  const tableParam = urlParams.get("table");
  if (tableParam) {
    tableNumberParam = tableParam;
    const tableInput = document.getElementById("orderCustomerAddressOrTable");
    if (tableInput) {
      tableInput.value = (currentLanguage === "ar" ? "طاولة رقم " : "Table ") + tableParam;
    }
    const dineInRadio = document.querySelector('input[name="orderType"][value="dine_in"]');
    if (dineInRadio) {
      dineInRadio.checked = true;
      updateOrderTypeUI("dine_in");
    }
  }

  // Initialize Language
  applyLanguage(currentLanguage);

  // Initialize Menu & Category Tabs
  renderCategoryTabs();
  renderMenuItems();

  // Initialize Branches
  initBranches();

  // Initialize Cart
  updateCartBadge();
  renderCartDrawer();
  updateFloatingCart();

  // Setup Modals
  setupModalHandlers();

  // Setup Flyer Lightbox
  initFlyerGallery();

  // Setup Search Input
  const searchInput = document.getElementById("menuSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderMenuItems();
    });
  }

  // Setup Lang Toggle Button
  const langBtn = document.getElementById("langToggleBtn");
  if (langBtn) {
    langBtn.addEventListener("click", toggleLanguage);
  }

  // Table QR Select Handler
  const qrTableSelect = document.getElementById("qrTableSelect");
  if (qrTableSelect) {
    qrTableSelect.addEventListener("change", (e) => {
      generateTableQRCode(e.target.value);
    });
  }
});

// ==========================================================================
// MULTILINGUAL & I18N SYSTEM
// ==========================================================================
function toggleLanguage() {
  currentLanguage = currentLanguage === "ar" ? "en" : "ar";
  localStorage.setItem("elwan_lang", currentLanguage);
  applyLanguage(currentLanguage);
  renderCategoryTabs();
  renderMenuItems();
  renderBranchesSection();
  renderBranchRadioList();
  renderCartDrawer();
  updateFloatingCart();
  if (qrCodeInstance) {
    const qrTableSelect = document.getElementById("qrTableSelect");
    generateTableQRCode(qrTableSelect ? qrTableSelect.value : "");
  }
}

function applyLanguage(lang) {
  const isAr = lang === "ar";
  document.documentElement.lang = lang;
  document.documentElement.dir = isAr ? "rtl" : "ltr";

  // Update language button label
  const langText = document.getElementById("langBtnText");
  if (langText) {
    langText.textContent = isAr ? "English" : "العربية";
  }

  // Update elements with data-i18n
  const dict = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // Update elements with data-i18n-html
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });
}

// ==========================================================================
// CATEGORY TABS & FILTERING
// ==========================================================================
const CATEGORIES_CONFIG = [
  { key: "all", i18nKey: "tabAll", icon: "✨" },
  { key: "grills", i18nKey: "tabGrills", icon: "🔥" },
  { key: "tagines", i18nKey: "tabTagines", icon: "🍲" },
  { key: "mahashi", i18nKey: "tabMahashi", icon: "🫑" },
  { key: "sandwiches", i18nKey: "tabSandwiches", icon: "🍔" },
  { key: "saj", i18nKey: "tabSaj", icon: "🌯" },
  { key: "meals", i18nKey: "tabMeals", icon: "🍗" },
  { key: "pizza", i18nKey: "tabPizza", icon: "🍕" },
  { key: "crepes", i18nKey: "tabCrepes", icon: "🥞" },
  { key: "pasta", i18nKey: "tabPasta", icon: "🍝" },
  { key: "desserts", i18nKey: "tabDesserts", icon: "🧇" },
  { key: "coffee", i18nKey: "tabCoffee", icon: "☕" },
  { key: "hot_drinks", i18nKey: "tabHotDrinks", icon: "🫖" },
  { key: "juices", i18nKey: "tabJuices", icon: "🍹" },
  { key: "smoothies", i18nKey: "tabSmoothies", icon: "🥤" },
  { key: "ice_cream", i18nKey: "tabIceCream", icon: "🍨" },
  { key: "sides", i18nKey: "tabSides", icon: "🥗" }
];

function renderCategoryTabs() {
  const container = document.getElementById("categoryTabsList");
  if (!container) return;

  const dict = I18N[currentLanguage];

  container.innerHTML = CATEGORIES_CONFIG.map((cat) => {
    const isActive = cat.key === currentCategory;
    const label = dict[cat.i18nKey] || cat.key;
    return `
      <button 
        class="category-tab-btn ${isActive ? "active" : ""}" 
        data-category="${cat.key}"
        onclick="selectCategory('${cat.key}')"
      >
        <span class="tab-icon">${cat.icon}</span>
        <span class="tab-label">${label}</span>
      </button>
    `;
  }).join("");
}

function selectCategory(catKey) {
  currentCategory = catKey;
  renderCategoryTabs();
  renderMenuItems();

  const activeBtn = document.querySelector(`.category-tab-btn[data-category="${catKey}"]`);
  if (activeBtn) {
    activeBtn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }
}

// ==========================================================================
// MENU ITEMS RENDERING & OPTION SWITCHER
// ==========================================================================
function renderMenuItems() {
  const grid = document.getElementById("menuGrid");
  if (!grid) return;

  const isAr = currentLanguage === "ar";
  const dict = I18N[currentLanguage];

  // Filter items
  let filtered = MENU_ITEMS.filter((item) => {
    const matchesCat = currentCategory === "all" || item.category === currentCategory;
    if (!matchesCat) return false;

    if (!searchQuery) return true;

    const name = (isAr ? item.nameAr : item.nameEn).toLowerCase();
    const desc = (isAr ? item.descAr : item.descEn).toLowerCase();
    const otherName = (isAr ? item.nameEn : item.nameAr).toLowerCase();
    return name.includes(searchQuery) || desc.includes(searchQuery) || otherName.includes(searchQuery);
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3>${isAr ? "لا توجد أصناف مطابقة" : "No matching items found"}</h3>
        <p>${isAr ? "جرّب البحث بكلمة أخرى أو اختر قسماً آخر من القائمة" : "Try searching with different keywords or select another category"}</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map((item) => {
    const name = isAr ? item.nameAr : item.nameEn;
    const desc = isAr ? item.descAr : item.descEn;

    const hasOptions = Array.isArray(item.options) && item.options.length > 0;
    const selectedOptIdx = item.selectedOption || 0;
    const currentPrice = hasOptions ? item.options[selectedOptIdx].price : item.price;

    let badgeHtml = "";
    if (item.badge === "popular") {
      badgeHtml = `<span class="item-badge gold">${dict.tagPopular}</span>`;
    } else if (item.badge === "special") {
      badgeHtml = `<span class="item-badge purple">${dict.tagSpecial}</span>`;
    } else if (item.badge === "charcoal") {
      badgeHtml = `<span class="item-badge orange">${dict.tagCharcoal}</span>`;
    } else if (item.badge === "spicy") {
      badgeHtml = `<span class="item-badge red">${dict.tagSpicy}</span>`;
    } else if (item.badge === "new") {
      badgeHtml = `<span class="item-badge green">${dict.tagNew}</span>`;
    } else if (item.badge === "natural") {
      badgeHtml = `<span class="item-badge teal">${dict.tagNatural}</span>`;
    }

    let optionsHtml = "";
    if (hasOptions) {
      optionsHtml = `
        <div class="item-options-row" role="group" aria-label="Sizes">
          ${item.options.map((opt, idx) => {
            const isOptActive = idx === selectedOptIdx;
            const optLabel = isAr ? opt.labelAr : opt.labelEn;
            return `
              <button 
                type="button" 
                class="option-pill ${isOptActive ? "active" : ""}" 
                onclick="changeItemOption('${item.id}', ${idx})"
                title="${optLabel} - ${opt.price} ${dict.egp}"
              >
                ${optLabel}
              </button>
            `;
          }).join("")}
        </div>
      `;
    }

    return `
      <article class="food-card" id="card-${item.id}">
        <div class="food-card-header">
          <div class="food-card-title-wrap">
            <h3 class="food-card-title">${name}</h3>
            ${badgeHtml}
          </div>
          <p class="food-card-desc">${desc}</p>
        </div>

        ${optionsHtml}

        <div class="food-card-footer">
          <div class="price-display">
            <span class="price-amount" id="price-${item.id}">${currentPrice}</span>
            <span class="price-currency">${dict.egp}</span>
          </div>

          <button 
            type="button" 
            class="add-to-cart-btn" 
            onclick="addItemToCart('${item.id}')"
            aria-label="${dict.addToOrder}: ${name}"
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span>${dict.addToOrder}</span>
          </button>
        </div>
      </article>
    `;
  }).join("");
}

function changeItemOption(itemId, optionIndex) {
  const item = MENU_ITEMS.find((it) => it.id === itemId);
  if (!item || !item.options || !item.options[optionIndex]) return;

  item.selectedOption = optionIndex;
  const newPrice = item.options[optionIndex].price;

  const priceEl = document.getElementById(`price-${itemId}`);
  if (priceEl) {
    priceEl.textContent = newPrice;
  }

  const card = document.getElementById(`card-${itemId}`);
  if (card) {
    const pills = card.querySelectorAll(".option-pill");
    pills.forEach((p, idx) => {
      p.classList.toggle("active", idx === optionIndex);
    });
  }
}

// ==========================================================================
// CART & ORDER MANAGEMENT
// ==========================================================================
function addItemToCart(itemId) {
  const item = MENU_ITEMS.find((it) => it.id === itemId);
  if (!item) return;

  const isAr = currentLanguage === "ar";
  const hasOptions = Array.isArray(item.options) && item.options.length > 0;
  const selectedOpt = hasOptions ? item.options[item.selectedOption || 0] : null;

  const cartItemId = hasOptions ? `${item.id}_${selectedOpt.key}` : item.id;
  const itemPrice = hasOptions ? selectedOpt.price : item.price;
  const sizeLabelAr = selectedOpt ? selectedOpt.labelAr : "";
  const sizeLabelEn = selectedOpt ? selectedOpt.labelEn : "";

  const existing = cartItems.find((ci) => ci.cartItemId === cartItemId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cartItems.push({
      cartItemId: cartItemId,
      id: item.id,
      nameAr: item.nameAr,
      nameEn: item.nameEn,
      price: itemPrice,
      sizeAr: sizeLabelAr,
      sizeEn: sizeLabelEn,
      quantity: 1
    });
  }

  saveCart();
  updateCartBadge();
  renderCartDrawer();
  updateFloatingCart();

  const card = document.getElementById(`card-${itemId}`);
  if (card) {
    const btn = card.querySelector(".add-to-cart-btn");
    if (btn) {
      btn.classList.add("added-feedback");
      setTimeout(() => btn.classList.remove("added-feedback"), 400);
    }
  }
}

function updateCartItemQty(cartItemId, delta) {
  const index = cartItems.findIndex((ci) => ci.cartItemId === cartItemId);
  if (index === -1) return;

  cartItems[index].quantity += delta;
  if (cartItems[index].quantity <= 0) {
    cartItems.splice(index, 1);
  }

  saveCart();
  updateCartBadge();
  renderCartDrawer();
  updateFloatingCart();
}

function clearCart() {
  cartItems = [];
  saveCart();
  updateCartBadge();
  renderCartDrawer();
  updateFloatingCart();
}

function saveCart() {
  localStorage.setItem("elwan_cart", JSON.stringify(cartItems));
}

function getCartTotals() {
  let count = 0;
  let total = 0;
  cartItems.forEach((it) => {
    count += it.quantity;
    total += it.price * it.quantity;
  });
  return { count, total };
}

function updateCartBadge() {
  const { count } = getCartTotals();
  const badges = document.querySelectorAll(".cart-count-badge");
  badges.forEach((b) => {
    b.textContent = count;
    b.style.display = count > 0 ? "inline-flex" : "none";
  });
}

function updateFloatingCart() {
  const bar = document.getElementById("floatingCartBar");
  if (!bar) return;

  const { count, total } = getCartTotals();
  const dict = I18N[currentLanguage];

  if (count > 0) {
    bar.classList.add("visible");
    const countEl = document.getElementById("floatCartCount");
    const totalEl = document.getElementById("floatCartTotal");
    if (countEl) countEl.textContent = `${count} ${dict.itemsCountSuffix}`;
    if (totalEl) totalEl.textContent = `${total} ${dict.egp}`;
  } else {
    bar.classList.remove("visible");
  }
}

function renderCartDrawer() {
  const container = document.getElementById("cartItemsList");
  const totalAmountEl = document.getElementById("cartTotalAmount");
  if (!container) return;

  const isAr = currentLanguage === "ar";
  const dict = I18N[currentLanguage];
  const { count, total } = getCartTotals();

  if (totalAmountEl) {
    totalAmountEl.textContent = `${total} ${dict.egp}`;
  }

  if (cartItems.length === 0) {
    container.innerHTML = `
      <div class="empty-cart-box">
        <div class="empty-cart-icon">🛒</div>
        <h4>${dict.emptyCartTitle}</h4>
        <p>${dict.emptyCartDesc}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = cartItems.map((ci) => {
    const name = isAr ? ci.nameAr : ci.nameEn;
    const size = isAr ? ci.sizeAr : ci.sizeEn;
    const sizeHtml = size ? `<span class="cart-item-size">(${size})</span>` : "";

    return `
      <div class="cart-item-row">
        <div class="cart-item-info">
          <div class="cart-item-name">
            <strong>${name}</strong>
            ${sizeHtml}
          </div>
          <div class="cart-item-unit-price">${ci.price} ${dict.egp}</div>
        </div>

        <div class="cart-item-controls">
          <button type="button" class="qty-btn" onclick="updateCartItemQty('${ci.cartItemId}', -1)" aria-label="Decrease">&minus;</button>
          <span class="qty-number">${ci.quantity}</span>
          <button type="button" class="qty-btn" onclick="updateCartItemQty('${ci.cartItemId}', 1)" aria-label="Increase">&plus;</button>
          <button type="button" class="cart-item-del-btn" onclick="updateCartItemQty('${ci.cartItemId}', -999)" title="Remove">&times;</button>
        </div>
      </div>
    `;
  }).join("");
}

function updateOrderTypeUI(type) {
  const addressGroup = document.getElementById("addressOrTableGroup");
  const addressLabel = document.getElementById("addressOrTableLabel");
  const addressInput = document.getElementById("orderCustomerAddressOrTable");
  const dict = I18N[currentLanguage];

  if (!addressGroup || !addressLabel || !addressInput) return;

  if (type === "dine_in") {
    addressLabel.textContent = currentLanguage === "ar" ? "رقم الطاولة في الصالة:" : "Table Number (Dine-in):";
    addressInput.placeholder = dict.placeholderTable;
  } else if (type === "pickup") {
    addressLabel.textContent = currentLanguage === "ar" ? "ملاحظة الاستلام من المطعم:" : "Pickup Note:";
    addressInput.placeholder = currentLanguage === "ar" ? "جاهز للاستلام خلال 15-20 دقيقة" : "Ready for pickup in 15-20 mins";
  } else {
    addressLabel.textContent = currentLanguage === "ar" ? "عنوان التوصيل بالتفصيل:" : "Detailed Delivery Address:";
    addressInput.placeholder = dict.placeholderAddress;
  }
}

// ==========================================================================
// WHATSAPP ORDER DISPATCH
// ==========================================================================
function sendOrderWhatsApp() {
  const isAr = currentLanguage === "ar";
  const dict = I18N[currentLanguage];

  if (cartItems.length === 0) {
    alert(isAr ? "سلة طلبك فارغة! تصفح المنيو وأضف بعض الأطباق أولاً." : "Your cart is empty! Please add some delicious items first.");
    return;
  }

  const nameInput = document.getElementById("orderCustomerName");
  const phoneInput = document.getElementById("orderCustomerPhone");
  const addressInput = document.getElementById("orderCustomerAddressOrTable");
  const notesInput = document.getElementById("orderCustomerNotes");
  const orderTypeChecked = document.querySelector('input[name="orderType"]:checked');

  const customerName = nameInput ? nameInput.value.trim() : "";
  const customerPhone = phoneInput ? phoneInput.value.trim() : "";
  const customerAddress = addressInput ? addressInput.value.trim() : "";
  const customerNotes = notesInput ? notesInput.value.trim() : "";
  const orderType = orderTypeChecked ? orderTypeChecked.value : "delivery";

  if (!customerName) {
    alert(isAr ? "يرجى إدخال اسمك الكريم لتأكيد الطلب" : "Please enter your full name to proceed");
    if (nameInput) nameInput.focus();
    return;
  }

  if (!customerPhone) {
    alert(isAr ? "يرجى إدخال رقم الموبايل للتواصل" : "Please enter your phone number to proceed");
    if (phoneInput) phoneInput.focus();
    return;
  }

  const orderTypeLabels = {
    delivery: isAr ? "توصيل للمنزل / دليفري 🛵" : "Home Delivery 🛵",
    pickup: isAr ? "استلام من المطعم (تيك أواي) 🛍️" : "Store Pickup 🛍️",
    dine_in: isAr ? "تناول داخل الصالة (طاولة) 🍽️" : "Dine-in Table Service 🍽️"
  };

  const branchName = isAr ? selectedBranch.nameAr : selectedBranch.nameEn;
  const { total } = getCartTotals();
  const timestamp = new Date().toLocaleString(isAr ? "ar-EG" : "en-US", {
    dateStyle: "medium",
    timeStyle: "short"
  });

  let message = "";
  if (isAr) {
    message += "👑 *طلب جديد - مطعم وكافيه علوان* 👑\n";
    message += "*للمذاق عنوان | البلينا وسوهاج*\n";
    message += "━━━━━━━━━━━━━━━━━━\n";
    message += "📍 *الفرع:* " + branchName + "\n";
    message += "🛵 *نوع الطلب:* " + (orderTypeLabels[orderType] || orderType) + "\n";
    message += "👤 *اسم العميل:* " + customerName + "\n";
    message += "📱 *رقم الهاتف:* " + customerPhone + "\n";
    if (customerAddress) {
      message += "🏠 *العنوان / الطاولة:* " + customerAddress + "\n";
    }
    message += "━━━━━━━━━━━━━━━━━━\n";
    message += "📋 *تفاصيل الطلب:*\n";

    cartItems.forEach((item, idx) => {
      const sizeStr = item.sizeAr ? (" (" + item.sizeAr + ")") : "";
      const itemSubtotal = item.price * item.quantity;
      message += (idx + 1) + ". " + item.nameAr + sizeStr + " × " + item.quantity + " = " + itemSubtotal + " ج.م\n";
    });

    message += "━━━━━━━━━━━━━━━━━━\n";
    message += "💰 *الإجمالي الكلي:* *" + total + " جنيه مصري*\n";
    if (customerNotes) {
      message += "📝 *ملاحظات العميل:* " + customerNotes + "\n";
    }
    message += "⏱️ *توقيت الطلب:* " + timestamp + "\n";
    message += "━━━━━━━━━━━━━━━━━━\n";
    message += "✨ *شكراً لاختياركم علوان - للمذاق عنوان!* ✨";
  } else {
    message += "👑 *NEW ORDER - ELWAN RESTAURANT & CAFE* 👑\n";
    message += "*For Taste, An Address | El Balyana & Sohag*\n";
    message += "━━━━━━━━━━━━━━━━━━\n";
    message += "📍 *Branch:* " + branchName + "\n";
    message += "🛵 *Order Type:* " + (orderTypeLabels[orderType] || orderType) + "\n";
    message += "👤 *Customer Name:* " + customerName + "\n";
    message += "📱 *Phone Number:* " + customerPhone + "\n";
    if (customerAddress) {
      message += "🏠 *Address / Table:* " + customerAddress + "\n";
    }
    message += "━━━━━━━━━━━━━━━━━━\n";
    message += "📋 *Itemized Order:*\n";

    cartItems.forEach((item, idx) => {
      const sizeStr = item.sizeEn ? (" (" + item.sizeEn + ")") : "";
      const itemSubtotal = item.price * item.quantity;
      message += (idx + 1) + ". " + item.nameEn + sizeStr + " × " + item.quantity + " = " + itemSubtotal + " EGP\n";
    });

    message += "━━━━━━━━━━━━━━━━━━\n";
    message += "💰 *Total Amount:* *" + total + " EGP*\n";
    if (customerNotes) {
      message += "📝 *Special Notes:* " + customerNotes + "\n";
    }
    message += "⏱️ *Order Time:* " + timestamp + "\n";
    message += "━━━━━━━━━━━━━━━━━━\n";
    message += "✨ *Thank you for choosing Elwan Restaurant!* ✨";
  }

  const targetNumber = selectedBranch.whatsapp || PRIMARY_WHATSAPP;
  const cleanNumber = targetNumber.replace(/\D/g, "");
  const finalNumber = cleanNumber.startsWith("20") ? cleanNumber : ("20" + (cleanNumber.startsWith("0") ? cleanNumber.slice(1) : cleanNumber));

  const waUrl = "https://wa.me/" + finalNumber + "?text=" + encodeURIComponent(message);
  window.open(waUrl, "_blank");
}

// ==========================================================================
// BRANCHES & PICKER SYSTEM (BOTTOM SHEET)
// ==========================================================================
function initBranches() {
  renderBranchesSection();
  renderBranchRadioList();
}

function renderBranchesSection() {
  const container = document.getElementById("branchesContainer");
  if (!container) return;

  const isAr = currentLanguage === "ar";
  const dict = I18N[currentLanguage];

  container.innerHTML = BRANCHES_DATA.map((branch) => {
    const name = isAr ? branch.nameAr : branch.nameEn;
    const address = isAr ? branch.addressAr : branch.addressEn;
    const mainBadge = branch.isMain ? ("<span class=\"branch-badge-main\">" + dict.featuredBranchBadge + "</span>") : "";

    return `
      <div class="branch-card ${branch.isMain ? "featured" : ""}">
        <div class="branch-card-header">
          ${mainBadge}
          <h3 class="branch-card-name">${name}</h3>
          <p class="branch-card-address">${address}</p>
        </div>

        <div class="branch-card-contacts">
          <div class="branch-contact-item">
            <span class="icon">📞</span>
            <a href="tel:${branch.phone}">${branch.phone}</a>
          </div>
          <div class="branch-contact-item">
            <span class="icon">💬</span>
            <a href="https://wa.me/20${branch.whatsapp.slice(1)}" target="_blank" rel="noopener">واتساب: ${branch.whatsapp}</a>
          </div>
          <div class="branch-contact-item">
            <span class="icon">🔥</span>
            <a href="tel:${branch.hotline}">الخط الساخن: ${branch.hotline}</a>
          </div>
        </div>

        <div class="branch-card-actions">
          <button class="branch-select-btn" onclick="selectBranch('${branch.id}')">
            ${isAr ? "اختيار هذا الفرع للطلب 🚀" : "Order from this branch 🚀"}
          </button>
          <a href="${branch.mapsUrl}" target="_blank" rel="noopener" class="branch-map-btn">
            ${dict.btnOpenMap}
          </a>
        </div>
      </div>
    `;
  }).join("");
}

function renderBranchRadioList(filter = "") {
  const list = document.getElementById("branchRadioList");
  if (!list) return;

  const isAr = currentLanguage === "ar";
  const dict = I18N[currentLanguage];
  const query = filter.trim().toLowerCase();

  const filtered = BRANCHES_DATA.filter((b) => {
    if (!query) return true;
    const name = (isAr ? b.nameAr : b.nameEn).toLowerCase();
    const addr = (isAr ? b.addressAr : b.addressEn).toLowerCase();
    return name.includes(query) || addr.includes(query);
  });

  if (filtered.length === 0) {
    list.innerHTML = "<div class=\"no-branches-msg\">" + dict.noBranchesFound + "</div>";
    return;
  }

  list.innerHTML = filtered.map((branch) => {
    const isSelected = selectedBranch && selectedBranch.id === branch.id;
    const name = isAr ? branch.nameAr : branch.nameEn;
    const address = isAr ? branch.addressAr : branch.addressEn;

    return `
      <label class="branch-radio-item ${isSelected ? "selected" : ""}" onclick="selectBranch('${branch.id}')">
        <input 
          type="radio" 
          name="activeBranchRadio" 
          value="${branch.id}" 
          ${isSelected ? "checked" : ""}
        >
        <div class="branch-radio-content">
          <div class="branch-radio-title">
            <strong>${name}</strong>
            ${branch.isMain ? ("<span class=\"mini-tag\">" + dict.featuredBranchBadge + "</span>") : ""}
          </div>
          <div class="branch-radio-addr">${address}</div>
          <div class="branch-radio-phone">📞 ${branch.phone} | 💬 ${branch.whatsapp}</div>
        </div>
      </label>
    `;
  }).join("");
}

function filterBranchPickerList(query) {
  renderBranchRadioList(query);
}

function selectBranch(branchId) {
  const branch = BRANCHES_DATA.find((b) => b.id === branchId);
  if (!branch) return;

  selectedBranch = branch;
  renderBranchRadioList();

  const branchDisplay = document.getElementById("selectedBranchCartDisplay");
  if (branchDisplay) {
    const isAr = currentLanguage === "ar";
    branchDisplay.textContent = isAr ? branch.nameAr : branch.nameEn;
  }

  closeModal("branchPickerModal");
}

// ==========================================================================
// DYNAMIC TABLE QR CODE GENERATOR
// ==========================================================================
function generateTableQRCode(tableNumber = "") {
  const container = document.getElementById("qrCanvas");
  const displayUrl = document.getElementById("qrUrlDisplay");
  if (!container) return;

  container.innerHTML = "";

  let finalUrl = GITHUB_PAGES_URL;
  if (tableNumber && tableNumber !== "none") {
    finalUrl += "?table=" + encodeURIComponent(tableNumber);
  }

  if (displayUrl) {
    displayUrl.textContent = finalUrl;
  }

  if (typeof QRCode !== "undefined") {
    qrCodeInstance = new QRCode(container, {
      text: finalUrl,
      width: 210,
      height: 210,
      colorDark: "#2b1810",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  } else {
    container.innerHTML = "<p style=\"color: red;\">QRCode library loading...</p>";
  }
}

function downloadQRImage() {
  const container = document.getElementById("qrCanvas");
  if (!container) return;

  const img = container.querySelector("img");
  const canvas = container.querySelector("canvas");

  let dataUrl = "";
  if (img && img.src) {
    dataUrl = img.src;
  } else if (canvas) {
    dataUrl = canvas.toDataURL("image/png");
  }

  if (!dataUrl) {
    alert("يرجى الانتظار لحين اكتمال توليد الرمز");
    return;
  }

  const link = document.createElement("a");
  link.download = "elwan-menu-qr.png";
  link.href = dataUrl;
  link.click();
}

function copyMenuLink() {
  const displayUrl = document.getElementById("qrUrlDisplay");
  const urlToCopy = displayUrl ? displayUrl.textContent.trim() : GITHUB_PAGES_URL;
  const isAr = currentLanguage === "ar";
  const dict = I18N[currentLanguage];

  if (navigator.clipboard) {
    navigator.clipboard.writeText(urlToCopy).then(() => {
      alert(dict.copiedAlert);
    });
  } else {
    prompt(isAr ? "انسخ الرابط التالي:" : "Copy the link:", urlToCopy);
  }
}

// ==========================================================================
// MENU FLYER LIGHTBOX SYSTEM (14 PAGES)
// ==========================================================================
function initFlyerGallery() {
  renderFlyerThumbnails();
  setFlyerPage(0);
}

function renderFlyerThumbnails(filterCat = "all") {
  const thumbsContainer = document.getElementById("flyerThumbsStrip");
  if (!thumbsContainer) return;

  const isAr = currentLanguage === "ar";

  const filtered = FLYER_PAGES.filter((p) => {
    return filterCat === "all" || p.cat === filterCat || p.cat === "info";
  });

  thumbsContainer.innerHTML = filtered.map((page) => {
    const title = isAr ? page.titleAr : page.titleEn;
    const isCur = page.id === FLYER_PAGES[currentFlyerIndex].id;
    const pageIndexInAll = FLYER_PAGES.findIndex((p) => p.id === page.id);

    return `
      <button 
        type="button" 
        class="flyer-thumb-btn ${isCur ? "active" : ""}" 
        onclick="setFlyerPage(${pageIndexInAll})"
        title="${title}"
      >
        <img src="${page.src}" alt="${title}" loading="lazy">
        <span class="thumb-page-num">${page.id}</span>
      </button>
    `;
  }).join("");
}

function filterFlyerTabs(catKey) {
  document.querySelectorAll(".flyer-tab-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-flyer-cat") === catKey);
  });
  renderFlyerThumbnails(catKey);
}

function setFlyerPage(index) {
  if (index < 0 || index >= FLYER_PAGES.length) return;
  currentFlyerIndex = index;

  const isAr = currentLanguage === "ar";
  const curPage = FLYER_PAGES[currentFlyerIndex];

  const mainImg = document.getElementById("flyerMainImg");
  const titleEl = document.getElementById("flyerPageTitle");
  const counterEl = document.getElementById("flyerPageCounter");

  if (mainImg) {
    mainImg.src = curPage.src;
    mainImg.alt = isAr ? curPage.titleAr : curPage.titleEn;
  }
  if (titleEl) {
    titleEl.textContent = isAr ? curPage.titleAr : curPage.titleEn;
  }
  if (counterEl) {
    counterEl.textContent = (currentFlyerIndex + 1) + " / " + FLYER_PAGES.length;
  }

  document.querySelectorAll(".flyer-thumb-btn").forEach((b, idx) => {
    b.classList.toggle("active", idx === currentFlyerIndex);
  });
}

function nextFlyerPage() {
  const nextIdx = (currentFlyerIndex + 1) % FLYER_PAGES.length;
  setFlyerPage(nextIdx);
}

function prevFlyerPage() {
  const prevIdx = (currentFlyerIndex - 1 + FLYER_PAGES.length) % FLYER_PAGES.length;
  setFlyerPage(prevIdx);
}

// ==========================================================================
// MODAL CONTROLS & EVENT BINDINGS
// ==========================================================================
function setupModalHandlers() {
  document.querySelectorAll("[data-open-modal]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-open-modal");
      openModal(modalId);
    });
  });

  document.querySelectorAll("[data-close-modal]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-close-modal");
      closeModal(modalId);
    });
  });

  document.querySelectorAll(".modal-overlay").forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal(modal.id);
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay.open").forEach((m) => {
        closeModal(m.id);
      });
    } else if (e.key === "ArrowRight") {
      const flyerModal = document.getElementById("flyerModal");
      if (flyerModal && flyerModal.classList.contains("open")) {
        currentLanguage === "ar" ? prevFlyerPage() : nextFlyerPage();
      }
    } else if (e.key === "ArrowLeft") {
      const flyerModal = document.getElementById("flyerModal");
      if (flyerModal && flyerModal.classList.contains("open")) {
        currentLanguage === "ar" ? nextFlyerPage() : prevFlyerPage();
      }
    }
  });

  document.querySelectorAll('input[name="orderType"]').forEach((radio) => {
    radio.addEventListener("change", (e) => {
      updateOrderTypeUI(e.target.value);
    });
  });
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";

  if (modalId === "qrModal") {
    const qrTableSelect = document.getElementById("qrTableSelect");
    generateTableQRCode(qrTableSelect ? qrTableSelect.value : "");
  } else if (modalId === "cartModal") {
    renderCartDrawer();
  } else if (modalId === "branchPickerModal") {
    renderBranchRadioList();
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  modal.classList.remove("open");
  if (!document.querySelector(".modal-overlay.open")) {
    document.body.style.overflow = "";
  }
}
