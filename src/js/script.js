import "aframe";
import "jquery";
import "popper.js";
import "bootstrap";
import "@fortawesome/fontawesome";
import "@fortawesome/fontawesome-free-solid";

let mobileFlag = false;
let colliderScene1 = [];
let colliderScene1Id = [];
let colliderScene2 = [];
let colliderScene3 = [];

let ring1;
let ringScene1to2;
let ringScene1to3;
let ringScene1 = [];
let scene1Obj;
let scene1ObjConts;

let ring2;
let ringScene2to1;
let ringScene2to3;
let ringScene2 = [];
let scene2Obj;
let scene2ObjConts;

let ring3;
let ringScene3to1;
let ringScene3to2;
let ringScene3 = [];
let scene3Obj;
let scene3ObjConts;

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

let navUsage;
let navUsageLink;
let navUsageClose;
let navUsageBg;

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
    colliderScene1 = document.querySelectorAll(".collider-scene1");

    colliderScene1.forEach((el) => {
      el.addEventListener("mouseenter", mouseEnter, false);
      el.addEventListener("mouseleave", mouseLeave, false);
      el.addEventListener("click", clickEvent, false);
    });
  },
});
AFRAME.registerComponent("cursor-listener-scene", {
  init: function () {
    cursorImg = document.getElementById("cursor-img");
    ring1 = document.getElementById("ring1");
    ring2 = document.getElementById("ring2");

    ringScene1to2 = document.getElementById("ring-scene-1to2");
    ringScene1to3 = document.getElementById("ring-scene-1to3");
    ringScene1.push(ringScene1to2, ringScene1to3);

    ringScene2to1 = document.getElementById("ring-scene-2to1");
    ringScene2to3 = document.getElementById("ring-scene-2to3");
    ringScene2.push(ringScene2to1, ringScene2to3);

    ringSceneBox1to2 = document.getElementById("ring-scene-box-1to2");
    ringSceneBox1to3 = document.getElementById("ring-scene-box-1to3");
    ringBox.push(ringSceneBox1to2, ringSceneBox1to3);

    ringScene1.forEach((el) => {
      el.addEventListener("mouseenter", mouseEnter, false);
      el.addEventListener("mouseleave", mouseLeave, false);
      el.addEventListener("click", sceneSwitch, false);
    });
  },
});

const mouseEnter = (e) => {
  console.log("mouseenter - " + e.target.id);
  cursorImg.setAttribute("scale", "0.09 0.09 0.09");
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
  console.log(e.target.id);
  console.log("click");
  if (e.target.id === colliderScene1[0].id) {
    window.open("../../works/towatakaya/001.html", "_blank");
  } else if (e.target.id === colliderScene1[1].id) {
    window.open("../../works/moemitakano/001.html", "_blank");
  } else if (e.target.id === colliderScene1[2].id) {
    window.open("../../works/towatakaya/002.html", "_blank");
  } else if (e.target.id === colliderScene1[3].id) {
    window.open("../../works/moemitakano/002.html", "_blank");
  } else if (e.target.id === colliderScene1[4].id) {
    window.open("../../works/moemitakano/003.html", "_blank");
  }
};

const sceneSwitch = (e) => {
  let ringTarget = e.target;
  if (ringTarget === ringBox[0]) {
    sceneManager(1, 2);
  } else if (ringTarget === ringBox[1]) {
    sceneManager(1, 3);
  }
};

const SceneReady1 = () => {
  scene1ObjConts = "";
  scene1Obj = document.getElementById("scene1-obj");
};

const SceneReady2 = () => {
  scene2ObjConts = "";
  scene2Obj = document.getElementById("scene2-obj");
};

const sceneManager = (fir, nex) => {
  bg1 = document.getElementById("bg1");
  bg2 = document.getElementById("bg2");
  bg3 = document.getElementById("bg3");

  mouseLeave();
  if (fir === 1) {
    colliderScene1.forEach((el) => {
      el.removeAttribute("cursor-listener");
      el.removeEventListener("mouseenter", mouseEnter, false);
      el.removeEventListener("click", clickEvent, false);
      mouseLeave();
    });
    ringScene1.forEach((el) => {
      el.removeAttribute("cursor-listener-scene");
      el.removeEventListener("mouseenter", mouseEnter, false);
      el.removeEventListener("click", sceneSwitch, false);
    });
    bg1.setAttribute("mixin", "fadeout");
    ring1.setAttribute("mixin", "out");
  } else if (fir === 2) {
    console.log("2から");
    // colliderScene2.forEach((el) => {
    //   el.removeAttribute("cursor-listener");
    //   el.removeEventListener("mouseenter", mouseEnter, false);
    //   el.removeEventListener("click", clickEvent, false);
    //   mouseLeave();
    // });
    ringScene2.forEach((el) => {
      el.removeAttribute("cursor-listener-scene");
      el.removeEventListener("mouseenter", mouseEnter, false);
      el.removeEventListener("click", sceneSwitch, false);
    });
    bg1.setAttribute("mixin", "fadeout");
    ring2.setAttribute("mixin", "out");
  } else if (fir === 3) {
    console.log("3から");
  }
  if (nex === 1) {
    console.log("scene1");
    bg1.setAttribute("mixin", "fadein");
    ring1.setAttribute("mixin", "in");
    ringScene1.forEach((el) => {
      el.addEventListener("mouseenter", mouseEnter, false);
      el.addEventListener("mouseleave", mouseLeave, false);
      el.addEventListener("click", sceneSwitch, false);
    });
  }
  if (nex === 2) {
    console.log("scene2");
    bg2.setAttribute("mixin", "fadein");
    ring2.setAttribute("mixin", "in");
    ringScene2.forEach((el) => {
      el.addEventListener("mouseenter", mouseEnter, false);
      el.addEventListener("mouseleave", mouseLeave, false);
      el.addEventListener("click", sceneSwitch, false);
    });
  }
  if (nex === 3) {
    console.log("scene3");
    bg3.setAttribute("mixin", "fadein");
    // ring3.setAttribute("mixin", "in");
    // ringScene3.forEach((el) => {
    //   el.addEventListener("mouseenter", mouseEnter, false);
    //   el.addEventListener("mouseleave", mouseLeave, false);
    //   el.addEventListener("click", sceneSwitch, false);
    // });
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

const navUsageController = () => {
  navUsage = document.getElementById("c-nav__usage");
  navUsageLink = document.getElementById("c-nav__usage-link");
  navUsageClose = document.getElementById("c-nav__usage__close");
  navUsageBg = document.getElementById("c-nav__usage__bg");
  navUsageLink.addEventListener("click", () => {
    navUsage.classList.remove("is-hidden");
  });
  navUsageClose.addEventListener("click", () => {
    navUsage.classList.add("is-hidden");
  });
  navUsageBg.addEventListener("click", () => {
    navUsage.classList.add("is-hidden");
  });
};

const hamburgerController = () => {
  hamburger = document.getElementById("hamburger");
  hamburgerLine = document.querySelectorAll(".c-hamburger__line");
  navContent = document.getElementById("ham-nav");
  navContentLink = document.querySelectorAll(".ham-nav__item");
  sequential = document.querySelectorAll(".is-sequential");
  usageLink = document.getElementById("usage-link");
  usage = document.getElementById("usage");

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
  navUsageController();
  hamburgerController();
};
