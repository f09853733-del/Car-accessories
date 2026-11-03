const productDetails = [
  {
    id: 1,
    name: "رینگ اسپرت خودرو",
    category: "لوازم جانبی",
    price: 8500000,
    rating: 4.9,
    image: "images/sport-rim.jpg",
    description: "رینگ اسپرت خودرو با طراحی مدرن و جذاب، کیفیت ساخت بالا و ظاهری لوکس برای خودروی شما."
  },
  {
    id: 2,
    name: "روغن موتور پریمیوم",
    category: "روغن و نگهداری",
    price: 1250000,
    rating: 4.8,
    image: "images/premium-engine-oil.jpg",
    description: "روغن موتور باکیفیت برای محافظت بهتر از موتور و افزایش عملکرد خودرو."
  },
  {
    id: 3,
    name: "دوربین ثبت وقایع",
    category: "تجهیزات الکترونیکی",
    price: 3200000,
    rating: 4.7,
    image: "images/dash-camera.jpg",
    description: "دوربین ثبت وقایع با کیفیت تصویر بالا برای ثبت مسیر و افزایش امنیت رانندگی."
  },
  {
    id: 4,
    name: "چراغ LED خودرو",
    category: "روشنایی خودرو",
    price: 980000,
    rating: 4.8,
    image: "images/led-car-lights.jpg",
    description: "چراغ LED با نور قدرتمند و طراحی مدرن برای روشنایی بهتر مسیر."
  },
  {
    id: 5,
    name: "کف‌پوش خودرو",
    category: "لوازم جانبی",
    price: 1450000,
    rating: 4.6,
    image: "images/car-floor-mats.jpg",
    description: "کف‌پوش کاربردی و زیبا برای محافظت از فضای داخلی خودرو."
  },
  {
    id: 6,
    name: "مجموعه ابزار خودرو",
    category: "قطعات یدکی",
    price: 2100000,
    rating: 4.7,
    image: "images/car-tool-kit.jpg",
    description: "مجموعه ابزار کاربردی برای تعمیرات و نگهداری خودرو."
  },
  {
    id: 7,
    name: "شارژر فندکی خودرو",
    category: "تجهیزات الکترونیکی",
    price: 490000,
    rating: 4.5,
    image: "images/car-charger.jpg",
    description: "شارژر فندکی خودرو برای شارژ آسان دستگاه‌های دیجیتال در مسیر."
  },
  {
    id: 8,
    name: "کیت ایمنی خودرو",
    category: "ایمنی خودرو",
    price: 760000,
    rating: 4.8,
    image: "images/car-safety-kit.jpg",
    description: "مجموعه تجهیزات ضروری برای افزایش ایمنی و آمادگی در سفر."
  }
];

const params = new URLSearchParams(window.location.search);
const productId = Number(params.get("id"));

const product = productDetails.find(item => item.id === productId);
const detailsCard = document.querySelector(".details-card");

function formatDetailPrice(price) {
  return price.toLocaleString("fa-IR") + " تومان";
}

if (product && detailsCard) {
  detailsCard.innerHTML = `
    <div class="details-image">
      <img src="${product.image}" alt="${product.name}">
    </div>

    <div class="details-info">
      <span class="details-category">${product.category}</span>

      <h1>${product.name}</h1>

      <div class="details-rating">⭐ ${product.rating} از 5</div>

      <p class="details-description">
        ${product.description}
      </p>

      <div class="details-price">
        ${formatDetailPrice(product.price)}
      </div>

      <button class="details-button" type="button">
        افزودن به سبد خرید
      </button>
    </div>
  `;
} else if (detailsCard) {
  detailsCard.innerHTML = `
    <div class="details-info">
      <h1>محصول پیدا نشد!</h1>
      <p class="details-description">
        محصول موردنظر در فروشگاه وجود ندارد.
      </p>
      <a href="products.html" class="details-back">
        بازگشت به محصولات
      </a>
    </div>
  `;
}
