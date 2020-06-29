let aBox;
let mark;
let markRing;
let markCircle;
let ringBox = [];

let ring1;
let ringScene1to2;
let ringScene1to3;
let ringSceneBox1to2;
let ringSceneBox1to3;
let ringScene1 = [];
let scene1Obj;
let scene1ObjConts;
let iconPos1to2;
let iconPos1to3;

let ring2;
let ringScene2to1;
let ringScene2to3;
let ringSceneBox2to1;
let ringSceneBox2to3;
let ringScene2 = [];
let scene2Obj;
let scene2ObjConts;
let iconPos2to1;
let iconPos2to3;

let ring3;
let ringScene3to1;
let ringScene3to2;
let ringSceneBox3to1;
let ringSceneBox3to2;
let ringScene3 = [];
let scene3Obj;
let scene3ObjConts;
let iconPos3to1;
let iconPos3to2;

const sceneReady1 = () => {
  scene1ObjConts = [];
  scene1Obj = document.getElementById("scene1-obj");
  ring1 = document.createElement("a-entity");
  ring1.setAttribute("id", "ring1");
  scene1Obj.appendChild(ring1);

  ringScene1to2 = document.createElement("a-entity");
  ringScene1to2.setAttribute("id", "ring-scene-1to2");
  ringScene1to2.setAttribute("class", "collider-scene1");
  ringScene1to2.setAttribute("position", "4 -1 1");
  ringScene1to2.setAttribute("cursor-listener-scene");
  ring1.appendChild(ringScene1to2);

  iconPos1to2 = document.createElement("a-ring");
  iconPos1to2.setAttribute("rotation", "270 90 0");
  iconPos1to2.setAttribute("color", "white");
  iconPos1to2.setAttribute("radius-inner", 0.2);
  iconPos1to2.setAttribute("radius-outer", 0.3);
  iconPos1to2.setAttribute("id", "icon-pos-1to2");
  ringScene1to2.appendChild(iconPos1to2);

  ringSceneBox1to2 = document.createElement("a-box");
  ringSceneBox1to2.setAttribute("scale", "1 1 0.8");
  ringSceneBox1to2.setAttribute("id", "ring-scene-box-1to2");
  ringSceneBox1to2.setAttribute("opacity", 0.0);
  ringSceneBox1to2.setAttribute("material", "transparent: true; alphaTest: 10");
  ringScene1to2.appendChild(ringSceneBox1to2);

  ringScene1to3 = document.createElement("a-entity");
  ringScene1to3.setAttribute("id", "ring-scene-1to3");
  ringScene1to3.setAttribute("class", "collider-scene1");
  ringScene1to3.setAttribute("position", "4 -1 -1.7");
  ringScene1to3.setAttribute("cursor-listener-scene");
  ring1.appendChild(ringScene1to3);

  iconPos1to3 = document.createElement("a-ring");
  iconPos1to3.setAttribute("rotation", "270 90 0");
  iconPos1to3.setAttribute("color", "white");
  iconPos1to3.setAttribute("radius-inner", 0.2);
  iconPos1to3.setAttribute("radius-outer", 0.3);
  iconPos1to3.setAttribute("id", "icon-pos-1to3");
  ringScene1to3.appendChild(iconPos1to3);

  ringSceneBox1to3 = document.createElement("a-box");
  ringSceneBox1to3.setAttribute("scale", "1 1 1");
  ringSceneBox1to3.setAttribute("id", "ring-scene-box-1to3");
  ringSceneBox1to3.setAttribute("opacity", 0.0);
  ringSceneBox1to3.setAttribute("material", "transparent: true; alphaTest: 10");
  ringScene1to3.appendChild(ringSceneBox1to3);

  ringScene1.push(ringScene1to2, ringScene1to3);
  ringBox.push(ringSceneBox1to2, ringSceneBox1to3);

  //

  for (let i = 0; i <= 5; i++) {
    aBox = document.createElement("a-box");
    aBox.setAttribute("position", "0 0 3");
    aBox.setAttribute("id", "collider0" + i);
    aBox.setAttribute("scale", "1 1.2 1");
    aBox.setAttribute("cursor-listener");
    aBox.setAttribute("class", "collider-scene1");
    aBox.setAttribute("opacity", "0.0");
    aBox.setAttribute("material", "alphaTest: 10");

    mark = document.createElement("a-entity");
    markRing = document.createElement("a-ring");
    markCircle = document.createElement("a-circle");
    mark.appendChild(markRing);
    mark.appendChild(markCircle);
    markRing.setAttribute("radius-inner", 0.3);
    markRing.setAttribute("radius-outer", 0.4);
    markCircle.setAttribute("radius", 0.2);
    mark.setAttribute("scale", "0.3 0.3 0.3");
    mark.setAttribute("class", "mark");

    if (i === 0) {
      aBox.setAttribute("position", "-4.3 0.3 -5");
      aBox.setAttribute("scale", "1 2.3 1.5");
      mark.setAttribute("position", "-3.7 -0.7 -5");
    } else if (i === 1) {
      aBox.setAttribute("position", "-1.7 0.3 -5");
      aBox.setAttribute("scale", "1 2.3 1.5");
      mark.setAttribute("position", "-1 0 -5.5");
    } else if (i === 2) {
      aBox.setAttribute("position", "1 0.3 -5");
      aBox.setAttribute("scale", "1 2 1");
      mark.setAttribute("position", "1.9 -0.2 -5");
    } else if (i === 3) {
      aBox.setAttribute("position", "-4 0.3 5");
      aBox.setAttribute("scale", "1 4 2");
      mark.setAttribute("scale", "0.4 0.4 0.4");
      mark.setAttribute("position", "-6 -0.7 5");
      mark.setAttribute("rotation", "180 -30 0");
    } else if (i === 4) {
      aBox.setAttribute("position", "2 0.3 5");
      aBox.setAttribute("scale", "1 4 2");
      mark.setAttribute("position", "1 0 5");
      mark.setAttribute("rotation", "180 0 0");
    } else if (i === 5) {
      aBox.setAttribute("position", "4 0.5 3.5");
      mark.setAttribute("position", "3.6 0.3 3.5");
      mark.setAttribute("rotation", "180 30 0");
    }
    scene1Obj.appendChild(mark);
    scene1Obj.appendChild(aBox);
    scene1ObjConts.push(aBox);
  }
};

