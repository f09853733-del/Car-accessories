
document.addEventListener("DOMContentLoaded", function () {
  const carCards = document.querySelectorAll(".car-card");

  carCards.forEach(function (card) {
    card.addEventListener("click", function () {
      const carName = card.querySelector("h3").textContent;
      console.log("Selected car:", carName);
    });
  });
});
