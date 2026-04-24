const modal = document.getElementById("planetModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeBtn = document.querySelector(".modal__close");

const cards = document.querySelectorAll(".planet-card");

cards.forEach(card => {
  card.addEventListener("click", async () => {
    const id = card.dataset.id;

    const response = await fetch(`https://swapi.info/api/planets/${id}/`);
    const planet = await response.json();

    modalTitle.textContent = planet.name;

    modalText.innerHTML = `
      <p><b>Climate:</b> ${planet.climate}</p>
      <p><b>Population:</b> ${planet.population}</p>
      <p><b>Gravity:</b> ${planet.gravity}</p>
      <p><b>Terrain:</b> ${planet.terrain}</p>
    `;

    modal.style.display = "block";
  });
});

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};