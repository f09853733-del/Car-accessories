const products = [
  {
    id: 1,
    name: "رینگ اسپرت خودرو",
    category: "لوازم جانبی",
    price: 8500000,
    rating: 4.9,
    tag: "پرفروش",
    image: "images/sport-rim.jpg",
    description: "طراحی اسپرت و کیفیت ساخت بالا برای خودروی شما."
  },
  {
    id: 2,
    name: "روغن موتور پریمیوم",
    category: "روغن و نگهداری",
    price: 1250000,
    rating: 4.8,
    tag: "محبوب",
    image: "images/premium-engine-oil.jpg",
    description: "محافظت بهتر از موتور و افزایش عملکرد خودرو."
  },
  {
    id: 3,
    name: "دوربین ثبت وقایع",
    category: "تجهیزات الکترونیکی",
    price: 3200000,
    rating: 4.7,
    tag: "ویژه",
    image: "images/dash-camera.jpg",
    description: "ثبت تصاویر مسیر با کیفیت بالا و جزئیات دقیق."
  },
  {
    id: 4,
    name: "چراغ LED خودرو",
    category: "روشنایی خودرو",
    price: 980000,
    rating: 4.8,
    tag: "پیشنهادی",
    image: "images/led-car-lights.jpg",
    description: "نور قدرتمند و روشنایی بهتر در رانندگی شبانه."
  },
  {
    id: 5,
    name: "کف‌پوش خودرو",
    category: "لوازم جانبی",
    price: 1450000,
    rating: 4.6,
    tag: "جدید",
    image: "images/car-floor-mats.jpg",
    description: "محافظت از کف خودرو با طراحی زیبا و کاربردی."
  },
  {
    id: 6,
    name: "مجموعه ابزار خودرو",
    category: "قطعات یدکی",
    price: 2100000,
    rating: 4.7,
    tag: "کاربردی",
    image: "images/car-tool-kit.jpg",
    description: "مجموعه‌ای کاربردی برای تعمیرات و نگهداری خودرو."
  },
  {
    id: 7,
    name: "شارژر فندکی خودرو",
    category: "تجهیزات الکترونیکی",
    price: 490000,
    rating: 4.5,
    tag: "محبوب",
    image: "images/car-charger.jpg",
    description: "شارژ سریع و آسان دستگاه‌های دیجیتال در خودرو."
  },
  {
    id: 8,
    name: "کیت ایمنی خودرو",
    category: "ایمنی خودرو",
    price: 760000,
    rating: 4.8,
    tag: "ضروری",
    image: "images/car-safety-kit.jpg",
    description: "تجهیزات ضروری برای افزایش ایمنی در سفر."
  }
];

const productsGrid = document.getElementById("productsGrid");
const productsEmpty = document.getElementById("productsEmpty");
const productSearch = document.getElementById("productSearch");
const productFilters = document.querySelectorAll(".products-filter");

function formatPrice(price) {
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
        <img src="${product.image}" alt="${product.name}"
             onerror="this.style.display='none'">
        <span class="shop-card-tag">${product.tag}</span>
      </div>

      <div class="shop-card-info">
        <span class="shop-card-category">${product.category}</span>
        <h3>${product.name}</h3>

        <p class="shop-card-description">
          ${product.description}
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
  مشاهده محصول
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