const sceneReady2 = () => {
  scene2ObjConts = [];
  scene2Obj = document.getElementById("scene2-obj");
  ring2 = document.createElement("a-entity");
  ring2.setAttribute("id", "ring2");
  scene2Obj.appendChild(ring2);

  ringScene2to1 = document.createElement("a-entity");
  ringScene2to1.setAttribute("id", "ring-scene-2to1");
  ringScene2to1.setAttribute("class", "collider-scene2");
  ringScene2to1.setAttribute("position", "-4 -2 0");
  ringScene2to1.setAttribute("cursor-listener-scene");
  ring2.appendChild(ringScene2to1);

  iconPos2to1 = document.createElement("a-ring");
  iconPos2to1.setAttribute("rotation", "270 90 0");
  iconPos2to1.setAttribute("color", "white");
  iconPos2to1.setAttribute("radius-inner", 0.2);
  iconPos2to1.setAttribute("radius-outer", 0.3);
  iconPos2to1.setAttribute("id", "icon-pos-2to1");
  ringScene2to1.appendChild(iconPos2to1);

  ringSceneBox2to1 = document.createElement("a-box");
  ringSceneBox2to1.setAttribute("scale", "1 1 0.8");
  ringSceneBox2to1.setAttribute("id", "ring-scene-box-2to1");
  ringSceneBox2to1.setAttribute("opacity", 0.0);
  ringSceneBox2to1.setAttribute("material", "transparent: true; alphaTest: 10");
  ringSceneBox2to1.setAttribute("scale", "1.0 1.0 1.0");
  ringScene2to1.appendChild(ringSceneBox2to1);

  ringScene2to3 = document.createElement("a-entity");
  ringScene2to3.setAttribute("id", "ring-scene-2to3");
  ringScene2to3.setAttribute("class", "collider-scene2");
  ringScene2to3.setAttribute("position", "0.2 -1.5 -3");
  ringScene2to3.setAttribute("cursor-listener-scene");
  ring2.appendChild(ringScene2to3);

  iconPos2to3 = document.createElement("a-ring");
  iconPos2to3.setAttribute("rotation", "270 90 0");
  iconPos2to3.setAttribute("color", "white");
  iconPos2to3.setAttribute("radius-inner", 0.2);
  iconPos2to3.setAttribute("radius-outer", 0.3);
  iconPos2to3.setAttribute("id", "icon-pos-2to3");
  ringScene2to3.appendChild(iconPos2to3);

  ringSceneBox2to3 = document.createElement("a-box");
  ringSceneBox2to3.setAttribute("scale", "0.7 2 1");
  ringSceneBox2to3.setAttribute("id", "ring-scene-box-2to3");
  ringSceneBox2to3.setAttribute("opacity", 0.0);
  ringSceneBox2to3.setAttribute("material", "transparent: true; alphaTest: 10");
  ringScene2to3.appendChild(ringSceneBox2to3);

  ringScene2.push(ringScene2to1, ringScene2to3);
  ringBox.push(ringSceneBox2to1, ringSceneBox2to3);

  //

  for (let i = 0; i <= 3; i++) {
    aBox = document.createElement("a-box");
    aBox.setAttribute("position", "0 0 3");
    aBox.setAttribute("id", "collider0" + i);
    aBox.setAttribute("scale", "1 1.2 1");
    aBox.setAttribute("cursor-listener");
    aBox.setAttribute("class", "collider-scene2");
    aBox.setAttribute("opacity", "0.0");
    aBox.setAttribute("material", "alphaTest: 10");

    mark = document.createElement("a-entity");
    markRing = document.createElement("a-ring");
    markCircle = document.createElement("a-circle");
    mark.appendChild(markRing);
    mark.appendChild(markCircle);
    markRing.setAttribute("radius-inner", 0.3);
    markRing.setAttribute("radius-outer", 0.4);
    markCircle.setAttribute("radius", 0.2);
    mark.setAttribute("scale", "0.3 0.3 0.3");
    mark.setAttribute("class", "mark");

    if (i === 0) {
      aBox.setAttribute("position", "1 0 3");
      mark.setAttribute("position", "0.5 -0.2 3");
      mark.setAttribute("rotation", "180 0 0");
      mark.setAttribute("scale", "0.23 0.23 0.23");
    } else if (i === 1) {
      aBox.setAttribute("position", "3.5 0 3");
      mark.setAttribute("position", "2.7 0 3");
      mark.setAttribute("rotation", "180 30 0");
      mark.setAttribute("scale", "0.28 0.28 0.28");
    } else if (i === 2) {
      aBox.setAttribute("position", "5 0.4 1");
      mark.setAttribute("position", "5 0.1 1.8");
      mark.setAttribute("rotation", "180 90 0");
    } else if (i === 3) {
      aBox.setAttribute("position", "5 0.4 -2");
      mark.setAttribute("position", "5 0.15 -1.3");
      mark.setAttribute("rotation", "180 90 0");
    }
    scene2Obj.appendChild(mark);
    scene2Obj.appendChild(aBox);
    scene2ObjConts.push(aBox);
  }
};

