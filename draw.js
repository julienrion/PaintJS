// Variables
const body = document.querySelector("body");
const svg = document.querySelector(".geometryContainer");
const rectButton = document.querySelector(".spawnRectangle");
const squareButton = document.querySelector(".spawnSquare");
const circleButton = document.querySelector(".spawnCircle");
const ellipseButton = document.querySelector(".spawnEllipse");
const textBoxButton = document.querySelector(".spawnTextBox");
const colors = document.querySelectorAll(".color");
const save = document.querySelector(".save");

const imgConverted = document.getElementById("imgConverted");
const container = document.getElementById("capture");
const overlay = document.querySelector(".overlay");
const fonction = document.querySelector(".fonction");
const reset = document.querySelector(".Reset");
const shot = document.querySelector(".screenshot");

const suppButton = document.querySelector(".suppButton");
const delButton = document.querySelector(".closeCanvas");
const downloadButton = document.querySelector(".download");
const downPNG = document.querySelector(".PNG");

const strokeColor = document.getElementById("strokeColor");
const fillColor = document.getElementById("fillColor");

let isSelect = false;
const mouse = {
  x: undefined,
  y: undefined,
};
let canvasCompteur = 0;
let rect;
let square;
let circle;
let ellipse;
let elements = [];
let rects = [];
let squares = [];
let circles = [];
let ellipses = [];
let textBoxs = [];
let resizer;
let compteur;
let compteur2;
let compteur3;
let compteur4;
let compteur5;
let isLoaded = false;
let coordonate = ["ne", "nw", "sw", "se"];
// ---------------------------------------------------------------------------

// SAUVEGARDE

// Retrieve the object from storage
if (localStorage.getItem("o") != null) {
  let retrievedObject = localStorage.getItem("o");
  let oSave = JSON.parse(retrievedObject);
  for (const classe in oSave) {
    let div = document.createElement("div");
    div.className = classe;
    div.style.cssText = oSave[classe];
    document.querySelector(".screenshotable").appendChild(div);
    let divNe = document.createElement("div");
    let divNw = document.createElement("div");
    let divSw = document.createElement("div");
    let divSe = document.createElement("div");
    divNe.className = "resizer ne hidden";
    divNw.className = "resizer nw hidden";
    divSw.className = "resizer sw hidden";
    divSe.className = "resizer se hidden";
    divNe.style.background = fillColor.value;
    divNw.style.background = fillColor.value;
    divSw.style.background = fillColor.value;
    divSe.style.background = fillColor.value;
    div.appendChild(divNe);
    div.appendChild(divNw);
    div.appendChild(divSw);
    div.appendChild(divSe);
  }
  rects = Array.from(document.querySelectorAll(".rect"));
  squares = Array.from(document.querySelectorAll(".square"));
  circles = Array.from(document.querySelectorAll(".circle"));
  ellipses = Array.from(document.querySelectorAll(".ellipse"));
  textBoxs = Array.from(document.querySelectorAll(".textbox"));
  isLoaded = true;
}

// S'il existe déjà des éléments, on initialise les compteurs au nombre d'objets existant sinon on les initiatives a 0.
if (isLoaded) {
  compteur = document.querySelectorAll(".rect").length;
  compteur2 = document.querySelectorAll(".square").length;
  compteur3 = document.querySelectorAll(".circle").length;
  compteur4 = document.querySelectorAll(".ellipse").length;
  compteur5 = 0;
} else {
  compteur = 0;
  compteur2 = 0;
  compteur3 = 0;
  compteur4 = 0;
  compteur5 = 0;
}

// --------------------------------------------------------------------------------

// FONCTIONS

