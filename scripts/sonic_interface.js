const outerCircles = document.querySelectorAll(".outer-circles");

const rotationValues = {
  orangeArc: [document.querySelector(".arch-container-orange"), 46, -0.85],
  whiteArcMed: [document.querySelector(".arch-container-med"), -22, 0.33],
  whiteArcLong: [document.querySelector(".arch-container-long"), -149, -0.2],
  bluePieLarge: [document.querySelector(".pie-container-large"), 88.4, 0.55],
  blackPie: [document.querySelector(".pie-container-black"), 151.4, 1.1],
  bluePieThin: [
    document.querySelector(".pie-container-blue-thin"),
    222.4,
    -0.65,
  ],
  bluePieSmall: [document.querySelector(".pie-container-blue-small"), 319.4, 1],
  outerCircle: [outerCircles[0], 0, -0.25],
  innerCircle: [outerCircles[1], 0, 0.55],
  wholePie: [document.querySelector(".whole-pie"), 0, 1.25],
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

const calculateRotation = function (key, dt) {
  rotationValues[key][1] += dt * rotationValues[key][2];
  resetRotation(key);
};

const setRotation = function (el, value) {
  el.style.transform = `rotate(${value}deg)`;
};

const step = function (timestamp) {
  const dt = (timestamp || 0) - (timers.lastTime || timestamp || 0);
  const divided = dt / 16;

  for (const key in rotationValues) {
    calculateRotation(key, divided);
    setRotation(rotationValues[key][0], rotationValues[key][1]);
  }

  timers.lastTime = timestamp || 0;
  timers.all = window.requestAnimationFrame(step);
};

const stopAnimation = function () {
  timers.lastTime = null;
  window.cancelAnimationFrame(timers.all);
};