const sceneReady3 = () => {
  console.log("こちらシーンレディー3");
  scene3ObjConts = [];
  scene3Obj = document.getElementById("scene3-obj");
  ring3 = document.createElement("a-entity");
  ring3.setAttribute("id", "ring3");
  scene3Obj.appendChild(ring3);

  ringScene3to1 = document.createElement("a-entity");
  ringScene3to1.setAttribute("id", "ring-scene-3to1");
  ringScene3to1.setAttribute("class", "collider-scene3");
  ringScene3to1.setAttribute("position", "-2.5 -1.3 -3");
  ringScene3to1.setAttribute("rotation", "0 -50 0");
  ringScene3to1.setAttribute("cursor-listener-scene");
  ring3.appendChild(ringScene3to1);

  iconPos3to1 = document.createElement("a-ring");
  iconPos3to1.setAttribute("rotation", "270 90 0");
  iconPos3to1.setAttribute("color", "white");
  iconPos3to1.setAttribute("radius-inner", 0.2);
  iconPos3to1.setAttribute("radius-outer", 0.3);
  iconPos3to1.setAttribute("id", "icon-pos-3to1");
  ringScene3to1.appendChild(iconPos3to1);

  ringSceneBox3to1 = document.createElement("a-box");
  ringSceneBox3to1.setAttribute("scale", "1 1 1");
  ringSceneBox3to1.setAttribute("id", "ring-scene-box-3to1");
  ringSceneBox3to1.setAttribute("opacity", 0.0);
  ringSceneBox3to1.setAttribute("material", "transparent: true; alphaTest: 10");
  ringScene3to1.appendChild(ringSceneBox3to1);

  ringScene3to2 = document.createElement("a-entity");
  ringScene3to2.setAttribute("id", "ring-scene-3to2");
  ringScene3to2.setAttribute("class", "collider-scene3");
  ringScene3to2.setAttribute("position", "-2.5 -1 0.7");
  ringScene3to2.setAttribute("rotation", "0 100 0");
  ringScene3to2.setAttribute("cursor-listener-scene");
  ring3.appendChild(ringScene3to2);

  iconPos3to2 = document.createElement("a-ring");
  iconPos3to2.setAttribute("rotation", "270 90 0");
  iconPos3to2.setAttribute("color", "white");
  iconPos3to2.setAttribute("radius-inner", 0.14);
  iconPos3to2.setAttribute("radius-outer", 0.2);
  iconPos3to2.setAttribute("id", "icon-pos-3to2");
  ringScene3to2.appendChild(iconPos3to2);

  ringSceneBox3to2 = document.createElement("a-box");
  ringSceneBox3to2.setAttribute("scale", "0.7 1 1");
  ringSceneBox3to2.setAttribute("id", "ring-scene-box-3to2");
  ringSceneBox3to2.setAttribute("opacity", 0.0);
  ringSceneBox3to2.setAttribute("material", "transparent: true; alphaTest: 10");
  ringScene3to2.appendChild(ringSceneBox3to2);

  ringScene3.push(ringScene3to1, ringScene3to2);
  ringBox.push(ringSceneBox3to1, ringSceneBox3to2);

  //

  for (let i = 0; i <= 4; i++) {
    aBox = document.createElement("a-box");
    aBox.setAttribute("position", "0 0 3");
    aBox.setAttribute("id", "collider0" + i);
    aBox.setAttribute("scale", "1 1.2 1");
    aBox.setAttribute("cursor-listener");
    aBox.setAttribute("class", "collider-scene3");
    aBox.setAttribute("opacity", "0.0");
    aBox.setAttribute("material", "alphaTest: 10");

    mark = document.createElement("a-entity");
    markRing = document.createElement("a-ring");
    markCircle = document.createElement("a-circle");
    mark.appendChild(markRing);
    mark.appendChild(markCircle);
    markRing.setAttribute("radius-inner", 0.3);
    markRing.setAttribute("radius-outer", 0.4);
    markCircle.setAttribute("radius", 0.2);
    mark.setAttribute("scale", "0.25 0.25 0.25");
    mark.setAttribute("class", "mark");

    if (i === 0) {
      aBox.setAttribute("position", "-1.5 0 5");
      mark.setAttribute("position", "-2 0 5");
      mark.setAttribute("rotation", "180 0 0");
    } else if (i === 1) {
      aBox.setAttribute("position", "2.3 0 4");
      aBox.setAttribute("scale", "1 1.5 1");
      mark.setAttribute("position", "2 -0.3 4.5");
      mark.setAttribute("rotation", "180 40 0");
    } else if (i === 2) {
      aBox.setAttribute("position", "2 0.1 0.7");
      mark.setAttribute("position", "2 -0.3 1.8");
      mark.setAttribute("rotation", "180 70 0");
    } else if (i === 3) {
      aBox.setAttribute("position", "2 0.2 -2");
      aBox.setAttribute("scale", "1 1.5 1");
      mark.setAttribute("position", "2 -0.2 -1.3");
      mark.setAttribute("rotation", "0 -45 0");
    } else if (i === 4) {
      aBox.setAttribute("position", "0 0 -5");
      mark.setAttribute("position", "0.4 -0.1 -5");
    }
    scene3Obj.appendChild(mark);
    scene3Obj.appendChild(aBox);
    scene3ObjConts.push(aBox);
  }
};
export {
  sceneReady1,
  sceneReady2,
  sceneReady3,
  ringScene1,
  ringScene2,
  ringScene3,
  scene1ObjConts,
  scene2ObjConts,
  scene3ObjConts,
};
