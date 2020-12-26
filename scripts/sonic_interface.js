const outerCircles = document.querySelectorAll(".outer-circles");

const rotationValues = {
  orangeArc: [document.querySelector(".arch-container-orange"), 46],
  whiteArcMed: [document.querySelector(".arch-container-med"), -22],
  whiteArcLong: [document.querySelector(".arch-container-long"), -149],
  bluePieLarge: [document.querySelector(".pie-container-large"), 88.4],
  blackPie: [document.querySelector(".pie-container-black"), 151.4],
  bluePieThin: [document.querySelector(".pie-container-blue-thin"), 222.4],
  bluePieSmall: [document.querySelector(".pie-container-blue-small"), 319.4],
  outerCircle: [outerCircles[0], 0],
  innerCircle: [outerCircles[1], 0],
  wholePie: [document.querySelector(".whole-pie"), 0],
};

const timers = {
  all: null,
  lastTime: null,
};

const resetRotation = function (key) {
  if (rotationValues[key][1] > Math.abs(360)) {
    rotationValues[key][1] = 0;
  }
};

const rotateInnerCircle = function (dt) {
  rotationValues.innerCircle[1] += dt * 0.55;
  resetRotation("innerCircle");
};

const rotateOuterCircle = function (dt) {
  rotationValues.outerCircle[1] -= dt * 0.25;
  resetRotation("outerCircle");
};

const rotateOrangeArc = function (dt) {
  rotationValues.orangeArc[1] -= dt * 0.85;
  resetRotation("orangeArc");
};

const rotateWhiteArcMed = function (dt) {
  rotationValues.whiteArcMed[1] += dt * 0.33;
  resetRotation("whiteArcMed");
};

const rotateWhiteArcLong = function (dt) {
  rotationValues.whiteArcLong[1] -= dt * 0.2;
  resetRotation("whiteArcLong");
};

const rotateBluePieLarge = function (dt) {
  rotationValues.bluePieLarge[1] += dt * 0.55;
  resetRotation("bluePieLarge");
};

const rotateBlackPie = function (dt) {
  rotationValues.blackPie[1] += dt * 1.1;
  resetRotation("blackPie");
};

const rotateBluePieThin = function (dt) {
  rotationValues.bluePieThin[1] -= dt * 0.65;
  resetRotation("bluePieThin");
};

const rotateBluePieSmall = function (dt) {
  rotationValues.bluePieSmall[1] += dt * 1;
  resetRotation("bluePieSmall");
};

const rotateWholePie = function (dt) {
  rotationValues.wholePie[1] += dt * 1.25;
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
  const dt = (timestamp || 0) - (timers.lastTime || timestamp || 0);
  const divided = dt / 16;

  rotationFunctions.forEach((func) => func(divided));
  timers.lastTime = timestamp || 0;

  for (const key in rotationValues) {
    setRotation(rotationValues[key][0], rotationValues[key][1]);
  }

  timers.all = window.requestAnimationFrame(step);
};

const stopAnimation = function () {
  timers.lastTime = null;
  window.cancelAnimationFrame(timers.all);
};
