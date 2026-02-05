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

// ---------- LOCALSTORAGE ----------
if (!localStorage.getItem("moviesData")) {
  localStorage.setItem("moviesData", JSON.stringify(moviesData));
}

// ---------- MODAL ----------
document.addEventListener("DOMContentLoaded", function () {
  const movies = JSON.parse(localStorage.getItem("moviesData")) || [];

  const modal = document.getElementById("movieModal");
  const modalTitle = document.getElementById("modalMovieTitle");
  const modalStory = document.getElementById("modalMovieStory");
  const modalImage = document.getElementById("modalMovieImage");
  const modalClose = document.getElementById("movieModalClose");

  if (!modal || !modalTitle || !modalStory || !modalImage || !modalClose) {
    console.error("Модалка або її елементи не знайдено в DOM!");
    return;
  }

  // Відкриття модалки по кліку на фільм
  const movieItems = document.querySelectorAll(".sw-movies__item");
  for (let i = 0; i < movieItems.length; i++) {
    movieItems[i].addEventListener("click", function () {
      const titleEl = movieItems[i].querySelector("h3");
      if (!titleEl) return;

      const movie = movies.find(function (m) {
        return m.title === titleEl.textContent;
      });
      if (!movie) return;

      modalTitle.textContent = movie.title;
      modalStory.textContent = movie.story;
      modalImage.src = movie.image;

      modal.classList.add("active");
    });
  }

  // Закриття модалки по кнопці
  modalClose.addEventListener("click", function () {
    modal.classList.remove("active");
  });

  // Закриття модалки по бекдропу
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
});
