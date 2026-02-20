// ---------- ДАНІ ----------
const moviesData = [
  {
    episode: "Episode I",
    title: "The Phantom Menace",
    story:
      "Джедаї знаходять хлопчика Енакіна Скайвокера, що може змінити долю галактики, тоді як Сітхи повертаються з тіні.",
    image: new URL("../images/ep1.webp", import.meta.url).href,
  },
  {
    episode: "Episode II",
    title: "Attack of the Clones",
    story:
      "Починаються Війни клонів, а Анакін поступово наближається до Темної сторони.",
    image: new URL("../images/movies/ep2.jpg", import.meta.url).href,
  },
  {
    episode: "Episode III",
    title: "Revenge of the Sith",
    story:
      "Орден Джедаїв падає, а Анакін стає Дартом Вейдером, слугою Імперії.",
    image: new URL("../images/movies/ep3.jpg", import.meta.url).href,
  },
  {
    episode: "Episode IV",
    title: "A New Hope",
    story:
      "Люк Скайвокер приєднується до Повстанців у боротьбі проти Імперії.",
    image: new URL("../images/movies/ep4.jpg", import.meta.url).href,
  },
  {
    episode: "Episode V",
    title: "The Empire Strikes Back",
    story:
      "Імперія завдає удару, а Люк дізнається страшну правду про Вейдера.",
    image: new URL("../images/movies/ep5.jpg", import.meta.url).href,
  },
  {
    episode: "Episode VI",
    title: "Return of the Jedi",
    story:
      "Повстанці знищують Імператора, а Анакін повертається до Світлої сторони.",
    image: new URL("../images/movies/ep6.jpg", import.meta.url).href,
  },
];

document.addEventListener("DOMContentLoaded", function () {
  // ---------- дані ----------
  const movies = JSON.parse(localStorage.getItem("moviesData")) || [];

  // ---------- елементи ----------
  const modal = document.getElementById("movieModal");
  const modalTitle = document.getElementById("modalMovieTitle");
  const modalStory = document.getElementById("modalMovieStory");
  const modalImage = document.getElementById("modalMovieImage");
  const modalClose = document.getElementById("movieModalClose");

  const confirmModal = document.getElementById("confirmModal");
  const confirmYes = document.getElementById("confirmYes");
  const confirmNo = document.getElementById("confirmNo");

  // ---------- таймери ----------
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

  // ---------- кнопки ----------
  confirmYes.addEventListener("click", () => {
    confirmModal.classList.remove("active");
    clearTimeout(timer15);
    start30();
  });

  confirmNo.addEventListener("click", () => {
    closeAll();
  });

  modalClose.addEventListener("click", () => {
    clearTimeout(timer30);
    clearTimeout(timer15);
    modal.classList.remove("active");
  });

  // ---------- відкриття модалки ----------
  const movieItems = document.querySelectorAll(".sw-movies__item");
  movieItems.forEach(item => {
    item.addEventListener("click", () => {
      const titleEl = item.querySelector("h3");
      if (!titleEl) return;

      const movie = movies.find(m => m.title === titleEl.textContent);
      if (!movie) return;

      modalTitle.textContent = movie.title;
      modalStory.textContent = movie.story;
      modalImage.src = movie.image;

      modal.classList.add("active");
      start30(); // ✅ тут виклик працює
    });
  });

  // Закриття по бекдропу
  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.classList.remove("active");
      clearTimeout(timer30);
      clearTimeout(timer15);
    }
  });
});
