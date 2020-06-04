import "aframe";

let mobileFlag = false;
let bg;
let en;
let collider01;

AFRAME.registerComponent("cursor-listener", {
  init: function () {
    this.el.addEventListener("click", function (evt) {
      console.log("click");
      //   bg.emit("foo");
      //   en.parentNode.removeChild(en);
      //   collider.parentNode.removeChild(collider);
    });
  },
});

const initDevice = () => {
  let regexp = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  windowWidth = document.documentElement.clientWidth;
  windowHeight = document.documentElement.clientHeight;
  if (
    window.navigator.userAgent.search(regexp) !== -1 ||
    windowWidth < windowHeight
  ) {
    mobileFlag = true;
    console.log("📱");
  } else {
    mobileFlag = false;
    console.log("💻");
  }
  resposiveController();
};

window.onload = () => {
  initDevice();
  collider01 = document.getElementById("collider01");
  //   bg = document.getElementById("360bg");
  //   en = document.getElementById("en01");
  //   collider = document.getElementById("collider01");
};
