document.addEventListener("DOMContentLoaded", function () {

  // ---------- БАЗОВІ ДАНІ ----------
  const defaultCharacters = [
    {
      name: "Luke Skywalker",
      description: "Люк Скайвокер — син Анакіна Скайвокера та Падме Амідали. Виріс на Татуїні, мріючи про пригоди. Після зустрічі з Обі-Ваном Кенобі розпочав шлях джедая. Навчався у майстра Йоди, протистояв Дарту Вейдеру та зумів повернути світло в серце свого батька. Саме Люк став символом нової надії для всієї галактики.",
      image: new URL("../images/luke.jpg", import.meta.url).href,
    },
    {
      name: "Obi-Wan Kenobi",
      description: "Обі-Ван Кенобі — майстер-джедай, учень Квай-Ґона Джинна та наставник Анакіна Скайвокера. Відомий своєю мудрістю, стриманістю та відданістю Ордену. Пережив падіння Республіки й роками переховувався, оберігаючи Люка. Його дуелі з Дартом Молом та Дартом Вейдером стали легендарними.",
      image: new URL("../images/obiwan.jpg", import.meta.url).href,
    },
    {
      name: "Yoda",
      description: "Йода — один із наймудріших і наймогутніших джедаїв в історії. Прожив понад 900 років і навчав покоління лицарів Ордену. Його знання Сили та глибока філософія зробили його духовним лідером джедаїв під час Війн клонів.",
      image: new URL("../images/yoda.jpg", import.meta.url).href,
    },
    {
      name: "Mace Windu",
      description: "Мейс Вінду — майстер-джедай та член Вищої ради Ордену. Володів унікальною формою бою світловим мечем Vaapad, що дозволяла використовувати агресію супротивника проти нього. Саме він викрив Палпатіна як ситха.",
      image: new URL("../images/mace.jpg", import.meta.url).href,
    },
    {
      name: "Qui-Gon Jinn",
      description: "Квай-Ґон Джинн — майстер-джедай, який вірив у Живу Силу більше, ніж у правила Ради. Саме він відкрив Анакіна Скайвокера та вірив, що той є Обраним. Загинув у двобої з Дартом Молом.",
      image: new URL("../images/quigon.jpg", import.meta.url).href,
    },
    {
      name: "Ahsoka Tano",
      description: "Асока Тано — падаван Анакіна Скайвокера. Пройшла важкий шлях під час Війн клонів. Залишила Орден, розчарувавшись у ньому, але не зрадила світлу сторону. Стала незалежною воїтелькою Сили.",
      image: new URL("../images/ahsoka.jpg", import.meta.url).href,
    },
    {
      name: "Darth Vader",
      description: "Дарт Вейдер — колишній Анакін Скайвокер. Перейшов на Темну сторону через страх втрати та маніпуляції Палпатіна. Став правою рукою Імператора і символом страху. Врешті-решт пожертвував собою, щоб врятувати сина.",
      image: new URL("../images/vader.jpg", import.meta.url).href,
    },
    {
      name: "Darth Sidious",
      description: "Дарт Сідіус, також відомий як Імператор Палпатін, — темний лорд ситхів, що знищив Республіку та створив Імперію. Майстер інтриг і маніпуляцій, який роками таємно керував галактикою.",
      image: new URL("../images/sidious.jpg", import.meta.url).href,
    },
    {
      name: "Darth Maul",
      description: "Дарт Мол — учень Дарта Сідіуса, відомий своїм подвійним червоним світловим мечем. Після поразки від Обі-Вана вижив і роками прагнув помсти.",
      image: new URL("../images/maul.jpg", import.meta.url).href,
    },
    {
      name: "Count Dooku",
      description: "Граф Дуку — колишній джедай, який розчарувався в Ордені та став ситхом Дартом Тиранусом. Лідер сепаратистів під час Війн клонів.",
      image: new URL("../images/dooku.jpg", import.meta.url).href,
    },
    {
      name: "Kylo Ren",
      description: "Кайло Рен — син Леї Органи та Гана Соло, онук Дарта Вейдера. Розривався між світлом і темрявою. Прагнув наслідувати Вейдера, але врешті повернувся до світла.",
      image: new URL("../images/kylo.jpg", import.meta.url).href,
    },
    {
      name: "Leia Organa",
      description: "Лея Органа — принцеса Альдераана, лідер Повстанців та сестра Люка. Сильна, розумна й хоробра, вона стала ключовою фігурою в боротьбі проти Імперії.",
      image: new URL("../images/leia.jpg", import.meta.url).href,
    },
    {
      name: "Han Solo",
      description: "Ган Соло — харизматичний контрабандист і капітан «Тисячолітнього Сокола». Спочатку цинічний, але став героєм Повстанців.",
      image: new URL("../images/han.jpg", import.meta.url).href,
    },
    {
      name: "Cassian Andor",
      description: "Кассіан Андор — розвідник Повстанців, який пожертвував собою під час місії зі здобуття планів Зірки Смерті.",
      image: new URL("../images/andor.jpg", import.meta.url).href,
    },
    {
      name: "Mon Mothma",
      description: "Мон Мотма — одна з головних лідерів Альянсу Повстанців. Вона об’єднала сили проти Імперії.",
      image: new URL("../images/monmothma.jpg", import.meta.url).href,
    },
    {
      name: "Jyn Erso",
      description: "Джин Ерсо — донька вченого, який створював Зірку Смерті. Допомогла викрасти її плани й дала шанс Повстанцям.",
      image: new URL("../images/jyn.jpg", import.meta.url).href,
    },
    {
      name: "Grand Moff Tarkin",
      description: "Гранд-моф Таркін — високопоставлений офіцер Імперії, що командував Зіркою Смерті.",
      image: new URL("../images/tarkin.jpg", import.meta.url).href,
    },
    {
      name: "Admiral Thrawn",
      description: "Гранд-адмірал Траун — геніальний стратег Імперії з раси чиссів. Відомий холодним розумом і глибоким аналізом ворогів.",
      image: new URL("../images/thrawn.jpg", import.meta.url).href,
    },
    {
      name: "Imperial Inquisitors",
      description: "Імперські Інквізитори — мисливці на джедаїв, що служили Дарту Вейдеру та полювали на тих, хто вижив після Наказу 66.",
      image: new URL("../images/inquisitor.jpg", import.meta.url).href,
    },
  ];

  // ---------- LOCAL STORAGE ----------
  localStorage.setItem("charactersData", JSON.stringify(defaultCharacters));
  const charactersData = JSON.parse(localStorage.getItem("charactersData"));

  // ---------- DOM ----------
  const modal = document.getElementById("characterModal");
  const modalClose = document.getElementById("characterModalClose");
  const modalName = document.getElementById("characterName");
  const modalDesc = document.getElementById("characterDescription");
  const modalImage = document.getElementById("characterImage");

  const characterItems = document.querySelectorAll(".character-group__item");

  // ---------- ВІДКРИТТЯ ----------
  characterItems.forEach(item => {
    item.addEventListener("click", () => {
      const name = item.textContent.trim();

      const character = charactersData.find(c => c.name === name);
      if (!character) return;

      modalName.textContent = character.name;
      modalDesc.textContent = character.description;
      modalImage.src = character.image;

      modal.classList.add("active");
    });
  });

  // ---------- ЗАКРИТТЯ ----------
  modalClose.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

});