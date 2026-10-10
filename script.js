// Filtre senzill per explorar els objectes per categories.
const filterButtons = document.querySelectorAll(".filter-button");
const objectCards = document.querySelectorAll(".object-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;

    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    objectCards.forEach((card) => {
      const matches = selectedCategory === "Tots" ||
        card.dataset.category === selectedCategory;
      card.hidden = !matches;
    });
  });
});
