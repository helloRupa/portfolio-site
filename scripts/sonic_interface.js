const outerCircles = document.querySelectorAll(".outer-circles");

const rotationValues = {
  orangeArc: [document.querySelector(".arch-container-orange"), 46],
  whiteArcMed: [document.querySelector(".arch-container-med"), -22],
  whiteArcLong: [document.querySelector(".arch-container-long"), -149],
  bluePieLarge: [document.querySelector(".pie-container-large"), 88.4],
  blackPie: [document.querySelector(".pie-container-black"), 151.4],
  bluePieThin: [document.querySelector(".pie-container-blue-thin"), 222.4],
  bluePieSmall: [document.querySelector(".pie-container-blue-small"), 319.4],
  outerCircle: [outerCircles[1], 0],
  innerCircle: [outerCircles[0], 0],
  wholePie: [document.querySelector(".whole-pie"), 0],
};

const timers = {
  all: null,
};

const resetRotation = function (key) {
  if (rotationValues[key][1] > Math.abs(360)) {
    rotationValues[key][1] = 0;
  }
};

const rotateInnerCircle = function () {
  rotationValues.innerCircle[1] += 0.5;
  resetRotation("innerCircle");
};

const rotateOuterCircle = function () {
  rotationValues.outerCircle[1] -= 0.75;
  resetRotation("outerCircle");
};

const rotateOrangeArc = function () {
  rotationValues.orangeArc[1] -= 0.5;
  resetRotation("orangeArc");
};

const rotateWhiteArcMed = function () {
  rotationValues.whiteArcMed[1] += 0.33;
  resetRotation("whiteArcMed");
};

const rotateWhiteArcLong = function () {
  rotationValues.whiteArcLong[1] -= 0.2;
  resetRotation("whiteArcLong");
};

const rotateBluePieLarge = function () {
  rotationValues.bluePieLarge[1] += 0.4;
  resetRotation("bluePieLarge");
};

const rotateBlackPie = function () {
  rotationValues.blackPie[1] += 0.75;
  resetRotation("blackPie");
};

const rotateBluePieThin = function () {
  rotationValues.bluePieThin[1] -= 0.5;
  resetRotation("bluePieThin");
};

const rotateBluePieSmall = function () {
  ++rotationValues.bluePieSmall[1];
  resetRotation("bluePieSmall");
};

const rotateWholePie = function () {
  ++rotationValues.wholePie[1];
  resetRotation("wholePie");
};

const setRotation = function (el, value) {
  el.style.transform = `rotate(${value}deg)`;
};

const rotationFunctions = [
  rotateOuterCircle,
  rotateInnerCircle,
  rotateOrangeArc,
  rotateWhiteArcMed,
  rotateWhiteArcLong,
  rotateBluePieLarge,
  rotateBlackPie,
  rotateBluePieThin,
  rotateBluePieSmall,
  rotateWholePie,
];

const step = function (timestamp) {
  rotationFunctions.forEach((func) => func());

  for (const key in rotationValues) {
    setRotation(rotationValues[key][0], rotationValues[key][1]);
  }

  timers.all = window.requestAnimationFrame(step);
};

const stopAnimation = function () {
  window.cancelAnimationFrame(timers.all);
};
