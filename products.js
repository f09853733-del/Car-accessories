const products = [
  {
    id: 1,
    name: { fa: "رینگ اسپرت خودرو", en: "Sport Car Rim" },
    category: { fa: "لوازم جانبی", en: "Accessories" },
    price: 8500000,
    rating: 4.9,
    tag: "پرفروش",
    image: "images/sport-rim.jpg",
description: {
  fa: "طراحی اسپرت و کیفیت ساخت بالا برای خودروی شما.",
  en: "Sporty design and high build quality for your vehicle."
},
  },
  {
    id: 2,
    name: { fa: "روغن موتور پریمیوم", en: "Premium Engine Oil" },
    category: { fa: "روغن و نگهداری", en: "Oil & Maintenance" },
    price: 1250000,
    rating: 4.8,
    tag: "محبوب",
    image: "images/premium-engine-oil.jpg",
 description: {
  fa: "محافظت بهتر از موتور و افزایش عملکرد خودرو.",
  en: "Better engine protection and improved vehicle performance."
},
  },
  {
    id: 3,
    name: { fa: "دوربین ثبت وقایع", en: "Dash Camera" },
    category: { fa: "تجهیزات الکترونیکی", en: "Electronic Equipment" },
    price: 3200000,
    rating: 4.7,
    tag: "ویژه",
    image: "images/dash-camera.jpg",
   description: {
  fa: "ثبت تصاویر مسیر با کیفیت بالا و جزئیات دقیق.",
  en: "Capture your journeys in high quality with sharp details."
},
  },
  {
    id: 4,
 name: { fa: "چراغ LED خودرو", en: "LED Car Lights" },
category: { fa: "روشنایی خودرو", en: "Car Lighting" },
    price: 980000,
    rating: 4.8,
    tag: "پیشنهادی",
    image: "images/led-car-lights.jpg",
    description: {
  fa: "نور قدرتمند و روشنایی بهتر در رانندگی شبانه.",
  en: "Powerful light for better visibility during night driving."
},
  },
  {
    id: 5,
    name: { fa: "کف‌پوش خودرو", en: "Car Floor Mats" },
category: { fa: "لوازم جانبی", en: "Accessories" },
    price: 1450000,
    rating: 4.6,
    tag: "جدید",
    image: "images/car-floor-mats.jpg",
  description: {
  fa: "محافظت از کف خودرو با طراحی زیبا و کاربردی.",
  en: "Protect your car floor with a stylish and practical design."
},
  },
  {
    id: 6,
   name: { fa: "مجموعه ابزار خودرو", en: "Car Tool Kit" },
category: { fa: "قطعات یدکی", en: "Spare Parts" },
    price: 2100000,
    rating: 4.7,
    tag: "کاربردی",
    image: "images/car-tool-kit.jpg",
    description: {
  fa: "مجموعه‌ای کاربردی برای تعمیرات و نگهداری خودرو.",
  en: "A practical tool kit for vehicle repairs and maintenance."
},
  },
  {
    id: 7,
    name: { fa: "شارژر فندکی خودرو", en: "Car Charger" },
category: { fa: "تجهیزات الکترونیکی", en: "Electronic Equipment" },
    price: 490000,
    rating: 4.5,
    tag: "محبوب",
    image: "images/car-charger.jpg",
   description: {
  fa: "شارژ سریع و آسان دستگاه‌های دیجیتال در خودرو.",
  en: "Fast and convenient charging for your digital devices on the go."
},
  },
  {
    id: 8,
  name: { fa: "کیت ایمنی خودرو", en: "Car Safety Kit" },
category: { fa: "ایمنی خودرو", en: "Car Safety" },
    price: 760000,
    rating: 4.8,
    tag: "ضروری",
    image: "images/car-safety-kit.jpg",
    description: {
  fa: "تجهیزات ضروری برای افزایش ایمنی در سفر.",
  en: "Essential equipment to improve safety on every journey."
},
  }
];

const productsGrid = document.getElementById("productsGrid");
const productsEmpty = document.getElementById("productsEmpty");
const productSearch = document.getElementById("productSearch");
const productFilters = document.querySelectorAll(".products-filter");

function formatPrice(price) {
  if (currentLanguage === "en") {
    return "$" + (price / 271400).toFixed(2);
  }

  return price.toLocaleString("fa-IR") + " تومان";
}
function renderProducts(list) {
  productsGrid.innerHTML = "";

  if (list.length === 0) {
    productsEmpty.style.display = "block";
    return;
  }

  productsEmpty.style.display = "none";

  list.forEach(product => {
    const card = document.createElement("article");
    card.className = "shop-card";
card.innerHTML = `
  <div class="shop-card-image">
    <img src="${product.image}"
         alt="${product.name[currentLanguage]}"
         onerror="this.style.display='none'">
    <span class="shop-card-tag">${product.tag}</span>
  </div>

  <div class="shop-card-info">
    <span class="shop-card-category">
      ${product.category[currentLanguage]}
    </span>

    <h3>${product.name[currentLanguage]}</h3>

    <p class="shop-card-description">
      ${product.description[currentLanguage]}
    </p>

    <div class="shop-card-rating">
      ⭐ ${product.rating}
    </div>

    <div class="shop-card-bottom">
      <span class="shop-card-price">
        ${formatPrice(product.price)}
      </span>

      <button
        class="shop-add-cart"
        type="button"
        onclick="window.location.href='product-details.html?id=${product.id}'">
        ${currentLanguage === "fa" ? "مشاهده محصول" : "View Product"}
      </button>
    </div>
  </div>
`;
    productsGrid.appendChild(card);
  });
}

let activeCategory = "all";

function filterProducts() {
  const searchValue = productSearch.value.trim().toLowerCase();

  const filteredProducts = products.filter(product => {
    const matchesCategory =
      activeCategory === "all" ||
      product.category === activeCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(searchValue) ||
      product.category.toLowerCase().includes(searchValue);

    return matchesCategory && matchesSearch;
  });

  renderProducts(filteredProducts);
}

productSearch.addEventListener("input", filterProducts);

productFilters.forEach(button => {
  button.addEventListener("click", () => {
    productFilters.forEach(item => item.classList.remove("active"));

    button.classList.add("active");
    activeCategory = button.dataset.category;

    filterProducts();
  });
});

renderProducts(products);
