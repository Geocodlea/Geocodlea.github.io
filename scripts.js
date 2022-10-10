const name = document.getElementById("name");
const nameResponse = document.getElementById("nameResponse");

name.addEventListener("change", (event) => {
  nameResponse.innerHTML = `Salut ${event.target.value}!`;
});

const clock = document.getElementById("clock");

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

setInterval(() => {
  const data = new Date();
  const ora = addZero(data.getHours());
  const minut = addZero(data.getMinutes());
  const secunda = addZero(data.getSeconds());
  clock.innerHTML = `${ora}:${minut}:${secunda}`;
}, 1000);

const age = document.getElementById("age");
age.addEventListener("change", (event) => {
  const data = new Date();
  const dataNastere = new Date(event.target.value);

  ageResponse.innerHTML = `Vârsta ta este: ${
    data.getYear() - dataNastere.getYear()
  } ani!`;
});

const form = document.querySelector("form");

const image = document.getElementById("memeImg");

async function memeImage() {
  const response = await fetch("https://api.imgflip.com/get_memes");
  const memeImages = await response.json();
  const randomImg = Math.floor(Math.random() * 100);
  const result = await memeImages.data.memes[randomImg].url;
  return result;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nume = document.getElementById("nume");
  const localitate = document.getElementById("localitate");
  const cars = document.getElementById("cars");
  const prog = document.querySelector("[name='prog']:checked");
  const meme = document.getElementById("meme");
  const gentech = document.getElementById("gentech");

  formResponse.innerHTML = `Salut ${nume.value} din ${localitate.value}, se pare că îți plac mașinile: ${cars.value} și limbajul tău preferat de programare este: ${prog.value}. `;
  if (gentech.value < 50) {
    formResponse.append("Generația Tech: 😢");
  } else if (gentech.value < 75) {
    formResponse.append("Generația Tech este cool !");
  } else {
    formResponse.append("Generația Tech este cea mai tare !!!");
  }

  if (meme.checked) {
    memeImage().then((res) => (image.src = res));
    image.style.display = "block";
    image.style.width = "100%";
  }
});

//pag 2
const formName = document.getElementById("formName");
const formAge = document.getElementById("formAge");
const formClock = document.getElementById("formClock");

age.addEventListener("change", (event) => {
  const data = new Date();
  const dataNastere = new Date(event.target.value);
  let ageY = data.getYear() - dataNastere.getYear();
  let ageM = data.getMonth() - dataNastere.getMonth();
  let ageD = data.getDate() - dataNastere.getDate();

  if (dataNastere > data) {
    formAge.innerHTML = `Hmmm, te-ai teleportat din viitor?`;
  } else {
    if (ageD < 0) {
      ageM -= 1;
      ageD += 30;
    }
    if (ageM < 0) {
      ageY -= 1;
      ageM += 12;
    }
    formAge.innerHTML = `Vârsta: ${ageY} ani, ${ageM} luni, ${ageD} zile`;
  }
});

const memeBtn = document.getElementById("memeBtn");

memeBtn.addEventListener("click", function () {
  memeImage().then((res) => (image.src = res));
});

const showClock = document.getElementById("showClock");

showClock.addEventListener("change", function () {
  if (clock.style.display === "none") {
    clock.style.display = "block";
    clock.style.width = "100%";
  } else {
    clock.style.display = "none";
  }
});

window.addEventListener("load", () => {
  let nameSpan = document.getElementById("nameSpan");

  name.addEventListener("input", (event) => {
    nameSpan = event.target.value;
    formName.innerHTML = `Salut ${nameSpan}`;
  });
});
