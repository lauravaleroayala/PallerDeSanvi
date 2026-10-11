// Filtres de la col·lecció: mostra només les targetes de la categoria triada.
const buttons = document.querySelectorAll(".filter-button");
const cards = document.querySelectorAll(".object-card");

// Els números dels botons es calculen sols a partir de les targetes.
buttons.forEach((button) => {
  const f = button.dataset.filter;
  const total = f === "tots" ? cards.length : [...cards].filter((c) => c.dataset.category === f).length;
  button.textContent = `${button.dataset.label} (${total})`;

  button.addEventListener("click", () => {
    buttons.forEach((b) => {
      b.classList.toggle("active", b === button);
      b.setAttribute("aria-pressed", String(b === button));
    });
    cards.forEach((c) => { c.hidden = f !== "tots" && c.dataset.category !== f; });
  });
});