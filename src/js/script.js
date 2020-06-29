import "aframe";
import "jquery";
import "popper.js";
import "bootstrap";
import "@fortawesome/fontawesome";
import "@fortawesome/fontawesome-free-solid";
import {
  sceneReady1,
  sceneReady2,
  sceneReady3,
  ringScene1,
  ringScene2,
  ringScene3,
  scene1ObjConts,
  scene2ObjConts,
  scene3ObjConts,
} from "./sceneCreate";

let mobileFlag = false;
let cameraOuter;
let camera;
let roomUiRoomName;

let sceneFlagCount = 1;

let scene1Obj;
let scene2Obj;
let scene3Obj;

let iconpos;

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

const getData = () => {
  let n;
  bg1 = document.getElementById("bg1");
  bg2 = document.getElementById("bg2");
  bg3 = document.getElementById("bg3");
  scene1Obj = document.getElementById("scene1-obj");
  scene2Obj = document.getElementById("scene2-obj");
  scene3Obj = document.getElementById("scene3-obj");
  roomUiRoomName = document.getElementById("room-ui__room-name");

  if (window.location.search) {
    n = window.location.search.substring(1, window.location.search.length);
    firstModal = document.getElementById("first-modal");
    firstModal.classList.add("is-fadeout");
    if (n === "2") {
      scene1Obj.innerHTML = "";
      bg1.setAttribute("opacity", "0.0");
      sceneFlagCount = 2;
      sceneReady2();
      roomUiRoomName.innerHTML = "Scene　2 / 3";
      ringScene2.forEach((el) => {
        el.addEventListener("mouseenter", sceneMouseEnter, false);
        el.addEventListener("mouseleave", sceneMouseLeave, false);
        el.addEventListener("click", sceneSwitch, false);
      });
      scene2ObjConts.forEach((el) => {
        el.addEventListener("mouseenter", mouseEnter, false);
        el.addEventListener("mouseleave", mouseLeave, false);
        el.addEventListener("click", clickEvent, false);
      });
      bg2.removeAttribute("opacity", "1.0");
    } else if (n === "3") {
      scene1Obj.innerHTML = "";
      bg1.setAttribute("opacity", "0.0");
      sceneFlagCount = 3;
      sceneReady3();
      roomUiRoomName.innerHTML = "Scene　3 / 3";
      ringScene3.forEach((el) => {
        el.addEventListener("mouseenter", sceneMouseEnter, false);
        el.addEventListener("mouseleave", sceneMouseLeave, false);
        el.addEventListener("click", sceneSwitch, false);
      });
      scene3ObjConts.forEach((el) => {
        el.addEventListener("mouseenter", mouseEnter, false);
        el.addEventListener("mouseleave", mouseLeave, false);
        el.addEventListener("click", clickEvent, false);
      });
      bg3.removeAttribute("opacity", "1.0");
    }
  }
};

const mouseEnter = (e) => {
  cursorImg = document.getElementById("cursor-img");
  console.log("mouseenter - " + e.target.id);
  cursorImg.setAttribute("scale", "0.09 0.09 0.09");
  cursorImg.setAttribute(
    "animation",
    "property: opacity; from: 1.0; to: 0.0; dur: 350; loop: true; easing: linear; dir: alternate"
  );
};

const sceneMouseEnter = (e) => {
  cursorImg = document.getElementById("cursor-img");
  cursorImg.setAttribute(
    "animation",
    "property: opacity; from: 1.0; to: 0.0; dur: 100; loop: false; "
  );
  console.log(e.target);
  if (e.target.id === "ring-scene-box-1to2") {
    iconpos = document.getElementById("icon-pos-1to2");
    iconpos.setAttribute("mixin", "blink");
  } else if (e.target.id === "ring-scene-box-1to3") {
    iconpos = document.getElementById("icon-pos-1to3");
    iconpos.setAttribute("mixin", "blink");
  } else if (e.target.id === "ring-scene-box-2to1") {
    iconpos = document.getElementById("icon-pos-2to1");
    iconpos.setAttribute("mixin", "blink");
  } else if (e.target.id === "ring-scene-box-2to3") {
    iconpos = document.getElementById("icon-pos-2to3");
    iconpos.setAttribute("mixin", "blink");
  } else if (e.target.id === "ring-scene-box-3to1") {
    iconpos = document.getElementById("icon-pos-3to1");
    iconpos.setAttribute("mixin", "blink");
  } else if (e.target.id === "ring-scene-box-3to2") {
    iconpos = document.getElementById("icon-pos-3to2");
    iconpos.setAttribute("mixin", "blink");
  }
};

const mouseLeave = () => {
  cursorImg = document.getElementById("cursor-img");
  cursorImg.setAttribute("scale", "0.07 0.07 0.07");
  cursorImg.removeAttribute("animation");
  cursorImg.setAttribute("opacity", 1.0);
};

