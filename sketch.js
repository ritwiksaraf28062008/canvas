var drawing  = [];
var currentpath = [];




function setup() {
  database = firebase.database()
  createCanvas(500,500);
  canvvas.mousePressed(startPath);
  canvvas.mouseReleased(endPath);
}
 

                             
function draw() {
  background(0); 
  
  if(mouseIsPressed){

    var point = {
      x:mouseX,
      y:mouseY
    }
    currentpath.push(point);

    
    beginShape();
    stroke(255);
    strokeWeight(4);
    noFill();


    for (var i = 0 ; i < drawing.length ; i++){
      var path = drawing[i];
    {for (var j = 0 ; j < path.length ; j++){
    vertex(zz[i].x,drawing[i].y)
    }
  }
  endShape();
}
function startPath(){

  currentpath = [];
}

function endPath(){

  drawing.push(currentpath);
}





