// Faire apparaître un rectangle
function drawRect() {
  rect = document.createElement("div");
  rect.style.left = 258 + "px";
  rect.style.top = 243 + "px";
  rect.style.height = 60 + "px";
  rect.style.width = 120 + "px";
  // rect.style.borderRadius = 50 + "%"
  rect.style.background = fillColor.value;
  rect.style.border = "3px solid";
  rect.style.borderColor = strokeColor.value;
  rect.classList.add("el");
  rect.classList.add("rect");
  rect.classList.add("first");
  rect.classList.add(`${compteur}`);
  compteur++;

  for (let i = 0; i < 4; i++) {
    resizer = document.createElement("div");
    resizer.classList.add("resizer", `${coordonate[i]}`);
    resizer.classList.add("hidden");
    resizer.style.background = fillColor.value;
    rect.appendChild(resizer);
  }
  rects.push(rect);
  container.appendChild(rect);
}

// Faire apparaître un carrer
function drawSquare() {
  square = document.createElement("div");
  square.style.left = 258 + "px";
  square.style.top = 243 + "px";
  square.style.height = 80 + "px";
  square.style.width = 80 + "px";
  square.style.background = fillColor.value;
  square.style.border = "3px solid";
  square.style.borderColor = strokeColor.value;
  square.classList.add("el");
  square.classList.add("square");
  square.classList.add("second");
  square.classList.add(`${compteur2}`);
  compteur2++;

  for (let i = 0; i < 4; i++) {
    resizer = document.createElement("div");
    resizer.classList.add("resizer", `${coordonate[i]}`);
    resizer.classList.add("hidden");
    resizer.style.background = fillColor.value;
    square.appendChild(resizer);
  }
  squares.push(square);
  container.appendChild(square);
}

// Faire apparaître un cercle
function drawCircle() {
  circle = document.createElement("div");
  circle.style.left = 258 + "px";
  circle.style.top = 243 + "px";
  circle.style.height = 80 + "px";
  circle.style.width = 80 + "px";
  circle.style.borderRadius = 50 + "%";
  circle.style.background = fillColor.value;
  circle.style.border = "3px solid";
  circle.style.borderColor = strokeColor.value;
  circle.classList.add("el");
  circle.classList.add("circle");
  circle.classList.add("third");
  circle.classList.add(`${compteur3}`);
  compteur3++;

  for (let i = 0; i < 4; i++) {
    resizer = document.createElement("div");
    resizer.classList.add("resizer", `${coordonate[i]}`);
    resizer.classList.add("hidden");
    resizer.style.background = fillColor.value;
    circle.appendChild(resizer);
  }
  circles.push(circle);
  container.appendChild(circle);
}

// Faire apparaître une ellipse
function drawEllipse() {
  ellipse = document.createElement("div");
  ellipse.style.left = 258 + "px";
  ellipse.style.top = 243 + "px";
  ellipse.style.height = 60 + "px";
  ellipse.style.width = 120 + "px";
  ellipse.style.borderRadius = 50 + "%";
  ellipse.style.background = fillColor.value;
  ellipse.style.border = "3px solid";
  ellipse.style.borderColor = strokeColor.value;
  ellipse.classList.add("el");
  ellipse.classList.add("ellipse");
  ellipse.classList.add("four");
  ellipse.classList.add(`${compteur4}`);
  compteur4++;

  for (let i = 0; i < 4; i++) {
    resizer = document.createElement("div");
    resizer.classList.add("resizer", `${coordonate[i]}`);
    resizer.classList.add("hidden");
    resizer.style.background = fillColor.value;
    ellipse.appendChild(resizer);
  }
  ellipses.push(ellipse);
  container.appendChild(ellipse);
}

// Faire apparaître une boite de text
function textBoxGenerator() {
  div = document.createElement("div");
  div.classList.add("el");
  div.classList.add("textbox");
  div.classList.add("five");
  div.style.width = "300px";
  div.style.height = "100px";
  div.style.left = 258 + "px";
  div.style.top = 243 + "px";
  div.classList.add(`${compteur5}`);
  compteur5++;
  textbox = document.createElement("textarea");
  textbox.classList.add("textzone");
  div.appendChild(textbox);
  textbox.style.height = div.style.height - 30 + "px";
  // textbox.style.top = div.style.top - 30 + "px"
  textbox.style.width = div.style.width - 30 + "px";

  textBoxs.push(div);
  container.appendChild(div);
}

elements.push(rects);
elements.push(squares);
elements.push(circles);
elements.push(ellipses);
elements.push(textBoxs);

