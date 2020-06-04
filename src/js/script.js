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
    });
    this.el.addEventListener("mouseleave", function (e) {
      cursorImg.setAttribute("scale", "0.07 0.07 0.07");
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

const cameraSet = () => {
  cameraOuter = document.getElementById("camera-outer");
  cameraOuter.setAttribute("position", "0 0 0");
};

window.onload = () => {
  initDevice();
  hideLoading();
  cameraSet();
  collider01 = document.getElementById("collider01");
  //   bg = document.getElementById("360bg");
  //   en = document.getElementById("en01");
  //   collider = document.getElementById("collider01");
};