const sceneMouseLeave = (e) => {
  cursorImg = document.getElementById("cursor-img");
  cursorImg.setAttribute(
    "animation",
    "property: opacity; from: 0.0; to: 1.0; dur: 100; loop: false; "
  );
  if (e.target.id === "ring-scene-box-1to2") {
    iconpos = document.getElementById("icon-pos-1to2");
    iconpos.removeAttribute("mixin");
    iconpos.setAttribute("opacity", 1.0);
  } else if (e.target.id === "ring-scene-box-1to3") {
    iconpos = document.getElementById("icon-pos-1to3");
    iconpos.removeAttribute("mixin");
    iconpos.setAttribute("opacity", 1.0);
  } else if (e.target.id === "ring-scene-box-2to1") {
    iconpos = document.getElementById("icon-pos-2to1");
    iconpos.removeAttribute("mixin");
    iconpos.setAttribute("opacity", 1.0);
  } else if (e.target.id === "ring-scene-box-2to3") {
    iconpos = document.getElementById("icon-pos-2to3");
    iconpos.removeAttribute("mixin");
    iconpos.setAttribute("opacity", 1.0);
  } else if (e.target.id === "ring-scene-box-3to1") {
    iconpos = document.getElementById("icon-pos-3to1");
    iconpos.removeAttribute("mixin");
    iconpos.setAttribute("opacity", 1.0);
  } else if (e.target.id === "ring-scene-box-3to2") {
    iconpos = document.getElementById("icon-pos-3to2");
    iconpos.removeAttribute("mixin");
    iconpos.setAttribute("opacity", 1.0);
  }
};

const clickEvent = (e) => {
  console.log(e.target.id);
  console.log("click");
  // scene1
  if (sceneFlagCount === 1) {
    if (e.target.id === scene1ObjConts[0].id) {
      location.href = "../../works/towatakaya/001.html";
    } else if (e.target.id === scene1ObjConts[1].id) {
      location.href = "../../works/moemitakano/001.html";
    } else if (e.target.id === scene1ObjConts[2].id) {
      location.href = "../../works/towatakaya/002.html";
    } else if (e.target.id === scene1ObjConts[3].id) {
      location.href = "../../works/moemitakano/002.html";
    } else if (e.target.id === scene1ObjConts[4].id) {
      location.href = "../../works/moemitakano/003.html";
    } else if (e.target.id === scene1ObjConts[5].id) {
      location.href = "../../works/towatakaya/003.html";
    }
  } else if (sceneFlagCount === 2) {
    if (e.target.id === scene2ObjConts[0].id) {
      location.href = "../../works/moemitakano/004.html";
    } else if (e.target.id === scene2ObjConts[1].id) {
      location.href = "../../works/towatakaya/004.html";
    } else if (e.target.id === scene2ObjConts[2].id) {
      location.href = "../../works/towatakaya/005.html";
    } else if (e.target.id === scene2ObjConts[3].id) {
      location.href = "../../works/towatakaya/006.html";
    }
  } else if (sceneFlagCount === 3) {
    if (e.target.id === scene3ObjConts[0].id) {
      location.href = "../../works/moemitakano/005.html";
    } else if (e.target.id === scene3ObjConts[1].id) {
      location.href = "../../works/towatakaya/007.html";
    } else if (e.target.id === scene3ObjConts[2].id) {
      location.href = "../../works/towatakaya/008.html";
    } else if (e.target.id === scene3ObjConts[3].id) {
      location.href = "../../works/moemitakano/006.html";
    } else if (e.target.id === scene3ObjConts[4].id) {
      location.href = "../../works/towatakaya/009.html";
    }
  }
};

const firstScene = () => {
  roomUiRoomName = document.getElementById("room-ui__room-name");
  console.log("1だよ");
  sceneReady1();
  roomUiRoomName.innerHTML = "Scene　1 / 3";
  ringScene1.forEach((el) => {
    el.addEventListener("mouseenter", sceneMouseEnter, false);
    el.addEventListener("mouseleave", sceneMouseLeave, false);
    el.addEventListener("click", sceneSwitch, false);
  });
  scene1ObjConts.forEach((el) => {
    el.addEventListener("mouseenter", mouseEnter, false);
    el.addEventListener("mouseleave", mouseLeave, false);
    el.addEventListener("click", clickEvent, false);
  });
};

const sceneSwitch = (e) => {
  console.log(e.target.id);
  if (e.target.id === "ring-scene-box-1to2") {
    sceneManager(1, 2);
  } else if (e.target.id === "ring-scene-box-1to3") {
    sceneManager(1, 3);
  } else if (e.target.id === "ring-scene-box-2to1") {
    sceneManager(2, 1);
  } else if (e.target.id === "ring-scene-box-2to3") {
    sceneManager(2, 3);
  } else if (e.target.id === "ring-scene-box-3to1") {
    sceneManager(3, 1);
  } else if (e.target.id === "ring-scene-box-3to2") {
    sceneManager(3, 2);
  }
};