// Récupérer le style d'un élément
function getStyle(a, b) {
  return window.getComputedStyle(b, null)[a];
}

// fonction qui permet de déplacer les éléments
function startPosition(e) {
  window.addEventListener("mouseup", finishedPosition);

  window.addEventListener("mousemove", move);
  let prevX = e.clientX;
  let prevY = e.clientY;
  function move(e) {
    let newX = prevX - e.clientX;
    let newY = prevY - e.clientY;
    let index;
    let index2;

    index = e.target.classList[2];
    if (index === "first") {
      index = 0;
    } else if (index === "second") {
      index = 1;
    } else if (index === "third") {
      index = 2;
    } else if (index === "four") {
      index = 3;
    } else if (index === "five") {
      index = 4;
    }
    index2 = e.target.classList[3];

    if (e.target.classList[0] === "el") {
      el = elements[index][index2];
      const rect = el.getBoundingClientRect();
      el.style.left = rect.left - newX + "px";
      el.style.top = rect.top - newY + "px";

      prevX = e.clientX;
      prevY = e.clientY;
    } else {
      return;
    }
  }

  function finishedPosition() {
    window.removeEventListener("mousemove", move);
    window.removeEventListener("mouseup", finishedPosition);
  }
}
let parentIndex;
let parentIndex2;

// fonction qui permet de redimensionner
function resizeDown(e) {
  target = e.target;
  classCo = e.target.classList[0];
  if (classCo === "resizer") {
    classCo = e.target.classList.value;
  }
  prevX = e.clientX;
  prevY = e.clientY;
  let resizerSelect;
  if (classCo === "el") {
    resizerSelect = target.childNodes;
    target.childNodes.forEach((element) => {
      element.classList.remove("hidden");
      isSelect = true;
    });
  }
  // On regarder si la sélection correspond à un des resizers
  if (
    classCo === "resizer nw" ||
    classCo === "resizer ne" ||
    classCo === "resizer sw" ||
    classCo === "resizer se"
  ) {
    window.addEventListener("mousemove", resizeMove);
    window.addEventListener("mouseup", mouseUp);

    parentIndex = target.parentNode.classList[2];
    if (parentIndex === "first") {
      parentIndex = 0;
    } else if (parentIndex === "second") {
      parentIndex = 1;
    } else if (parentIndex === "third") {
      parentIndex = 2;
    } else if (parentIndex === "four") {
      parentIndex = 3;
    } else if (parentIndex === "five") {
      parentIndex = 4;
    }
    parentIndex2 = target.parentNode.classList[3];

    function resizeMove(e) {
      if (classCo === "resizer se") {
        elements[parentIndex][parentIndex2].style.width =
          parseInt(elements[parentIndex][parentIndex2].style.width) -
          (prevX - e.clientX) +
          "px";
        elements[parentIndex][parentIndex2].style.height =
          parseInt(elements[parentIndex][parentIndex2].style.height) -
          (prevY - e.clientY) +
          "px";
      } else if (classCo === "resizer sw") {
        elements[parentIndex][parentIndex2].style.width =
          parseInt(elements[parentIndex][parentIndex2].style.width) +
          (prevX - e.clientX) +
          "px";
        elements[parentIndex][parentIndex2].style.height =
          parseInt(elements[parentIndex][parentIndex2].style.height) -
          (prevY - e.clientY) +
          "px";
        elements[parentIndex][parentIndex2].style.left =
          parseInt(elements[parentIndex][parentIndex2].style.left) -
          (prevX - e.clientX) +
          "px";
      } else if (classCo === "resizer ne") {
        elements[parentIndex][parentIndex2].style.width =
          parseInt(elements[parentIndex][parentIndex2].style.width) -
          (prevX - e.clientX) +
          "px";
        elements[parentIndex][parentIndex2].style.height =
          parseInt(elements[parentIndex][parentIndex2].style.height) +
          (prevY - e.clientY) +
          "px";
        elements[parentIndex][parentIndex2].style.top =
          parseInt(elements[parentIndex][parentIndex2].style.top) -
          (prevY - e.clientY) +
          "px";
      } else if (classCo === "resizer nw") {
        elements[parentIndex][parentIndex2].style.width =
          parseInt(elements[parentIndex][parentIndex2].style.width) +
          (prevX - e.clientX) +
          "px";
        elements[parentIndex][parentIndex2].style.height =
          parseInt(elements[parentIndex][parentIndex2].style.height) +
          (prevY - e.clientY) +
          "px";
        elements[parentIndex][parentIndex2].style.top =
          parseInt(elements[parentIndex][parentIndex2].style.top) -
          (prevY - e.clientY) +
          "px";
        elements[parentIndex][parentIndex2].style.left =
          parseInt(elements[parentIndex][parentIndex2].style.left) -
          (prevX - e.clientX) +
          "px";
      }

      prevX = e.clientX;
      prevY = e.clientY;

      if (
        target.parentElement.classList.contains("square") ||
        target.parentElement.classList.contains("circle")
      ) {
        elements[parentIndex][parentIndex2].style.width =
          elements[parentIndex][parentIndex2].style.height;
      }
    }

    function mouseUp() {
      window.removeEventListener("mousemove", resizeMove);
      window.removeEventListener("mouseup", mouseUp);
    }
  }
}

