const modal = document.getElementById("planetModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeBtn = document.querySelector(".modal__close");

const cards = document.querySelectorAll(".planet-card");

// КЛІК ПО ПЛАНЕТІ
cards.forEach(card => {
  card.addEventListener("click", async () => {
    const name = card.dataset.name;

    try {
      const response = await fetch(`https://swapi.info/api/planets?search=${name}`);
      const data = await response.json();

      const planet = data.results[0];

      modalTitle.textContent = planet.name;

      modalText.innerHTML = `
        <p><b>Climate:</b> ${planet.climate}</p>
        <p><b>Population:</b> ${planet.population}</p>
        <p><b>Gravity:</b> ${planet.gravity}</p>
        <p><b>Terrain:</b> ${planet.terrain}</p>
      `;

      modal.style.display = "block";

    } catch (error) {
      modalTitle.textContent = "Помилка";
      modalText.textContent = "Не вдалося завантажити дані";
      modal.style.display = "block";
    }
  });
});


// ЗАКРИТТЯ МОДАЛКИ
closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};


// ПОШУК
const searchInput = document.getElementById("searchPlanet");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const name = card.dataset.name.toLowerCase();

    if (name.includes(value)) {
      // card.style.display = "list-item";
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});