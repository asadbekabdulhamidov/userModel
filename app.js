const showBtn = document.getElementById("show__btn");
const formModal = document.getElementById("form__modal");
const closeBtn = document.getElementById("close__btn");

const addHidden = () => {
  formModal.classList.add("hidden");
};

showBtn.addEventListener("click", () => {
  formModal.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  addHidden();
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    addHidden();
  }
});

//========================================
const btn = document.querySelector("button");

const form = document.querySelector("form");
const userList = document.querySelector("#users__list");

const users = [];
form.addEventListener("submit", (e) => {
  event.preventDefault();
  const imgUrlValue = form.image.value;
  const nameVal = form.name.value;

  const telVal = form.tel.value;
  const emailVal = form.email.value;
  const genderVal = form.gender.value;

  users.push({
    id: new Date().toLocaleString(),
    img: imgUrlValue,
    name: nameVal,

    tel: telVal,
    email: emailVal,
    gender: genderVal,
  });
  updateUI(users);
});

function updateUI(users) {
  const template = document.createDocumentFragment();
  userList.innerHTML = "";
  users.forEach((user) => {
    const li = elementCreator("li", "users__item");
    const itemImg = elementCreator("img", "item__img");
    const h3 = elementCreator("h3", "user__title");
    const h4 = elementCreator("h4", "tel__number");
    const text = elementCreator("h4", "email");
    const gen = elementCreator("h4", "gender");

    itemImg.setAttribute("src", user.img);
    itemImg.setAttribute("alt", "Rasm Urlda Xatolik bor");
    h3.textContent = "Name: " + user.name;
    h4.textContent = "Tel: " + user.tel;
    text.textContent = "Email: " + user.email;
    gen.textContent = "Gender: " + user.gender;
    li.appendChild(itemImg);
    li.appendChild(h3);
    li.appendChild(h4);
    li.appendChild(text);
    li.appendChild(gen);

    template.appendChild(li);
  });
  userList.appendChild(template);
}

function elementCreator(elementName) {
  const element = document.createElement(elementName);
  return element;
}
