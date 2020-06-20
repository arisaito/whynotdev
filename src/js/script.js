import "aframe";
import "jquery";
import "popper.js";
import "bootstrap";
import "@fortawesome/fontawesome";
import "@fortawesome/fontawesome-free-solid";

let mobileFlag = false;
let colliderScene1 = [];
let colliderScene2 = [];
let colliderScene3 = [];
let collider01;
let collider02;
let collider03;
let collider04;
let collider05;
// let collider06;
// let collider07;
let ring1;
let ringScene1to2;
let ringScene1to3;
let ringScene = [];
let ringSceneBox1to2;
let ringSceneBox1to3;
let ringBox = [];
let bg1;
let bg2;
let bg3;

let windowWidth;
let windowHeight;
let loading;
let loadingTxt;
let cursorImg;
let firstModal;
let firstModalBtn;

let hamburger;
let hamburgerLine;
let hamburgerFlag = false;
let navContent;
let navContentLink;
let sequential;
let usageLink;
let usage;
let usageFlag = false;

AFRAME.registerComponent("cursor-listener", {
  init: function () {
    cursorImg = document.getElementById("cursor-img");
    // this.el.addEventListener("click", function (evt) {
    //   // location.href = "../works/towatakaya/001.html";
    // });
    this.el.addEventListener("mouseenter", mouseEnter);
    this.el.addEventListener("mouseleave", mouseLeave);
    this.el.addEventListener("click", clickEvent);
  },
});
AFRAME.registerComponent("cursor-listener-scene", {
  init: function () {
    cursorImg = document.getElementById("cursor-img");
    ring1 = document.getElementById("ring1");

    ringScene1to2 = document.getElementById("ring-scene-1to2");
    ringScene1to3 = document.getElementById("ring-scene-1to3");
    ringScene.push(ringScene1to2, ringScene1to3);

    ringSceneBox1to2 = document.getElementById("ring-scene-box-1to2");
    ringSceneBox1to3 = document.getElementById("ring-scene-box-1to3");
    ringBox.push(ringSceneBox1to2, ringSceneBox1to3);

    this.el.addEventListener("mouseenter", mouseEnter);
    this.el.addEventListener("mouseleave", mouseLeave);
    ringScene.forEach((el) => {
      el.addEventListener("click", sceneSwitch, false);
    });
    // ringScene1to2.addEventListener("click", sceneSwitch, false);
    // ringScene1to3.addEventListener("click", sceneSwitch, false);
  },
});

const mouseEnter = () => {
  console.log("mouseenter");
  cursorImg.setAttribute("scale", "0.1 0.1 0.1");
  cursorImg.setAttribute(
    "animation",
    "property: opacity; from: 1.0; to: 0.0; dur: 500; loop: true; easing: linear; dir: alternate"
  );
};

const mouseLeave = () => {
  cursorImg.setAttribute("scale", "0.07 0.07 0.07");
  cursorImg.removeAttribute("animation");
  cursorImg.setAttribute("opacity", 1.0);
};

const clickEvent = (e) => {
  colliderScene1 = document.querySelectorAll(".collider-scene1");
  console.log(e.target);
  console.log("collider");
  console.log("click");
};

const sceneSwitch = (e) => {
  let ringTarget = e.target;

  if (ringTarget === ringBox[0]) {
    sceneManager(1, 2);
  } else if (ringTarget === ringBox[1]) {
    sceneManager(1, 3);
  }
};

const sceneManager = (fir, nex) => {
  bg1 = document.getElementById("bg1");
  bg2 = document.getElementById("bg2");
  console.log("sceneManager");
  if (fir === 1) {
    colliderScene1.forEach((el) => {
      el.removeAttribute("cursor-listener");
      el.removeEventListener("mouseenter", mouseEnter);
      el.removeEventListener("click", clickEvent);
      mouseLeave();
    });
    ringScene.forEach((el) => {
      el.removeAttribute("cursor-listener-scene");
      el.removeEventListener("mouseenter", mouseEnter);
      el.removeEventListener("click", sceneSwitch, false);
    });
    bg1.setAttribute("mixin", "fadeout");
    ring1.setAttribute("mixin", "out");
    // ringScene1to2.removeEventListener
    // ringScene1to3.removeEventListener("click", sceneSwitch, false);
  } else if (fir === 2) {
    console.log("2から");
  } else if (fir === 3) {
    console.log("3から");
  }
  if (nex === 2) {
    console.log("scene2");
    bg2.setAttribute("mixin", "fadein");
  }
  if (nex === 3) {
    console.log("scene3");
  }
};

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

const hamburgerController = () => {
  hamburger = document.getElementById("hamburger");
  hamburgerLine = document.querySelectorAll(".c-hamburger__line");
  navContent = document.getElementById("ham-nav");
  navContentLink = document.querySelectorAll(".ham-nav__item");
  sequential = document.querySelectorAll(".is-sequential");
  usageLink = document.getElementById("usage-link");
  usage = document.getElementById("usage");
  console.log(navContentLink);

  hamburger.addEventListener("click", () => {
    if (hamburgerFlag === false) {
      navContent.classList.remove("is-hidden");
      hamburgerFlag = true;
      hamburgerLine.forEach((el, i) => {
        el.classList.add("is-active");
      });
      sequential.forEach((el) => {
        el.classList.add("is-scrollin");
      });
    } else if (usageFlag === true) {
      navContent.classList.add("is-hidden");
      usage.classList.add("is-hidden");
      hamburgerFlag = false;
      hamburgerLine.forEach((el, i) => {
        el.classList.remove("is-active");
      });
      sequential.forEach((el) => {
        el.classList.remove("is-scrollin");
      });
    } else {
      navContent.classList.add("is-hidden");
      hamburgerFlag = false;
      hamburgerLine.forEach((el, i) => {
        el.classList.remove("is-active");
      });
      sequential.forEach((el) => {
        el.classList.remove("is-scrollin");
      });
    }
  });

  navContentLink.forEach((ele, i) => {
    ele.addEventListener("click", () => {
      if (hamburgerFlag === true) {
        hamburgerFlag = false;
        navContent.classList.add("is-hidden");
        hamburgerLine.forEach((el, i) => {
          el.classList.remove("is-active");
        });
      }
      if (i === 3) {
        usageFlag = true;
        console.log("hi");
        usage.classList.remove("is-hidden");
        hamburgerFlag = true;
        hamburgerLine.forEach((el, i) => {
          el.classList.add("is-active");
        });
      }
    });
  });
};

window.onload = () => {
  initDevice();
  hideLoading();
  firstModalClose();
  hamburgerController();
};
