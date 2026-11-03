const offers = [
  {
    name: "رینگ اسپرت خودرو",
    image: "images/sport-rim.jpg",
    oldPrice: "۱۰,۰۰۰,۰۰۰ تومان",
    newPrice: "۸,۵۰۰,۰۰۰ تومان",
    discount: "۱۵٪ تخفیف",
    productId: 1
  },
  {
    name: "روغن موتور پریمیوم",
    image: "images/premium-engine-oil.jpg",
    oldPrice: "۱,۶۰۰,۰۰۰ تومان",
    newPrice: "۱,۲۵۰,۰۰۰ تومان",
    discount: "۲۲٪ تخفیف",
    productId: 2
  },
  {
    name: "دوربین ثبت وقایع",
    image: "images/dash-camera.jpg",
    oldPrice: "۴,۰۰۰,۰۰۰ تومان",
    newPrice: "۳,۲۰۰,۰۰۰ تومان",
    discount: "۲۰٪ تخفیف",
    productId: 3
  },
  {
    name: "چراغ LED خودرو",
    image: "images/led-car-lights.jpg",
    oldPrice: "۱,۲۰۰,۰۰۰ تومان",
    newPrice: "۹۸۰,۰۰۰ تومان",
    discount: "۱۸٪ تخفیف",
    productId: 4
  }
];

const offersGrid = document.getElementById("offersGrid");

offersGrid.innerHTML = offers.map(product => `
  <article class="offer-card">
    <div class="offer-image">
      <img src="${product.image}" alt="${product.name}">
      <span class="offer-discount">${product.discount}</span>
    </div>

    <div class="offer-info">
      <h3>${product.name}</h3>

      <div class="offer-prices">
        <span class="old-price">${product.oldPrice}</span>
        <span class="new-price">${product.newPrice}</span>
      </div>

      <a href="product-details.html?id=${product.productId}"
         class="offer-button">
        مشاهده محصول
      </a>
    </div>
  </article>
`).join("");


// Countdown Timer
const endDate = new Date();
endDate.setDate(endDate.getDate() + 23);

function updateCountdown() {
  const now = new Date().getTime();
  const distance = endDate.getTime() - now;

  if (distance <= 0) {
    document.getElementById("countdown").innerHTML =
      "تخفیف به پایان رسید";
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

updateCountdown();

const countdownInterval = setInterval(updateCountdown, 1000);
