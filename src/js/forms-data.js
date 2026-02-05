let formsData = [
  {
    id: "shii-cho",
    name: "Shii-Cho",
    description:
      "Найстаріша форма бою на світлових мечах. Орієнтована на базові атаки та боротьбу з кількома ворогами.",
    users: [
      "Люк Скайвокер",
      "Кіт Фісто",
      "Багато джедаїв Старої Республіки"
    ],
    image: new URL(
      "../images/forms/shii-cho.jpg",
      import.meta.url
    ).href,
  },

  {
    id: "makashi",
    name: "Makashi",
    description:
      "Елегантний дуельний стиль, створений спеціально для бою проти інших мечників.",
    users: [
      "Граф Дуку",
      "Ассаж Вентресс"
    ],
    image: new URL(
      "../images/forms/makashi.jpg",
      import.meta.url
    ).href,
  },

  {
    id: "soresu",
    name: "Soresu",
    description:
      "Найкраща оборонна форма, зосереджена на блокуванні атак та виживанні.",
    users: [
      "Обі-Ван Кенобі",
      "Люмінарія Ундулі"
    ],
    image: new URL(
      "../images/forms/soresu.jpg",
      import.meta.url
    ).href,
  },

  {
    id: "ataru",
    name: "Ataru",
    description:
      "Акробатичний стиль із великою кількістю стрибків і швидких атак.",
    users: [
      "Йода",
      "Квай-Гон Джинн"
    ],
    image: new URL(
      "../images/forms/ataru.jpg",
      import.meta.url
    ).href,
  },

  {
    id: "djem-so",
    name: "Djem So",
    description:
      "Агресивний стиль, що поєднує блокування і потужні контратаки.",
    users: [
      "Анакін Скайвокер",
      "Люк Скайвокер"
    ],
    image: new URL(
      "../images/forms/djem-so.jpg",
      import.meta.url
    ).href,
  },

  {
    id: "niman",
    name: "Niman",
    description:
      "Збалансована форма, що поєднує бойові техніки і використання Сили.",
    users: [
      "Багато джедаїв Ордену"
    ],
    image: new URL(
      "../images/forms/niman.jpg",
      import.meta.url
    ).href,
  },

  {
    id: "juyo",
    name: "Juyo / Vaapad",
    description:
      "Найбільш агресивний стиль, що використовує темні емоції в бою.",
    users: [
      "Мейс Вінду",
      "Дарт Мол"
    ],
    image: new URL(
      "../images/forms/juyo.jpg",
      import.meta.url
    ).href,
  }
];

if (!localStorage.getItem("lightsaberForms")) {
  localStorage.setItem(
    "lightsaberForms",
    JSON.stringify(formsData)
  );
}
