/// <reference path="./global.d.ts" />

let img;
function preload() {
  img = loadImage("./assets/mountain.jpg");
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  image(img, 0, 0, width, height);
}
