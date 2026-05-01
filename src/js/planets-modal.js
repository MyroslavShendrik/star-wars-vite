// ================= МОДАЛКА =================
const modal = document.getElementById("planetModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeBtn = document.querySelector(".modal__close");

// ================= КАРТКИ =================
const cards = document.querySelectorAll(".planet-card");

// ================= ПОШУК =================
const searchInput = document.getElementById("searchPlanet");
const searchBtn = document.getElementById("searchBtn");

// ---------- показ ----------
function showPlanet(planet) {
  modalTitle.textContent = planet.name;

  modalText.innerHTML = `
    <p><b>Climate:</b> ${planet.climate}</p>
    <p><b>Population:</b> ${planet.population}</p>
    <p><b>Gravity:</b> ${planet.gravity}</p>
    <p><b>Terrain:</b> ${planet.terrain}</p>
  `;

  modal.style.display = "block";
}

// ---------- fetch (ГОЛОВНИЙ ФІКС) ----------
async function fetchPlanet(name) {
  const response = await fetch(`https://swapi.info/api/planets`);

  const data = await response.json(); // тут МАСИВ!

  // шукаємо вручну
  const planet =
    data.find(p => p.name.toLowerCase() === name.toLowerCase()) ||
    data.find(p => p.name.toLowerCase().includes(name.toLowerCase()));

  if (!planet) {
    throw new Error("Не знайдено");
  }

  return planet;
}

// ================= КЛІК =================
cards.forEach(card => {
  card.addEventListener("click", async () => {
    const name = card.dataset.name;

    try {
      const planet = await fetchPlanet(name);
      showPlanet(planet);
    } catch {
      modalTitle.textContent = "Помилка";
      modalText.textContent = "Не вдалося завантажити дані";
      modal.style.display = "block";
    }
  });
});

// ================= КНОПКА =================
searchBtn.addEventListener("click", async () => {
  const value = searchInput.value.trim();
  if (!value) return;

  try {
    const planet = await fetchPlanet(value);
    showPlanet(planet);
  } catch {
    modalTitle.textContent = "Помилка";
    modalText.textContent = "Планету не знайдено";
    modal.style.display = "block";
  }
});

// ================= ENTER =================
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchBtn.click();
  }
});

// ================= ЗАКРИТТЯ =================
closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};