window.addEventListener("mousedown", startPosition);
window.addEventListener("mousedown", resizeDown);

let color;

function showColor(e) {
  console.log(e);
  color = e.target.id;
  if (isSelect) {
    elements[parentIndex][parentIndex2].style.background = color;
  }
}

function saveIt() {
  let elementsArray = document.querySelectorAll(".el");
  let o = new Object();

  elementsArray.forEach(function (element) {
    o[element.classList.value] = element.style.cssText;
  });
  localStorage.setItem("o", JSON.stringify(o));
}
function resetIt() {
  localStorage.clear();
  location.reload();
  canvasCompteur = 0;
}

function screenIt() {
  if (canvasCompteur < 1) {
    html2canvas(document.querySelector("#capture")).then((canvas) => {
      const NewCanvas = document.body.appendChild(canvas);
      NewCanvas.classList.add("image");
      const img = NewCanvas.toDataURL("image/png");
      console.log(img);
      imgConverted.src = img;
      imgConverted.style.display = "block";
      suppButton.style.display = "block";
      canvasCompteur++;
    });
  }
}

function closeIt() {
  body.childNodes[21].remove();
  console.log(body.childNodes);
  canvasCompteur = 0;
  imgConverted.style.display = "none";
  suppButton.style.display = "none";
}

function downloadIt() {
  const a = document.createElement("a");
  a.href = imgConverted.src;
  console.log(imgConverted.src);
  a.download = "canvas-image.png";
  a.click();
}

function downITPNG() {
  const a = document.createElement("a");
  a.href = imgConverted.src;
  console.log(imgConverted.src);
  a.download = "canvas-image.pdf";
  a.click();
}

// Event Listener
shot.addEventListener("click", screenIt);
downloadButton.addEventListener("click", downloadIt);
downPNG.addEventListener("click", downITPNG);
delButton.addEventListener("click", closeIt);
save.addEventListener("click", saveIt);
reset.addEventListener("click", resetIt);
colors.forEach((color) => {
  color.addEventListener("click", showColor);
});

rectButton.addEventListener("click", function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
  drawRect();
});

squareButton.addEventListener("click", function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
  drawSquare();
});

circleButton.addEventListener("click", function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
  drawCircle();
});

ellipseButton.addEventListener("click", function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
  drawEllipse();
});

textBoxButton.addEventListener("click", function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
  textBoxGenerator();
});

// --------------------------------------------------------------------------------
// test
const arial = document.getElementById("arial");
const roboto = document.getElementById("roboto");
const sans_serif = document.getElementById("sans-serif");
function changeFontStyle(e) {
  body.style.fontFamily = e.target.value;
  console.log(body.style.fontFamily);
}
arial.addEventListener("click", changeFontStyle);
roboto.addEventListener("click", changeFontStyle);
sans_serif.addEventListener("click", changeFontStyle);
