let cor;
let circulox;
let circuloy;


function setup() {
  createCanvas(600, 300);
  background("yellow");
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  circulox = [0, 0, 0];
  circuloy = [random(height), random(height), random(height)];
  
}

function draw(){
  fill(cor);
  circle(circulox[0], circuloy[0], 50);
  circle(circulox[1], circuloy[1], 50);
  circle(circulox[2], circuloy[2], 50);
  
  for (let contador in circulox){
    circle(circulox[contador], circuloy[contador], 50);
    circulox[contador] += random(0, 3);
    circuloy[contador] += random(-3, 3);
    
    if(circulox[contador] >= width){
      circulox[contador] = 0;
      circuloy[contador] = random(height);
    }
  } 
  

  
  if(mouseIsPressed){
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100))
  }

}

// Esse foi eu mesmo que fiz :D
