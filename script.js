let input = document.getElementById("input");
let result = document.getElementById("result");

let firstNameInput = document.getElementById("first-name");
let secondNameInput = document.getElementById("second-name");
let genderInput = document.getElementById("gender");

let resetButton = document.getElementById("reset");
let submitButton = document.getElementById("submit");
let entryFail = document.getElementById("entry-fail");
let nameResultBox = document.getElementById("name-result");
let deathResultBox = document.getElementById("death-result");
let resultBox = document.getElementById("result");
let survivalResultBox = document.getElementById("survival-result");

deathResultBox.style.display = "none";
survivalResultBox.style.display = "none";
resetButton.style.display = "none";
entryFail.style.display = "none";

const maleTitleArray = ["King", "Lord", "Prince", "Maester", "Sir", "Squire"];
const femaleTitleArray = ["Queen", "Lady", "Princess"];
const houseArray = [
  "Lannister",
  "Stark",
  "Targaryen",
  "Tyrell",
  "Baratheon",
  "Martell",
  "Tully",
  "Bolton",
  "Greyjoy",
  "Arryn",
  "Frey",
  "Mormont",
  "Clegane",
];
const characterArray = [
  "Daenerys Targaryen",
  "Jon Snow",
  "Arya Stark",
  "Sansa Stark",
  "Ned Stark",
  "Khal Drogo",
  "Jojen Reed",
  "Oberyn Martell",
  "Ramsay Bolton",
  "Joffery Baratheon",
  "Robb Stark",
  "Cersei Lannister",
  "Tyrion Lannister",
  "Mellisandrei",
  "Daario Naharis",
  "Gregor Clegane",
  "Bran Stark",
  "Ygritte",
  "Brienne of Tarth",
  "The Night King",
  "Missandei",
  "Shae",
  "Margaery Tyrell",
  "Theon Greyjoy",
  "Sandor Clegane",
  "Jorah Mormont",
  "Selsword Bron",
  "Tormund Giantsbane",
  "Lord Varys",
  "Catelyn Stark",
  "Hodor",
  "Jaime Lannister",
  "Gilly",
  "Osha",
  "Stannis Baratheon",
  "Gendry",
  "Samwell Tarly",
  "Tommen Baratheon",
  "Talisa Stark",
  "Jaqan H'ghar",
  "Jeor Mormont",
  "Robert Baratheon",
  "Tywin Lannister",
  "Ellaria Sand",
  "Tyene Sand",
  "Greyworm",
  "Rickon Stark",
  "Loras Tyrell",
  "Roose Bolton",
  "Walder Frey",
];
const deathMethodArray = [
  "poisoned by",
  "stabbed by",
  "cursed by",
  "decapitated by",
  "executed by",
  "burned alive by",
  "drowned by",
  "smothered in your sleep by",
  "slain in a trial by combat with",
];
const survivalMethodArray = [
  "poisoning",
  "stabbing",
  "cursing",
  "decapitating",
  "burning alive",
  "drowning",
  "winning a trial by combat to",
  "seducing",
  "winning over",
];

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const getFullName = () => {
  let title;
  let gender = genderInput.value;
  if (gender === "male") {
    title = maleTitleArray[Math.floor(Math.random() * maleTitleArray.length)];
  } else if (gender === "female") {
    title =
      femaleTitleArray[Math.floor(Math.random() * femaleTitleArray.length)];
  } else {
    title = "";
  }

  let firstName = firstNameInput.value;
  let secondName = secondNameInput.value;
  let newName = `${firstName.substring(0, 3)}${secondName.slice(
    secondName.length - 3
  )}`;
  let house = houseArray[Math.floor(Math.random() * houseArray.length)];

  return `${title} ${capitalize(newName)} of house ${house}`;
};

const getDeath = () => {
  deathResultBox.style.display = "block";

  let deathMethod =
    deathMethodArray[Math.floor(Math.random() * deathMethodArray.length)];
  let character =
    characterArray[Math.floor(Math.random() * characterArray.length)];

  resultBox.innerHTML = `You meet the gods after being ${deathMethod} ${character}`;
};
const getSurvival = () => {
  survivalResultBox.style.display = "block";

  let survivalMethod =
    survivalMethodArray[Math.floor(Math.random() * survivalMethodArray.length)];
  let character =
    characterArray[Math.floor(Math.random() * characterArray.length)];

  resultBox.innerHTML = `You aquire favour from the gods by ${survivalMethod} ${character}`;
};

const getResult = () => {
  if (
    firstNameInput.value === "" ||
    secondNameInput.value === "" ||
    genderInput.value === ""
  ) {
    entryFail.style.display = "block";
    setTimeout(() => {
      entryFail.style.display = "none";
    }, 3000);
  } else {
    input.style.display = "none";
    result.style.display = "block";
    resetButton.style.display = "block";

    surviveResult = Math.floor(Math.random() * 2) === 0 ? false : true;

    nameResultBox.innerHTML = getFullName();

    if (surviveResult === false) {
      getDeath();
    } else {
      getSurvival();
    }

    input.style.display = "none";
  }
};

const resetItems = () => {
  input.style.display = "block";
  result.style.display = "none";
  nameResultBox.style.display = "none";
  deathResultBox.style.display = "none";
  survivalResultBox.style.display = "none";
  resetButton.style.display = "none";

  firstNameInput.value = "";
  secondNameInput.value = "";
  genderInput.value = "";
};

submitButton.addEventListener("click", getResult);
resetButton.addEventListener("click", resetItems);
