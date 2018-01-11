let angle = 0;
let w = 25;
let ma;
let maxD;

function setup(){
  createCanvas(400,400, WEBGL);
  ma = atan(1/sqrt(2));
  maxD = dist(0,0, 200,200);
}

function draw(){
  background(175);
  ortho(width, -width, -height, height,-100, 1000);
  translate(0,-50,-250);
  rotateX(-PI/4)
  rotateY(ma);
  rectMode(CENTER);

  let offset = 0;
  for (let z = 0; z<height; z+=w){
    for(let x = 0; x< width; x+=w){
      push();
      let d = dist(x, z, width/2, height/2)
      let offset = map(d, 0, maxD, -PI, PI);
      let a =  angle +offset
      let h = map(sin(a),-1, 1, 150, 350);
      let scaleFactor = map(mouseX, 0 , 400, -0.99, 1);

      scale(1+ scaleFactor);
      fill(255);
      translate(x - width / 2,0 , z- height/2);
      normalMaterial();
      box(w, h , w);
      pop();
    }

    offset +=0.1;

  }
  angle-= 0.1;
}
