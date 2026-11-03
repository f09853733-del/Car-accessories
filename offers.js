

const offers = [
  {
    name: {
    fa: "رینگ اسپرت خودرو",
    en: "Sport Car Rim"
    },
    image: "images/sport-rim.jpg",
    oldPrice: "۱۰,۰۰۰,۰۰۰ تومان",
    newPrice: "۸,۵۰۰,۰۰۰ تومان",
    discountEn: "15% OFF",
    productId: 1
  },
  {
    name: {
  fa: "روغن موتور پریمیوم",
  en: "Premium Engine Oil"
  },
    image: "images/premium-engine-oil.jpg",
    oldPrice: "۱,۶۰۰,۰۰۰ تومان",
    newPrice: "۱,۲۵۰,۰۰۰ تومان",
   discountEn: "22% OFF",
    productId: 2
  },
  {
 name: {
  fa: "دوربین ثبت وقایع",
  en: "Dash Camera"
  },
    image: "images/dash-camera.jpg",
    oldPrice: "۴,۰۰۰,۰۰۰ تومان",
    newPrice: "۳,۲۰۰,۰۰۰ تومان",
    discount: "۲۰٪ تخفیف",
    productId: 3
  },
  {
    name: {
  fa: "چراغ LED خودرو",
  en: "LED Car Lights"
  },
    image: "images/led-car-lights.jpg",
    oldPrice: "۱,۲۰۰,۰۰۰ تومان",
    newPrice: "۹۸۰,۰۰۰ تومان",
    discountEn: "18% OFF",
    productId: 4
  }
];

const offersGrid = document.getElementById("offersGrid");

offersGrid.innerHTML = offers.map(product => `
  <article class="offer-card">
    <div class="offer-image">
      <img src="${product.image}" alt="${product.name[currentLanguage]}">
     <span class="offer-discount"
      data-fa="${product.discount}"
      data-en="${product.discountEn}">${product.discount}</span>
    </div>

    <div class="offer-info">
   <h3 data-fa="${product.name.fa}" data-en="${product.name.en}">${product.name.fa}</h3>

      <div class="offer-prices">
        <span class="old-price">${product.oldPrice}</span>
        <span class="new-price">${product.newPrice}</span>
      </div>

      <a href="product-details.html?id=${product.productId}"
         class="offer-button">
        <span data-fa="مشاهده محصول" data-en="VIEW PRODUCT">مشاهده محصول</span>
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
     '<span data-fa="تخفیف به پایان رسید" data-en="THE OFFER HAS ENDED">تخفیف به پایان رسید</span>';
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
