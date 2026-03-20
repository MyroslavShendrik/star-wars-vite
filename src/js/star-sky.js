console.log(
  '%c Зоряне небо в header Star Wars',
  'color: white; background-color: #D33F49'
);

const starsContainer = document.getElementById("header-stars");

const STAR_COUNT = 40;
let stars = [];

//! створення зірок
function createHeaderStars() {
  starsContainer.innerHTML = "";
  stars = [];

  for (let i = 0; i < STAR_COUNT; i++) {
    const star = document.createElement("div");

    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    starsContainer.appendChild(star);
    stars.push(star);
  }
}

//! проміс для однієї зірки
function starPromise(star) {
  return new Promise((resolve) => {
    const delay = 1000 + Math.random() * 4000;

    const colors = ["#fff", "#ffd700", "#87ceeb", "#ff69b4"];

    const color = colors[Math.floor(Math.random() * colors.length)];

    star.style.background = color;
    star.classList.add("glow");

    setTimeout(() => {
      star.classList.remove("glow");
      star.style.opacity = 0.3;

      resolve(`Зірка згасла`);
    }, delay);
  });
}

//! запуск усіх зірок
function startStars() {
  const promises = stars.map((star) => starPromise(star));

  Promise.allSettled(promises).then(() => {
    startStars();
  });
}

createHeaderStars();
startStars();