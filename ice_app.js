// Select Cone
function addCone() {
  var image = document.createElement("img");
  var div = document.querySelector("#cone");
  image.src = "./img/cone.png";
  div.appendChild(image);
  image.setAttribute("id", "cone");

  var h4 = document.createElement("h4");
  var textAnswer = document.createTextNode("1.00");
  h4.setAttribute("id", "priceCone");
  h4.appendChild(textAnswer);
  document.querySelector("#priceCone").appendChild(h4);
}
function addCup() {
  var image = document.createElement("img");
  var div = document.querySelector("#cone");
  image.src = "./img/cup.png";
  div.appendChild(image);
  image.setAttribute("id", "cone");

  var h4 = document.createElement("h4");
  var textAnswer = document.createTextNode("1.50");
  h4.setAttribute("id", "priceCone");
  h4.appendChild(textAnswer);
  document.querySelector("#priceCone").appendChild(h4);
}
// reset icecream
function changeCone() {
  var select = document.querySelector("#cone");
  select.removeChild(select.lastChild);
  var select = document.querySelector("#priceCone");
  select.removeChild(select.lastChild);
}

// Select Flavours
function addBo() {
  var image = document.createElement("img");
  var div = document.querySelector("#scoop");
  image.src = "./img/bloodOrange.png";
  div.appendChild(image);
  image.setAttribute("id", "scoop");

  var priceScoop = 1.0; // var num toFixed
  var h4 = document.createElement("h4");
  var textAnswer = document.createTextNode(priceScoop);
  h4.setAttribute("id", "priceIce");
  h4.appendChild(textAnswer);
  document.querySelector("#priceIce").appendChild(h4);
  console.log("textAnswer" + textAnswer);
}
function addLe() {
  var image = document.createElement("img");
  var div = document.querySelector("#scoop");
  image.src = "./img/lemon.png";
  div.appendChild(image);
  image.setAttribute("id", "scoop");

  var priceScoop = 1.0;
  var h4 = document.createElement("h4");
  var textAnswer = document.createTextNode(priceScoop);
  h4.setAttribute("id", "priceIce");
  h4.appendChild(textAnswer);
  document.querySelector("#priceIce").appendChild(h4);
}
function addMa() {
  var image = document.createElement("img");
  var div = document.querySelector("#scoop");
  image.src = "./img/mango.png";
  div.appendChild(image);
  image.setAttribute("id", "scoop");

  var priceScoop = 1.25;
  var h4 = document.createElement("h4");
  var textAnswer = document.createTextNode(priceScoop);
  h4.setAttribute("id", "priceIce");
  h4.appendChild(textAnswer);
  document.querySelector("#priceIce").appendChild(h4);
}
function addPa() {
  var image = document.createElement("img");
  var div = document.querySelector("#scoop");
  image.src = "./img/passion.png";
  div.appendChild(image);
  image.setAttribute("id", "scoop");

  var priceScoop = 1.5;
  var h4 = document.createElement("h4");
  var textAnswer = document.createTextNode(priceScoop);
  h4.setAttribute("id", "priceIce");
  h4.appendChild(textAnswer);
  document.querySelector("#priceIce").appendChild(h4);
}
function addRa() {
  var image = document.createElement("img");
  var div = document.querySelector("#scoop");
  image.src = "./img/raspberry.png";
  div.appendChild(image);
  image.setAttribute("id", "scoop");

  var priceScoop = 1.25;
  var h4 = document.createElement("h4");
  var textAnswer = document.createTextNode(priceScoop);
  h4.setAttribute("id", "priceIce");
  h4.appendChild(textAnswer);
  document.querySelector("#priceIce").appendChild(h4);
}

// reset icecream
function oneStepBack() {
  var select = document.querySelector("#scoop");
  select.removeChild(select.lastChild);
  var select = document.querySelector("#priceIce");
  select.removeChild(select.lastChild);
}

// calculate price
function calculatePrice() {
  price = document.querySelector("#price").innerHTML;
  var price = priceCone + priceIce;
  document.querySelector("#price").innerHTML = price;
}
