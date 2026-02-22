// ---------- ДАНІ (базові, якщо в localStorage порожньо) ----------
const defaultMovies = [
  {
    episode: "Episode I",
    title: "The Phantom Menace",
    story:
      "Галактична Республіка ще здається сильною, але всередині вже гниє від політичних інтриг. Джедаї Квай-Ґон Джинн і Обі-Ван Кенобі знаходять на Татуїні хлопчика — Анакіна Скайвокера, що має безпрецедентну силу. Його вважають Обраним, який принесе баланс Силі. Але в тіні вже діє темний лорд ситхів, а повернення Сітхів стає початком великої трагедії.",
    image: new URL("../images/ep1.webp", import.meta.url).href,
  },
  {
    episode: "Episode II",
    title: "Attack of the Clones",
    story:
      "Минуло десять років. Анакін став сильним, але всередині нього кипить страх і ревнощі. Тим часом у галактиці спалахує Війна клонів — армія клонів бореться проти сепаратистів. Любов Анакіна до Падме стає його слабкістю, а маніпуляції Палпатіна поступово штовхають його до Темної сторони.",
    image: new URL("../images/ep2.jpg", import.meta.url).href,
  },
  {
    episode: "Episode III",
    title: "Revenge of the Sith",
    story:
      "Це найтрагічніша частина саги. Палпатін розкриває себе як ситх Дарт Сідіус і спокушає Анакіна обіцянкою врятувати Падме від смерті. Анакін зраджує Орден джедаїв, допомагає знищити їх під час Наказу 66 і стає Дартом Вейдером. Імперія народжується, а галактика занурюється в темряву.",
    image: new URL("../images/ep3.jpg", import.meta.url).href,
  },
  {
    episode: "Episode IV",
    title: "A New Hope",
    story:
      "Минуло багато років. Імперія править страхом. Але з’являється нова надія — Люк Скайвокер, син Анакіна. Разом із Леєю, Ганом Соло та Обі-Ваном він приєднується до Повстанців. Люк робить перший крок на шляху джедая і допомагає знищити Зірку Смерті.",
    image: new URL("../images/ep4.jpeg", import.meta.url).href,
  },
  {
    episode: "Episode V",
    title: "The Empire Strikes Back",
    story:
      "Імперія переходить у наступ. Люк проходить навчання у майстра Йоди та дізнається страшну правду: Дарт Вейдер — його батько. Ган Соло потрапляє в полон, а Повстанці зазнають поразки. Це найтемніший момент історії.",
    image: new URL("../images/ep5.jpg", import.meta.url).href,
  },
  {
    episode: "Episode VI",
    title: "Return of the Jedi",
    story:
      "Фінальна битва за долю галактики. Люк відмовляється перейти на Темну сторону, навіть перед самим Імператором. У вирішальний момент Вейдер згадує, ким був колись, і рятує сина, знищивши Палпатіна. Анакін повертається до Світла, а Імперія падає.",
    image: new URL("../images/ep6.jpg", import.meta.url).href,
  },
];

document.addEventListener("DOMContentLoaded", function () {
  // ---------- LOCAL STORAGE ----------
  // 🔥 КОЖЕН РАЗ ОНОВЛЮЄМО localStorage
  localStorage.setItem("moviesData", JSON.stringify(defaultMovies));

  // Беремо вже оновлені дані
  const moviesData = JSON.parse(localStorage.getItem("moviesData"));


  // ---------- ЕЛЕМЕНТИ ----------
  const modal = document.getElementById("movieModal");
  const modalTitle = document.getElementById("modalMovieTitle");
  const modalStory = document.getElementById("modalMovieStory");
  const modalImage = document.getElementById("modalMovieImage");
  const modalClose = document.getElementById("movieModalClose");

  const confirmModal = document.getElementById("confirmModal");
  const confirmYes = document.getElementById("confirmYes");
  const confirmNo = document.getElementById("confirmNo");

  // ---------- ТАЙМЕРИ ----------
  let timer30 = null;
  let timer15 = null;

  function start30() {
    clearTimeout(timer30);
    timer30 = setTimeout(() => {
      confirmModal.classList.add("active");
      timer15 = setTimeout(() => {
        closeAll();
      }, 15000);
    }, 30000);
  }

  function closeAll() {
    clearTimeout(timer30);
    clearTimeout(timer15);
    confirmModal.classList.remove("active");
    modal.classList.remove("active");
  }

  // ---------- КНОПКИ ----------
  confirmYes.addEventListener("click", () => {
    confirmModal.classList.remove("active");
    clearTimeout(timer15);
    start30();
  });

  confirmNo.addEventListener("click", closeAll);

  modalClose.addEventListener("click", closeAll);

  // ---------- ВІДКРИТТЯ МОДАЛКИ ----------
  const movieItems = document.querySelectorAll(".sw-movies__item");

  movieItems.forEach(item => {
    item.addEventListener("click", () => {
      const titleEl = item.querySelector("h3");
      if (!titleEl) return;

      const movie = moviesData.find(
        m => m.title.trim() === titleEl.textContent.trim()
      );

      if (!movie) return;

      modalTitle.textContent = movie.title;
      modalStory.textContent = movie.story;
      modalImage.src = movie.image;

      modal.classList.add("active");
      start30();
    });
  });

  // Закриття по бекдропу
  modal.addEventListener("click", e => {
    if (e.target === modal) {
      closeAll();
    }
  });
});