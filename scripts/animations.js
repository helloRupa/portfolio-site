const animatedAll = document.querySelectorAll(".animate-opacity");

const changeOpacity = function () {
  animatedAll.forEach((el) => {
    if (el.getBoundingClientRect().top <= window.innerHeight - 250) {
      el.style.opacity = 1;

      if (el === animatedAll[animatedAll.length - 1]) {
        console.log("removing");
        window.removeEventListener("scroll", changeOpacity);
      }
    }
  });
};

window.addEventListener("scroll", changeOpacity);
