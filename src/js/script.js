import "aframe";
import "jquery";
import "popper.js";
import "bootstrap";
import "@fortawesome/fontawesome";
import "@fortawesome/fontawesome-free-solid";

let mobileFlag = false;
let bg;
let en;
let collider01;
let windowWidth;
let windowHeight;
let loading;
let loadingTxt;
let cameraOuter;
let cursorImg;
let firstModal;
let firstModalBtn;

AFRAME.registerComponent("cursor-listener", {
  init: function () {
    cursorImg = document.getElementById("cursor-img");
    this.el.addEventListener("click", function (evt) {
      console.log("click");
      location.href = "../works/towatakaya/001.html";
    });
    this.el.addEventListener("mouseenter", function (e) {
      console.log("mouseenter");
      cursorImg.setAttribute("scale", "0.1 0.1 0.1");
      cursorImg.setAttribute(
        "animation",
        "property: opacity; from: 1.0; to: 0.0; dur: 500; loop: true; easing: linear; dir: alternate"
      );
    });
    this.el.addEventListener("mouseleave", function (e) {
      cursorImg.setAttribute("scale", "0.07 0.07 0.07");
      cursorImg.removeAttribute("animation");
      cursorImg.setAttribute("opacity", 1.0);
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
};

const hideLoading = () => {
  loading = document.getElementById("loading");
  loadingTxt = document.getElementById("loading-txt");
  loadingTxt.style.display = "none";
  loading.classList.add("js-up");
};

const firstModalClose = () => {
  firstModal = document.getElementById("first-modal");
  firstModalBtn = document.getElementById("first-modal-btn");
  firstModalBtn.addEventListener("click", () => {
    deviceOrien();
    firstModal.classList.add("is-fadeout");
  });
};

const deviceOrien = () => {
  if (mobileFlag === true) {
    if (
      DeviceMotionEvent &&
      DeviceMotionEvent.requestPermission &&
      typeof DeviceMotionEvent.requestPermission === "function"
    ) {
      DeviceMotionEvent.requestPermission();
    }
    if (
      DeviceOrientationEvent &&
      DeviceOrientationEvent.requestPermission &&
      typeof DeviceOrientationEvent.requestPermission === "function"
    ) {
      DeviceOrientationEvent.requestPermission();
    }
  }
};

window.onload = () => {
  initDevice();
  hideLoading();
  firstModalClose();
  //   collider01 = document.getElementById("collider01");
  //   bg = document.getElementById("360bg");
  //   en = document.getElementById("en01");
  //   collider = document.getElementById("collider01");
};
