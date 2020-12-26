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
  tick: 0,
};

const rotateInnerCircle = function () {
  if (timers.tick % 4 === 0) {
    ++rotationValues.innerCircle[1];
  }
};

const rotateOuterCircle = function () {
  if (timers.tick % 8 === 0) {
    --rotationValues.outerCircle[1];
  }
};

const rotateOrangeArc = function () {
  if (timers.tick % 2 === 0) {
    --rotationValues.orangeArc[1];
  }
};

const rotateWhiteArcMed = function () {
  if (timers.tick % 3 === 0) {
    ++rotationValues.whiteArcMed[1];
  }
};

const rotateWhiteArcLong = function () {
  if (timers.tick % 5 === 0) {
    --rotationValues.whiteArcLong[1];
  }
};

const rotateBluePieLarge = function () {
  if (timers.tick % 5 === 0) {
    --rotationValues.bluePieLarge[1];
  }
};

const rotateBlackPie = function () {
  if (timers.tick % 2 === 0) {
    ++rotationValues.blackPie[1];
  }
};

const rotateBluePieThin = function () {
  if (timers.tick % 2 === 0) {
    --rotationValues.bluePieThin[1];
  }
};

const rotateBluePieSmall = function () {
  if (timers.tick % 1 === 0) {
    ++rotationValues.bluePieSmall[1];
  }
};

const rotateWholePie = function () {
  if (timers.tick % 1 === 0) {
    ++rotationValues.wholePie[1];
  }
};

const setRotation = function (el, value) {
  el.style.rotate = `${value}deg`;
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

const rotate = function () {
  timers.all = setInterval(() => {
    ++timers.tick;
    rotationFunctions.forEach((func) => func());

    for (const key in rotationValues) {
      setRotation(rotationValues[key][0], rotationValues[key][1]);
    }
  }, 10);
};

const stopRotate = function () {
  clearInterval(timers.all);
};
