import "./forms-data.js";
  
const forms = document.querySelectorAll(".forms-list li");
const backdrop = document.querySelector(".form-modal-backdrop");

const modalImg = document.querySelector(".modal-img");
const modalTitle = document.querySelector(".modal-title");
const modalDesc = document.querySelector(".modal-desc");
const modalUsers = document.querySelector(".modal-users");

const closeBtn = document.querySelector(".modal-close");

const formsData =
  JSON.parse(localStorage.getItem("lightsaberForms")) || [];

forms.forEach(form => {
  form.addEventListener("click", () => {
    const id = form.dataset.form;
    const data = formsData.find(f => f.id === id);

    modalImg.src = data.image;
    modalTitle.textContent = data.name;
    modalDesc.textContent = data.description;

    modalUsers.innerHTML = data.users
      .map(user => `<li>${user}</li>`)
      .join("");

    backdrop.classList.remove("is-hidden");
  });
});

function closeModal() {
  backdrop.classList.add("is-hidden");
}

closeBtn.addEventListener("click", closeModal);

backdrop.addEventListener("click", e => {
  if (e.target === backdrop) closeModal();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});