const sceneManager = (fir, nex) => {
  cameraOuter = document.getElementById("camera-outer");
  bg1 = document.getElementById("bg1");
  bg2 = document.getElementById("bg2");
  bg3 = document.getElementById("bg3");
  camera = document.getElementById("camera");
  scene1Obj = document.getElementById("scene1-obj");
  scene2Obj = document.getElementById("scene2-obj");
  scene3Obj = document.getElementById("scene3-obj");

  mouseLeave();
  if (fir === 1) {
    console.log("1から");
    scene1ObjConts.forEach((el) => {
      el.removeAttribute("cursor-listener");
      el.removeEventListener("mouseenter", mouseEnter, false);
      el.removeEventListener("click", clickEvent, false);
      mouseLeave();
    });
    ringScene1.forEach((el) => {
      el.removeAttribute("cursor-listener-scene");
      el.removeEventListener("mouseenter", sceneMouseEnter, false);
      el.removeEventListener("click", sceneSwitch, false);
    });
    scene1Obj.innerHTML = "";
    bg1.setAttribute("mixin", "fadeout");
  } else if (fir === 2) {
    console.log("2から");
    // if (nex === 3) {
    //   cameraOuter.setAttribute("rotation", "0 -70 0");
    // }
    scene2ObjConts.forEach((el) => {
      el.removeAttribute("cursor-listener");
      el.removeEventListener("mouseenter", mouseEnter, false);
      el.removeEventListener("click", clickEvent, false);
      mouseLeave();
    });
    ringScene2.forEach((el) => {
      el.removeAttribute("cursor-listener-scene");
      el.removeEventListener("mouseenter", sceneMouseEnter, false);
      el.removeEventListener("click", sceneSwitch, false);
    });
    scene2Obj.innerHTML = "";
    bg2.setAttribute("mixin", "fadeout");
  } else if (fir === 3) {
    console.log("3から");
    // if (nex === 2) {
    //   cameraOuter.setAttribute("rotation", "0 140 0");
    // } else if (nex === 1) {
    //   cameraOuter.setAttribute("rotation", "0 80 0");
    // }
    scene3ObjConts.forEach((el) => {
      el.removeAttribute("cursor-listener");
      el.removeEventListener("mouseenter", mouseEnter, false);
      el.removeEventListener("click", clickEvent, false);
      mouseLeave();
    });
    ringScene3.forEach((el) => {
      el.removeAttribute("cursor-listener-scene");
      el.removeEventListener("mouseenter", sceneMouseEnter, false);
      el.removeEventListener("click", sceneSwitch, false);
    });
    scene3Obj.innerHTML = "";
    bg3.setAttribute("mixin", "fadeout");
  }
  if (nex === 1) {
    console.log("1だよ");
    sceneFlagCount = 1;
    sceneReady1();
    roomUiRoomName.innerHTML = "Scene　1 / 3";
    ringScene1.forEach((el) => {
      el.addEventListener("mouseenter", sceneMouseEnter, false);
      el.addEventListener("mouseleave", sceneMouseLeave, false);
      el.addEventListener("click", sceneSwitch, false);
    });
    scene1ObjConts.forEach((el) => {
      el.addEventListener("mouseenter", mouseEnter, false);
      el.addEventListener("mouseleave", mouseLeave, false);
      el.addEventListener("click", clickEvent, false);
    });
    bg1.removeAttribute("mixin", "fadeout");
    bg1.setAttribute("mixin", "fadein");
  }
  if (nex === 2) {
    console.log("2だよ");
    sceneFlagCount = 2;
    sceneReady2();
    roomUiRoomName.innerHTML = "Scene　2 / 3";
    ringScene2.forEach((el) => {
      el.addEventListener("mouseenter", sceneMouseEnter, false);
      el.addEventListener("mouseleave", sceneMouseLeave, false);
      el.addEventListener("click", sceneSwitch, false);
    });
    scene2ObjConts.forEach((el) => {
      el.addEventListener("mouseenter", mouseEnter, false);
      el.addEventListener("mouseleave", mouseLeave, false);
      el.addEventListener("click", clickEvent, false);
    });
    bg2.removeAttribute("mixin", "fadeout");
    bg2.setAttribute("mixin", "fadein");
  }
  if (nex === 3) {
    console.log("3だよ");
    sceneFlagCount = 3;
    sceneReady3();
    roomUiRoomName.innerHTML = "Scene　3 / 3";
    ringScene3.forEach((el) => {
      el.addEventListener("mouseenter", sceneMouseEnter, false);
      el.addEventListener("mouseleave", sceneMouseLeave, false);
      el.addEventListener("click", sceneSwitch, false);
    });
    scene3ObjConts.forEach((el) => {
      el.addEventListener("mouseenter", mouseEnter, false);
      el.addEventListener("mouseleave", mouseLeave, false);
      el.addEventListener("click", clickEvent, false);
    });
    bg3.removeAttribute("mixin", "fadeout");
    bg3.setAttribute("mixin", "fadein");
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
  document.querySelector("a-scene").addEventListener("loaded", function () {
    loading = document.getElementById("loading");
    loadingTxt = document.getElementById("loading-txt");
    loadingTxt.style.display = "none";
    loading.classList.add("js-up");
  });
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
  firstScene();
  getData();
  hideLoading();
  firstModalClose();
  navUsageController();
  hamburgerController();
};
