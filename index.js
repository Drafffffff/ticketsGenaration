import Graph from "./graph";
let str = "sassdfasdd";

let gh;
let imgs = null;
window.preload = () => {
  gh = new Graph();
  gh.load();
};

window.setup = () => {
  const canvas = createCanvas(window.innerWidth, window.innerWidth * 1.431);
  canvas.parent("canvas");
  noLoop();
};

window.draw = () => {
  background(255);

  gh.encodeKey();
  // print(gh.showKey);
  gh.show();
};
window.mouseClicked = () => {
  gh.setStr(random(100000).toString());
  window.draw();
};
