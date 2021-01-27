var w = window.innerWidth;
var h = window.innerHeight;
let table;
let img;

function preload() {
  table = loadTable("Food DC.csv", "csv", "header");

//img = loadImage('logo f.png');
}


function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(w, h);
   background(230);
  


img = createImg('logo f.png', 'logo f.png');
  img.position(w * 0.08, 25);
  img.style("width", "80px");
  img.style("background-color", "#E6E6E6");

image(img,0,0);

  siteName = createP("yourFoodQuadrats");
  siteName.position(w * 0.8, 35)
siteName.style("font-family", "Helvetica");
  siteName.style("font-size", "1rem");
  
  h1 = createP("Visualize the scale of impact of your diet and explore the different elements associated with it.");
  h1.position(w/3, 180);
   h1.style("text-align", "center");
  h1.style("justify-content", "center");
  h1.style("width", "500px");
 h1.style("font-family", "Helvetica");
  h1.style("font-size", "1.2rem");

  
  h2 = createP("THE IMPACT OF WHAT YOU EAT ON THE ENVIRONMENT");
  h2.position(250, 280);
  h2.style("justify-content", "center");
  h2.style("text-align", "center");
  h2.style("width", "1000px");
h2.style("font-family", "Helvetica");
  h2.style("font-size", "2rem");


 brief= createP("This project aims at providing explorative information to the people and encourage them to gain knowledge of their diet to help achieve environmental sustainability.");
  brief.position(w/4, 380);
  brief.style("justify-content", "center");
  brief.style("text-align", "center");
  brief.style("width", "750px");
brief.style("font-family", "Helvetica");
  brief.style("font-size", "1rem");
  
  start = createButton("Kite your Food Data");
  start.position(w*0.435, 650);
  start.mousePressed(startpage);
  start.style("justify-content", "center");
  start.style("background-color", "black");
  start.style("width", "200px");
  start.style("height", "22px");
  start.style("color", "white");
  start.style("font-family", "Helvetica");
  start.style("font-size", "0.8rem");


}

function draw() {
  background(230);

  // img.style("background-color", "#E6E6E6");
  // img.style("height", "600px");


}


function keyTyped() {
  if (key == 'f') {
    let fs = fullscreen();
    fullscreen(!fs);
  } else {
    !fullscreen(!fs);
  }
}

function startpage() {
  // creA('https://richapatidar.github.io/kifo_1/', 'this is a link');
  location.href = 'https://richapatidar.github.io/kifo_1/';
}