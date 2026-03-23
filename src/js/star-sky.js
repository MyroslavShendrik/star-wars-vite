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

    const size = Math.random() * 3 + 2;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    starsContainer.appendChild(star);
    stars.push(star);
  }
}

//! проміс для однієї зірки
function starPromise(star) {
  return new Promise((resolve) => {
    const delay = 500 + Math.random() * 3000;

    const colors = ["#fff", "#ffd700", "#87ceeb", "#ff69b4"];
    const color = colors[Math.floor(Math.random() * colors.length)];

    star.style.background = color;

    //! старт мінімальна яскравість
    star.style.opacity = 0.2;

    //! плавний розгін до 100%
    setTimeout(() => {
      star.classList.add("glow");

      //! постійне мерехтіння
      star.style.animation = `twinkle ${1 + Math.random() * 2}s infinite ease-in-out`;

      resolve("Зірка активна");
    }, delay);
  });
}

//! запуск усіх зірок
function startStars() {
  const promises = stars.map((star) => starPromise(star));

  Promise.allSettled(promises).then(() => {
    console.log("Усі зірки активні");
  });
}

createHeaderStars();
startStars();