let angle = 0;
let w = 20;
let offset =0;

function setup(){
  createCanvas(400,400, WEBGL);
}

function draw(){
  background(100);
  translate(0, 25, -50);
  //translate(width/4, height/2);
  rectMode(CENTER);

  //rotateX(angle);
  for(let x = 0; x<width; x+= w){
    push();
    let newAngle = map(offset, 0, 20, -1 , 1 );
    let h =map(sin(angle+ newAngle), -1, 1,20,100);
    console.log(newAngle);


    fill(255);
    translate(x- width/2,0,0)
    //rect(x,0,9,h);
    box(w, h, w);
    offset++;
    pop()
  }
angle+=0.1;
offset = 0;
}
